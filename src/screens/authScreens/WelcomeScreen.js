import {
    Dimensions,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar
  } from "react-native";
  import React,{useEffect} from "react";
  import Spacing from "../../global/constants/Spacing";
  import FontSize from "../../global/constants/FontSize";
  import Colors from "../../global/constants/Colors";
  import { parameters } from "../../global/styles";
  import {useNavigation} from '@react-navigation/native';
import { auth } from "../../../firebase";
  const { height } = Dimensions.get("window");
  

export default function WelcomeScreen({navigation}) {

  return (

<SafeAreaView>
    <StatusBar
    translucent
    barStyle="light-content"
    backgroundColor="#fff"
 />
      <View style={{ paddingTop:parameters.statusBarHeight,}}>
        <ImageBackground
          style={{
            height: height / 2.5,
          }}
          resizeMode="contain"
          source={require("../../assets/images/welcome-img.png")}
        />
        <View
          style={{
            paddingHorizontal: Spacing * 4,
            paddingTop: Spacing * 4,
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xxLarge,
              color: Colors.primary,
             
              textAlign: "center",
            }}
          >
            Discover Your Dream Job here
          </Text>

          <Text
            style={{
              fontSize: FontSize.small,
              color: Colors.text,
         
              textAlign: "center",
              marginTop: Spacing * 2,
            }}
          >
            Explore all the existing job roles based or your interest and study
            major
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 6,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              backgroundColor: Colors.primary,
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: "48%",
              borderRadius: Spacing,
              shadowColor: Colors.primary,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
            }}
          >
            <Text
              style={{
             
                color: Colors.onPrimary,
                fontSize: FontSize.large,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={{
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: "48%",
              borderRadius: Spacing,
            }}
          >
            <Text
              style={{
               
                color: Colors.text,
                fontSize: FontSize.large,
                textAlign: "center",
                
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})