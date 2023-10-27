import React from 'react';
import {createNativeStackNavigator,createStackNavigator,TransitionPresets } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import LoginScreen from '../screens/authScreens/LoginScreen';
import RegisterScreen from '../screens/authScreens/RegisterScreen';



 
const Auth=createNativeStackNavigator();

export function AuthStack() {
  return (
    <Auth.Navigator >
         
         <Auth.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options ={{
              headerShown: false,
    
          }}
        />

         <Auth.Screen
            name="Login"
            component={LoginScreen}
            options ={{
              headerShown: false,
            
          }}
       />

                  <Auth.Screen 
                        name ="Register"
                        component = {RegisterScreen}
                        options ={{
                            headerShown: false,
                           
                        }}
                    /> 


     </Auth.Navigator>
  )
}

