import { View, Text,Image } from 'react-native'
import React  , {useState,useRef}from 'react'
import {COLORS,SIZES,constants,FONTS} from '../../components/constants'
import {FlatList } from "react-native-gesture-handler"
import { useEffect } from 'react';

const ITEM_WIDTH = 120;

export default function Walkthrough1() {

const [row1Images,setRow1Images]=React.useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_01_images
])
const [currentPosition,setCurrentPosition]=React.useState(0);


//row2
const [row2Images,setRow2Images]=React.useState([
    ...constants.walkthrough_01_02_images,
    ...constants.walkthrough_01_02_images,
])
const [row2currentPosition,setRow2CurrentPosition]=React.useState(0);

            //Ref
            const row1FlatListRef =React.useRef()
            const row2FlatListRef =React.useRef()

 React.useEffect(() =>{
                let positionTimer;
                const timer = () =>{
                    positionTimer = setTimeout(() =>{
//slider1
setCurrentPosition(prevPosition =>{
    const position =Number(prevPosition)+1;
    row1FlatListRef?.current?.scrollToOffset({
        offset:position,animated:false
    })
    const maxOffset = constants.walkthrough_01_01_images.length * ITEM_WIDTH

    if(prevPosition > maxOffset){
        const offset = prevPosition - maxOffset;
        row1FlatListRef?.current.scrollToOffset({
            offset,
            animated:false
        })
        return offset
    }else{
        return position
    }
})

    //slider2

                        setRow2CurrentPosition(prevPosition =>{
                            const position =Number(prevPosition)+1;
                            row2FlatListRef?.current?.scrollToOffset({
                                offset:position,animated:false
                            })
                            const maxOffset = constants.walkthrough_01_02_images.length * ITEM_WIDTH
                        
                            if(prevPosition > maxOffset){
                                const offset = prevPosition - maxOffset;
                                row2FlatListRef?.current.scrollToOffset({
                                    offset,
                                    animated:false
                                })
                                return offset
                            }else{
                                return position
                            }
                        })


                        timer();
                    },32)
                }
                timer();
                return() =>{
                    clearTimeout(positionTimer);
                }
            },
            [])
            return (
                <View>
            <FlatList
            ref={row1FlatListRef}
            decelerationRate="fast"
            horizontal
            showsHorizontalScrollIndicator={false}
            listKey="Slider1"
            scrollEnabled={false}
            data={row1Images}
            keyExtractor={(_, index) => `Slider1_${index}`}
                renderItem={({item, index}) =>{
                    return(
                        <View style={{width:ITEM_WIDTH,alignItems:'center',justifyContent:'center'}}>
                                 <Image source={item}
                                style={{width:110,height:110}}
                                />
                        </View>
                    )
                }}

            />
            
           


<FlatList
            ref={row2FlatListRef}
            decelerationRate="fast"
            horizontal
            style={{ marginTop:SIZES.padding, transform:[{rotate:"180deg"}]}}
            showsHorizontalScrollIndicator={false}
            listKey="Slider2"
            data={row2Images}
           
            scrollEnabled={false}
            keyExtractor={(_,index) => `Slider2_${index}`}


            renderItem={({item, index}) =>{
                return(
                    <View style={{width:ITEM_WIDTH,alignItems:'center',justifyContent:'center',transform:[{rotate:"180deg"}]}}>
                             <Image source={item}
                            style={{width:110,height:110}}
                            />
                    </View>
                )
            }}
            />
            
          

                </View>
            )
            }

