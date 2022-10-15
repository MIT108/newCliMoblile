import {createContext} from 'react'

export const AuthenticationContext = createContext({
    storedCredentials: {},
    setStoredCredentials: () => {},
})