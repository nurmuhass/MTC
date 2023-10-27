import { StyleSheet, Text, View,TouchableOpacity ,
    ScrollView, TouchableWithoutFeedback,
    FlatList, Pressable,Image,
     Dimensions, StatusBar,Alert,render} from 'react-native'
  import React, {useState,useEffect, useMemo} from 'react'
  import { filterData,restaurantsData } from '../global/Data';
  import { colors,parameters } from '../global/styles';
  import { ImageBackground } from 'react-native';
  import { ButtonGroup, Icon  } from '@rneui/themed';
  import { Ionicons } from '@expo/vector-icons'; 
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import { Feather } from '@expo/vector-icons';
  import { Button,SocialIcon} from '@rneui/themed';
  import { collection, getDocs } from "firebase/firestore"; 
  import { db } from '../../firebase';
  import { doc, deleteDoc, getDoc, query, where } from "firebase/firestore";
  import { getStorage, ref, deleteObject } from "firebase/storage";
  import { getAuth, onAuthStateChanged ,User} from "firebase/auth";
  import Icons from "@expo/vector-icons/MaterialIcons";
  import MasonryList from "reanimated-masonry-list";
  import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
  import { useNavigation } from '@react-navigation/native';
  
  const screenWidth = Dimensions.get('window').width

export default function Recommendations() {
  
    //get user
const auth = getAuth();
const user= auth.currentUser;
const {navigate} = useNavigation();


  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);

 

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
        if(loading){
          setLoading(false)
        }
   
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

return (
  <View>
     
     <View style ={styles.headerTextView}>
 
           <Text style ={styles.headerText}>More to Love</Text>
           <Text style ={{ fontSize:14,
        paddingLeft:10,
        textAlign:"left",
        height:30,}}></Text>
          
      </View>
 {loading ?
<View>

</View>

 :

 <View>
  
      {/* Mesonary */}
      <MasonryList
          data={posts}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 12 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item, i }) => (
            <Pressable style={{ padding: 6 }}  
            onPress={() => {
              navigate('RecDetailsPage',{id:item})
            }}  
    >
              <View
                style={{
                  aspectRatio: i % 4 === 0 ? 0.63: 0.70,
                  position: "relative",
                  overflow: "hidden",
                 borderRadius:10,
                }}

             
              >
             
                <Image
                  source={{uri:item.Img}}
                  resizeMode="cover"
                  style={{...styles.image,width:screenWidth/2,height:160}}
                  
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
 

  </View>
);
}

const styles = StyleSheet.create({
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
  })