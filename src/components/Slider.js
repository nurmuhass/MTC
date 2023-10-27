import React from 'react'
import {View, Text, StyleSheet, Dimensions,Image,ScrollView} from 'react-native'
import Swiper from 'react-native-swiper'

export default function Slider() {
  return (
    <ScrollView contentContainerStyle = {{flexGrow: 1,justifyContent: 'space-between'}} >

    <View style ={{ }}>

        <Swiper autoplay ={true} style ={{height:200,}}>
          <View style ={styles.slide1}>
            <Image 
                    source ={require("../assets/images/restaurant1.jpg")}
                    style ={{height:"100%", width:"100%"}}
            />
          </View>  

          <View style ={styles.slide2}>
            <Image 
                    source ={require("../assets/images/restaurant3.png")}
                    style ={{height:"100%", width:"100%"}}
            />
          </View>    


          <View style ={styles.slide3}>
            <Image 
                     source ={require("../assets/images/kfc.jpg")}
                    style ={{height:"100%", width:"100%"}}
            />
          </View>

          <View style ={styles.slide3}>
            <Image 
                   source ={require("../assets/images/restaurant1.jpg")}
                    style ={{height:"100%", width:"100%"}}
            />
          </View>

        </Swiper>
    </View>




</ScrollView>   
  )
}

const styles = StyleSheet.create({

    slide1: {
      height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
      },
      slide2: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
      },
      slide3: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
      },

      createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:20,
        borderColor:"#ff8c52",
      },

      createButtonTitle:{
        color:"#ff8c52",
        fontSize:20,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
      }

})