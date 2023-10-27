import { StyleSheet, Text, View,TouchableOpacity ,ScrollView, FlatList, Pressable,Image, Dimensions, StatusBar} from 'react-native'
import React, {useState} from 'react'
import { filterData } from '../global/Data';
import { colors,parameters } from '../global/styles';
import { ImageBackground } from 'react-native';
import { Icon  } from '@rneui/themed';
  import { useNavigation } from '@react-navigation/native';

export default function BestDeals({navigation}) {
    const [indexCheck,setIndexCheck] =useState("0");
    const {navigate} = useNavigation();
  return (
    
    <View style={{marginTop:5}}>
       

     <View style ={styles.headerTextView}>
       <Text style ={styles.headerText}>Best Deals</Text>
       <Text style ={{ fontSize:14,
        paddingLeft:10,
        textAlign:"left",
        height:20,}}>First Come,50% off</Text>
      </View>
 
     <View>
    
    <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
           data={filterData}
           keyExtractor={(item) => item.id}
           extraData={indexCheck}
           renderItem={({item,index}) => (
       
            <Pressable  onPress={() => {setIndexCheck(item.id)} } style={{marginLeft:2}}>
               
                <TouchableOpacity style={{borderRadius:9}}  onPress={() => {
                      navigate('DetailsPage',{id:item})
                    }} >
                    <Image
                     style = {{height:100,width:110,borderRadius:9,marginLeft:6}}
                     source={item.image}
                    
                    />
                    <View>
                       
                    <Text style ={{...styles.smallCardText,color:'red'}}>NGN 10000</Text>
                    <Text style ={{ textDecorationLine:'line-through'}}>NGN 20000</Text>
                    
                               
                    </View>

     <View style={styles.discounts}>
        
        <Text style={styles.discountpercent}>-50%</Text>
        
    </View>

                </TouchableOpacity>
            </Pressable>
        )}
        />
        </View>     

    </View>
  )
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
        paddingBottom:13,
   },
smallCardText :{
        fontWeight:"bold",
        color:colors.grey2
    },
    discounts:{
        position:"absolute",
        top:0,
        left:4,
        backgroundColor:'red',
        padding:2,alignItems:"center",
        justifyContent:"center", 
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderBottomRightRadius:12 
     },
  
     discountpercent:{
        color:"white",
         fontSize:14,
          fontWeight:'bold',
           marginTop:-3  
     },
     numberOfReview :{
        color:"white", 
        fontSize:13,
        marginRight:0,
        marginLeft:0
     }
})