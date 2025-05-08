import React from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import { useCategory } from "../../../../api/CategoryContext";
import { CategoryProps } from "../../../interface/interface"; 
import { DetailsScreenNavigationProp } from "../../../types/types"; 
import styles from "./styles/RenderCategories"; 

const RenderCategories: React.FC<CategoryProps> = ({ id, title }) => {
  const navigation = useNavigation<DetailsScreenNavigationProp>(); 
  const { setCategory } = useCategory(); 

  const handleNavigate = () => {
    setCategory({ categoryId: id, title }); 
    console.log("Category ID:", id);
    console.log("Category Title:", title);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.card, pressed && styles.pressed]}
        onPress={handleNavigate} // Wywołanie handleNavigate po naciśnięciu
      >
        <View style={styles.titleContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {title} {/* Nazwa kategorii */}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default RenderCategories;
