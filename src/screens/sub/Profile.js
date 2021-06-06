import React, {useEffect, useReducer, useState} from 'react';
import {ScrollView, StyleSheet, Text, Pressable, View} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../../actions/actionCreators/auth';
import BackIcon from '../../assets/svg/ArrowLeft';
import AvatarIcon from '../../assets/svg/Avatar';
import PencilIcon from '../../assets/svg/Pencil';
import CustomButton from '../../components/customButton';
import InputField from '../../components/InputField';
import {formValidators} from '../../utils/formValidators';
//import InputField2 from '../../components/InputField2';
import {Modal, Avatar} from 'react-native-paper';
import {getInitials} from '../../utils/getInitials';
import axios from '../../apis/axiosInstance';
import LoadingModal from '../../components/LoadingModal';
import {
  Provider,
  Portal,
  Dialog,
  Button,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

const Profile = props => {
  const [modal, setModal] = useState({
    value: true,
    message: 'Fetching user details',
  });

  const [modal2, setModal2] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const [confirmDialog, setConfirmDialog] = useState(false);

  console.log(modal, modal2, confirmDialog);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_INPUT':
        const targetInput = action.payload.targetInput;
        let inputs = [...state.inputs];
        const targetIndex = inputs.findIndex(
          input => input.name === targetInput,
        );
        inputs[targetIndex].value = action.payload.value;
        inputs[targetIndex].touched = true;
        const [valid, errorMsg] = formValidators(
          action.payload.value,
          inputs[targetIndex].validation,
        );
        inputs[targetIndex].valid = valid;
        inputs[targetIndex].errorMsg = errorMsg;

        let formIsValid = true;
        inputs.map(i => {
          formIsValid = i.valid && formIsValid;
        });
        return {...state, inputs: inputs, formIsValid: formIsValid};
      default:
        return state;
    }
  };
  const [state1, dispatch] = useReducer(reducer, {
    inputs: [
      {
        name: 'Mobile',
        id: 'Input #1',
        config: {
          type: 'mobile',
          placeholder: '',
          //icon: userIcon,
        },
        value:
          !userDetails.mobile || userDetails.mobile === ''
            ? 'no mobile number'
            : userDetails.mobile,
        validation: {
          required: true,
          isMobile: true,
        },
        errorMsg: '',
        valid: false,
        touched: false,
      },
    ],
    formIsValid: false,
  });
  const [state2, dispatch2] = useReducer(reducer, {
    inputs: [
      {
        name: 'Old Password',
        id: 'Input #1',
        config: {
          type: 'password',
          placeholder: '',
          //icon: userIcon,
        },
        value: '',
        validation: {
          required: true,
          isPassword: true,
        },
        errorMsg: '',
        valid: false,
        touched: false,
      },
      {
        name: 'New Password',
        id: 'Input #2',
        config: {
          type: 'password',
          placeholder: '',
          //icon: userIcon,
        },
        value: '',
        validation: {
          required: true,
          isPassword: true,
        },
        errorMsg: '',
        valid: false,
        touched: false,
      },
      {
        name: 'Cnfirm Password',
        id: 'Input #3',
        config: {
          type: 'password',
          placeholder: '',
          //icon: userIcon,
        },
        value: '',
        validation: {
          required: true,
          isPassword: true,
        },
        errorMsg: '',
        valid: false,
        touched: false,
      },
    ],
    formIsValid: false,
  });
  const changeInput = (dispatch, payload) => {
    return dispatch({
      type: 'CHANGE_INPUT',
      payload: payload,
    });
  };
  const [mobileEdit, setMobileEdit] = useState(false);
  const onEdit = () => {
    // console.log('hey');
    setMobileEdit(true);
  };
  const updateMobile = value => {
    setModal({
      value: true,
      message: 'Updating mobile',
    });
    axios
      .post(
        `apis/user_settings.php?username=${props.resUser.userId}&password=${props.resUser.password}&new_value=${value}&change_type=1`,
      )
      .then(res => {
        // console.log(res.data);
        changeInput(dispatch, {
          targetInput: state1.inputs[0].name,
          value: value,
        });
        setModal(old => ({...old, value: false}));
      })
      .catch(err => {
        // console.log(err);
      });
    setMobileEdit(false);
  };
  const [validRequest, checkValidRequest] = useState(true);
  const changePassword = (oldP, newP, confirmP) => {
    if (newP !== confirmP) {
      checkValidRequest(false);
      return;
    }
    setModal({
      value: true,
      message: 'Changing password',
    });
    axios
      .post(
        `apis/user_settings.php?username=${props.resUser.userId}&password=${oldP}&new_value=${newP}&change_type=0`,
      )
      .then(res => {
        // console.log(res.data);

        setModal(old => ({...old, value: false}));
      })
      .catch(err => {
        // console.log(err);
      });
  };
  useEffect(() => {
    console.log(modal, 'before get');
    axios
      .get(
        'apis/user_settings.php?username=' +
          props.resUser.userId +
          '&password=' +
          props.resUser.password,
      )
      .then(res => {
        // setTimeout(() => {
        console.log(modal, 'before setUserDetails');
        setUserDetails({
          name: res.data.name,
          email: res.data.email_id,
          mobile: res.data.mobile_number,
          //loading: false,
        });
        changeInput(dispatch, {
          targetInput: state1.inputs[0].name,
          value: res.data.mobile_number
            ? res.data.mobile_number
            : 'no mobile number',
        });
        setModal(old => ({...old, value: false}));
        // }, 1000);
      })
      .catch(err => {
        console.log('hi');
        setModal(old => ({...old, value: false}));
      });
  }, []);
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContent}>
        <Pressable
          android_ripple={{color: '#bcbcbc'}}
          onPress={() => props.navigation.goBack()}>
          <BackIcon />
        </Pressable>
        <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>
          Profile
        </Text>
        <Pressable
          android_ripple={{color: '#bcbcbc'}}
          onPress={() => setConfirmDialog(true)}>
          <Text style={{fontSize: 16, color: '#339cde', fontWeight: '500'}}>
            Logout
          </Text>
        </Pressable>
      </View>

      <View style={styles.avatar}>
        {/* <AvatarIcon width="100%" /> */}
        {/* <Avatar.Text
          size="100%"
          label={getInitials(props.resUser.name)}
          color="#339cde"
        /> */}
        <Avatar.Text
          label={
            !userDetails.name || userDetails.name === ''
              ? ''
              : getInitials(userDetails.name)
          }
          color="white"
          size={128}
          style={{backgroundColor: '#56bcfc'}}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable
          android_ripple={{color: '#bcbcbc'}}
          style={{
            width: 34,
            height: 34,
            borderRadius: 17,
            backgroundColor: '#f2f2f2',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-6%',
            marginLeft: '20%',
            //elevation: 2,
          }}>
          <PencilIcon />
        </Pressable>
      </View>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.detailName}>NAME</Text>
          <View style={{marginTop: '-2%'}}>
            <InputField
              disabled
              value={userDetails.name}
              modalOpen={modal2 || modal.value || confirmDialog}
            />
          </View>
        </View>
        <View style={{...styles.detail, marginTop: '4%'}}>
          <Text style={styles.detailName}>EMAIL</Text>
          <View style={{marginTop: '-2%'}}>
            <InputField
              disabled
              value={userDetails.email}
              modalOpen={modal2 || modal.value || confirmDialog}
            />
          </View>
        </View>
        <View style={{...styles.detail, marginTop: '4%'}}>
          <Text style={styles.detailName}>MOBILE</Text>
          <View style={{marginTop: '-2%'}}>
            <InputField
              modalOpen={modal2 || modal.value || confirmDialog}
              disabled={!mobileEdit}
              value={state1.inputs[0].value}
              type={state1.inputs[0].config.type}
              change={text =>
                changeInput(dispatch, {
                  targetInput: state1.inputs[0].name,
                  value: text,
                })
              }
              editIcon
              onEdit={onEdit}
            />
          </View>
        </View>
      </View>
      <View style={styles.details}>
        <CustomButton
          title={mobileEdit ? 'SAVE' : 'Change Password'}
          press={() => {
            // console.log('hi2');
            if (mobileEdit) {
              updateMobile(state1.inputs[0].value);
            } else {
              setModal2(true);
            }
          }}
        />
      </View>

      <Modal
        dismissable
        onDismiss={() => setModal2(false)}
        contentContainerStyle={{
          height: '75%',
          backgroundColor: 'white',
          elevation: 100,
          width: '90%',
          marginLeft: '5%',
          borderRadius: 5,
        }}
        visible={modal2}>
        <ScrollView
          style={{
            height: '90%',
            elevation: 6,
            width: '95%',
            marginLeft: '2.5%',
            marginTop: '10%',
          }}>
          <Text style={{fontSize: 18, fontWeight: '700', marginLeft: '5%'}}>
            Change Password
          </Text>
          <View style={styles.details}>
            <View style={styles.detail}>
              <Text style={styles.detailName}>OLD PASSWORD</Text>
              <View style={{marginTop: '-2%'}}>
                <InputField
                  value={state2.inputs[0].value}
                  type={state2.inputs[0].config.type}
                  change={text =>
                    changeInput(dispatch2, {
                      targetInput: state2.inputs[0].name,
                      value: text,
                    })
                  }
                />
              </View>
            </View>
            <View style={{...styles.detail, marginTop: '4%'}}>
              <Text style={styles.detailName}>NEW PASSWORD</Text>
              <View style={{marginTop: '-2%'}}>
                <InputField
                  value={state2.inputs[1].value}
                  type={state2.inputs[1].config.type}
                  change={text =>
                    changeInput(dispatch2, {
                      targetInput: state2.inputs[1].name,
                      value: text,
                    })
                  }
                />
              </View>
            </View>
            <View style={{...styles.detail, marginTop: '4%'}}>
              <Text style={styles.detailName}>CONFIRM PASSWORD</Text>
              <View style={{marginTop: '-2%'}}>
                <InputField
                  value={state2.inputs[2].value}
                  type={state2.inputs[2].config.type}
                  change={text =>
                    changeInput(dispatch2, {
                      targetInput: state2.inputs[2].name,
                      value: text,
                    })
                  }
                />
              </View>
            </View>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: 'red',
              marginTop: '2%',
              marginLeft: '5%',
              display: validRequest ? 'none' : 'flex',
            }}>
            Passwords do not match!
          </Text>
          <View
            style={{
              width: '95%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: '2.5%',
              marginTop: '10%',
              marginBottom: '5%',
            }}>
            <CustomButton
              press={() => setModal2(false)}
              title="CANCEL"
              wrapperStyle={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#56bcfc',
              }}
              textStyle={{color: '#56bcfc'}}
            />
            <CustomButton
              title="SUBMIT"
              press={() =>
                changePassword(
                  state2.inputs[0].value,
                  state2.inputs[1].value,
                  state2.inputs[2].value,
                )
              }
            />
          </View>
        </ScrollView>
      </Modal>
      <LoadingModal visible={modal.value} message={modal.message} />
      <Provider>
        <Portal>
          <Dialog
            theme={PaperDefaultTheme}
            visible={confirmDialog}
            onDismiss={() => setConfirmDialog(false)}
            style={{
              paddingVertical: '5%',
              elevation: 5,
              borderRadius: 5,
            }}>
            <Dialog.Content>
              <Text>Are you sure you want to logout</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setConfirmDialog(false)}>NO</Button>
              <Button onPress={() => props.logout()}>YES</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>
    </View>
  );
};

const mapStatetoProps = state => {
  return {
    resUser: state.auth.resUser,
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContent: {
    marginTop: '10%',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '6%',
    width: '90%',
    alignItems: 'center',
    marginLeft: '5%',
  },
  detail: {
    width: '100%',
  },
  detailName: {
    fontSize: 13,
    fontWeight: '500',
    color: '#575981',
  },
});
