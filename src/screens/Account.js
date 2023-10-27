import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { colors,parameters } from '../global/styles';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from '@rneui/themed';
const Account = ({navigation}) => {
    const hr =   <Text style={{borderTopWidth:1,borderColor:"#f0f0f0",width:'100%',height:2}}></Text>;
  return (
    <View  style={{ flex:1, 
        backgroundColor:'#f0f0f0',paddingTop:parameters.statusBarHeight,}}>
      
      <View style={{marginVertical:45,alignItems:'center'}}>
        <Image source={require("../assets/images/burger.jpg")} style={{width:100,height:100,borderRadius:50}}/>
        <Text style={{fontWeight:'bold'}}>Nur Muhass</Text>
        <Text>little Desc of store</Text>

        <Button title='View Profile' buttonStyle={{width:130,
      marginTop:3,borderRadius:10}}   onPress={() => {
                  navigation.navigate('Profile');
                }}/>
      </View>

      <FlatList
	data={[{}]}
    style={{marginTop:20}}
	keyExtractor={() => null}
	renderItem={() =><>


<View style={{backgroundColor:'#fff',width:'92%',marginHorizontal:15,borderRadius:10}}>
<View style={{justifyContent:'space-between',flexDirection:'row',padding:20}}>
<Text style={{fontWeight:'bold'}}>Email:</Text>
<View style={{flexDirection:'row'}}>
<Text>nurmuhass@gmail.com</Text>
 <Ionicons name="md-chevron-forward" size={20} color="black" />  
</View>
</View>
{hr}

<View style={{justifyContent:'space-between',flexDirection:'row',padding:20}}>
<Text style={{fontWeight:'bold'}}>Date of Birth</Text>
<View style={{flexDirection:'row'}}>
<Text>20.202.2018</Text>
<Ionicons name="md-chevron-forward" size={20} color="black" />  
</View>
</View>
{hr}

<View style={{justifyContent:'space-between',flexDirection:'row',padding:20}}>
<Text style={{fontWeight:'bold'}}>Gender</Text>
<View style={{flexDirection:'row'}}>
<Text>Male</Text>
<Ionicons name="md-chevron-forward" size={20} color="black" />  
</View>
</View>

    </View>



 <View style={{backgroundColor:'#fff',width:'92%',marginHorizontal:15,borderRadius:10,marginTop:20}}>
     <View style={{justifyContent:'space-between',flexDirection:'row',padding:20}}>
   
    <View style={{flexDirection:'row',justifyContent:'center'}}>
    <FontAwesome5 name="first-order-alt" size={24} color="black" />
    <Text style={{fontWeight:'bold',marginLeft:3}}>Orders</Text>
    </View>
    <Ionicons name="md-chevron-forward" size={20} color="black"  /> 
    </View>

 </View>


 <View style={{backgroundColor:'#fff',width:'92%',marginHorizontal:15,borderRadius:10,marginTop:20}}>
     <View style={{justifyContent:'space-between',flexDirection:'row',padding:20}}>
   
    <View style={{flexDirection:'row',justifyContent:'center'}}>
    <MaterialIcons name="security" size={24} color="black" />
    <Text style={{fontWeight:'bold',marginLeft:3}}>Change Password</Text>
    </View>
    <Ionicons name="md-chevron-forward" size={20} color="black"  /> 
    </View>
{hr}
    <View style={{justifyContent:'space-between',flexDirection:'row',padding:20}}>
   
   <View style={{flexDirection:'row',justifyContent:'center'}}>
   <Entypo name="help-with-circle" size={24} color="black" />
   <Text style={{fontWeight:'bold',marginLeft:3}}>Help</Text>
   </View>
   <Ionicons name="md-chevron-forward" size={20} color="black"  /> 
   </View>

{hr}
   <View style={{justifyContent:'space-between',flexDirection:'row',padding:20}}>
   
   <View style={{flexDirection:'row',justifyContent:'center'}}>
   <Entypo name="info-with-circle" size={24} color="black" />
   <Text style={{fontWeight:'bold',marginLeft:3}}>About</Text>
   </View>
   <Ionicons name="md-chevron-forward" size={20} color="black"  /> 
   </View>

 </View>
</> } />
    </View>
  )
}

export default Account