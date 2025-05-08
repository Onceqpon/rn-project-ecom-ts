import { ActivityIndicator, FlatList, View } from "react-native";
import { useState, useEffect } from "react";
import { store } from "../../interface/interface";
import axios, { AxiosResponse } from "axios";
import { useCategory } from "../../../api/CategoryContext"; 

import RenderProducts from "./renderproducts/RenderProducts";
import styles from "./styles/HomeGrid";

const Grid = () => {
  const [data, setData] = useState<store[]>([]);
  const [refreshing, setRefreshing] = useState(false); // Dodaj stan dla odświeżania
  const { category } = useCategory();

  // Funkcja do pobierania danych
  const fetchData = async (): Promise<store[]> => {
    try {
      console.log("Category:", category); // Sprawdź kategorię
      if (!category || category.title === "Wszystko") {
        const response: AxiosResponse<store[]> = await axios.get<store[]>(
          "https://my-json-server.typicode.com/Onceqpon/rn-project-ecom-ts/product"
        );
        setData(response.data);
        return response.data;
      } else {
        const response: AxiosResponse<store[]> = await axios.get<store[]>(
          "https://my-json-server.typicode.com/Onceqpon/rn-project-ecom-ts/product"
        );
        const filteredData = response.data.filter((product) => product.category === category?.title);
        setData(filteredData);
        return filteredData;
      }
    } catch (error) {
      console.error("Something went wrong", error);
      throw error;
    }
  };

  // Używamy useEffect, aby załadować dane przy pierwszym renderowaniu i zmianie kategorii
  useEffect(() => {
    fetchData();
  }, [category]);

  // Funkcja do obsługi odświeżania
  const handleRefresh = async () => {
    setRefreshing(true); // Ustawiamy stan odświeżania na true
    await fetchData(); // Ładujemy dane ponownie
    setRefreshing(false); // Ustawiamy stan odświeżania na false
  };

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
      scrollEnabled={true} // Włączamy przewijanie
      onRefresh={handleRefresh} // Funkcja wywoływana przy odświeżaniu
      refreshing={refreshing} // Określamy, czy lista jest w trakcie odświeżania
    />
  );
};

export default Grid;
