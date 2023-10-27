
import React from 'react'
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import Chats from './Chats';
import Suggestions from './Suggestions';



const Tab = createMaterialTopTabNavigator();

export default function MessengerSlide() {
  return (
    <Tab.Navigator >
        <Tab.Screen name="Chats" component={Chats} style={{backgroundColor:'#868f96',color:'#ccc'}}/>
        <Tab.Screen name="Suggestions" component={Suggestions} />
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})