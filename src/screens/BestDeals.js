import { StyleSheet, Text, View,TouchableOpacity ,
  ScrollView, TouchableWithoutFeedback,
  FlatList, Pressable,Image,
   Dimensions, StatusBar,Alert,render} from 'react-native'
import React, {useState,useEffect, useMemo} from 'react'
import { filterData,restaurantsData } from '../global/Data';
import { colors,parameters } from '../global/styles';
import { ImageBackground } from 'react-native';
import { ButtonGroup, Icon  } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Button,SocialIcon} from '@rneui/themed';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../firebase';
import { doc, deleteDoc, getDoc, query, where } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { getAuth, onAuthStateChanged ,User} from "firebase/auth";
import Icons from "@expo/vector-icons/MaterialIcons";
import MasonryList from "reanimated-masonry-list";
import {useIsFocused} from '@react-navigation/native';
import Searchbar from '../components/Searchbar'
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeProducts from '../components/HomeProducts';
import { SafeAreaView } from 'react-native';
import Divider from '../components/Divider';
import { MaterialIcons } from '@expo/vector-icons';

export default function BestDeals({navigation}) {


    //get user
    const auth = getAuth();
    const user= auth.currentUser;
    const {navigate} = useNavigation();
    const [indexCheck,setIndexCheck] =useState("0");
    
   
      const [screen,setScreen] =useState(0)

 

      const ScreenDisplay = () =>{
        if (screen === 0){
          return <Suggestions/>;
        }else if (screen === 1){
          return <Following/>;
        }
      }

      
const ArrowDisplay = () =>{
  if (screen === 0){
    return (
  
   <TouchableOpacity style={{borderBottomWidth:1,width:40,alignSelf:'center'}} ></TouchableOpacity>
   
    );
  }else if (screen === 1){
    return (

      <TouchableOpacity style={{borderBottomWidth:1,width:40,alignSelf:'center'}} ></TouchableOpacity>


);
  }
}
  return (
    <SafeAreaView style={{
      flex:1, 
      paddingTop:parameters.statusBarHeight,
      paddingBottom:5,
      backgroundColor:'#fff'}}>
  <View style={{flexDirection:'row',alignItems:'center'}}>
      <Searchbar searchWidth={'85%'} searchText={"What are you looking for ?"} style={{marginRight:0,paddingRight:0}}/>
  

      <TouchableOpacity
            style={{
              width: 33,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 17,
              borderWidth: 1,
              borderColor: colors.border,
              marginRight:15,
              marginLeft:0
            }}
          >
            <Ionicons name="notifications" size={24} color={colors.text} />
           
          </TouchableOpacity>
   </View>

   <View  style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:10}}>
   <View>
 <Text  onPress={ () => {
        setScreen((currScreen) => currScreen -1);
    }}>Suggestions </Text>
{ screen==0 ?ArrowDisplay() : ''}
   </View>
    
    <View>
    <Text  onPress={ () => {
    setScreen((currScreen) => currScreen +1);
 }}>Following </Text>
    { screen==1 ? ArrowDisplay() : ''}
    </View>
   
    </View>
    
<FlatList
	data={[{}]}
    style={{marginTop:20}}
	keyExtractor={() => null}
	renderItem={() =><>

 

{ScreenDisplay()}

</>}
    />
   </SafeAreaView>
  )
}



const Suggestions = () => {

  return (
    <View>
      <HomeProducts />
    </View>
  )
}

const Following = () => {
  return (
    <View style={{backgroundColor:colors.cardbackground}}>
  <View style={{backgroundColor:'#fff',borderRadius:10,marginLeft:10,padding:10}}>
      <Text>Suggested for You</Text>
        
     <FlatList
         horizontal={true}
         showsHorizontalScrollIndicator={false}
        data={filterData}
        keyExtractor={(item) => item.id}
        renderItem={({item,index}) => (
       <View style={{backgroundColor:'#f0f0f0',marginHorizontal:5,width:140,height:140}}>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:15}}>
<Image source={item.image} style={{width:50,height:50,borderRadius:30,}}/>
<Text>{item.name}</Text>


        </View>

        <Button buttonStyle={{width:80,backgroundColor:'red',borderRadius:20,height:25,fontSize:10,padding:0,marginTop:12,alignSelf:'center',}} title='Follow'/>
       <View style={{position:'absolute',top:2,right:2}}>
          <MaterialIcons name="cancel" size={24} color={colors.grey2} />
       </View>
        
       </View>

        )}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop:parameters.statusBarHeight,
    backgroundColor:colors.cardbackground,
    paddingBottom:5
},
})