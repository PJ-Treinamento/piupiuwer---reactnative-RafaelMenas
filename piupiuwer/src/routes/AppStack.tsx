import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Notifications from '../pages/Notifications';

const { Navigator, Screen} = createBottomTabNavigator();

const AppStack = () => {
    return ( 
        <Navigator
        tabBarOptions={{
            style: {
            elevation:0,
            shadowOpacity:0, 
            height:64,
            },
            tabStyle: {
                flexDirection: 'row',
                alignItems:'center',
                justifyContent: 'center',
            },
            iconStyle:{
                flex: 0,
                width: 20,
                height: 20,
            },
            inactiveBackgroundColor:'#fafafc',
            activeBackgroundColor: '#ebebf5',
            inactiveTintColor: '#c1bccc',
            activeTintColor: '#32264d',
        }}
        >
            <Screen name="Home" component={Home} /> 
            <Screen name="Perfil" component={Perfil} /> 
            <Screen name="Notifications" component={Notifications} />
        </Navigator>
    )
}

export default AppStack;
            