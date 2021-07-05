import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/LandingPage';
import Login from '../pages/Login';
import Feed from '../pages/Feed';

const {Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
            <Navigator screenOptions={{headerShown:false}} >
                <Screen name="Feed" component={Feed} />
            </Navigator>
    )
}

export default AppStack;