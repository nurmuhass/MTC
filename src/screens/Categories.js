import { View, Text,Image,StyleSheet,Pressable,FlatList,Dimensions } from 'react-native'
import Searchbar from '../components/Searchbar'
import { Ionicons } from '@expo/vector-icons';
import React, {useState,useEffect} from 'react'
import { colors,parameters } from '../global/styles';
  import { collection, getDocs, query, where,  } from "firebase/firestore"; 
  import { db } from '../../firebase';
  import { getAuth, onAuthStateChanged ,User} from "firebase/auth";
  import MasonryList from "reanimated-masonry-list";
  import { useNavigation } from '@react-navigation/native';
  import Loader from '../components/Loader';
  import {useIsFocused} from '@react-navigation/native';
  import { FlashList } from "@shopify/flash-list";
const Categories = ({navigation}) => {
 const [indexCheck,setIndexCheck] =useState("0");
 const screenWidth = Dimensions.get('window').width
 
    //get user
const auth = getAuth();
const user= auth.currentUser;
const {navigate} = useNavigation();


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


} catch (e) {
console.log(e);
}
};


  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);


  const fetchPosts = async (catId) => {
    try {
      const list = [];

      //const querySnapshot =   await getDocs(collection(db, "post"));
if(catId == 0){
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
}else{
  const q =   await  query(collection(db, "post"), where("Category", "==", catId));
  const querySnapshot = await getDocs(q);
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
}


      setPosts(list);
        if(loading){
          setLoading(false)
        }
   
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts(indexCheck);
    fetchCats();
  }, [useIsFocused]);

  return (
    <View style={{ flex:1, 
        backgroundColor:'#f0f0f0',paddingTop:parameters.statusBarHeight,}}>
          {loading ?
 <View  style={{alignItems:'center',justifyContent:'center',flex:1,zIndex:99}}>
 <Loader size={100} />
</View>

 :
 <View>
    <View style={{flexDirection:'row',alignItems:'center'}}>
        <Searchbar searchWidth={'85%'} searchText={"What are you looking for ?"} style={{marginRight:0,paddingRight:0}}/>

<View style={{marginRight:17,alignItems:'center'}}>
<Ionicons name="notifications" size={24}  />
</View>
     </View>
    

     <View style={{marginTop:25, backgroundColor:colors.grey5}}>
        <Image source={require("../assets/images/sell_fast.jpg")} style={{height:80,width:"100%"}}/>
    </View>

  

<View>
    
<View >
        
   <Text style ={styles.headerText}>Product Catalog</Text>

</View>

<FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={cats}
        keyExtractor={(item) => item.id}
        extraData={indexCheck}
        renderItem={({item,index}) => (
       

            <Pressable  onPress={() => {setIndexCheck(item.id) 
             fetchPosts(item.id)}} style={{marginLeft:7,marginTop:15}}>
                 <View>
         

<Text style ={indexCheck === item.id ? {...styles.smallCardTextSelected}:
          {...styles.smallCardText}} >{item.title}</Text>

          
                 
                    
                    </View>
            </Pressable>
        )}
        />     
</View>
<FlatList
	data={[{}]}
    style={{marginTop:20}}
	keyExtractor={() => null}
	renderItem={() =><>





 <View>
  
      {/* MasonryList */}
      <MasonryList
          data={posts}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 4,}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
      
          renderItem={({ item, i }) => (
     
              <View
                style={{
                  position: "relative",
                  overflow: "hidden",
                 marginHorizontal: 4,
                }}

             
              >
             
                <Image
                  source={{uri:item.Img}}
                  resizeMode="cover"
                  style={{...styles.image,width:screenWidth/2,height:160,borderRadius:10,}}
                  
                />
                
      
                <View style={{backgroundColor:'#f0f0f0',}}>
                <View>
                    <Text style={styles.proTitle}  numberOfLines={1}>{item.title}</Text>
                </View>
            
                <View style={{flexDirection:'row'}}>
                   
                    <View style={{flexDirection:"row",marginBottom:18}}>
                        
                         <Text style={styles.price} numberOfLines={1}>{item.price}</Text>
                          
                  
                    
                    </View>
                </View>

               

            </View>
            <View style={styles.review}>
        
                <Text style={styles.average}>{item.averageReview}</Text>
                <Text style ={styles.numberOfReview}>{item.numberOfReview} reviews</Text>
            </View>

              </View>
           
          )}
          onEndReachedThreshold={0.1}

      />
</View>

</>}
    />
    </View>
              }
    </View>
  )
}

export default Categories


const styles = StyleSheet.create({

    headerText:{
        color:colors.grey1,
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:10,
        fontFamily:''
        
    },
    headerTextView:{
        backgroundColor:colors.cardbackground,
   },
  smallCardText :{
       fontSize:12,
        color:"#111",
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:5,
        padding:10,
    },

    smallCardTextSelected :{
        fontSize:12,
         color:"#fff",
         justifyContent:"center",
         alignItems:'center',
         backgroundColor:'#111',
         borderRadius:5,
         padding:10,
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
 })