import { StyleSheet, Text, View ,StatusBar, Image,TouchableOpacity,Pressable} from 'react-native'
import React from 'react';
import { colors, parameters,title } from '../global/styles';
import {scale} from 'react-native-size-matters'
import { Button } from '@rneui/themed';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileDetails from '../components/ProfileDetails'
import Saved from '../components/Saved'
import Posts from '../components/Posts'

import { getAuth, signOut } from "firebase/auth";

export default function Profile({navigation, route}) {

  
  const auth = getAuth();
  const Tab = createMaterialTopTabNavigator();

  return (
    <View  style={{...styles.Container, paddingTop:parameters.statusBarHeight}}>
       <StatusBar
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(255, 140, 82,1)"
                 />
<Pressable onPress={() => signOut(auth)}><View style={{height:30,width:'100%',backgroundColor:'grey'}}><Text>Logout</Text></View></Pressable>
  <View>      
    <View style={styles.cover}>
    <Image source={require("../assets/images/Bigmac.jpg")} style={{width:'100%',height:"100%"}} resizeMode="cover"/>
</View>
     <View style={{backgroundColor:'#fff', 
  position:'absolute',
  height:scale(132),
      width:scale(120),
      top:scale(170),
      left:scale(20),
      zIndex:1,
      justifyContent:'center',
      alignItems:'center',
      borderColor:'#ccc',
      borderWidth:1,
      }}>
     <View style={{  alignItems:'center',
  justifyContent:'center',
  position:'absolute',
  height:scale(125),
      width:scale(112),
      
      zIndex:1,
      borderRadius:10}}>
      <Image source={require("../assets/images/salad.jpg")} style={{width:'100%',height:"100%"}} resizeMode="cover"/>
        </View>
        </View>
 <View style={{
  position:'absolute',
      top:scale(170),
      left:scale(150),
      zIndex:1,
      justifyContent:'center',
      alignItems:'center',
   
      }}>
  <Text style={{fontSize:scale(20),fontWeight:800,color:'white'}}>NUR MUHASS</Text>
  <Button title='Edit Profile' buttonStyle={styles.buttonStyle}   onPress={() => {
                  navigation.navigate('EditProfile');
                }}/>
 </View>

<View style={{borderWidth:1,borderColor:'#ccc',marginBottom:15}}>
</View>

    </View>
    
    <Tab.Navigator >
        <Tab.Screen name="ProfileDetails" component={ProfileDetails} />
        <Tab.Screen name="Posts" component={Posts} />
     
        <Tab.Screen name="Saved" component={Saved} />
        
      </Tab.Navigator>


    </View>
   
  )
}

const styles = StyleSheet.create({
  cover:{
    backgroundColor:'red',
   height:scale(250),
   marginBottom:scale(65),
 },
Container:{
flex:1,
},  profileC:{
 
    },
    buttonStyle:{
      width:130,
      marginTop:3

    }
    
})