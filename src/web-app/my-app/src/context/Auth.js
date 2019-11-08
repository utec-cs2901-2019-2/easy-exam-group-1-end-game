import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export default props => {
  const [auth, setAuth] = useState();
  return (
    <AuthContext.Provider value = { {auth, setAuth}}>
      {props.children}
    </AuthContext.Provider>
  )
}
