import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, {useState} from "react";
  import Spacing from "../../global/constants/Spacing";
  import FontSize from "../../global/constants/FontSize";
  import Colors from "../../global/constants/Colors";
  import { parameters } from "../../global/styles";
  import { Ionicons } from "@expo/vector-icons";
  import AuthInput from "../../components/AuthtInput";
  import {useNavigation} from '@react-navigation/native';
import {  signInWithEmailAndPassword } from "firebase/auth";

import { auth } from '../../../firebase';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    
    const handleLoginIn = () => {  
        signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      }) }

      
  return (
    <SafeAreaView>
    <View
      style={{
        padding: Spacing * 2,
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: FontSize.xLarge,
            color: Colors.primary,
      
            marginVertical: Spacing * 3,
          }}
        >
          Login here
        </Text>
        <Text
          style={{
    
            fontSize: FontSize.large,
            maxWidth: "60%",
            textAlign: "center",
          }}
        >
          Welcome back you've been missed!
        </Text>
      </View>
      <View
        style={{
          marginVertical: Spacing * 3,
        }}
      >
        <AuthInput  placeholder="Email"  value={email}
                                        onChangeText={text => setEmail(text)} />
        <AuthInput  placeholder="Password"   value={password}
                                        onChangeText={text => setPassword(text)}/>
      </View>

      <View>
        <Text
          style={{
          
            fontSize: FontSize.small,
            color: Colors.primary,
            alignSelf: "flex-end",
          }}
        >
          Forgot your password ?
        </Text>
      </View>

      <TouchableOpacity
       onPress={handleLoginIn}
        style={{
          padding: Spacing * 2,
          backgroundColor: Colors.primary,
          marginVertical: Spacing * 3,
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
            textAlign: "center",
            fontSize: FontSize.large,
          }}
        >
          Sign in
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
       
        style={{
          padding: Spacing,
        }}
      >
        <Text
          style={{
       
            color: Colors.text,
            textAlign: "center",
            fontSize: FontSize.small,
          }}
        >
          Create new account
        </Text>
      </TouchableOpacity>

      <View
        style={{
          marginVertical: Spacing * 3,
        }}
      >
        <Text
          style={{
          
            color: Colors.primary,
            textAlign: "center",
            fontSize: FontSize.small,
          }}
        >
          Or continue with
        </Text>

        <View
          style={{
            marginTop: Spacing,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              padding: Spacing,
              backgroundColor: Colors.gray,
              borderRadius: Spacing / 2,
              marginHorizontal: Spacing,
            }}
          >
            <Ionicons
              name="logo-google"
              color={Colors.text}
              size={Spacing * 2}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: Spacing,
              backgroundColor: Colors.gray,
              borderRadius: Spacing / 2,
              marginHorizontal: Spacing,
            }}
          >
            <Ionicons
              name="logo-apple"
              color={Colors.text}
              size={Spacing * 2}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: Spacing,
              backgroundColor: Colors.gray,
              borderRadius: Spacing / 2,
              marginHorizontal: Spacing,
            }}
          >
            <Ionicons
              name="logo-facebook"
              color={Colors.text}
              size={Spacing * 2}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({})