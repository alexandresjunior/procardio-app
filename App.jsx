import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePaciente from "./app/telas/HomePaciente";
import Login from "./app/telas/Login";
import SelecaoPerfil from "./app/telas/SelecaoPerfil";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelecaoPerfil" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SelecaoPerfil" component={SelecaoPerfil} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePaciente" component={HomePaciente} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
