import { StyleSheet, Text, View,Alert, StatusBar, ScrollView,SafeAreaView,TextInput,Image,FlatList} from 'react-native'
import {parameters, colors} from '../global/styles';
import { Button,SocialIcon} from '@rneui/themed';
import React , { useState, useEffect ,useContext} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-picker/picker';
import { storage } from '../../firebase';
import { db } from '../../firebase';
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { collection, addDoc, updateDoc, arrayUnion ,doc} from "firebase/firestore"; 
import { getAuth, onAuthStateChanged ,User} from "firebase/auth";
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';

export default function Sell() {
  const [Category, setCategory] = useState();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [Oprice, setOprice] = useState('');
  const [DiscountPercent, setDiscountPercent] = useState('');
  const [Shipping, setShipping] = useState('');
  const [ProFrom, setProFrom] = useState('');
  const [DeliveryOn, setDeliveyOn] = useState('');
  const [desc, setDesc] = useState('');
  const [image2, setImage2] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);
  const [images, setImages] = useState([]);

const pickImages = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    aspect: [4, 3],
    quality: 1,
    allowsMultipleSelection:true,
    selectionLimit:0,
  });

  if (!result.canceled) {
    setImages([ ...result.assets]);  
    console.log(images);
  }
};

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
   

     
        
     const promises = [];

     for (let i = 0; i < 2; i++) {
       const imageUri = images[i];
         const response = await fetch(imageUri);
         const bytes = await response.blob();
         const imageName = `image-${Date.now()}-${i}`;
         const imageRef = ref(storage, 'image/' + imageName); 
       const task= await uploadBytes(imageRef,bytes);
   
       promises.push(task);
     }
      
         

} catch (e) {
    console.error(e);
  } finally {
    Alert.alert(
      'Post published!',
      'Your post has been published Successfully!',
    )
  }
};

  const submitPost = async () => {
 
   const docRef = await addDoc(collection(db, "post"), {
   userId:user.uid,
    title: title,
    selectedLanguage:selectedLanguage,
    price:price,
    desc:desc,
    postTime: Date.now(),
    likes: null,
  });
  
 
 console.log('Post Added!');
    Alert.alert(
      'Post published!',
      'Your post has been published Successfully!',
    )
 
  
  }
  /*      const uploadUri = images;
      let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    
      // Add timestamp to File Name
      const extension = filename.split('.').pop(); 
      const name = filename.split('.').slice(0, -1).join('.');
      filename = name + Date.now() + '.' + extension;
    
    const storageRef = ref(storage, 'photos/' + filename);
    const img =  fetch(uploadUri);
    const bytes = img.blob();
       uploadBytes(storageRef,bytes).then(async()=>{

        const url = await  getDownloadURL(storageRef);
        await updateDoc(doc,"post",docRef.id),{
          images:arrayUnion(url)
        }

      });*/
  return (
    <SafeAreaView>
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
        fontWeight: 600}}>ADVERTISE YOUR PRODUCTS</Text>
        </View>
  
      
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

  <View>
      <Button title="Upload pictures of product" onPress={pickImages} buttonStyle={styles.styledButton}    titleStyle = {styles.buttonTitle}/>
      <Ionicons name="images-outline" size={26} color="black" style={{position:'absolute',top:30,left:30}}/>
     
  </View>
   
    
      <View>   
          <TextInput
            style={styles.input}
            onChangeText={text => setPrice(text)}
            value={price}
            placeholder='Price After Discount'
          />
      </View>

      
      <View>   
          <TextInput
            style={styles.input}
            onChangeText={text => setOprice(text)}
            value={Oprice}
            placeholder='Real Price before Discount'
          />
      </View>

      <View>   
          <TextInput
            style={styles.input}
            onChangeText={text => setDiscountPercent(text)}
            value={DiscountPercent}
            placeholder='Percentage of Discount you offered'
          />
      </View>

      <View>   
          <TextInput
            style={styles.input}
            onChangeText={text => setShipping(text)}
            value={Shipping}
            placeholder='Shipping Fee You can elaborate Based on State'
          />
      </View>

      
      <View>   
          <TextInput
            style={styles.input}
            onChangeText={text => setProFrom(text)}
            value={ProFrom}
            placeholder='Product to be shipped from'
          />
      </View>
      
      <View>   
          <TextInput
            style={styles.input}
            onChangeText={text => setDeliveyOn(text)}
            value={DeliveryOn}
            placeholder='Estimated Delivery '
          />
      </View>

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
  


<Button title='Submit'   buttonStyle = {{...parameters.styledButton, }}
     titleStyle = {parameters.buttonTitle}   onPress={uploadData}/>
</View>

   </View>
   <FlatList
      data={images}
      renderItem={({item}) => (
        <View style={{flexDirection:'row'}}>
        <Image
        source={{uri: item.uri}}
        style={{width:80,height:80}}/>
        </View>
      )}
   keyExtractor={(item) => item.uri}
    />
    </ScrollView>

    
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