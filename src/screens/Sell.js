import { StyleSheet, Text, View,Alert, StatusBar, ScrollView,SafeAreaView,TextInput,Image} from 'react-native'
import {parameters, colors} from '../global/styles';
import { Button,SocialIcon} from '@rneui/themed';
import React , { useState, useEffect ,useContext} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-picker/picker';
import { storage } from '../../firebase';
import { db } from '../../firebase';
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { collection, addDoc ,getDocs} from "firebase/firestore"; 
import { getAuth, onAuthStateChanged ,User} from "firebase/auth";
import { Ionicons } from '@expo/vector-icons';
import Loader from '../components/Loader';

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
  const [image, setImage] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
//get user
const auth = getAuth();
const [user, setUser] = useState(User);

useEffect(() => {
  const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
    if (user) {
     
      setUser(user);
    } else {
      // User is signed out
      setUser(undefined);
    }
  });

  return unsubscribeFromAuthStateChanged;

}, []);

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

//get cats

const [cats, setCats] = useState(null);



const fetchCats = async () => {
try {
const list = [];

const querySnapshot =   await getDocs(collection(db, "Categories"));

    querySnapshot.forEach((doc) => {
      const {
        Img,
        title,
      } = doc.data();
      list.push({
        id: doc.id,
        Img,
        title,
     
    });
  });

setCats(list);
if(loading){
  setLoading(false)
}


} catch (e) {
console.log(e);
}
};
useEffect(() => {
  fetchCats();
}, []);


  const pickImage2 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
     
    });

  

    if (!result.canceled) {
      
      setImage2(result.assets[0].uri);
    }
  };


  const pickImage3 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
     
    });

  

    if (!result.canceled) {
      
      setImage3(result.assets[0].uri);
    }
  };

  const pickImage4 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
     
    });

  

    if (!result.canceled) {
      
      setImage4(result.assets[0].uri);
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

    const storageRef = ref(storage, 'images/' + filename);
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

  const uploadImage2 = async () => {

    //upload second image
    if( image2 == null ) {
      return null;
    }
    const uploadUri2 = image2;
    let filename2 = uploadUri2.substring(uploadUri2.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension2 = filename2.split('.').pop(); 
    const name2 = filename2.split('.').slice(0, -1).join('.');
    filename2 = name2 + Date.now() + '.' + extension2;

    
    setTransferred(0);

    
    const storageRef2 = ref(storage, 'images/' + filename2);
const img2 = await fetch(uploadUri2);
const bytes =await img2.blob();
    const task2= await uploadBytes(storageRef2,bytes);
 
  
    
    try {
      await task2;

     
      const url = await  getDownloadURL(storageRef2);

      return url;

    } catch (e) {
      console.log(e);
      return null;
    }

  };

  
  const uploadImage3 = async () => {

    //upload second image
    if( image3 == null ) {
      return null;
    }
    const uploadUri3 = image3;
    let filename3 = uploadUri3.substring(uploadUri3.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension3 = filename3.split('.').pop(); 
    const name3 = filename3.split('.').slice(0, -1).join('.');
    filename3 = name3 + Date.now() + '.' + extension3;

   
    setTransferred(0);

    
    const storageRef3 = ref(storage, 'images/' + filename3);
const img3 = await fetch(uploadUri3);
const bytes =await img3.blob();
    const task3= await uploadBytes(storageRef3,bytes);
 
  
    
    try {
      await task3;

     
      const url = await  getDownloadURL(storageRef3);

      return url;

    } catch (e) {
      console.log(e);
      return null;
    }

  };

  const uploadImage4 = async () => {

    //upload second image
    if( image4 == null ) {
      return null;
    }
    const uploadUri4 = image4;
    let filename4 = uploadUri4.substring(uploadUri4.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension4 = filename4.split('.').pop(); 
    const name4 = filename4.split('.').slice(0, -1).join('.');
    filename4 = name4 + Date.now() + '.' + extension4;


    setTransferred(0);

    
    const storageRef4 = ref(storage, 'images/' + filename4);
const img4 = await fetch(uploadUri4);
const bytes =await img4.blob();
    const task4= await uploadBytes(storageRef4,bytes);
 
  
    
    try {
      await task4;

     
      const url = await  getDownloadURL(storageRef4);

      return url;

    } catch (e) {
      console.log(e);
      return null;
    }

  };

  const submitPost = async () => {
    const imageUrl = await uploadImage();
    const imageUrl2 = await uploadImage2();
    const imageUrl3 = await uploadImage3();
    const imageUrl4 = await uploadImage4();
 
    let tempDart = [];
    tempDart.push(imageUrl);
    tempDart.push(imageUrl2);
    tempDart.push(imageUrl3);
    tempDart.push(imageUrl4);

    try {
      const docRef =   await addDoc(collection(db, "post"), {
        userId:user.uid,
         title: title,
         Category:Category,
         price:price,
         Oprice:Oprice,
         desc:desc,
         postTime: Date.now(),
         WhishList: null,
         Reviews: null,
         quantity:1,
         img:imageUrl,
         images:tempDart,
         DeliveryOn:DeliveryOn
       });

    console.log('Post Added!');
    Alert.alert(
      'Post published!',
      'Your post has been published Successfully!',
    )
    setTitle(),
    setCategory(),
    setPrice(),
    setOprice(),
    setDesc(),
    setImage(),
    setImage2(),
    setImage3(),
    setImage4(),
    setUploading(false);

    }catch(error) {
      console.log('Something went wrong with added post to firestore.', error);
    }
  
  }
  return (
    <SafeAreaView>

{uploading || loading ?
 <View  style={{height:'100%',alignItems:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#fff',zIndex:99,}}>
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

  {cats.map((item,index)=>{
    return(
      <Picker.Item label={item.title} value={item.id}  key={item.id}/>
  )})}
  
</Picker>

     
   

      <View>
      <Button title="Upload pictures of product" onPress={pickImage} buttonStyle={styles.styledButton}    titleStyle = {styles.buttonTitle}/>
      <Ionicons name="images-outline" size={26} color="black" style={{position:'absolute',top:30,left:30}}/>
     
  </View>
  {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, alignSelf:'center' }} />}

  <View>
      <Button title="Upload pictures of product" onPress={pickImage2} buttonStyle={styles.styledButton}    titleStyle = {styles.buttonTitle}/>
      <Ionicons name="images-outline" size={26} color="black" style={{position:'absolute',top:30,left:30}}/>
     
  </View>
  {image2 && <Image source={{ uri: image2 }} style={{ width: 200, height: 200, alignSelf:'center' }} />}
     
  <View>
      <Button title="Upload pictures of product" onPress={pickImage3} buttonStyle={styles.styledButton}    titleStyle = {styles.buttonTitle}/>
      <Ionicons name="images-outline" size={26} color="black" style={{position:'absolute',top:30,left:30}}/>
     
  </View>
  {image3 && <Image source={{ uri: image3 }} style={{ width: 200, height: 200 , alignSelf:'center'}} />}
  <View>
      <Button title="Upload pictures of product" onPress={pickImage4} buttonStyle={styles.styledButton}    titleStyle = {styles.buttonTitle}/>
      <Ionicons name="images-outline" size={26} color="black" style={{position:'absolute',top:30,left:30}}/>
     
  </View>
  {image4 && <Image source={{ uri: image4 }} style={{ width: 200, height: 200 , alignSelf:'center'}} />}
     
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
{/*
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
 */}

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
