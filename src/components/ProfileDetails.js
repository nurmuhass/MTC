import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { Button } from '@rneui/themed';
export default function ProfileDetails() {
  return (
    
    <View style={{}}>
    <ScrollView> 
<View>
<Text style={{backgroundColor:'#d9edf7',width:'90%',fontFamily: "Roboto",color:'#31708f',padding:10,marginLeft:15,marginRight:10}}> Earn data: You would earn 30mb for each customer that signup using your referer link and verifired their email address(share through facebook,whatsapp groups, instagram... etc)</Text>
</View>
<View style={{justifyContent:'center',alignItems:'center'}}><Button title='My Profile'/>

<View style={{flexDirection:'row'}}>
<TextInput style={{borderWidth:1,borderColor:'#555',height:30,width:'80%'}}/>
<Feather name="copy" size={24}  />
</View>
<View style={{Width:'80%'}}>
<View >
<Text style={{fontWeight:'bold'}}>Email</Text>
<Text>nurmuhass@gmail.com</Text>
</View>

<View style={{flexDirection:'row'}}>
<Text style={{fontWeight:'bold'}}>Joined on</Text>
<Text>July 24th 2018</Text>
</View>

<View style={{flexDirection:'row'}}>
<Text style={{fontWeight:'bold'}}>Address</Text>
<Text>Maiduguri,Borno State</Text>
</View>

<View style={{flexDirection:'row'}}>
<Text style={{fontWeight:'bold'}}>State</Text>
<Text>Borno State</Text>
</View>

<View style={{flexDirection:'row'}}>
<Text style={{fontWeight:'bold'}}>Phone</Text>
<Text>080366366363</Text>
</View>

<View style={{flexDirection:'row'}}>
<Text style={{fontWeight:'bold'}}>Phone Ext</Text>
<Text>0299287222</Text>
</View>

<View style={{flexDirection:'row'}}>
<Text style={{fontWeight:'bold'}}>Short Description</Text>
<Text style={{width:'80%'}}>at ThemeProvider (http://192.168.220.189:19000/node_modules%5Cexpo%5CAppEntry.bundle?platform=android&dev=true&hot=false:107368:21)
    at NavigationContainerInner (http://192.168.220.189:19000/node_modules%5Cexpo%5CAppEntry.bundle?platform=android&dev=true&hot=false:107260:26)
    at RootNavigator</Text>
</View>

<View style={{flexDirection:'row'}}>
<Text style={{fontWeight:'bold',width:'50%',alignItems:'center',marginLeft:30}}>Long Description</Text>
<Text style={{width:'50%',}}>at ThemeProvider (http://192.168.220.189:19000/node_modules%5Cexpo%5CAppEntry.bundle?platform=android&dev=true&hot=false:107368:21)
    at NavigationContainerInner (http://192.168.220.189:19000/node_modules%5Cexpo%5CAppEntry.bundle?platform=android&dev=true&hot=false:107260:26)
    at RootNavigator
    at App
  </Text>
</View>

<View style={{flexDirection:'row'}}>
<Text style={{fontWeight:'bold'}}>Current Trust Score</Text>
<Button title='40'/>
</View>

</View>
</View>
</ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})