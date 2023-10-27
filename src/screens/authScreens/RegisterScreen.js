import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useContext,useState } from "react";
  import Spacing from "../../global/constants/Spacing";
  import FontSize from "../../global/constants/FontSize";
  import Colors from "../../global/constants/Colors";
  import { parameters } from "../../global/styles";
  import { Ionicons } from "@expo/vector-icons";
  import AuthInput from "../../components/AuthtInput";
  import {useNavigation} from '@react-navigation/native';
//import { auth } from '../../../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs,addDoc,updateDoc,doc ,set,setDoc} from "firebase/firestore"; 
import { db } from '../../../firebase';


export default function RegisterScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState();

    const auth = getAuth();
    const handleSignUp = () => {
  
      createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        // Signed in         
        //Once the user creation has happened successfully, we can add the currentUser into firestore
              //with the appropriate details.
              const user = userCredentials.user;

        const adduser = async() => {    

              const docRef = doc(db, "users", user.uid); 

              await setDoc(docRef,{
                username: '',
                about: '',
                phone: '',
                country: '',
                city: '',
                cart:[],
                WishList:[],
              
              })
            }
          
              adduser();
      
        console.log('Registered with:', user.email);
        // ...
      })
      .catch(error => alert(error.message))
    }
    
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
                Create account
              </Text>
              <Text
                style={{
                  
                  fontSize: FontSize.small,
                  maxWidth: "80%",
                  textAlign: "center",
                }}
              >
                Create an account so you can explore all the existing jobs
              </Text>
            </View>
            <View
              style={{
                marginVertical: Spacing * 3,
              }}
            >
              <AuthInput placeholder="Email"       value={email}
                                        onChangeText={text => setEmail(text)} />
              <AuthInput placeholder="Password"       value={password}
                                        onChangeText={text => setPassword(text)} />
              <AuthInput placeholder="Confirm Password" />
            </View>
    
            <TouchableOpacity
             onPress={handleSignUp}
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
                Sign up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
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
                Already have an account
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