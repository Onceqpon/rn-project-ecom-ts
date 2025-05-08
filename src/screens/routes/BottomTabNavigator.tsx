import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "./CustomTabBar";
import Cart_Screen from "../Cart";
import Home from "../HomePage";
import CategoryScreen from "../CategoryScreen"; // zaimportuj ekran z kategoriami
import { icons } from "../../assets/icons";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? icons.homeFocused
                  : icons.home
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="KATEGORIE"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? icons.category
                  : icons.category
              }
            />
          ),
        }}
      />


      <Tab.Screen
        name="KOSZYK"
        component={Cart_Screen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? icons.cartFocused
                  : icons.cart
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
