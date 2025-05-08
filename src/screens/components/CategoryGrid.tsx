import { ActivityIndicator, FlatList, View } from "react-native";
import { useState, useEffect } from "react";
import { store } from "../../interface/interface";
import axios, { AxiosResponse } from "axios";

import RenderCategories from "./renderproducts/RenderCategories";

import styles from "./styles/HomeGrid";

const CategoryGrid = () => {
    const [categories, setCategories] = useState<any[]>([]); // Używamy dowolnego typu dla kategorii, w zależności od struktury
  
    useEffect(() => {
      const fetchCategories = async (): Promise<any[]> => {
        try {
          const response: AxiosResponse<any[]> = await axios.get<any[]>(
            "https://my-json-server.typicode.com/Onceqpon/rn-project-ecom-ts/categories"
          );
          setCategories(response.data);
          console.log("Fetched categories:", response.data); // Sprawdź dane
          return response.data;
        } catch (error) {
          console.error("Something went wrong", error);
          throw error;
        }
      };
      fetchCategories();
    }, []);
  
    if (categories.length === 0) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    }
  
    return (
        <FlatList
        numColumns={2}
        data={categories}
        renderItem={({ item }) => (
          <RenderCategories
            id={item.id}
            title={item.category}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  };
  
  export default CategoryGrid;
  