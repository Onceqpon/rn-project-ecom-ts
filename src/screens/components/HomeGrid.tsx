import { ActivityIndicator, FlatList, View } from "react-native";
import { useState, useEffect } from "react";
import { store } from "../../interface/interface";
import axios, { AxiosResponse } from "axios";

import RenderProducts from "./renderproducts/RenderProducts";

import styles from "./styles/HomeGrid";

const Grid = () => {
  const [data, setData] = useState<store[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<store[]> => {
      try {
        const response: AxiosResponse<store[]> = await axios.get<store[]>(
          "https://my-json-server.typicode.com/Onceqpon/rn-project-ecom-ts/products"
        );
        setData(response.data);
        return response.data;
      } catch (error) {
        console.error("Something went wrong", error);
        throw error;
      }
    };
    fetchData();
  }, []);

  if (data.length === 0) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <FlatList
      numColumns={2}
      data={data}
      renderItem={({ item }) => <RenderProducts {...item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.content}
      scrollEnabled={false}
    ></FlatList>
  );
};

export default Grid;