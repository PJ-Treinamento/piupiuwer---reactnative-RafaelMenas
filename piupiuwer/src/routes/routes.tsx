import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {AuthProvider, useAuth } from '../hooks/useAuth';

export const Routes = () => {
    const {token} = useAuth();
    
    return(
        <NavigationContainer>
            <AuthProvider>
            {token ? <AppStack/> : <AuthStack/>}
            </AuthProvider>
        </NavigationContainer>
    )

}