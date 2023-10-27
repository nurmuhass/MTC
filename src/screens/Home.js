import React,{useState,useRef,useEffect,useContext} from 'react';

import {View, Text, StyleSheet, Dimensions,
    Image,ScrollView,FlatList,StatusBar,SafeAreaView,TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
    import {collection,getDoc,getDocs,addDoc,updateDoc,doc ,set,setDoc, onSnapshot} from "firebase/firestore"; 
import Slider from '../components/Slider';
import Searchbar from '../components/Searchbar';
import { parameters ,colors} from '../global/styles';
import Categories from '../components/Categories';
import BestDeals from '../components/BestDeals';
import HomeProducts from '../components/HomeProducts';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Icon, Badge  } from '@rneui/themed';
import { getAuth, onAuthStateChanged ,User} from "firebase/auth";
import { db } from '../../firebase';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../components/Loader';
const SCREEN_WIDTH = Dimensions.get('window').width

export default function Home({navigation}) {
    const AVATAR_URL =
  "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";
  const [cartCount, setCartCount] = useState(0);
  const auth = getAuth();
  const user= auth.currentUser;

  const isFocused = useIsFocused();

    useEffect(() => {
        getCartItems();
      }, [isFocused]);

  const getCartItems = async () => {
  
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const getItemInCart = docSnap.data().cart;
    setCartCount(getItemInCart.length);
  };

//get products
 
    const [posts, setPosts] = useState(null);
      const [loading, setLoading] = useState(true);
      const [deleted, setDeleted] = useState(false);
    
     
    
  const fetchPosts = async () => {
       
          const querySnapshot =  onSnapshot(collection(db, "post"), (snapShot) =>{
            const list = [];
            snapShot.docs.forEach((doc) => {
              list.push({id:doc.id, ...doc.data()});
            });
            setPosts(list);
            if(loading){
              setLoading(false)
            }
          },(error) => {

          });
    return()=>{
      querySnapshot();
    };
     };
    
      useEffect(() => {
        fetchPosts();
      }, [useIsFocused]);
    

  return (
    
<SafeAreaView style={styles.container}>
<StatusBar
                translucent
                barStyle="light-content"
                
             />
              {loading ?
 <View  style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff',zIndex:99}}>
 <Loader size={100} />
</View>

 :
 <View>
<View style = {{alignItems:"center",flexDirection:"row"}}>
<Searchbar searchWidth={'85%'} searchText={"What are you looking for ?"}  />



<Ionicons name="cart" size={24} color="black" onPress={() => {
              navigation.navigate('Sell')
            }}  />

</View>

<FlatList
	data={[{}]}
    style={{marginTop:20}}
	keyExtractor={() => null}
	renderItem={() =><>

 
   
   {/* <View style={{marginTop:10}}>
        <Image source={require("../assets/images/sell_fast.jpg")} style={{height:100,width:"100%"}}/>
    </View>*/}

   {/* Header Section */}
   <View
          style={{
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            marginBottom:10
          }}
        >
          <Image
            source={{
              uri: AVATAR_URL,
            }}
            style={{ width: 52, aspectRatio: 1, borderRadius: 52 }}
            resizeMode="cover"
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 8,
                color: colors.text,
              }}
              numberOfLines={1}
            >
              Hi, James 👋
            </Text>
            <Text
              style={{ color: colors.text, opacity: 0.75 }}
              numberOfLines={1}
            >
              Discover fashion that suit your style
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Ionicons name="notifications" size={24} color={colors.text} />
           
          </TouchableOpacity>
        </View>

<View>
        <Categories/>
    </View>

    <View>
        <BestDeals/>
    </View>
 
    <View>
        <BestDeals/>
    </View>

     <View>
        <BestDeals/>
    </View>

    <View>
        <HomeProducts  posts={posts} />
    </View>


</>}
    />
    </View>
          }
</SafeAreaView>
  )
}


const styles = StyleSheet.create({

    container:{
        flex:1, 
        paddingTop:parameters.statusBarHeight,
        paddingBottom:5,
        backgroundColor:'#fff',
        
    },

})