import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
    const [usuario, setUsuario] = useState({});
    const [carregando, setCarregando] = useState(true);
    const [fontes] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold
    });

    const navigation = useNavigation();
    
    useEffect(() => {
        async function carregarDadosUsuario() {
            try {
                const usuarioLogado = await AsyncStorage.getItem('@procardio_user');

                if (usuarioLogado) {
                    setUsuario(JSON.parse(usuarioLogado));
                }
            } catch (erro) {
                console.error('Erro ao carregar dados do usuário: ' + erro);
            } finally {
                setCarregando(false);
            }
        }
        
        carregarDadosUsuario();
    }, []);
    
    if (!fontes) {
        return null;
    }

    async function signOut() {
        try {
            await AsyncStorage.removeItem('@procardio_user');

            navigation.navigate('SelecaoPerfil');
        } catch (erro) {
            console.error('Erro ao remover dados do usuário: ' + erro);
        } finally {
            setUsuario({});
        }
    }

    return (
        <GlobalContext value={{ usuario, carregando, fontes, signOut }}>
            { children }
        </GlobalContext>
    )
}