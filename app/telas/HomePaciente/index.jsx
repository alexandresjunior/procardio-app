import { Feather, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FiltroModal from "../../componentes/FiltroModal";
import NotaEstrela from "../../componentes/NotaEstrela";
import { listarProfissionais } from "../../servicos/profissionais";

const NOTAS = [1, 2, 3, 4, 5];

export default function HomePaciente() {
    const navigation = useNavigation();

    const [usuario, setUsuario] = useState(null);

    const [modalVisivel, setModalVisivel] = useState(false);

    const [profissionais, setProfissionais] = useState([]);

    const handleFiltrarBusca = (filtros) => {
        setModalVisivel(false);     // Oculta o modal

        const resultadosFiltrados = profissionais.filter((medico) => {
            let match = true;

            if (filtros.especialidade && filtros.especialidade !== medico.especialidade) {
                match = false;
            }

            if (filtros.tipoConsulta && filtros.tipoConsulta !== 'Ambos') {
                if (!medico.modalidade.includes(filtros.tipoConsulta)) {
                    match = false;
                }
            }

            if (filtros.nome && !medico.nome.toLowerCase().includes(filtros.nome.toLowerCase())) {
                match = false;
            }

            if (filtros.pagamento && medico.pagamento !== filtros.pagamento) {
                match = false;
            }

            return match;
        })

        navigation.navigate('ResultadosBusca', { resultados: resultadosFiltrados });
    }

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
        listarProfissionais(setProfissionais);
    }, []);

    const saudacao = usuario?.sexo === 'M' ? "Bem-vindo" : "Bem-vinda";

    const primeiroNome = usuario?.nome.split(' ')[0];

    return (
        <SafeAreaView style={estilos.container}>
            <FlatList
                data={profissionais}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={estilos.card}>
                        <Image style={estilos.cardImage} source={{ uri: item.avatar }} />
                        <View style={estilos.cardInfo}>
                            <View style={estilos.cardHeader}>
                                <Text style={estilos.cardName}>{item.nome}</Text>
                                <TouchableOpacity>
                                    <Ionicons
                                        name={item.favorito ? "heart" : "heart-outline"}
                                        size={20}
                                        color={'#FF3B30'}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={estilos.cardSpecialty}>{item.especialidade}</Text>
                            <View style={estilos.ratingContainer}>
                                <NotaEstrela nota={item.avaliacao} />
                                <Text style={estilos.ratingText}>
                                    {item.avaliacao} | {item.reviews} avaliações
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
                ListHeaderComponent={() => (
                    <>
                        <View style={estilos.header}>
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Feather name="menu" size={28} color={'#333'} />
                            </TouchableOpacity>
                            <Text style={estilos.greetingText}>
                                {saudacao}, <Text style={estilos.greetingName}>{primeiroNome}</Text>
                            </Text>
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
                                style={estilos.profilePic}
                            />
                        </View>

                        <Text style={estilos.sectionTitle}>Em busca de um profissional?</Text>

                        <TouchableOpacity 
                            style={estilos.searchContainer}
                            activeOpacity={0.8}
                            onPress={() => setModalVisivel(true)}
                        >
                            <Ionicons
                                name="search"
                                size={20}
                                color={"#0063C7"}
                                style={estilos.searchIcon}
                            />
                            <Text style={estilos.searchText}>Encontre sua especialidade desejada</Text>
                        </TouchableOpacity>

                        <Text style={estilos.subTitle}>Recomendações</Text>
                    </>
                )}
                contentContainerStyle={estilos.listContent}
                showsVerticalScrollIndicator={false}
            />

            <FiltroModal 
                visivel={modalVisivel}
                aoFechar={() => setModalVisivel(false)}
                aoBuscar={handleFiltrarBusca}
            />
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FAFAFA' },
    listContent: { padding: 20, paddingBottom: 30 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30, marginTop: 10 },
    greetingText: { fontSize: 20, color: '#0056b3', textAlign: 'center' },
    greetingName: { fontWeight: 'bold' },
    profilePic: { width: 45, height: 45, borderRadius: 22.5 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15 },
    searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 10, paddingHorizontal: 15, paddingVertical: 12, borderWidth: 1, borderColor: '#EEE', marginBottom: 15 },
    searchIcon: { marginRight: 10 },
    searchText: { flex: 1, fontSize: 14, color: '#999' },
    subTitle: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 15 },
    card: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 12, padding: 15, marginBottom: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
    cardImage: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
    cardInfo: { flex: 1, justifyContent: 'center' },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    cardName: { fontSize: 16, fontWeight: 'bold', color: '#0056b3' },
    cardSpecialty: { fontSize: 13, color: '#666', marginTop: 2, marginBottom: 6 },
    ratingContainer: { flexDirection: 'row', alignItems: 'center' },
    ratingText: { fontSize: 12, color: '#666', marginLeft: 5 },
    bottomTabs: { flexDirection: 'row', backgroundColor: '#FFF', paddingVertical: 15, borderTopWidth: 1, borderTopColor: '#EEE', justifyContent: 'space-around', position: 'absolute', bottom: 0, width: '100%' },
    tabItem: { alignItems: 'center' },
    tabText: { fontSize: 10, color: '#666', marginTop: 4 },
});