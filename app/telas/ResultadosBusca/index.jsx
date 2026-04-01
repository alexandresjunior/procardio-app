import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const RESULTADOS = [
    { id: '1', nome: 'Fábio Almeida', especialidade: 'Psicólogo', avaliacao: '5.0', reviews: '83', pagamento: 'Particular', consulta: 'R$ 250,00', modalidade: 'Online', favorito: false, avatar: 'https://i.pravatar.cc/150?img=33', data: 'Terça 14 - Dezembro', horarios: ['11:00', '12:00'] },
    { id: '2', nome: 'Anna Borges', especialidade: 'Psicóloga', avaliacao: '5.0', reviews: '73', pagamento: 'Particular', consulta: 'R$ 200,00', modalidade: 'Online e Presencial', favorito: false, avatar: 'https://i.pravatar.cc/150?img=47', data: 'Terça 14 - Dezembro', horarios: ['8:00', '9:00', '11:00'] },
    { id: '3', nome: 'Juliana Dias', especialidade: 'Psicóloga', avaliacao: '4.9', reviews: '66', pagamento: 'Particular', consulta: 'R$ 255,00', modalidade: 'Online e Presencial', favorito: false, avatar: 'https://i.pravatar.cc/150?img=44', data: 'Terça 14 - Dezembro', horarios: [] },
];

export default function ResultadosBusca() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={estilos.container}>
            <View style={estilos.header}>
                <TouchableOpacity style={estilos.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={28} color={"#000"} />
                </TouchableOpacity>
                <Text style={estilos.headerTitle}>Busca por psicólogos</Text>
                <View style={{ width: 28 }}></View>
            </View>

            <FlatList
                data={RESULTADOS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={estilos.card}>
                        {/* TODO: DEFINIR CONTEÚDO DA VIEW */}
                    </View>
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