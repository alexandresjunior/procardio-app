import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MenuLateral from "./app/componentes/MenuLateral";
import HomePaciente from "./app/telas/HomePaciente";
import Login from "./app/telas/Login";
import PerfilProfissional from "./app/telas/PerfilProfissional";
import ResultadosBusca from "./app/telas/ResultadosBusca";
import SelecaoPerfil from "./app/telas/SelecaoPerfil";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({ 
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomePaciente") iconName = focused ? 'home' : 'home-outline'
          else if (route.name === "Mensagens") iconName = focused ? 'chatbox' : 'chatbox-outline'
          else if (route.name === "Consultas") iconName = focused ? 'calendar' : 'calendar-outline'
          else if (route.name === "Favoritos") iconName = focused ? 'heart' : 'heart-outline'

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: "#0063c7",
        tabBarInactiveTintColor: "#666",
        headerShown: false
       })}
    >
      { /** TODO: Incluir as telas 'children' de HomePaciente */}
      <Tab.Screen name="HomePaciente" component={HomePaciente} options={{ tabBarLabel: "Home" }} />
      {/* TEMPORÁRIO */}
      <Tab.Screen name="Mensagens" component={ResultadosBusca} />
      <Tab.Screen name="Consultas" component={HomePaciente} />
      <Tab.Screen name="Favoritos" component={HomePaciente} />
    </Tab.Navigator>
  )
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuLateral {...props} />}
      screenOptions={{ headerShown: false, drawerStyle: { width: "80%"}, drawerType: "front" }}
    >
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelecaoPerfil" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SelecaoPerfil" component={SelecaoPerfil} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="ResultadosBusca" component={ResultadosBusca} />
        <Stack.Screen name="PerfilProfissional" component={PerfilProfissional} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
