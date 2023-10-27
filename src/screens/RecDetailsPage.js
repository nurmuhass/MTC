import { View, Text,SafeAreaView ,StyleSheet, 
  Animated,FlatList,Dimensions,Image ,Alert,Pressable,Modal,TouchableWithoutFeedback,TextInput} from 'react-native'
import React, {useRef, useState,useEffect,useCallback} from 'react';
import SlideItem from '../components/SlideItem'; 
import { db } from '../../firebase';
import { getAuth, onAuthStateChanged ,User} from "firebase/auth";
import Searchbar from '../components/Searchbar';
import { Icon, Badge  } from '@rneui/themed';
import { colors } from '../global/styles'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { detailsSlider,reviews } from '../global/Data'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Recommendations from '../components/Recommendations'
import { Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity} from 'react-native';
import {collection,getDoc,getDocs,addDoc,updateDoc,doc ,set,setDoc, query, where,  } from "firebase/firestore"; 
import {useIsFocused} from '@react-navigation/native';
import MasonryList from "reanimated-masonry-list";
 import { useNavigation } from '@react-navigation/native';
 import Loader from '../components/Loader';
 import { FontAwesome5 } from '@expo/vector-icons';
 import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AirbnbRating } from 'react-native-ratings';

const screenWidth = Dimensions.get('window').width
const {width} = Dimensions.get('screen');


export default function DetailsPage({navigation,route}) {
  const hr =   <Text style={{borderTopWidth:1,borderColor:"#f0f0f0",width:'100%',height:2}}></Text>;
    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const {id}= route.params;
    const auth = getAuth();
    const user= auth.currentUser;
  const [productExisting,setProductExisting] =useState(false);
  const [cartCount, setCartCount] = useState(0);
  const isFocused = useIsFocused();
  const {navigate} = useNavigation();
  const [modalVisible, setModalVisible] =useState(false);
  const [modalVisible2, setModalVisible2] =useState(false);
  const [Review, setReview]=useState();
  const [numstars, setNumstars]=useState();
  const [ reviewsData,  setReviewsData]=useState([]);
 const [userDetails, setUserDetails]=useState(null);
  const [posts, setPosts] = useState(null);
  const [slideImages, setSlideImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [reviewslenth,  setReviewsLenth]=useState(0);
  const [averageReviews,setAverageReviews]=useState(0);
  const index2 = 10
    const currentValue = new Animated.Value(1)
   const [liked,setLiked] = useState(false)
    const [counter, setCounter] = useState(-2)
    const[visible,setVisible] = useState(false)

    useEffect(()=>{
      if(liked == true){
          Animated.spring(currentValue,{
              toValue:3,
              friction:2,
              useNativeDriver:true
          }).start(()=>{
              Animated.spring(currentValue,{
                  toValue:1,
                  useNativeDriver:true,
                  friction:2
              }).start(()=>{
                  setVisible(false)
              })
          })
      }
  },[liked])

    const handleOnScroll = event => {
      Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      )(event);
    };
  
const handleSnapPress =useCallback((index) =>{
  sheetRef.current?.snapToIndex(index);
  setIsOpen(true);
}, []);

    const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
      // console.log('viewableItems', viewableItems);
      setIndex(viewableItems[0].index);
    }).current;
  
    const viewabilityConfig = useRef({
      itemVisiblePercentThreshold: 50,
    }).current;
  
    useEffect(() => {
      getCartItems();
      getReviewsLenth();
      getSlideImages();
    }, [isFocused]);

    const getSlideImages = async () => {

      const docRef = doc(db, "post", id.id);
      const docSnap = await getDoc(docRef);
      const slideImages = docSnap.data().images;
      setSlideImages(slideImages);
      setUploading(false);
    };

    const getCartItems = async () => {

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      const getItemInCart = docSnap.data().cart;
      setCartCount(getItemInCart.length);
    };

    const getUserDetails = async () => {

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      const getUserDetails = docSnap.data();
      setUserDetails(getUserDetails);
    };
    const onAddToCart = async (id) => {

   
        const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                let tempDart = [];
                tempDart = docSnap.data().cart;
                if (tempDart.length > 0) {
                  let existing = false;
                 
                  tempDart.map(itm => {
                    if (itm.id == id.id) {
                      existing = true;
                    
                    Alert.alert(
                      'Item Exist!',
                      'Item Already Exist in cart!',
                    )
                    }
                  });
                  if (existing == false) {
                    tempDart.push(id);
                 
                    Alert.alert(
                      'Added!',
                      'Item Added To Cart successfully!',
                    )
                  }
         const updateUsers=  doc(db, "users", user.uid);
              await updateDoc(updateUsers, {
                cart: tempDart,
              });

                } else {
                  tempDart.push(id);
                }
               
                const updateUsers=  doc(db, "users", user.uid);
                await updateDoc(updateUsers, {
                  cart: tempDart,
                });
                getCartItems();
                
   };



