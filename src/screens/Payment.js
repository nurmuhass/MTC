import React from 'react';
import { View, Text, TouchableOpacity ,SafeAreaView,FlatList,Pressable} from 'react-native'
import PaystackWebView from 'react-native-paystack-webview';


export default function Payment({navigation,route})  {

  return (
    <SafeAreaView style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
      
      <PaystackWebView
        buttonText="pay now"
        showPayButton={false}
        paystackKey="pk_test_38de4f6c2691578d8b0bad467c598c7b41a6602e"
        paystackSecretKey="sk_test_ce788acb98bc823a5c47a490fac6524069c18251"
        amount={'3456766.00'}
        Currency="NGN"
        billingEmail="nurmuhass@gmail.com"
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
            console.log(res);
            navigation.navigate("My Orders")
           
        }}
        autoStart={true}
      />
  
    </SafeAreaView>
  );
}

