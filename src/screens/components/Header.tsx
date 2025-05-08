import React from "react";
import { View, Text } from "react-native";
import Image from "./CartComponent";
import styles from "./styles/Header";
import { useUser } from "../../../api/UserContext";

const Header = () => {
  const { userName } = useUser(); 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.name}>{userName ? userName : "Guest"}</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.headerRight}>
          <Image />
        </View>
      </View>
    </View>
  );
};

export default Header;
