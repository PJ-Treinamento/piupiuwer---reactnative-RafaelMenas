import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/LandingPage';
import Login from '../pages/Login';

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