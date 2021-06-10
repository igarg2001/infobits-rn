import React from 'react';
import {Text} from 'react-native';
import {
  Provider,
  Dialog,
  Button,
  Portal,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

const InvalidPasswordDialog = props => {
  return (
    <Provider>
      <Portal>
        <Dialog
          theme={PaperDefaultTheme}
          visible={props.visible}
          dismissable={false}
          style={{
            paddingVertical: '2%',
            elevation: 5,
            borderRadius: 5,
          }}>
          <Dialog.Title style={{color: 'black'}}>
            {props.title ? props.title : 'INVALID PASSWORD!'}
          </Dialog.Title>
          <Dialog.Content>
            <Text>
              {props.contentText
                ? props.contentText
                : 'Your password was changed while you were away. Login to access this section again'}
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => props.action()}>
              {props.actionText ? props.actionText : 'LOGIN'}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default InvalidPasswordDialog;
