import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export default props => {
  const [auth, setAuth] = useState();
  const [userContext, setUserContext] = useState({name:'', lastn: '', rol: '', uni: ''});
  return (
    <AuthContext.Provider value = {{auth, setAuth, userContext, setUserContext}}>
      {props.children}
    </AuthContext.Provider>
  )
}
