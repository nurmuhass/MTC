import { StyleSheet, Text, View,Pressable , StatusBar,FlatList} from 'react-native'
import React , { useState }from 'react'
import ProductDetails1 from '../components/ProductDetails1';
import ProductDetails2 from '../components/ProductDetails2';
import ProductDetails3 from '../components/ProductDetails3';
import {parameters, colors} from '../global/styles';
import { Button,SocialIcon} from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';

export default function Sell() {
 
  const [formData, setFormData] = useState({
    ProductTitle:"",
    Category:"",
    productImage1:"",
    productImage2:"",
    productImage3:"",
    productImage4:"",

    //delivery
    delivery:"",

    //third
    productPrice:"",
    productDescription:"",


  });
const [screen,setScreen] =useState(0)
const FormTitle =[
  "Product Details",
  "Product Delivery",
  "Product Details Extra"
]

const ScreenDisplay = () =>{
  if (screen === 0){
    return <ProductDetails1/>;
  }else if (screen === 1){
    return <ProductDetails2/>;
  }else if (screen === 2){
    return <ProductDetails3/>;
  }
}

const buttonDisplay = () =>{
  if (screen === 0){
    return (
    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>

 
    <Button title='Next'   buttonStyle = {{...parameters.styledButton, }}
         titleStyle = {parameters.buttonTitle}  onPress={ () => {
          setScreen((currScreen) => currScreen +1);
       }} />
    
    </View>
    );
  }else if (screen === 1){
    return (
<View style={{flexDirection:'row',justifyContent:'space-evenly'}}>

<Button title='Prev'   buttonStyle = {parameters.styledButton}
     titleStyle = {parameters.buttonTitle} onPress={ () => {
      setScreen((currScreen) => currScreen -1);
  }}/>

<Button title='Next'   buttonStyle = {{...parameters.styledButton, }}
     titleStyle = {parameters.buttonTitle}  onPress={ () => {
      setScreen((currScreen) => currScreen +1);
   }} />

</View>);
  }else if (screen === 2){
    return (<View style={{flexDirection:'row',justifyContent:'space-evenly'}}>

    <Button title='Prev'   buttonStyle = {parameters.styledButton}
         titleStyle = {parameters.buttonTitle} onPress={ () => {
          setScreen((currScreen) => currScreen -1);
      }}/>
    
  
    </View>);
  }
}
  return (
    <View style={styles.container}>
    <StatusBar
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(255, 140, 82,1)"
                 />
       <View style={{ paddingTop:parameters.statusBarHeight,}}>      
    <View><Text style={{fontSize:30, 
    textAlign: 'center',
        color:'#555',
        marginBottom: 10,
        letterSpacing: 5,
        fontWeight: 600}}>ADVERTISE YOUR PRODUCTS</Text>
        </View>
        <FlatList
	data={[{}]}
    style={{marginTop:20}}
	keyExtractor={() => null}
	renderItem={() =><>


<View>
<Text style={{backgroundColor:'#d9edf7',width:'90%',fontFamily: "Roboto",color:'#31708f',padding:10,marginLeft:15,marginRight:10}}> Promotion: Hurry and get your product sponsored only for the first 50.</Text>
</View>

<View>
<Text style={{fontFamily: "Roboto",color:'#555',padding:15,fontSize:18,textAlign: 'center'}}>{FormTitle[screen]}</Text>
<View>{ScreenDisplay()}</View>

{buttonDisplay()}

</View>
</>}
     />
    </View>
    
    </View>  
   
  )
}

const styles = StyleSheet.create({
  container:{
   
    backgroundColor:"#f0f0f0",
    paddingBottom:135,
    flex:1,
    
},
background:{

}
})