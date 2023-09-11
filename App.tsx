import React, {createContext} from 'react';
import AppNavigator from './src/AppNavigator';
import {Text} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/Redux/MyStore';

import IsLoggedState from './src/context/isLoggedInState';

function App() {
  return (
    <>
      <Provider store={store}>
        <IsLoggedState>
          <AppNavigator />
        </IsLoggedState>
      </Provider>
    </>
  );
}

export default App;
