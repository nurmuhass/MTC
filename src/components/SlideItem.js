import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');

const SlideItem = ({item,id}) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
  
    useNativeDriver: true,
   
  }).start();

  return (
    <View style={styles.container}>
     
      <Animated.Image
        source={{uri:item}}  
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

   
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height:400,
    alignItems: 'center',
    marginVertical:0
  },
  image: {
    flex: 1,
    width: '100%',
  },
 
});
