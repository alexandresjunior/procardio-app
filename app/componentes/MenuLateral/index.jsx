import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { tema } from "../../tema";

export default function MenuLateral() {
    const navigation = useNavigation();

    const [usuario, setUsuario] = useState(null);

    // TODO: Isolar lógica em um contexto global
    useEffect(() => {
        const carregarUsuario = async () => {
            try {
                const usuarioLogado = await AsyncStorage.getItem('@procardio_user');

                if (usuarioLogado !== null) {
                    setUsuario(JSON.parse(usuarioLogado));
                }
            } catch (erro) {
                console.error('Erro ao carregar dados do usuário: ' + erro);
            }
        }

        carregarUsuario();
    }, []);

    const handleSair = async () => {
        try {
            await AsyncStorage.removeItem('@procardio_user');

            navigation.navigate('SelecaoPerfil');
        } catch (erro) {
            console.error('Erro ao remover dados do usuário: ' + erro);
        }
    }

    return (
        <View style={estilos.container}>
            <View style={estilos.profileSection}>
                <Image
                    source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
                    style={estilos.profilePic}
                />
                <Text style={estilos.profileName}>{usuario?.nome}</Text>
            </View>

            <View style={estilos.menuItemsList}>
                <MenuItem icon={"user"} label={"Editar Perfil"} IconComponent={Feather} />
                <MenuItem icon={"receipt-outline"} label={"Recibos de Pagamento"} IconComponent={Ionicons} />
                <MenuItem icon={"pill"} label={"Minhas Receitas"} IconComponent={MaterialCommunityIcons} />
                <MenuItem icon={"file-document-outline"} label={"Editar Perfil"} IconComponent={MaterialCommunityIcons} />
                <MenuItem icon={"bell-outline"} label={"Notificações"} IconComponent={MaterialCommunityIcons} />
            </View>

            <View style={estilos.footer}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#EEE' }}>
                    <MenuItem icon={"help-circle-outline"} label={"Ajuda"} IconComponent={Ionicons} />
                </View>
                <MenuItem
                    icon={"log-out-outline"}
                    label={"Sair"}
                    action={handleSair}
                    IconComponent={Ionicons}
                />
            </View>
        </View>
    )
}

function MenuItem({ icon, label, IconComponent, action }) {
    return (
        <TouchableOpacity style={estilos.drawerItem} onPress={action}>
            <IconComponent name={icon} size={22} color="#0063c7" style={estilos.itemIcon} />
            <Text style={estilos.itemText}>{label}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: tema.colors.white,
        paddingTop: 60,
        paddingHorizontal: 20
    },
    profileSection: { marginBottom: 40, alignItems: 'center', alignSelf: 'flex-start' },
    profilePic: { width: 60, height: 60, borderRadius: 30, marginBottom: 10 },
    profileName: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        color: tema.colors.text
    },
    menuItemsList: { flex: 1 },
    drawerItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15 },
    itemIcon: { marginRight: 20, width: 25, textAlign: 'center' },
    itemText: { 
        fontSize: 15, 
        color: tema.colors.text 
    },
    footer: { paddingTop: 10, paddingBottom: 30 },
});