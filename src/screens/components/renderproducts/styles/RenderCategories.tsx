import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  card: {
    width: "100%",
    height: 50,
    backgroundColor: "#F5F5F5",
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  pressed: {
    backgroundColor: "#ddd",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",  // Kolor tekstu
    textAlign: "center",
  },
});

export default styles;
