import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CreateAccount from '../screens/CreateAccount'

const Stack = createNativeStackNavigator();

export default function NavigationStack(){
    return(
        <Stack.Navigator 
            screenOptions={{headerShown: false}}
            initialRouteName="HomeScreen">

                <Stack.Screen 
                    name='HomeScreen'
                    component={HomeScreen} 
                />
                <Stack.Screen 
                    name='CreateAccount' 
                    component={CreateAccount}/>

        </Stack.Navigator>
    );
}
