import React, {useReducer, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../../actions/actionCreators/auth';
import BackIcon from '../../assets/svg/ArrowLeft';
import AvatarIcon from '../../assets/svg/Avatar';
import PencilIcon from '../../assets/svg/Pencil';
import CustomButton from '../../components/customButton';
import InputField from '../../components/InputField';
import {formValidators} from '../../utils/formValidators';
//import InputField2 from '../../components/InputField2';
import {Modal} from 'react-native-paper';

const Profile = props => {
  const updateMobile = () => {
    console.log('mobile updated');
    setMobileEdit(false);
  };
  const [modal, setModal] = useState(false);
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
        value: props.resUser.email ? props.resUser.email : 'no mobile number',
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
  console.log(props.resUser);
  const [mobileEdit, setMobileEdit] = useState(false);
  const onEdit = () => {
    console.log('hey');
    setMobileEdit(true);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>
          Profile
        </Text>
        <TouchableOpacity onPress={() => props.logout()}>
          <Text style={{fontSize: 16, color: '#339cde', fontWeight: '500'}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.avatar}>
        <AvatarIcon width="100%" />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.detailName}>NAME</Text>
          <View style={{marginTop: '-2%'}}>
            <InputField disabled value={props.resUser.name} modalOpen={modal} />
          </View>
        </View>
        <View style={{...styles.detail, marginTop: '4%'}}>
          <Text style={styles.detailName}>EMAIL</Text>
          <View style={{marginTop: '-2%'}}>
            <InputField
              disabled
              value={props.resUser.email}
              modalOpen={modal}
            />
          </View>
        </View>
        <View style={{...styles.detail, marginTop: '4%'}}>
          <Text style={styles.detailName}>MOBILE</Text>
          <View style={{marginTop: '-2%'}}>
            <InputField
              modalOpen={modal}
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
            console.log('hi2');
            if (mobileEdit) {
              updateMobile();
            } else {
              setModal(true);
            }
          }}
        />
      </View>
      <Modal
        dismissable
        onDismiss={() => setModal(false)}
        contentContainerStyle={{
          height: '75%',
          backgroundColor: 'white',
          elevation: 100,
          width: '90%',
          marginLeft: '5%',
          borderRadius: 5,
        }}
        visible={modal}>
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
          <View
            style={{
              width: '95%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: '2.5%',
              marginTop: '10%',
              marginBottom: "5%"
            }}>
            <CustomButton
              press={() => setModal(false)}
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
              press={() => submitData(state.inputs)}
            />
          </View>
        </ScrollView>
      </Modal>
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
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '30%',
    height: '20%',
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
