import React, {useState, useEffect} from "react";
import { Text, View, TouchableOpacity, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../types/types";
import { FooterProps } from "../../types/types";
import styles from "./styles/Footer";


const Footer: React.FC<FooterProps> = ({
  first_footer_text,
  second_footer_text,
  signUp,
}) => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);
    
    
    
    return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
    };
    }, []);

    const handleKeyboardDidShow = () => {
        setIsKeyboardVisible(true);
    };
      
    const handleKeyboardDidHide = () => {
        setIsKeyboardVisible(false);
    };

  const navigation: NavigationProp = useNavigation();

  const handleNavigation = () => {
    if (signUp) {
      navigation.navigate("Welcome_Screen");
    } else {
      navigation.navigate("SignUp_Screen");
    }
  };

  return (
    <>
    {!isKeyboardVisible && (
    <View style={styles.footer}>
      <Text style={styles.text}>{first_footer_text}</Text>
      <TouchableOpacity onPress={handleNavigation}>
        <Text style={styles.signUpOrSignIn}>{second_footer_text}</Text>
      </TouchableOpacity>
    </View>
    )}
    </>
  );
};

export default Footer;