import { createContext, useContext, useState } from "react"

export const Appcontext = createContext();
export const AppContextProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [language, setLanguage] = useState('en');

    const [signupData, setSignupData] = useState({
      phone: "",
      phoneVerified: false,
      name: 'Rubin',
      username: '@rubin',
      email: '',
      emailVerified: false,
      password: '',
      profileImage: '',
      confirmPassword: '',
      agreeToTerms: false
    });


    const value = {isLoggedIn, setIsLoggedIn, signupData, setSignupData, language, setLanguage};
  return (
    <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>
  )
}

export const useAppContext = () => useContext(Appcontext);