const checkWishList = async (id) =>{
  
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);
  let tempDart = [];
  tempDart = docSnap.data().WishList;
  if (tempDart.length > 0) {
   
    tempDart.map(itm => {
      if (itm.id == id.id) {
 
      setLiked(true);
      setCounter(index2)
 
      }
    });
 
 }
          
}

   const onAddToWishList = async (id) => {

   
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    let tempDart = [];
    tempDart = docSnap.data().WishList;
    if (tempDart.length > 0) {
      let existing = false;
     
      tempDart.map(itm => {
        if (itm.id == id.id) {
   
          existing = true;
          setLiked(true)
          setCounter(index2)
   
        }
      });
      if (existing == false) {
      
        setLiked(false)
        setVisible(true)

   
   

      }
      if(existing == true){
        const updateUsers=  doc(db, "users", user.uid);
        await updateDoc(updateUsers, {
          WishList: tempDart.pop(id),
        });
      }else{
        const updateUsers=  doc(db, "users", user.uid);
  await updateDoc(updateUsers, {
    WishList: tempDart.push(id),
  });
      }


    } else {
      tempDart.push(id);
    }
   
    const updateUsers=  doc(db, "users", user.uid);
    await updateDoc(updateUsers, {
      WishList: tempDart,
    });
   
   checkWishList(id);
};



   const uploadReviews = async () => {
 
    const docRef = await addDoc(collection(db, "Reviews"), {
    userId:user.uid,
    userName:userDetails.username,
    userImg:userDetails.userImg,
    Review: Review,
     numstars:numstars,
      ProductId:id.id,
     postTime: Date.now(),
   });
   
  
  console.log(' Review Added!');
     Alert.alert(
       ' Review published!',
       'Your Review has been published Successfully!',
     )
  setNumstars();
  setReview();
  setModalVisible2(false)
   fetchReviews();
   getReviewsLenth()
   }



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
              title
           
          });
        });

      setPosts(list);
      checkWishList(id);
        if(loading){
          setLoading(false)
        }
   
    } catch (e) {
      console.log(e);
    }
  };

  const getReviewsLenth = async () => {

    const Reviewlist = [];
    
    const q =   await  query(collection(db, "Reviews"), where("ProductId", "==", id.id));
    
    const querySnapshot = await getDocs(q);
 
querySnapshot.forEach((doc) => {
          const {
           numstars,
          } = doc.data();
          Reviewlist.push({
           numstars,
        });
      });

    setReviewsLenth(Reviewlist.length);
  };

  
  const getAverageReviews = async () => {
    const Reviewlist = [];
    
    
    const q =   await  query(collection(db, "Reviews"), where("ProductId", "==", id.id));
    
    const querySnapshot = await getDocs(q);
  
querySnapshot.forEach((doc) => {
          
          Reviewlist.push(doc.data().numstars);
      });

      const sum = Reviewlist.reduce((total, rating) =>total + rating,0);
    const averageRating = sum/Reviewlist.length;
    setAverageReviews(averageRating);
  }

  const fetchReviews = async () => {
    try {
      const Reviewlist = [];
      const q =   await  query(collection(db, "Reviews"), where("ProductId", "==", id.id));
    
      const querySnapshot = await getDocs(q);
    
 querySnapshot.forEach((doc) => {
            const {
              userId,
              userImg,
              userName,
              Review,
               numstars,
           
              } = doc.data();
              Reviewlist.push({
              userId,
              userImg,
              userName,
              Review:Review,
               numstars,
             
          });
        });

      setReviewsData(Reviewlist);
      
 if(loading){

          setLoading(false)

        }
   
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    fetchPosts();
    fetchReviews();
    getUserDetails();
    getAverageReviews();
    checkWishList(id);
  }, [isFocused]);

  return (
    <SafeAreaView style={{flex:1}}>
{loading || uploading ?
<View  style={{flex:1,alignItems:'center',justifyContent:'center',height:'100%',marginTop:"50%",zIndex:99}}>
 <Loader size={100} />
</View>

:
<View style={{paddingBottom:'40%'}}>
<View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:35,alignItems:'center'}}>
<View>
<Ionicons name="md-chevron-back" size={24} color={colors.grey2} style={{marginLeft:5}} onPress ={()=>navigation.goBack()}/>
</View>

    <View style={{}}>
    <Searchbar searchWidth={190} iconName="" searchText={"Searching for?"}/>
    </View>
    
    <View>
      <TouchableOpacity  onPress={() => {
          navigation.navigate('Cart');
        }}>
    <Ionicons name="cart-outline" size={24} color={colors.grey2} />

    <Badge
            status="primary"
            value={cartCount}
            containerStyle={{ position: 'absolute', top: -2, left: 18 }}
          />
          </TouchableOpacity>
    </View>

    <View>
    <Ionicons name="ios-ellipsis-horizontal" size={24} color={colors.grey2}  count={cartCount}
       />
    </View>
