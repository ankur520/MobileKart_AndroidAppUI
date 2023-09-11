import * as React from 'react';
import {View, Text, Modal} from 'react-native';
import {Button, Dialog, Portal, PaperProvider} from 'react-native-paper';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

const ProgressDialog = ({isError, isLoader}) => {
  const [visible, setVisible] = React.useState(true);

  const hideDialog = () => setVisible(false);

  return (
    <PaperProvider>
      <Dialog visible={true} onDismiss={hideDialog}>
        <Dialog.Content>
          {/* <Text variant="bodyMedium">This is simple dialog</Text> */}
          {isError ? (
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                fontWeight: '500',
              }}>
              {isError ? 'Something Went Wrong' : ''}
            </Text>
          ) : (
            ''
          )}

          {isLoader ? (
            <View style={{marginLeft: 15}}>
              <ActivityIndicator
                animating={isLoader}
                color={'#00008B'}
                size="small"
                hidesWhenStopped={true}
              />
            </View>
          ) : (
            ''
          )}
        </Dialog.Content>
      </Dialog>
      {/* </Portal> */}
    </PaperProvider>
  );
};

export default ProgressDialog;
