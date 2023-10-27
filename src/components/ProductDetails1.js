import { StyleSheet, Text, View,Alert, StatusBar, ScrollView,SafeAreaView,TextInput,Image} from 'react-native'
import {parameters, colors} from '../global/styles';
import { Button,SocialIcon} from '@rneui/themed';
import React , { useState, useEffect ,useContext} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-picker/picker';
import { storage } from '../../firebase';
import { db } from '../../firebase';
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { collection, addDoc, updateDoc, arrayUnion } from "firebase/firestore"; 
import { getAuth, onAuthStateChanged ,User} from "firebase/auth";
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProductDetails1({navigation}) {
  const [Category, setCategory] = useState();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [Oprice, setOprice] = useState('');
  const [DiscountPercent, setDiscountPercent] = useState('');
  const [Shipping, setShipping] = useState('');
  const [ProFrom, setProFrom] = useState('');
  const [DeliveryOn, setDeliveryOn] = useState('');
  const [desc, setDesc] = useState('');
  const [image2, setImage2] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);
  const {navigate} = useNavigation();

//get user
const auth = getAuth();
const user= auth.currentUser;

const uploadData = async () => {

try {
   
  const docRef =   await addDoc(collection(db, "post"), {
      userId:user.uid,
       title: title,
       Category:Category,
       price:price,
       desc:desc,
       postTime: Date.now(),
       WhishList: null,
       Reviews: null,
       quantity:1,
       
       DeliveryOn:DeliveryOn
     });
     console.log('Post Added!');
  navigate("ProductDetails3",{item:docRef.docId})

} catch (e) {
    console.error(e);
  } finally {
   
  }
};

  return (
    <SafeAreaView>
  <TextInput
        style={styles.input}
        value={title}
        placeholder='Title'
       onChangeText={(text) => setTitle(text)}
      />

<Picker
  selectedValue={Category}
  onValueChange={(itemValue, itemIndex) =>
    setCategory(itemValue)
  } style={{  borderWidth:2, 
    borderColor:"black",color:'black',width:"95%",margin:10,borderRadius:8,backgroundColor:colors.cardbackground}}>
  <Picker.Item label="Choose Category" value="Choose Category" disabled/>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>


      

      <View
        style={{
         
          borderColor: colors.grey3,
          borderWidth: 1,
          width:'95%',
          margin:10,
          borderRadius:8
          
        }}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={400}
          onChangeText={text => setDesc(text)}
          value={desc}
          style={{padding: 10,}}
          placeholder='Product Description'
        />
        </View>
  


<Button title='Submit And Continue'   buttonStyle = {{...parameters.styledButton, }}
     titleStyle = {parameters.buttonTitle}   onPress={uploadData}/>
</SafeAreaView>


  )
}

const styles = StyleSheet.create({
  container:{
   
    backgroundColor:"#f0f0f0",
    paddingBottom:5,
    flex:1,
    
},
input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  borderColor:colors.grey3,
  borderRadius:8
},

styledButton:{
  backgroundColor:"#fff",
  alignContent:"center",
  justifyContent:"center",
  borderWidth:1, 
  borderColor:"#555",
  height:70,
  paddingHorizontal:20,
  width:'95%',
  margin:10,
  borderStyle:'dotted',
  borderRadius:8
},

buttonTitle:{
  color:"#555",
  fontSize:14,  
  marginTop:-3 
},
picker:{
  borderWidth:2, 
  borderColor:"#555",
}
})