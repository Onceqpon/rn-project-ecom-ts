import React from "react";
import { Text } from "react-native";
import styles from "../styles/Form";

export function show_error(
  isValueValid: boolean,
  text: string,
  isTerms: boolean
) {
  if (!isValueValid) {

    if (isTerms) {
      return <Text style={styles.validationTerms}>{text}</Text>;
    } else {
      return <Text style={styles.validationText}>{text}</Text>;
    }
  }
}