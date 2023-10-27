
import { StyleSheet, Text, View ,Animated} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import BestDeals from '../screens/BestDeals';
import Messenger from '../screens/Messenger';
import Sell from '../screens/Sell';

import Profile from '../screens/Profile';
import Status from '../components/Status';
import EditProfile from '../screens/EditProfile';
import DetailsPage from '../screens/DetailsPage';
import RecDetailsPage from '../screens/RecDetailsPage'
import Cart from '../screens/Cart'
import Order from '../screens/OrderConfirmation';
import MyOrders from '../screens/MyOrders';
import Payment from '../screens/Payment';
import ProductDetails3 from '../components/ProductDetails3'
import Categories from '../screens/Categories';
import Account from '../screens/Account';
import RatingModal from '../components/RatingModal';
import Walkthrough from '../screens/Walkthrough/Walkthrough';
import {collection,getDoc,getDocs,addDoc,updateDoc,doc ,set,setDoc} from "firebase/firestore"; 
import React,{useState,useRef,useEffect,useContext} from 'react';
import { db } from '../../firebase';
import {useIsFocused} from '@react-navigation/native';
import AddCat from '../screens/AddCat';


const Tabs = () => {

  
//get products
 
const [posts, setPosts] = useState(null);
const [loading, setLoading] = useState(true);


const fetchPosts = async () => {
  try {
    const list = [];

    const querySnapshot =   await getDocs(collection(db, "post"));

        querySnapshot.forEach((doc) => {
          const {
            userId,
            Img,
            Img2,
            postTime,
            likes,
            comments,
            price,
            desc,
            title,
            quantity,
          } = doc.data();
          list.push({
            id: doc.id,
            userId,
            userName: 'Test Name',
            userImg:
              'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
            postTime: postTime,
            Img,
            Img2,
            liked: false,
            likes,
            comments,
            price,
            desc,
            title,
            quantity,
         
        });
      });

    setPosts(list);
      if(loading){
        setLoading(false)
      }
 
  } catch (e) {
    console.log(e);
  }
};

useEffect(() => {
  fetchPosts();
}, [useIsFocused]);




  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return(
 
      
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 50,
          opacity: loading ? 0 : 1,
          backgroundColor:'#fff'
       }, 
        tabBarIcon: ({focused, size, colour}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
            size = focused ? size + 8 : size + 2;
          } else if (route.name === 'BestDeals') {
            iconName = focused ? 'search' : 'ios-search-outline';
          } else if (route.name === 'Cart') {
            iconName = focused
              ? 'cart'
              : 'cart-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'ios-apps-sharp' : 'ios-apps-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
          }

          return <Ionic name={iconName} size={size} color={colour} />;
        },
      })}>
  
      <Tab.Screen name="Home"  component={Home}/>
      <Tab.Screen name="Categories"  component={Categories}/>
      <Tab.Screen name="BestDeals"  component={AddCat}/>
      <Tab.Screen name="Cart"  component={Cart}/>
      <Tab.Screen name="Account"  component={Account}/>
   
 
      </Tab.Navigator>
     
    )
  }


  return (
   
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>



      <Stack.Screen name="Bottom" component={BottomTabScreen} tabBarStyle={{}}/>

      <Stack.Screen name="DetailsPage"  component={DetailsPage} options={{}}/>
        <Stack.Screen name="RecDetailsPage"  component={RecDetailsPage} options={{}}/>
        <Stack.Screen name="Cart"  component={Cart} options={{}}/>
        <Stack.Screen name="Order Confirmation"  component={Order} options={{headerShown:true}}/>
        <Stack.Screen name="My Orders"  component={MyOrders} options={{headerShown:true}}/>
        <Stack.Screen name="payment"  component={Payment} />
        <Stack.Screen name="ProductDetails3"  component={ProductDetails3} />
        <Stack.Screen name="Sell"  component={Sell} />
       
        <Stack.Screen name="Profile"  component={Profile} />
        <Stack.Screen name="RatingModal"  component={RatingModal} />
        <Stack.Screen name="Walkthrough"  component={Walkthrough} />
       
    </Stack.Navigator>
 

  );
}
export default Tabs