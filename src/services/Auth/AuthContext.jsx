import React, { useEffect, useMemo } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js'
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
const POOL_DATA = {
    ClientId: '1jfmni2vt21hhpdq509d9o74on',
    UserPoolId: 'us-east-1_CekI6ywcl'
};
const userPool = new CognitoUserPool(POOL_DATA);

export const CountProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [token, setToken] = useState(null);
    const navigator = useNavigate();
    useMemo(()=> {
        console.log(`UseMemo ejecuted`, token)
    },[token])

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user]);
    const login = (loginData) => {
        console.log(loginData);
        const authDetails = new AuthenticationDetails(loginData);
        const userData = {
            Username: loginData.Username,
            Pool: userPool
        }
        const cognitoUser = new CognitoUser(userData);
        cognitoUser.authenticateUser(authDetails, {
            onSuccess: (result) => {
                console.log('Usuario logueado', result);
                console.log(getAuthenticatedUser());
                
            },
            onFailure: (err) => {
                console.dir(err);
                notification.error({
                    message: 'Error al loguearse',
                    description: 'El usuario o la contraseña son incorrectos',
                })
            },
        });
        return
        const user = Object.assign(loginData, { name: 'Martín Rodríguez', role: 'ADMIN_ROLE'})
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }
    const getAuthenticatedUser= () => {
        const currentUser = userPool.getCurrentUser();
        return currentUser;
    }
    const getSessionIsValid = () => {;
        return getAuthenticatedUser()?.getSession((err, session) => {
            if(err) return console.log(err);
            const sessionValid = session.isValid();
            if(!sessionValid) logout();
            if(!token) setToken(session.getIdToken().getJwtToken());
            return sessionValid
        });
    }
    const logout = () => {
        console.log(`logout called context`)
        // localStorage.removeItem('user');
        getAuthenticatedUser().signOut();
        setUser(null);
        navigator('/login', { replace: true })
    }
    const data = {
        user,
        token,
        login,
        logout,
        setUser,
        getSessionIsValid,
        getAuthenticatedUser
    }
  return (
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider>  )
}   

export const useAuth = () => useContext(AuthContext)