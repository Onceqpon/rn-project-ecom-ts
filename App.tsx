import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./api/context";
import { FavoritesProvider } from "./api/favouriteContext";
import AppRoutes from "./src/screens/routes/StackNavigator";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <FavoritesProvider>
          <AppProvider>
            <AppRoutes />
          </AppProvider>
        </FavoritesProvider>
      </NavigationContainer>
    </>
  );
}