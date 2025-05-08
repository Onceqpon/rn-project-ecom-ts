import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./api/context";
import { FavoritesProvider } from "./api/favouriteContext";
import AppRoutes from "./src/screens/routes/StackNavigator";
import { UserProvider } from "./api/UserContext"; // Zaimportuj UserProvider

export default function App() {
  return (
    <NavigationContainer>
      <FavoritesProvider>
        <AppProvider>
          <UserProvider> {/* Owiń aplikację w UserProvider */}
            <AppRoutes />
          </UserProvider>
        </AppProvider>
      </FavoritesProvider>
    </NavigationContainer>
  );
}
