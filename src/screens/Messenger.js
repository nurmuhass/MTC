import  React from 'react';
import { Text, View, TouchableOpacity,StyleSheet,StatusBar } from 'react-native';
import MessengerSlide from '../components/MessengerSlide';
import { colors, parameters,title } from '../global/styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Icon, Button,SocialIcon} from '@rneui/themed';

export default function Messenger() {
  return (
    <View style={{flex:1, paddingTop:parameters.statusBarHeight,backgroundColor:'#868f96'}}>
        <StatusBar
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(255, 140, 82,1)"
                 />
        <View style={styles.header}>
    <View style={{marginLeft:20}}>
    <Icon 
                    type = "MaterialIcons"
                    name = "arrow-back"
                    color = {colors.heaherText}
                    size ={28}
                    
                    onPress ={()=>{navigation.goBack()}}
                />
    </View> 
    <View>
        <Text style={styles.headerText}>Messenger</Text>
    </View> 
    </View>
  
  
       <MessengerSlide/>
       </View>
  );
}



const styles = StyleSheet.create({
  header:{
     flexDirection:"row",
     backgroundColor:colors.buttons,
     height:parameters.headerHeight,
 
  },
  headerText:{
   color:colors.heaherText,
   fontSize:22,
   fontWeight:"bold",
   marginLeft:25
  }
 
 });
 