import { ScrollView, View } from "react-native";
import React from "react";
import Grid from "./components/HomeGrid";

import Header from "./components/Header";

import styles from "./styles/HomePage";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* GRID COMPONENT */}

      <ScrollView>
        <Grid />
      </ScrollView>
    </View>
  );
};

export default Home;