import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/LandingPage';
import Login from '../pages/Login';
import Feed from '../pages/Feed';

const {Navigator, Screen} = createStackNavigator();

function AuthStack(){
    return(
            <Navigator screenOptions={{headerShown:false}} >
                <Screen name="Landing" component={Landing} />
                <Screen name="Login" component={Login} />
            </Navigator>
    )
}

export default AuthStack;