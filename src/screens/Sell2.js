import { View, Text ,Image} from 'react-native'
import React from 'react'
import { createShimmerPlaceHolder } from 'expo-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient'



export default function Sell() {

  const ShimmerPlaceHolder = createShimmerPlaceHolder(LinearGradient)
  
  return (
<View style={{justifyContent:'center',alignItems:'center',backgroundColor:'black',flex:1}}> 
  <ShimmerPlaceHolder/>
  <ShimmerPlaceHolder flexDirection="row" alignItems="center" >
  <ShimmerPlaceHolder width={60} height={60} borderRadius={50}  />
 
  <ShimmerPlaceHolder marginLeft={20} >
  <ShimmerPlaceHolder width={120} height={20}   />
  <ShimmerPlaceHolder marginTop={6} width={80} height={20}   />
 
    
  </ShimmerPlaceHolder>
    
  </ShimmerPlaceHolder>
</View>
  )
}
