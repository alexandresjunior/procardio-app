import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../../assets/images/procardio_logo_vertical_vermelho.png";

export default function SelecaoPerfil() {
    const navigation = useNavigation();

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
        backgroundColor: "#ffffff"
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
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
        backgroundColor: "#0063c7",
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 16
    },
    textoBotaoPrimario: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: 400
    },
    botaoSecundario: {
        backgroundColor: "#FFF",
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 10,
        borderColor: "#0063c7",
        borderWidth: 1,
        alignItems: "center",
    },
    textoBotaoSecundario: {
        color: "#0063c7",
        fontSize: 15,
        fontWeight: 400
    }
})