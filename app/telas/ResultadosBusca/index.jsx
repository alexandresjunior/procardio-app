import { FontAwesome, Ionicons } from "@expo/vector-icons";
import * as Print from 'expo-print';
import { useNavigation } from "expo-router";
import * as Sharing from 'expo-sharing';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RESULTADOS = [
    { id: '1', nome: 'Fábio Almeida', especialidade: 'Psicólogo', avaliacao: '5.0', reviews: '83', pagamento: 'Particular', consulta: 'R$ 250,00', modalidade: 'Online', favorito: false, avatar: 'https://i.pravatar.cc/150?img=33', data: 'Terça 14 - Dezembro', horarios: ['11:00', '12:00'] },
    { id: '2', nome: 'Anna Borges', especialidade: 'Psicóloga', avaliacao: '5.0', reviews: '73', pagamento: 'Particular', consulta: 'R$ 200,00', modalidade: 'Online e Presencial', favorito: false, avatar: 'https://i.pravatar.cc/150?img=47', data: 'Terça 14 - Dezembro', horarios: ['8:00', '9:00', '11:00'] },
    { id: '3', nome: 'Juliana Dias', especialidade: 'Psicóloga', avaliacao: '4.9', reviews: '66', pagamento: 'Particular', consulta: 'R$ 255,00', modalidade: 'Online e Presencial', favorito: false, avatar: 'https://i.pravatar.cc/150?img=44', data: 'Terça 14 - Dezembro', horarios: [] },
];

export default function ResultadosBusca() {
    const navigation = useNavigation();

    const gerarPDF = async () => {
        try {
            const linhasTabela = RESULTADOS.map((medico) => (
                `
                    <tr>
                        <td>${medico.nome}</td>
                        <td>${medico.especialidade}</td>
                        <td>${medico.consulta}</td>
                    </tr>
                `
            )).join('');

            const conteudoHTML = `
                <html>
                    <head>
                        <style>
                            body { font-family: Arial; padding: 20px; }
                            h1 { color: #0056b3; }
                            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                            th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
                            th { background-color: #f2f2f2; }
                        </style>
                    </head>
                    <body>
                        <h1>Relatório de Profissionais</h1>
                        <p>Abaixo estão os resultados da sua busca:</p>
                        <table>
                            <tr>
                                <th>Nome</th>
                                <th>Especialidade</th>
                                <th>Valor</th>
                            </tr>
                            ${linhasTabela}
                        </table>
                    </body>
                </html>
            `;

            const { uri } = await Print.printToFileAsync({ html: conteudoHTML });

            const compDisp = await Sharing.isAvailableAsync();

            if (compDisp) {
                await Sharing.shareAsync(uri);
            } else {
                Alert.alert('Erro', 'O compartilhamento não está disponível neste dispositivo.');
            }
        } catch (erro) {
            Alert.alert('Erro', 'Não foi possível gerar o PDF: ' + erro);
        }
    }

    return (
        <SafeAreaView style={estilos.container}>
            <View style={estilos.header}>
                <TouchableOpacity style={estilos.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={28} color={"#000"} />
                </TouchableOpacity>
                <Text style={estilos.headerTitle}>Busca por psicólogos</Text>
                <View style={{ width: 28 }}></View>
            </View>

            <View style={{ padding: 20 }}>
                <TouchableOpacity style={{ 
                    backgroundColor: "#FF3B30", 
                    padding: 15, 
                    borderRadius: 8, 
                    alignItems: 'center' 
                }}
                onPress={gerarPDF}
                >
                    <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Exportar resultados em PDF</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={RESULTADOS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('PerfilProfissional', { idProfissional: item.id })}>
                        <View style={estilos.cardTop}>
                            <Image style={estilos.cardImage} source={{ uri: item.avatar }} />

                            <View style={estilos.cardInfo}> 
                                <View style={estilos.cardHeaderRow}>
                                    <Text style={estilos.cardName}>{item.nome}</Text>
                                    <TouchableOpacity>
                                        <Ionicons 
                                            name={item.favorito ? "heart" : "heart-outline"} 
                                            color={"#FF3B30"} 
                                            size={20}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <Text style={estilos.cardSpecialty}>{item.especialidade}</Text>

                                <View style={estilos.ratingContainer}>
                                    { [1, 2, 3, 4, 5].map((estrela) => (
                                        <FontAwesome key={estrela} name="star" size={12} color={"#FFD700"} />
                                    )) }
                                    <Text style={estilos.ratingText}>{item.avaliacao} | {item.reviews} avaliações</Text>
                                </View>

                                <View style={estilos.detailsContainer}>
                                    <Text style={estilos.detailText}>
                                        <Text style={estilos.detailLabel}>Forma de Pagamento: </Text>
                                        {item.pagamento}
                                    </Text>
                                    <Text style={estilos.detailText}>
                                        <Text style={estilos.detailLabel}>Consulta: </Text>
                                        {item.consulta}
                                    </Text>
                                    <Text style={estilos.detailText}>{item.modalidade}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={estilos.availabilityContainer}>
                            <Text style={estilos.dateText}>{item.data}</Text>
                            <View style={estilos.timeSlotsRow}>
                                {
                                    item.horarios.length > 0 ? (
                                        item.horarios.map((horario, idx) => (
                                            <Text style={estilos.timeSlot} key={idx}>
                                                <Text style={estilos.timeSlotText}>{horario}</Text>
                                            </Text>
                                        ))
                                    ) : (
                                        <Text style={estilos.noTimeText}>Sem horários disponíveis hoje!</Text>
                                    )
                                }
                            </View>
                        </View>


                    </TouchableOpacity>
                )}
                contentContainerStyle={estilos.listContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FAFAFA' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 20 },
    backButton: { padding: 5, marginLeft: -5 },
    headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
    scrollContent: { paddingHorizontal: 20, paddingBottom: 30 },
    card: { backgroundColor: '#FFF', borderRadius: 12, padding: 15, marginBottom: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
    cardTop: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#F0F0F0', paddingBottom: 15, marginBottom: 15 },
    cardImage: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
    cardInfo: { flex: 1 },
    cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    cardName: { fontSize: 16, fontWeight: 'bold', color: '#0056b3' },
    cardSpecialty: { fontSize: 13, color: '#0056b3', marginTop: 2, marginBottom: 6 },
    ratingContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    ratingText: { fontSize: 11, color: '#666', marginLeft: 5 },
    detailsContainer: { marginTop: 5 },
    detailText: { fontSize: 11, color: '#555', marginBottom: 2 },
    detailLabel: { fontWeight: 'bold', color: '#333' },
    availabilityContainer: { marginTop: 5 },
    dateText: { fontSize: 13, fontWeight: 'bold', color: '#333', marginBottom: 10 },
    timeSlotsRow: { flexDirection: 'row', flexWrap: 'wrap' },
    timeSlot: { backgroundColor: '#0056b3', borderRadius: 20, paddingVertical: 6, paddingHorizontal: 15, marginRight: 10, marginBottom: 10 },
    timeSlotText: { color: '#FFF', fontSize: 12, fontWeight: '600' },
    noTimeText: { fontSize: 12, color: '#999', fontStyle: 'italic' },
    listContent: { paddingHorizontal: 20, paddingBottom: 30 }
});