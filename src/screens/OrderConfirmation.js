import React, {useRef, useState,useEffect} from 'react';
import {collection,getDoc,getDocs,addDoc,updateDoc,doc ,set,setDoc} from "firebase/firestore"; 
import { Image, StatusBar, StyleSheet, Text, View ,TouchableOpacity,FlatList,Pressable} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../global/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { getAuth, onAuthStateChanged ,User} from "firebase/auth";
import { db } from '../../firebase';
import {useIsFocused} from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';


export default function Order({navigation,route}) {
    const hr =   <View style={{borderTopWidth:1,borderColor:"#f0f0f0",width:'100%',height:1}}></View>;
     const auth = getAuth();
    const user= auth.currentUser;
    const [cartCount, setCartCount] = useState(0);
    const isFocused = useIsFocused();
    const [cartList, setCartList] = useState([]);
    const [count, setCount] = useState(route.params.item.quantity);
  

    useEffect(() => {
      getCartItems();
      fetchCartItems();
      getTotal();
    
    }, [isFocused]);

    addItemLocal = ()  =>{
      let num = count+1
      setCount(num);
    }
removeItemLocal = ()  =>{
      let num = count-1
      setCount(num);
    }
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

    const getTotal = () => {
      let total = 0;
      cartList.map(item => {
        total = total + item.quantity * item.price;
      });
      return total;
    };


    
  return ( 
  
    <View style={styles.container}>
<View style={{backgroundColor:'#fff',flexDirection:'row',  alignItems: "center",
      justifyContent: "space-around",padding:15,marginTop:15 }}>
   
 <View style={{alignItems:'flex-start',marginRight:10,flexDirection:'row'}}>
    <Ionicons name="location-outline" size={20} color="black"  style={{marginRight:10,}}/>
<View>
    <Text style={styles.title}>Nur Muhammad Hassan</Text>
    <Text style={styles.body}>#2348063466463</Text>
    <Text style={styles.body}>Maiduguri Borno State</Text>
</View>
 </View>
    
    <Ionicons name="md-chevron-forward" size={20} color="black" style={{}}/> 
</View>

{route.params ? (
<>
<View style={{
      marginBottom: 16,
      backgroundColor:"#fff",padding:10,marginTop:8}}>
        <View style={{      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",marginBottom:10}}>

        <View  style={{      flexDirection: "row",}}>
        <FontAwesome5 name="store" size={14} color="black" />
        <Text style={{fontSize: 15,marginLeft:4}}>MUHAXX CLASSIC STORE</Text>
        </View>
      
            
      <MaterialIcons name="notes" size={24} color="black" style={{flexDirection: "row"}}/>


          </View>

        <View style={{flexDirection: "row",}}>
          <Image source={{uri:route.params.item.Img}} style={{width: 111,
      height: 111,
      marginRight: 16,
      marginLeft:5,borderRadius:5}} />
          <View>
            <Text style={styles.headline}>{route.params.item.title}</Text>
            <Text style={styles.body}>Beautiful Zürich Switzerland</Text>

    <View style={{flexDirection:'row',width:'100%',marginTop:12}}>
            <Text style={{justifyContent:'flex-start',fontWeight:'bold',fontSize:15,width:"50%"}}>{route.params.item.price * route.params.item.quantity}</Text>

           <View style={{justifyContent:'flex-end',flexDirection:'row',}}>
             <TouchableOpacity   onPress={() => {
                    if (route.params.item.quantity > 1) {
                      removeItem(route.params.item);
                  removeItemLocal();
                    } else {
                      
                    }
                  }}>

<AntDesign name="minuscircleo" size={24} color={colors.grey3} style={{backgroundColor:"#f0f0f0",borderRadius:40}}
/>
                    </TouchableOpacity>
                       
                         <Text style={{marginHorizontal:8}}> {count}</Text>
                         
                <TouchableOpacity onPress={() => {
                    addItem(route.params.item);
                    addItemLocal();
                
                  }}>
                <AntDesign name="pluscircleo" size={24} color={colors.grey3}  style={{backgroundColor:"#f0f0f0",borderRadius:40}}/>
                </TouchableOpacity>
                      
                        </View> 
            </View>
        
          </View>
          </View>
            <View  style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:10,alignItems:'flex-start',width:'100%'}}>
          <View style={{width:'85%'}}>
            <Text style={{fontWeight:'bold',marginVertical:5}}>Shipping:Free Shipping</Text>
            <Text style={{}}>Estimated Delivery on July 05</Text> 
           </View>
          
            <Ionicons name="md-chevron-forward" size={20} color="black" style={{marginTop:8}}/>     
         

          </View>
        </View>
</>

):(
  <>
  
<FlatList
        data={cartList}
        contentContainerStyle={{paddingBottom:65}}
        renderItem={({ item, index }) => (  
     
   <View style={{
      marginBottom: 16,
      backgroundColor:"#fff",padding:10,marginTop:8}}>
        <View style={{      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",marginBottom:10}}>

        <View  style={{      flexDirection: "row",}}>
        <FontAwesome5 name="store" size={14} color="black" />
        <Text style={{fontSize: 15,marginLeft:4}}>MUHAXX CLASSIC STORE</Text>
        </View>
      
            
      <MaterialIcons name="notes" size={24} color="black" style={{flexDirection: "row"}}/>


          </View>

        <View style={{flexDirection: "row",}}>
          <Image source={{uri:item.Img}} style={{width: 111,
      height: 111,
      marginRight: 16,
      marginLeft:5,borderRadius:5}} />
          <View>
            <Text style={styles.headline}>{item.title}</Text>
            <Text style={styles.body}>Beautiful Zürich Switzerland</Text>

    <View style={{flexDirection:'row',width:'100%',marginTop:12}}>
            <Text style={{justifyContent:'flex-start',fontWeight:'bold',fontSize:15,width:"50%"}}>{item.price * item.quantity}</Text>

           <View style={{justifyContent:'flex-end',flexDirection:'row',}}>
             <TouchableOpacity   onPress={() => {
                    if (item.quantity > 1) {
                      removeItem(item);
                    } else {
                      
                    }
                  }}>

<AntDesign name="minuscircleo" size={24} color={colors.grey3} style={{backgroundColor:"#f0f0f0",borderRadius:40}}
/>
                    </TouchableOpacity>
                       
                         <Text style={{marginHorizontal:8}}> {item.quantity}</Text>
                <TouchableOpacity onPress={() => {
                    addItem(item);
                  }}>
                <AntDesign name="pluscircleo" size={24} color={colors.grey3}  style={{backgroundColor:"#f0f0f0",borderRadius:40}}/>
                </TouchableOpacity>
                      
                        </View> 
            </View>
        
          </View>
          </View>
            <View  style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:10,alignItems:'flex-start',width:'100%'}}>
          <View style={{width:'85%'}}>
            <Text style={{fontWeight:'bold',marginVertical:5}}>Shipping:Free Shipping</Text>
            <Text style={{}}>Estimated Delivery on July 05</Text> 
           </View>
          
            <Ionicons name="md-chevron-forward" size={20} color="black" style={{marginTop:8}}/>     
         

          </View>
        </View>
    )} />
  </>
)

}


   <View style={{backgroundColor:'#fff',}}>
    <Text style={{fontSize:15,fontWeight:'bold',padding:15}}>Summary</Text>
    {hr}
<View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
    <Text>Total Item Cost</Text>
    <Text>   NGN {getTotal()}</Text>
</View>
{hr}
<View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
    <Text>Promo Code</Text>
    <Text>Enter code here</Text>
</View>
{hr}
<View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
    <Text>Total shipping</Text>
    <Text>Free</Text>
</View>
    </View>
<View>
<Text style={{padding:15}}>
    Upon clicking 'Place order',I confirm I have and acknowledged all terms and conditions
</Text>
</View>


<View style={{flexDirection:'row',justifyContent:'flex-end',
   backgroundColor:'#fff',height:65, position: 'absolute',bottom:0,elevation:15,width:"100%", zIndex: 999,alignItems:'center'}}>


<TouchableOpacity>
<Button
  ViewComponent={LinearGradient} 
  linearGradientProps={{

    colors: ['#FF9800', '#F44336'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
  buttonStyle={{borderRadius:20,width:220,alignItems:'center',marginHorizontal:10}}
  onPress={() => {
   navigation.navigate("payment");
  }}
>
 Pay Now
</Button>
</TouchableOpacity>
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
    headline: {
    fontSize: 18,
      marginBottom: 8,
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
  