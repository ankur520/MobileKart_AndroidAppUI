import {View, Text} from 'react-native';
import React from 'react';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

const ErrorAndLoading = ({isError, isLoader}) => {
  return (
    <>
      {isError ? (
        <Text
          style={{
            fontSize: 10,
            color: 'red',
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
    </>
  );
};

export default ErrorAndLoading;