</View>


<FlatList
	data={[{}]}
    style={{marginTop:20}}
	keyExtractor={() => null}
	renderItem={() =><>

<View>
      <FlatList
        data={slideImages}
        renderItem={({item}) => <SlideItem item={item}  />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
       
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={detailsSlider} scrollX={scrollX} index={index} />
 
      <View style={{position:'absolute',right:15,bottom:25}}>
      <TouchableOpacity  onPress ={() => onAddToWishList(id)}>

    {liked && (index2 == counter) ?
        <AntDesign name="heart" size={30} color="red" />
        :
        <AntDesign name="hearto" size={30} color="black" />
        }
      </TouchableOpacity>
      </View>

      <View style ={{position:'absolute',top:150,left:150 }}>
                    {visible && (index2 == counter) &&
                        <Animated.View style = {{transform:[{scale:currentValue}]}}>
                            <Icon name = "favorite" size = {40} color = "red" type ="material" />
                        </Animated.View>
                    }

                </View>
    </View>

        <View style={styles.content}>
 
         <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
           <Text style={{ fontSize: 23,
       fontWeight: 'bold',
   }}>NGN {id.price}</Text>
           <Text style={{ textDecorationLine:'line-through',marginLeft:10}}>NGN 1,233.53</Text>
           <Text style={{ color:colors.grey4,marginLeft:15}}>-40%</Text>
         </View>
       
         <Text style={{fontSize: 14,color:colors.grey3,}}>Shipping fee NGN272.09</Text>
 
         <Text style={{fontSize: 15,color:'red',}}>Extra 5% off</Text>
 
        {hr}
 
         <Text style={styles.title}>{id.title}</Text>
 
         {hr}
 
         <Text style={{...styles.description,color:'#111'}}>{id.desc}
         </Text>
    <View style={{flexDirection:'row'}}>
       
         <AirbnbRating isDisabled count={5} defaultRating={averageReviews} showRating={false} size={16} style={{paddingLeft:0}}/>         
  <Text style={{ fontSize: 12,
    color: colors.lightGray, 
    marginLeft:5,width:22,height:16,alignSelf:'center'}}>{reviewslenth == 0 ? 0 : averageReviews}</Text>
       <Text style={{ fontSize: 12,
    color: colors.lightGray,
    marginLeft:5,alignSelf:'center'}}>117 orders</Text>
     </View>
        
       
 
         <Text style={{borderTopWidth:1,borderColor:"#f0f0f0",width:'100%',marginTop:15}}></Text>
 
         <View>
      
     
         <FlatList
         data={slideImages}
         horizontal
         showsHorizontalScrollIndicator={false}
         
         renderItem={({item}) => <View> 
         
         <Image
         source={{uri:item}}
         resizeMode="contain"
         style={{width:70,height:70,borderRadius:10,marginHorizontal:5}}
       /> 
        </View>}
       />
 
 {hr}
 
   
    </View>
 </View>
 
       <View style={{ justifyContent:'flex-start',
        paddingHorizontal:10,
        alignItems:'flex-start',
        paddingBottom:50,
        marginBottom:0,
        backgroundColor:colors.cardbackground,
        }}>
   <View style={{flex:1,flexDirection:'row',marginBottom:10}}>
                <Text style={{justifyContent:'flex-start',alignItems:'center',fontSize: 24,
                  fontWeight: 'bold',
                  color: '#333',}}>Delivery</Text> 
 
       <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',marginLeft:'43%'}}>
          <Ionicons name="location-outline" size={20} color="black" />  
            <Text>To Borno</Text> 
         <Ionicons name="md-chevron-forward" size={20} color="black" />  
             </View>
 
   </View>
 
               <Text style={{fontSize: 18,
         fontWeight: 'bold',
         color: '#333',}}>Shipping:NGN 278</Text>
         <Text style={{  fontSize: 14,}}>From Lagos</Text>
         <Text style={{  fontSize: 14,}}>Estimated Delivery June24</Text>
 
         {hr}
 
         <View style={{flexDirection:'row'}}>
             <View style={{fontSize: 24,
         fontWeight: 'bold',
         color: '#333',alignItems:'flex-start'}}><Text style={{fontSize: 18,
           fontWeight: 'bold',
           color: '#333',}}>Service</Text></View>
 
             <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
         <Text> 75-day buyer protection
            </Text> 
             </View>
            </View>
 
       </View>
 
 
       <View style={{ justifyContent:'flex-start',
        paddingHorizontal:10,
        alignItems:'flex-start',
        paddingBottom:50,
        marginBottom:10,
        backgroundColor:colors.cardbackground,
        marginTop:10
        }}>
 
 <View style={{flexDirection:'row',paddingTop:10}}>
 <TouchableOpacity  onPress ={()=>{
        setModalVisible(true)
    }}>
  <Text style={{justifyContent:'flex-start',alignItems:'center',fontSize: 20,
                  fontWeight: 'bold',
                  color: '#333',}}>Reviews({reviewslenth}) </Text> 
  </TouchableOpacity> 
 
       <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',}}>
    
       
         <AirbnbRating isDisabled count={5} defaultRating={averageReviews} showRating={false} size={13} style={{paddingLeft:0}}/>         
  <Text style={{ fontSize: 12,
    color: colors.lightGray,
    marginLeft:5,width:22,height:16,alignSelf:'center'}}>{reviewslenth == 0 ? 0 : averageReviews}</Text>
         <Ionicons name="md-chevron-forward" size={20} color="black" />  
         </View>
 </View>
 
 <View style={{flexDirection:'row',paddingTop:10}}>
 <Image
         source={require("../assets/images/burger.jpg")}
         resizeMode="contain"
         style={{width:50,height:60,borderRadius:10,marginHorizontal:3}}
       /> 
 
 <Image
         source={require("../assets/images/chinesefood.jpg")}
         resizeMode="contain"
         style={{width:55,height:60,borderRadius:10,marginHorizontal:3}}
       /> 
 
 <Image
         source={require("../assets/images/hotdog.jpg")}
         resizeMode="contain"
         style={{width:55,height:60,borderRadius:10,marginHorizontal:3}}
       /> 
 
 <Image
         source={require("../assets/images/kfc.jpg")}
         resizeMode="contain"
         style={{width:55,height:60,borderRadius:10,marginHorizontal:3}}
       /> 
 
 <Image
         source={require("../assets/images/Bigmac.jpg")}
         resizeMode="contain"
         style={{width:55,height:60,borderRadius:10,marginHorizontal:3}}
       /> 
 
 <View style={{backgroundColor:'#f0f0f0',height:60,width:40,alignItems:'center',justifyContent:'center',borderRadius:10}}>
     <Ionicons name="ios-ellipsis-horizontal" size={22} color={colors.grey3} />
     </View>
 </View>



      

 
 {hr}
 {reviewsData.slice(3).map((item, index) => {
  return(
    <View>
<View style={{alignItems:'flex-start'}}>

   <View style={{flexDirection:'row',marginTop:12,marginBottom:0,paddingBottom:0,}}>
     <Text style={{flex:1,justifyContent:'flex-start'}} key={reviewsData.id}>{item.userName}</Text>
     <Text style={{justifyContent:'flex-end',color:colors.grey4}}>25th April 2023</Text>
   </View>
   <AirbnbRating isDisabled count={5} defaultRating={item.numstars} showRating={false} size={13} style={{paddingLeft:0}}/>         
   <Text>{item.Review} </Text>
 </View>
 
 {hr}
 

 </View>
  )
 })
}
<View>
  <TouchableOpacity  onPress ={()=>{
        setModalVisible(true)
    }}>
 <Text style={{color:'blue',marginTop:5}}>View All</Text>
  </TouchableOpacity>
  
 </View>
 {hr}
 
 <Text style={{justifyContent:'flex-start',alignItems:'center',fontSize: 20,
                  fontWeight: 'bold',
                  color: '#333',}}>Questions & Answers(11)</Text> 
 
          <View style={{flexDirection:'row',marginBottom:10}}>
               <View><MaterialCommunityIcons name="comment-question-outline" size={24} color="black" /></View>
                   <View style={{marginLeft:5,}}>
                   <View><Text style={{marginBottom:5}}>Whats its CPU?</Text></View>
                   <View><Text style={{color:colors.grey3}}>No answers yet.Be the first one to answer. </Text></View>
                   </View>
            </View>
 
            <View style={{flexDirection:'row',}}>
               <View><MaterialCommunityIcons name="comment-question-outline" size={24} color="black" /></View>
                   <View style={{marginLeft:5}}>
                   <View><Text style={{marginBottom:5}}>Whats its CPU?</Text></View>
                   <View><Text style={{color:colors.grey3}}>No answers yet.Be the first one to answer. </Text></View>
                   </View>
            </View>
     <View>
       <Text style={{color:'blue',marginTop:5}}>View All</Text>
     </View>
        </View>
 
 
        <View style={{ justifyContent:'flex-start',
        paddingHorizontal:10,
        alignItems:'flex-start',
        paddingBottom:50,
        backgroundColor:'#555',
        height:150,
        marginTop:0
        }}>
 
 <View style={{flexDirection:'row',paddingTop:10}}>
 
 
 <Image
         source={require("../assets/images/Bigmac.jpg")}
         resizeMode="contain"
         style={{width:45,height:40,borderRadius:40,marginHorizontal:8}}
       /> 
 
 <View>
 <Text style={{alignItems:'center',fontSize: 20,
                  fontWeight: 'bold',
                  color: '#fff',}}>Baby DoingBuy Store</Text> 
 
 <View style={{flexDirection:'row',paddingTop:10,justifyContent:'space-between',color:'white'}}>
   <Text style={{color:'white'}}>95.0%</Text>
   <Text style={{color:'white'}}>5290</Text>
 </View>
 
 <View style={{flexDirection:'row',paddingTop:10,justifyContent:'space-between'}}>
   <Text style={{color:'white'}}>Positive Feedback</Text>
   <Text style={{color:'white',marginLeft:'20%'}}>Followers</Text>
 </View>
 
 </View>
 
 </View>
 
 <View style={{width:140,height:25,borderRadius:8,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',marginLeft:'30%',marginTop:10}}>
   <Text>Visit Store</Text>
 </View>
 
                  </View>
 
 <View style={{ justifyContent:'flex-start',
        paddingHorizontal:10,
        alignItems:'flex-start',
        paddingBottom:50,
        backgroundColor:'#fff',
        height:430,
        marginTop:0
        }}>
   <View style={{flexDirection:'row'}}>
        <Text style={{fontWeight:'bold'}}>New Arrivals</Text>
        <Ionicons name="md-chevron-forward" size={20} color="black" />
   </View>
   <Text style={{marginBottom:8}}>For Everyday Inspiration</Text>
 
   <View style={{flexDirection:'row'}}>
 <Image
         source={require("../assets/images/chinesefood.jpg")}
         resizeMode="contain"
         style={{width:80,height:90,borderRadius:5,marginHorizontal:3}}
       /> 
 
 <Image
         source={require("../assets/images/hotdog.jpg")}
         resizeMode="contain"
         style={{width:80,height:90,borderRadius:5,marginHorizontal:3}}
       /> 
 
 <Image
         source={require("../assets/images/kfc.jpg")}
         resizeMode="contain"
         style={{width:80,height:90,borderRadius:5,marginHorizontal:3}}
       /> 
 
 <Image
         source={require("../assets/images/Bigmac.jpg")}
         resizeMode="contain"
         style={{width:80,height:90,borderRadius:5,marginHorizontal:3}}
       /> 
 {hr}
 </View>
 
 <View style={{flexDirection:'row',paddingTop:10}}>
 <Text style={{justifyContent:'flex-start',alignItems:'center',fontSize: 16,
                  fontWeight: 'bold',
                  color: '#333',}}>Seller Recommendations</Text> 
 
       <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',}}>
            <Text style={{color:colors.grey3}}>All Products</Text> 
         <Ionicons name="md-chevron-forward" size={20} color={colors.grey3}/>  
         </View>
 </View>
 
     
 <View style={{flexDirection:'row',marginVertical:10}}>
 <Image
         source={require("../assets/images/chinesefood.jpg")}
         resizeMode="contain"
         style={{width:104,height:110,borderRadius:5,marginHorizontal:3}}
       /> 
 
 <Image
         source={require("../assets/images/hotdog.jpg")}
         resizeMode="contain"
         style={{width:104,height:110,borderRadius:5,marginHorizontal:3}}
       /> 
 
 <Image
         source={require("../assets/images/kfc.jpg")}
         resizeMode="contain"
         style={{width:104,height:110,borderRadius:5,marginHorizontal:3}}
       /> 
 
 
 {hr}
 </View>
     
 <View style={{flexDirection:'row'}}>
 <Image
         source={require("../assets/images/chinesefood.jpg")}
         resizeMode="contain"
         style={{width:104,height:110,borderRadius:5,marginHorizontal:3}}
       /> 
 
 <Image
         source={require("../assets/images/hotdog.jpg")}
         resizeMode="contain"
         style={{width:104,height:110,borderRadius:5,marginHorizontal:3}}
       /> 
 
 <Image
         source={require("../assets/images/kfc.jpg")}
         resizeMode="contain"
         style={{width:104,height:110,borderRadius:5,marginHorizontal:3}}
       /> 
 
 
 {hr}
 </View>
 
 </View>

{loading ? 

<View  style={{flex:1,alignItems:'center',justifyContent:'center',height:'100%',marginTop:"50%",zIndex:99}}>
 <Loader size={100} />
</View>
 :
   
 <View style={{backgroundColor:'#fff',zIndex:99}}>
     
     <View style ={styles.headerTextView}>
 
           <Text style ={styles.headerText}>More to Love</Text>
           <Text style ={{ fontSize:14,
        paddingLeft:10,
        textAlign:"left",
        height:30,}}></Text>
          
      </View>


  
      {/* Mesonary */}
      <MasonryList
          data={posts}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 12 ,}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item, i }) => (
            <Pressable style={{ padding: 6 }}  
            onPress={() => {
              navigate('DetailsPage',{id:item})
            }}  
    >
           
           <View
                style={{
                  aspectRatio: i % 4 === 0 ? 0.57: 0.70,
                  position: "relative",
                  overflow: "hidden",
                 borderRadius:10,
                }}

             
              >
             
                <Image
                  source={{uri:item.Img}}
                  resizeMode="cover"
                  style={{height:i % 4 === 0 ? 220:140 ,borderRadius:10,}}
                  
                />
                
      
                <View style={{backgroundColor:'#fff',}}>
                <View>
                    <Text style={styles.proTitle}  numberOfLines={1}>{item.title}</Text>
                </View>
            
                <View style={{flexDirection:'row'}}>
                   
                    <View style={{flexDirection:"row",marginBottom:18}}>
                        
                         <Text style={styles.price} numberOfLines={1}>NGN 10000</Text>
                          
                    <MaterialCommunityIcons name="bookmark-outline" size={24} style={styles.save} />  
                    
                    </View>
                </View>

               

            </View>
            <View style={styles.review}>
        
                <Text style={styles.average}>{item.averageReview}</Text>
                <Text style ={styles.numberOfReview}>{item.numberOfReview} reviews</Text>
            </View>

              </View>
            </Pressable>
          )}
          onEndReachedThreshold={0.1}

      />

 

  </View>
      

    }
      </>}
     />


    </View> 

    
}

