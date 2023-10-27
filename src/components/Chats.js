import * as React from 'react';
import { Text, Image, StyleSheet,View,FlatList } from 'react-native';
import ChatRoomItem from './ChatRoomItem'
import { chatRoomsData } from '../global/Data';



export default function Chats(){
  return(
    <View style={styles.page}>
      <FlatList data={chatRoomsData} renderItem={ ({ item }) => <ChatRoomItem chatRoom={item}/> } showsHorizontalScrollIndicator={false}/> 
    </View>
  )
}

const styles =StyleSheet.create({
  page:{
    backgroundColor:'white',
    flex:1,
  },
 
})