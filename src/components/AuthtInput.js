import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../global/constants/Colors";
import Font from "../global/constants/Font";
import FontSize from "../global/constants/FontSize";
import Spacing from "../global/constants/Spacing";



export default function AuthtInput({...otherProps }) {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      style={[
        {
          
          fontSize: FontSize.small,
          padding: Spacing * 2,
          backgroundColor: '#fff',
          borderRadius: Spacing,
          marginVertical: Spacing,
          borderWidth: 3,
          borderColor: '#f0f0f0',
        },
        focused && {
          borderWidth: 3,
          borderColor: Colors.primary,
          shadowOffset: { width: 4, height: Spacing },
          shadowColor: Colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
      ]}
      {...otherProps}
    />
  );
};



const styles = StyleSheet.create({});
