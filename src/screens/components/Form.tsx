import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { show_error } from "./checkingscreen/ValidateInputsForm";
import { FormProps } from "../../types/types";
import { icons } from "../../assets/icons";
import { HomeScreenNavigationProp } from "../../types/types";
import Checkbox from "expo-checkbox";
import Input from "./Input";
import Button from "./Button";
import styles from "./styles/Form";

const Form: React.FC<FormProps> = ({ isSignUpPage, text_button }) => {
  // DEFINE STATES FOR INPUT FIELDS
  const [email, setEmail] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isChecked, setChecked] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // VERIFY IF THE INPUT FIELDS ARE VALID (EMPTY OR NOT)
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);
  const [isUsernameValid, setIsUsernameValid] = React.useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState<boolean>(true);
  const [isTermsValid, setIsTermsValid] = React.useState<boolean>(true);

  const navigation: HomeScreenNavigationProp = useNavigation();

  // HANDLE ERRORS IF THE USERS DOES NOT FILL IN ANY FIELDS
  const handleError = () => {
    if (email === "") {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }

    if (password === "") {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }

    if (isSignUpPage) {
      if (username === "") {
        setIsUsernameValid(false);
      } else {
        setIsUsernameValid(true);
      }
      if (!isChecked) {
        setIsTermsValid(false);
      } else {
        setIsTermsValid(true);
      }
    }
  };

  // HANDLE NAVIGATION TO THE NEXT SCREEN (LOGIN/REGISTRATION API CALL)
  const handleNavigation = async () => {
    if (email.trim().length > 0 && password.trim().length > 0) {
      setIsEmailValid(true);
      setIsPasswordValid(true);

      setIsLoading(true);

      try {
        if (isSignUpPage) {
          // PRZYKŁADOWA REJESTRACJA {JSON} Placeholder API NIE OBSŁUGUJE REJESTRACJI
          const response = await fetch('https://my-json-server.typicode.com/Onceqpon/rn-project-ecom-ts/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              username,
              password,
            }),
          });
          
          const data = await response.json();

          if (data.id) {

            navigation.navigate("Home");
          } else {
            alert("Błąd podczas rejestracji. Spróbuj ponownie.");
          }
        } else {

          const response = await fetch('https://my-json-server.typicode.com/Onceqpon/rn-project-ecom-ts/users');
          const data = await response.json();
          const user = data.find((user: { email: string; password: string }) => user.email === email && user.password === password);

          if (user) {
            navigation.navigate("Home");
          } else {
            setIsEmailValid(false);
            setIsPasswordValid(false);
            alert("Niepoprawne dane logowania");
          }
        }
      } catch (error) {
        alert("Wystąpił błąd. Spróbuj ponownie.");
      } finally {
        setIsLoading(false);
      }
    } else {
      handleError();
    }
  };

  return (
    <>
      {/* EMAIL INPUT */}
      <Input
        placeholder="Your email"
        icon={icons.email}
        value={email}
        onChangeText={setEmail}
        color={isEmailValid ? "#656262" : "#FF4B4B"}
        keyboardType="email-address"
      />
      {show_error(isEmailValid, "Please enter a valid email address.", false)}

      {/* USERNAME INPUT */}
      {isSignUpPage ? (
        <Input
          placeholder="username"
          icon={icons.username}
          value={username}
          onChangeText={setUsername}
          color={isUsernameValid ? "#656262" : "#FF4B4B"}
        />
      ) : null}
      {show_error(isUsernameValid, "Please enter a valid username.", false)}

      {/* PASSWORD INPUT */}
      <Input
        placeholder="Your password"
        icon={icons.password}
        value={password}
        onChangeText={setPassword}
        color={isPasswordValid ? "#656262" : "#FF4B4B"}
        secureTextEntry={true}
      />
      {show_error(isPasswordValid, "Please enter a valid password.", false)}

      {/* CHECKBOX INPUT */}
      {isSignUpPage ? (
        <View style={styles.checkbox_container}>
          <Checkbox
            style={styles.checkbox}
            color={isChecked ? "#D78F3C" : "#ffffff"}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.terms}>
            Agree To <Text style={styles.underline}>Terms And Conditions</Text>
          </Text>
        </View>
      ) : null}
      {show_error(isTermsValid, "Please accept the terms.", true)}

      {/* BUTTON */}
      <Button
        title={text_button}
        onPress={handleNavigation}
        isLoading={isLoading}
      />
    </>
  );
};

export default Form;
