import React from 'react'
import AppNavigator from './src/AppNavigator'
import { Text } from "react-native"

import { Provider } from 'react-redux'
import { store } from "./src/Redux/MyStore"

function App() {

  return (
    <>

      {/* <Text
        style={{
          fontSize: 20,
          color: 'black',
          fontWeight: '500',
          marginBottom: 10,
        }}>
        sadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </Text> */}

      <Provider store={store}>

        <AppNavigator />

      </Provider>



    </>
  )
}

export default App


