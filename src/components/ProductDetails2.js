import { StyleSheet, Text, View } from 'react-native'
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';


export default function ProductDetails2({item}) {
    const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>


    <View style={styles.section}>
    <Text style={styles.text}> Abia
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked}  />
    
    </Text>

    <Text style={styles.text}>Adamawa
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
    <Text style={styles.text}>Anambra 
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Bauchi
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
    <Text style={styles.text}>Bayelsa
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Benue
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
    <Text style={styles.text}> Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
      <Text style={styles.text}>  Cross River
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
    <Text style={styles.text}> Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
    <Text style={styles.text}> Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
    <Text style={styles.text}> Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
      
    <Text style={styles.text}> Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
    <Text style={styles.text}> Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
    <Text style={styles.text}> Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
    <Text style={styles.text}> Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
      <Text style={styles.text}> Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
    <Text style={styles.text}> Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
    <Text style={styles.text}> Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
    <Text style={styles.text}> Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>

    <Text style={styles.text}>Borno
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} Color="white" placeHolder="]" Title="checkbox"/>
    </Text>
    </View>
    

  </View>
  )
}

const styles = StyleSheet.create({  container: {
   
  },
  section: {
    flexWrap: 'wrap',
    width:'100%',
flexDirection:'row',
    alignItems: 'center',
    margin:8,
  
  },

  text:{
    backgroundColor:'#424242',
    padding: 10,
    color: '#fff',
    borderRadius: 30,
    width:80,
    height:40,
 justifyContent:'center',
    margin:3,

  },
  checkbox:{
display:'none',
    
  },
 




})