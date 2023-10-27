import { StyleSheet, Text, View,TouchableOpacity ,
    ScrollView,Modal,TouchableWithoutFeedback, FlatList, Pressable,Image,ImageBackground, Dimensions, StatusBar} from 'react-native'
import React, {useState,useEffect} from 'react'
import { filterData } from '../global/Data';
import { colors,parameters } from '../global/styles';
import { Icon  } from '@rneui/themed';
import { db } from '../../firebase';
import {useIsFocused} from '@react-navigation/native';
import {collection,getDoc,getDocs, query, where,doc } from "firebase/firestore"; 
import { MaterialIcons } from '@expo/vector-icons';
import MasonryList from "reanimated-masonry-list";
import Loader from './Loader';



export default function Categories() {
    const [indexCheck,setIndexCheck] =useState("0");
    const [modalVisible, setModalVisible] =useState(false);
    //get products
    const hr =   <Text style={{borderTopWidth:1,borderColor:"#f0f0f0",width:'100%',height:2}}></Text>;
const [cats, setCats] = useState('');
const [loading, setLoading] = useState(true);
const [categories,setCategories] =useState(null);
const screenWidth = Dimensions.get('window').width


const fetchCategories = async () => {
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
  
      setCategories(list);
   
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    fetchCategories();
  }, [useIsFocused]);
  
  

//get Catproducts
 
const [catPosts, setCatPosts] = useState(null);



const fetchCatPosts = async (catId) => {
    setLoading(true);
    try {
      const list = [];


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
  setCatPosts(list);
 setLoading(false);

  } catch (e) {
      console.log(e);
    }
  } ;

  
  return (
    
   <View>
       <View style ={styles.headerTextView}>
        
            <Text style ={styles.headerText}>Categories</Text>

<View style={{flexDirection: 'row',alignItems:'center'}}>
            <Text style ={{ fontSize:14,
        paddingLeft:10,
        textAlign:"left",
        height:30,}}>Search Using our Classified Categories</Text>
       
        <View style={{justifyContent:'center',alignItems:'center',}}>
            <Icon name ="arrow-forward"  style={{marginBottom:10}}/>
        </View>
        
 </View>

      </View> 

     <View> 

    <FlatList
         horizontal={true}
         showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        extraData={indexCheck}
        renderItem={({item,index}) => (
       

            <Pressable  onPress={() => {setIndexCheck(item.id) , setModalVisible(true),  fetchCatPosts(item.id),setCats(item.title);;}} style={{marginLeft:2}}>
                <View style ={indexCheck === item.id ? {...styles.smallCardSelected}:
                                {...styles.smallCard}}>
                    <Image
                     style = {{height:50,width:40,borderRadius:30}}
                     source={{uri:item.Img}}
                    />
                    <View>
                    <Text style ={{...styles.smallCardText}}>{item.title}</Text>
                    </View>
                </View>
            </Pressable>
        )}
        />     
    </View> 




    <Modal
 animationType = "fade"
 transparent = {false}
 visible = {modalVisible}
>

<View >
<View style={{width:'100%',height:60,backgroundColor:'#000',
flexDirection:'row',alignItems:'center',}}>
<TouchableWithoutFeedback onPress={() => setModalVisible(false)} >

<MaterialIcons name="cancel" size={26} color="#fff" style={{marginLeft:5}}/>
</TouchableWithoutFeedback>
<Text style={{marginLeft:18,alignItems:'center',justifyContent:'center',color:'#fff',fontSize:18}}>{cats}</Text>
</View>

{hr}

{loading ?
 <View  style={{height:'100%',alignItems:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#fff',zIndex:99,}}>
 <Loader size={100} />
</View>
:

<View>

{/* MasonryList */}
<FlatList
    data={catPosts}
    numColumns={2}
    contentContainerStyle={{ paddingHorizontal: 4,}}
    showsVerticalScrollIndicator={false}
    keyExtractor={(item) => item.id}

    renderItem={({ item, i }) => (

        <View
          style={{
            aspectRatio: i % 4 === 0 ? 0.63: 0.70,
            position: "relative",
            overflow: "hidden",
            width:'48%',
           marginHorizontal: 4,
           borderRadius:10,
          }}

       
        >
       
          <Image
            source={{uri:item.Img}}
            resizeMode="cover"
            style={{...styles.image,height:160,borderRadius:10,}}
            
          />
          

          <View style={{backgroundColor:'#f0f0f0',}}>
          <View>
              <Text style={styles.proTitle}  numberOfLines={1}>{item.title}</Text>
          </View>
      
          <View style={{flexDirection:'row'}}>
             
              <View style={{flexDirection:"row",marginBottom:18}}>
                  
                   <Text style={styles.price} numberOfLines={1}>NGN 10000</Text>
                    
            
              
              </View>
          </View>

         

      </View>
     

        </View>
     
    )}
    onEndReachedThreshold={0.1}

/>
</View>


}






 </View>


</Modal>    
    </View>
  )
}

const styles = StyleSheet.create({

    headerText:{
        color:colors.grey1,
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:10,
        
    },
    headerTextView:{
        backgroundColor:colors.cardbackground,
      
    },

    smallCard :{
   justifyContent:"center",
        alignItems:'center',
        width:120,
        margin:3,
        height:110,
        backgroundColor:'#f0f0f0',
        borderRadius:5,
    },

    smallCardSelected:{
        borderColor:colors.grey1,
        justifyContent:"center",
        alignItems:'center',
        width:120,
        margin:3,
        height:110,
        backgroundColor:'#f0f0f0',
        borderRadius:5,
        borderWidth:2,
      
    },


    smallCardText :{
       fontSize:12,
        color:"#555",
        marginTop:10,
        alignSelf:'center'
    },
    modalx:{
        flex:1,
       }
})