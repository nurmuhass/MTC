import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Tabs from './HomeStack'
import { AuthStack } from './AuthStack';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';
import { useAuth } from '../Hooks/UseAuth'

export default function RootNavigator(){
const { user } = useAuth();
        return(
        
        <NavigationContainer>
          
           {user ?  <Tabs/> : <AuthStack />}
        </NavigationContainer>
     
        )
    }
    
    



