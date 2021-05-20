import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Modal, ActivityIndicator, Provider, Portal} from 'react-native-paper';

const LoadingModal = props => {
  return (
    <Provider>
      <Portal>
        <Modal
          visible={props.visible}
          dismissable={props.dismissable ? props.dismissable : false}
          contentContainerStyle={{
            backgroundColor: 'white',
            width: '80%',
            marginLeft: '10%',
            borderRadius: 5,
            paddingHorizontal: '10%',
            paddingVertical: '10%',
            elevation: 5,
          }}>
          <View style={styles.innerWrapper}>
            <ActivityIndicator size="large" color="#339cde" />
            <Text style={{fontSize: 18}}>{props.message}</Text>
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  innerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
