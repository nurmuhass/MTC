import { StyleSheet, Text, View,Pressable,Image,FlatList,
  Dimensions} from 'react-native'
import React from 'react'
import { colors,parameters } from '../global/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MasonryList from "reanimated-masonry-list";
import { useNavigation } from '@react-navigation/native';
import { FlashList, MasonryFlashList } from '@shopify/flash-list';


const screenWidth = Dimensions.get('window').width

export default function HomeProducts({navigation,route,posts}) {

 const {navigate} = useNavigation();

return (
 <View>
    
    <View style ={styles.headerTextView}>

          <Text style ={styles.headerText}></Text>
          <Text style ={{ fontSize:14,
       paddingLeft:10,
       textAlign:"left",
       height:30,}}>More to Love</Text>
         
     </View>


<View style={{marginBottom:20}}>
 
     {/* Mesonary */}
     <FlashList
          data={posts}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 12 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          estimatedItemSize={300}
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


 </View>
);
         }



const styles = StyleSheet.create({
 headerText:{
     color:colors.grey1,
     fontSize:24,
     fontWeight:"bold",
     paddingLeft:10,
     textAlign:"left",
 
    
 },
 headerTextView:{
     backgroundColor:'',
     paddingVertical:3,
    
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