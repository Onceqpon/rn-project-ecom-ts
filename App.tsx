import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./api/context";
import { FavoritesProvider } from "./api/favouriteContext";
import AppRoutes from "./src/screens/routes/StackNavigator";
import { UserProvider } from "./api/UserContext";
import { CategoryProvider } from "./api/CategoryContext";

export default function App() {
  return (
    <NavigationContainer>
      <FavoritesProvider>
        <CategoryProvider>
          <AppProvider>
            <UserProvider>
              <AppRoutes />
            </UserProvider>
          </AppProvider>
        </CategoryProvider>
      </FavoritesProvider>
    </NavigationContainer>
  );
}
