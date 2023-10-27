import { StyleSheet, Text, View,Alert, StatusBar, ScrollView,SafeAreaView,TextInput,Image} from 'react-native'
import {parameters, colors} from '../global/styles';
import { Button,SocialIcon} from '@rneui/themed';
import React , { useState, useEffect ,useContext} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-picker/picker';
import { storage } from '../../firebase';
import { db } from '../../firebase';
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"; 
import { getAuth, onAuthStateChanged ,User} from "firebase/auth";
import { Ionicons } from '@expo/vector-icons';
import Loader from '../components/Loader';

export default function AddCat() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
 
    });

if (!result.canceled) {
      setImage(result.assets[0].uri);
      
    }
  };



  const uploadImage = async () => {
    if( image == null ) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop(); 
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

  setUploading(true);

    const storageRef = ref(storage, 'CategoriesImg/' + filename);
const img = await fetch(uploadUri);
const bytes =await img.blob();
    const task= await uploadBytes(storageRef,bytes);
   
  
    try {
      await task;

      const url = await  getDownloadURL(storageRef);

    
      return url;

    } catch (e) {
      console.log(e);
      return null;
    }

  };

  const submitPost = async () => {
    const imageUrl = await uploadImage();
 
    try {
      const docRef =   await addDoc(collection(db, "Categories"), {
         title: title,
         postTime: Date.now(),
         Img:imageUrl,
        
       });
    console.log('Post Added!');
    Alert.alert(
      'Post published!',
      'NEW CATEGORY ADDED!',
    )
    setTitle(),
    setImage(),
    setUploading(false);

    }catch(error) {
      console.log('Something went wrong with added post to firestore.', error);
    }
  
  }
  return (
    <SafeAreaView>

{uploading ?
 <View  style={{height:'100%',alignItems:'center',alignItems:'center',zIndex:99,marginTop:'70%'}}>
 <Loader size={100} />
</View>

 :

      <ScrollView>
      <View style={styles.container}>
    <StatusBar
                    translucent
                    barStyle="light-content"
                   
                 />
   <View style={{paddingTop:parameters.statusBarHeight,borderWidth:1,paddingHorizontal:10,paddingBottom:15,borderColor:colors.grey4,margin:10}}>      
    <View><Text style={{fontSize:30, 
    textAlign: 'center',
        color:'#555',
        marginBottom: 10,
        letterSpacing: 5,
        fontWeight: 600}}>ADD NEW CATEGORY</Text>
        </View>
  
      
      <TextInput
        style={styles.input}
        value={title}
        placeholder='Title'
       onChangeText={(text) => setTitle(text)}
      />

      <View>
      <Button title="Upload pictures of product" onPress={pickImage} buttonStyle={styles.styledButton}    titleStyle = {styles.buttonTitle}/>
      <Ionicons name="images-outline" size={26} color="black" style={{position:'absolute',top:30,left:30}}/>
     
  </View>
  {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, alignSelf:'center' }} />}

  
    
 
<Button title='Submit'   buttonStyle = {{...parameters.styledButton, }}
     titleStyle = {parameters.buttonTitle}   onPress={submitPost}/>
</View>

   </View>
    </ScrollView>
}
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
