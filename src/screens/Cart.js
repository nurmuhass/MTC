import { View, Text, TouchableOpacity ,SafeAreaView,FlatList,Pressable} from 'react-native'
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
import { LinearGradient } from 'expo-linear-gradient';

export default function Cart({navigation}) {
    const auth = getAuth();
    const user= auth.currentUser;
    const [cartCount, setCartCount] = useState(0);
    const isFocused = useIsFocused();
    const [cartList, setCartList] = useState([]);
    useEffect(() => {
        getCartItems();
        fetchCartItems();
        getTotal();
      }, [isFocused]);

      const getCartItems = async () => {
  
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        const getItemInCart = docSnap.data().cart;
        setCartCount(getItemInCart.length);
      };
      const fetchCartItems = async () => {
        const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                let tempDart = [];
                tempDart = docSnap.data().cart;
                setCartList(tempDart);
      };

const addItem = async item => {
    
     const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          let tempDart = [];
          tempDart = docSnap.data().cart;
          tempDart.map(itm => {
              if (itm.id == item.id) {
                itm.quantity = itm.quantity + 1;
            }
       });
      const updateUsers=  doc(db, "users", user.uid);
              await updateDoc(updateUsers, {
                cart: tempDart,
              });
        fetchCartItems();
      };
const removeItem = async item => {
        
     const docRef = doc(db, "users", user.uid);
     const docSnap = await getDoc(docRef);
     let tempDart = [];
     tempDart = docSnap.data().cart;
     tempDart.map(itm => {
         if (itm.id == item.id) {
           itm.quantity = itm.quantity - 1;
       }
  });
 const updateUsers=  doc(db, "users", user.uid);
         await updateDoc(updateUsers, {
           cart: tempDart,
         });
   fetchCartItems();
      };

 const deleteItem = async index => {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        let tempDart = [];
        tempDart = docSnap.data().cart;
        tempDart.splice(index, 1);
     const updateUsers=  doc(db, "users", user.uid);
         await updateDoc(updateUsers, {
           cart: tempDart,
         });
     fetchCartItems();
      };

const getTotal = () => {
        let total = 0;
        cartList.map(item => {
          total = total + item.quantity * item.price;
        });
        return total;
      };
      
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{backgroundColor:'#f0f0f0',paddingBottom:"50%"}}>
            <View style={{flexDirection:'row',marginTop:35,backgroundColor:"#fff",padding:15}}>
   <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>

                <Text style={{alignItems:'center',fontSize: 24,
                  fontWeight: 'bold',
                  color: '#333',}}>Cart({cartCount})</Text> 
 
       <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
        <View style={{flexDirection:'row',padding:5,backgroundColor:colors.grey5,borderRadius:20,marginRight:7}}>
        <Ionicons name="location-outline" size={20} color="black" /> 
        <Text style={{}}>To Maiduguri</Text> 
        </View>
           <AntDesign name="message1" size={24} color="black" />
         </View>
 
   </View>

</View>
    <FlatList
        data={cartList}
        contentContainerStyle={{}}
        renderItem={({ item, index }) => (
            <Pressable style={{ marginBottom:0}}  
            onPress={() => {
              navigation.navigate('Order Confirmation',{item:item})
            }}   
    >  
    <View style={{ justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingBottom:0,
        marginBottom:0,
        marginHorizontal:0,
        width:'100%',
        }}>
        
 <View style={{marginTop:10,  marginHorizontal:0,backgroundColor:"#fff",width:'100%',paddingVertical:15,paddingHorizontal:10,marginVertical:0}}>
            <Text style={{fontWeight:'bold',fontSize:15,paddingBottom:5}}>Fcover Online Store</Text>
          <View style={{flexDirection:'row',}}>

             <View style={{backgroundColor:'#fff',padding:5}}>
                <Image source={{uri:item.Img}} style={{width:90,height:90,borderRadius:7}}/>
            </View>
               
                <View style={{marginLeft:5}}>
                    <Text style={{marginVertical:12,marginLeft:2,fontWeight:'bold',fontSize:15}}>{item.title}</Text>
                    <View  style={{flexDirection:'row',width:'100%'}}>
                        <Text style={{justifyContent:'flex-start',fontWeight:'bold',fontSize:15,width:"60%"}}>NGN {item.price} </Text>

           <View style={{justifyContent:'flex-end',flexDirection:'row',}}>
             <TouchableOpacity   onPress={() => {
                    if (item.quantity > 1) {
                      removeItem(item);
                    } else {
                      deleteItem(index);
                    }
                  }}>

<AntDesign name="minuscircleo" size={24} color={colors.grey3} style={{backgroundColor:"#f0f0f0",borderRadius:40}}
/>
                    </TouchableOpacity>
                       
                         <Text style={{marginHorizontal:8}}> {item.quantity}</Text>
                <TouchableOpacity  onPress={() => {
                    addItem(item);
                  }}>
                <AntDesign name="pluscircleo" size={24} color={colors.grey3}  style={{backgroundColor:"#f0f0f0",borderRadius:40}}/>
                </TouchableOpacity>
                      
                        </View> 

                    </View>

                    <View style={{flexDirection:'row',marginTop:15}}>
                    <Text style={{fontSize:15,width:'70%'}}>+ Shipping: NGN500</Text>
                    <TouchableOpacity  onPress={() => {deleteItem(index);}}>
                    <Ionicons name="trash-outline" size={20} color="black"/>
                    </TouchableOpacity>
                  
                    </View>
                  
                    
                </View>
                
               
                </View>
               
              </View>

     </View>
     </Pressable>
         )} />

   </View>

  
<View style={{flexDirection:'row',justifyContent:'flex-end',
   backgroundColor:'#fff',height:65, position: 'absolute',bottom:0,elevation:15,width:"100%", zIndex: 999,alignItems:'center'}}>

<Text style={{fontSize:16,fontWeight:'bold',marginRight:5}}>
    NGN {getTotal()}
</Text>
<TouchableOpacity >
<Button
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{

    colors: ['#FF9800', '#F44336'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
  buttonStyle={{borderRadius:20,width:160,alignItems:'center',marginHorizontal:10}}
  onPress={() => {
  navigation.navigate("Order Confirmation")
  }}
>
  Checkout
</Button>
</TouchableOpacity>
</View>

</SafeAreaView>
  )
}