import { View } from "react-native";
import React from "react";
import Grid from "./components/CategoryGrid";

import Header from "./components/Header";

import styles from "./styles/HomePage";

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      {}

        <Grid />
    </View>
  );
};

export default CategoryScreen;