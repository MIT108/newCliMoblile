/* eslint-disable prettier/prettier */
import { NavigationContainer } from "@react-navigation/native"
import React, { useState } from 'react'



import 'react-native-gesture-handler';
import { AuthStack, RootStack } from "./src/routes/routes";

import { AppContext } from './src/components/context/AppContext';
// import AppLoading from 'expo-app-loading';
import { getVariable } from './src/services/AsyncStorageMethods';
import Loader from "./src/components/Loader";


export default function App() {

  const [authReady, setAuthReady] = useState(false);
  const [storedToken, setStoredToken] = useState("")
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(true);

  const checkAuthenticationStatus = async () => {

    const userToken = await getVariable("misceoUserToken")
    const userInfo = await getVariable("misceoUserInformation")
    if (userToken !== null) {
      setStoredToken(userToken)
    } else {
      setStoredToken(null)
    }
  }
  checkAuthenticationStatus().then(() => {
    setAuthReady(true)
    setLoading(false)
  })
  
  if (authReady) {
    return (
        <AppContext.Provider value={{ storedToken, setStoredToken }}>
          <NavigationContainer>
            {storedToken == null ? (
              <AuthStack />
            ) : (
              <RootStack userType={"teacher"} />
            )}
          </NavigationContainer>
        </AppContext.Provider>
      )
    
  } else {
    return (
      <Loader loading={loading} />
    )
    
  }
}