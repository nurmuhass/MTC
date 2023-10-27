import { View, Text, TouchableOpacity ,SafeAreaView,FlatList,Pressable,StyleSheet} from 'react-native'
import React, {useRef, useState,useEffect} from 'react';
import {collection,getDoc,getDocs,addDoc,updateDoc,doc ,set,setDoc} from "firebase/firestore"; 
import {useIsFocused} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../global/styles';
import { getAuth, onAuthStateChanged ,User} from "firebase/auth";
import { db } from '../../firebase';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { Button } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function MyOrders({navigation}) {
    const auth = getAuth();
    return ( 
  
 <View style={styles.container}>
    <View style={{
      marginBottom: 16,
      backgroundColor:"#fff",padding:10,marginTop:8}}>
        <View style={{      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",marginBottom:10}}>

        <View >
        <Text style={{fontSize: 14,marginLeft:4}}>Order ID:</Text>
        <Text style={{fontSize: 14,marginLeft:4}}>Order Time</Text>
        </View>
      
            
        <FontAwesome name="trash-o" size={24} color="black" />


          </View>

        <View style={{flexDirection: "row",}}>
          <Image source={require('../assets/assets/homepod.jpeg')} style={{width: 111,
      height: 111,
      marginRight: 16,
      marginLeft:5,}} />
          <View>
            <Text style={{fontSize: 15,
      marginBottom: 8,paddingRight:5}}  numberOfLines={3}>Lorem ipsim Lorem ipsim LoremLorem ipsim Lorem ipsim Lorem </Text>

    <View style={{flexDirection:'row',width:'100%',marginTop:12}}>
            <Text style={{justifyContent:'flex-start',fontWeight:'bold',fontSize:15,width:"60%"}}>NGN20000</Text>
            <MaterialIcons name="notes" size={24} color="black" style={{flexDirection: "row"}}/>
        
            </View>
          </View>
          </View>
 <View  style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,alignItems:'flex-start',width:'100%'}}>
 
            <Text style={{fontWeight:'bold',marginVertical:5,}}>Quantity</Text>
            <Text>1</Text>   
         
      </View>

<View  style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,alignItems:'flex-start',width:'100%'}}>
 
 <Text style={{fontWeight:'bold',marginVertical:5,}}>Total Amount</Text>
 <Text>NGN 34568</Text>   

</View>

<Button buttonStyle={{color:'#FF9800',backgroundColor:'#F44336'}}>
Tracking
</Button>
      

</View>
</View>
            )

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f0f0f0",
    },
    title: {
      fontSize: 16,
      textAlign: "center",
    },
    restaurant: {
    fontSize: 24,
      textAlign: "center",
      marginVertical: 16,
    },
    body: {
        fontSize: 16,
      color: "#545556",
      lineHeight: 22,
    },
    deliveryOptions: {
      flexDirection: "row",
      marginVertical: 8,
    },
  });
  