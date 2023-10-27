import { View, Text,Modal,TouchableWithoutFeedback,Animated ,alert} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';


export default function RatingModal({ modalVisible}) {

  function ratingCompleted(rating) {
    console.log("Rating is: " + rating) 
  }
  
  return (
  
    <View style={{
        flex:1,
      
    }}>
<View style={{position:'absolute',top:0,bottom:0,left:0,right:0,height:60,backgroundColor:'#000',
flexDirection:'row',alignItems:'center',}}>
<TouchableWithoutFeedback  >

<MaterialIcons name="cancel" size={26} color="#fff" style={{marginLeft:5}}/>
</TouchableWithoutFeedback>
<Text style={{marginLeft:18,alignItems:'center',justifyContent:'center',color:'#fff',fontSize:18}}>Customers Reviews</Text>
</View>


<View style={{marginTop:60}}>

<AirbnbRating 
onFinishRating={(rating) => console.log(rating)}
showRating={false}
/>





</View>
    </View>

  )
}