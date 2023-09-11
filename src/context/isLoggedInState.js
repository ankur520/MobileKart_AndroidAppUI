import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import IsUserLoggedContext from './isLoggedInContext';
// import { fetchIsUserLoggedIn } from './fetchIsUserLoggedIn';

const IsLoggedState = props => {
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [id, setid] = useState('');

  const fetchIsUserLoggedIn = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userInfo');
      console.log('From Context '.jsonValue);

      if (jsonValue != null) {
        data = JSON.parse(jsonValue);
        setisUserLoggedIn(true);
        setfname(data.fetchedFName);
        setlname(data.fetchedLName);
        setemail(data.fetchedEmail);
        setid(data.fetchedId);
      } else {
        setisUserLoggedIn(false);
        setfname('');
        setlname('');
        setemail('');
        setid('');
      }
    } catch (error) {
      console.log(' Error in Logged In Context -', error);
    }
  };

  useEffect(() => {
    fetchIsUserLoggedIn();
  }, []);

  const state = {
    isUserLoggedIn: isUserLoggedIn,
    userInfo: {
      id: id,
      fname: fname,
      lname: lname,
      email: email,
    },
  };

  return (
    <IsUserLoggedContext.Provider value={state}>
      {props.children}
    </IsUserLoggedContext.Provider>
  );
};

export default IsLoggedState;
