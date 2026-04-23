import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../../assets/images/procardio_logo_vertical_vermelho.png";
import { GlobalContext } from "../../contextos/GlobalContext";
import { tema } from "../../tema";

export default function SelecaoPerfil() {
    const navigation = useNavigation();
    const { fontes } = useContext(GlobalContext);

    return (
        <SafeAreaView style={estilos.safeArea}>
            <View style={estilos.container}>
                {/* Espaço para a logomarca */}
                <View style={estilos.logoContainer}>
                  <Image source={logo} style={estilos.logo} resizeMode="contain"/>
                </View>

                {/* Espaço para os botões */}
                <View style={estilos.botoesContainer}>
                    <TouchableOpacity style={estilos.botaoPrimario} onPress={() => navigation.navigate("Login", { perfil: "profissional" })}>
                        <Text style={estilos.textoBotaoPrimario}>Sou Profissional de Saúde</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.navigate("Login", { perfil: "paciente" })}>
                        <Text style={estilos.textoBotaoSecundario}>Sou Paciente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: tema.colors.background
    },
    container: {
        flex: 1,
        paddingHorizontal: tema.spacing.large,
        justifyContent: "space-between",
        alignItems: "center"
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 200,
        height: 200
    },
    botoesContainer: {
        paddingBottom: 20
    },
    botaoPrimario: {
        backgroundColor: tema.colors.primary,
        paddingVertical: tema.spacing.medium,
        paddingHorizontal: tema.spacing.xlarge,
        borderRadius: tema.borderRadius.medium,
        alignItems: "center",
        marginBottom: tema.spacing.medium
    },
    textoBotaoPrimario: {
        fontFamily: 'Roboto_400Regular',
        color: tema.colors.white,
        fontSize: 15
    },
    botaoSecundario: {
        backgroundColor: tema.colors.white,
        paddingVertical: tema.spacing.medium,
        paddingHorizontal: tema.spacing.xlarge,
        borderRadius: tema.borderRadius.medium,
        borderColor: tema.colors.primary,
        borderWidth: 1,
        alignItems: "center",
    },
    textoBotaoSecundario: {
        fontFamily: 'Roboto_400Regular',
        color: tema.colors.primary,
        fontSize: 15
    }
})