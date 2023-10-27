import React,{useState,useRef} from 'react'
import { StyleSheet, Text, View,TouchableWithoutFeedback, Modal,TextInput,FlatList,TouchableOpacity,Keyboard } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { Icon  } from '@rneui/themed';
import {colors} from "../global/styles"
import { filterData } from '../global/Data';
import filter from 'lodash/filter';




export default function Searchbar({searchWidth,searchText,iconName}) {
    const navigation  = useNavigation();

    const [data, setData] =  useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFossued,setTextInputFossued] = useState(true)
    const textInput = useRef(0)

    
const contains = ({name},query)=>{
if(name.includes(query)){
  return true
}
return false
}


const handleSearch = text =>{   //takes a text parameter
const dataS = filter(filterData, userSearch =>{
  return contains(userSearch,text)
})

setData([...dataS])
}


return (
    <View style = {{alignItems:"center",flexDirection:"row",}}>
        <TouchableWithoutFeedback
                onPress ={()=>{
                    setModalVisible(true)
                }}
            >
            <View style = {{...styles.SearchArea, width:searchWidth,paddingRight:0,marginRight:0}}>
                 <Icon name =  "search"   
                        style = {{...styles.searchIcon,}} 
                        type ="material"
                        iconStyle ={{marginLeft:5,color:colors.grey3}}
                        size = {22}     
                        />
                 <Text style ={{fontSize:15,color:colors.grey3}}>{searchText}</Text>
            </View>

           
        </TouchableWithoutFeedback>
       
       
    <Modal
        animationType = "fade"
        transparent = {false}
        visible = {modalVisible}
        >
            <View style ={styles.modal}>
                <View style = {styles.view1}>
                    <View style ={styles.TextInput}>
                        <Animatable.View 
                                animation = {textInputFossued?"fadeInRight":"fadeInLeft"}
                                duration = {400} //mili seconds
                                >
                        <Icon name = {textInputFossued ? "arrow-back" : "search" }  
                            onPress = {()=>{
                                    if(textInputFossued)
                                    setModalVisible(false)
                                    setTextInputFossued(true)
                                        }}
                                style = {styles.icon2} 
                                type  ="material"
                                iconStyle ={{marginRight:5}}
                            />
                        </Animatable.View>

                        <TextInput 
                            style ={{width:"90%"}}
                            placeholder =""
                            autoFocus = {false}
                            ref = {textInput}

                            onFocus = {()=>{
                                setTextInputFossued(true)
                            }} 

                            onBlur = {()=>{
                                setTextInputFossued(false)
                            }}
                            onChangeText ={handleSearch}

                        />

                        <Animatable.View
                                 animation = {textInputFossued?"fadeInLeft":""}
                                duration = {400}
                                >
                        <Icon 
                            name = {textInputFossued ? "cancel" : null } 
                            iconStyle ={{color:colors.grey3}}
                            type ="material"
                            style={{marginRight:5}}
                            onPress ={()=>{
                                    textInput.current.clear() 
                                   handleSearch()          
                            }}
                        />
                        </Animatable.View>
                    </View>
                </View>


            </View>
    </Modal>

    <View>
  <TouchableOpacity  onPress={() => {
          navigation.navigate('My Orders');
        }}>
   
       </TouchableOpacity>  
        </View>
        
    </View>
)
}


const styles = StyleSheet.create({
container :{
    flex:1
},

text1:{
    color:colors.grey3,
    fontSize:16
},

TextInput:{
    borderWidth:1,
     borderRadius:12,
     marginHorizontal:0,
     borderColor:"#86939e",
     flexDirection:"row",
     justifyContent:"space-evenly",
     alignContent:"center",
     alignItems:"center",
     paddingLeft:10,
     paddingRight:10

  },
SearchArea:{
    marginTop :10,
    height:40,
    backgroundColor:colors.cardbackground,
    borderRadius:32,
    borderWidth:1,
    borderColor:colors.grey1,
    flexDirection:"row",
    alignItems:"center",
    marginLeft:"2%",
   
  },

searchIcon:{ fontSize:24,
              padding:5,
              color:colors.grey2,
  },

view1:{ height:70,
        justifyContent:"center",
        
        paddingHorizontal:10,
  },

view2:{
  flexDirection: 'row',
  padding: 15,
  alignItems: 'center',
},

icon2 :{ fontSize:24,
        padding:5,
        color:colors.grey2,
},
modal :{
    flex:1
}

})
