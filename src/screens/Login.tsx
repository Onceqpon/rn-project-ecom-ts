import {
  KeyboardAvoidingView,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import styles from "./styles/Login";
import Footer from "./components/Footer";
import Form from "./components/Form";


const Login_Screen = () => {
  const windowHeight = Dimensions.get("window").height;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={200}
    >
      <View style={{ height: windowHeight }}>
        {/* WELCOME TITLE */}
        <Text style={styles.title}>Witaj</Text>

        <View style={[styles.inputs]}>
          {/* LOGIN FORM */}
          <Form isSignUpPage={false} text_button="ZALOGUJ" />
        </View>
      </View>

      <Footer
        signUp={false}
        first_footer_text="Nie masz jeszcze konta?"
        second_footer_text="Zarejestruj się"
      />
    </KeyboardAvoidingView>
  );
};

export default Login_Screen;