{loading ? 
<View>

</View>

:
<View style={{flexDirection:'row',
   backgroundColor:colors.cardbackground,height:60, position: 'absolute',bottom:0,width:"100%", zIndex: 999,alignItems:'center'}}>

<View style={{flexDirection:'row',justifyContent:'space-evenly',flex:1}}>
<FontAwesome5 name="store" size={24} color="black" /> 
<AntDesign name="message1" size={24} color="black" /> 
</View>

<TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-end',flex:1,marginRight:10}}>

<Button
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{

    colors: ['#FF9800', '#F44336'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
  buttonStyle={{borderBottomLeftRadius:20,borderTopLeftRadius:20}}
  onPress={() => {
    onAddToCart(id);
  }}
>
  Add to Cart
</Button>


   <Button
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['#FF9800', '#F44336'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
  buttonStyle={{borderBottomRightRadius:20,borderTopRightRadius:20}}

    onPress={() => {
              navigation.navigate('Order Confirmation',{item:id})
            }}  
>
 Buy Now
</Button>
   </TouchableOpacity>

   </View>

}

<Modal
 animationType = "fade"
 transparent = {false}
 visible = {modalVisible}
>

<View style={[
        styles.modalx,
        { backgroundColor:modalVisible2? '#555'  : '#fff'}
    ]}>
<View style={{width:'100%',height:60,backgroundColor:'#000',
flexDirection:'row',alignItems:'center',}}>
<TouchableWithoutFeedback onPress={() => setModalVisible(false)} >

<MaterialIcons name="cancel" size={26} color="#fff" style={{marginLeft:5}}/>
</TouchableWithoutFeedback>
<Text style={{marginLeft:18,alignItems:'center',justifyContent:'center',color:'#fff',fontSize:18}}>Customers Reviews</Text>
</View>

<View style={{flexDirection:'row',marginTop:40}}>
<View>
  <Text style={{fontSize:38,color:'#f7bf17',width:200,marginLeft:30}}>{reviewslenth == 0 ? 0 : averageReviews}/5.0</Text>
</View>

<View>

<Text style={{fontSize:25,color:'black',alignSelf:'center'}}>{reviewslenth}</Text>
<Text style={{fontSize:25,color:'black',}}>Reviews</Text>
</View>
</View>

<View style={{marginTop:30,alignItems:'center',marginBottom:20}}>
  <Text style={{fontSize:25,color:'black',alignSelf:'center'}}>Rate This Store</Text>
  <Button title='Add Review'   onPress ={()=>{
        setModalVisible2(true)
    }}/>
</View>

{hr}



<FlatList
        data={reviewsData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>
        <View style={{flexDirection:'row',margin:10}}>
<View>
<Image
         source={{uri:item.userImg}}
         resizeMode="contain"
         style={{width:40,height:40,borderRadius:30,marginHorizontal:3}}
       /> 
</View>
        <View style={{marginLeft:6,alignItems:'flex-start',}}>
        <AirbnbRating isDisabled count={5} defaultRating={item.numstars} showRating={false} size={20} style={{paddingLeft:0}}/>
        <Text style={{color:colors.grey1,fontSize:16,alignSelf:'center'}}>{item.Review}</Text>
        <Text style={{color:colors.grey3,fontSize:12}} >By {item.userName} on sunday december 20 2020</Text>
        </View>
        {hr}
        </View>
        
      }
      />







 </View>


</Modal>    

<Modal
 animationType = "fade"
 transparent = {true}
 visible = {modalVisible2}

>
<View  style={{width:'80%',height:'65%',alignSelf:'center',backgroundColor:'#fff',marginTop:'30%',borderRadius:15}}>

<TouchableWithoutFeedback onPress={() => setModalVisible2(false)} >

<MaterialIcons name="cancel" size={27} color="red" style={{alignSelf:'flex-end',marginRight:3}}/>
</TouchableWithoutFeedback>
<View style={{marginTop:20}}>
  <AirbnbRating 
onFinishRating={(rating) => setNumstars(rating) }
showRating={false}
defaultRating={0}
/>
</View>

<View
        style={{
         
          borderColor: colors.grey3,
          borderWidth: 1,
          width:'85%',
          margin:10,
          borderRadius:8,
          marginTop:30,
          alignSelf:'center',
        }}>
        <TextInput
          editable
          multiline
          numberOfLines={8}
          maxLength={600}
          onChangeText={text => setReview(text)}
          value={Review}
          style={{padding: 10,}}
          placeholder='Describe your experience with this Product or the store'
        />
        </View>

<View style={{marginTop:15}}>
  <Button buttonStyle={{backgroundColor:'#686de0',width:200,alignSelf:'center',borderRadius:5}} title='Post Review' onPress={uploadReviews }/>
</View>
</View>
</Modal>
    </SafeAreaView>
  )
}


const Pagination = ({data, scrollX, index}) => {
    return (
      <View style={styles.container}>
        {data.map((_, idx) => {
          const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
  
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [12, 30, 12],
            extrapolate: 'clamp',
          });
  
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.2, 1, 0.1],
            extrapolate: 'clamp',
          });
  
          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#ccc', '#000', '#ccc'],
            extrapolate: 'clamp',
          });
  
          return (
            <Animated.View
              key={idx.toString()}
              style={[
                styles.dot,
                {width: dotWidth, backgroundColor},
                // idx === index && styles.dotActive,
              ]}
            />
          );
        })}
      </View>
    );
  };
  
  
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 35,
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dot: {
      width: 12,
      height: 12,
      borderRadius: 6,
      marginHorizontal: 3,
      backgroundColor: '#ccc',
    },
    dotActive: {
      backgroundColor: '#000',
    },
    content: {
       flex:1,
      justifyContent:'flex-start',
      paddingHorizontal:10,
      alignItems:'flex-start',
      marginBottom:10,
      backgroundColor:colors.cardbackground,
      
    
     },
     title: {
       fontSize: 24,
       fontWeight: 'bold',
       color: '#333',
       paddingVertical:5,
       marginTop:0
     },
     description: {
       fontSize: 16,
       marginVertical: 12,
       
     },
     price: {
       fontSize: 23,
       fontWeight: 'bold',
   
     },
       Rating:{
         marginHorizontal: 24,
       },

       headerText:{
        color:colors.grey1,
        fontSize:20,
        fontWeight:"bold",
        paddingLeft:10,
        textAlign:"left",
   },
    headerTextView:{
        backgroundColor:'',
        paddingVertical:3,
       
    },
     image:{
       borderRadius:10,
      
     },
  
     proTitle:{
        fontSize:17,
        fontWeight:'bold',
        color:colors.grey1,  
        marginTop:5,
        marginLeft:10
     },
  
     price:{
        fontSize:15,
        paddingTop:5,
        fontWeight:'bold',
        color:'#555',
        paddingHorizontal:10,
        width:"78%"
     },
  
  save:{
    paddingTop:5,
    paddingHorizontal:5,
    alignItems:'flex-end',
   
  },
  
     review :{
        position:"absolute",
        top:0,
        right:10,
        backgroundColor:'rgba(52, 52, 52,0.3)',
        padding:2,alignItems:"center",
        justifyContent:"center", 
        borderTopRightRadius:5,
        borderBottomLeftRadius:12 
     },
  
     average:{
        color:"white",
         fontSize:20,
          fontWeight:'bold',
           marginTop:-3  
     },
     numberOfReview :{
        color:"white", 
        fontSize:13,
        marginRight:0,
        marginLeft:0
     },
     discounts:{
      position:"absolute",
      top:0,
      left:0,
      backgroundColor:'red',
      padding:2,alignItems:"center",
      justifyContent:"center", 
      borderTopRightRadius:5,
      borderBottomRightRadius:12 
   },
  
   discountpercent:{
      color:"white",
       fontSize:14,
        fontWeight:'bold',
         marginTop:-3  
   },
   modalx:{
    flex:1,
   }
  });
  