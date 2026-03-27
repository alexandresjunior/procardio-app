import { Image, StyleSheet, Text, View } from "react-native";

export default function MenuLateral() {
    return (
        <View style={estilos.container}>
            <View style={estilos.profileSection}>
                <Image 
                    source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
                    style={estilos.profilePic}
                />
                <Text style={estilos.profileName}>Victor Araújo</Text>
            </View>

            {/* TODO: IMPLEMENTAR LISTA DE ITENS DO MENU */}
            
            {/* TODO: IMPLEMENTAR RODAPÉ */}
        </View>
    )
}

const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingTop: 60, paddingHorizontal: 20 },
  profileSection: { marginBottom: 40, alignItems: 'center', alignSelf: 'flex-start' },
  profilePic: { width: 60, height: 60, borderRadius: 30, marginBottom: 10 },
  profileName: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  menuItemsList: { flex: 1 },
  drawerItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15 },
  itemIcon: { marginRight: 20, width: 25, textAlign: 'center' },
  itemText: { fontSize: 15, color: '#333' },
  footer: { borderTopWidth: 1, borderTopColor: '#EEE', paddingTop: 10, paddingBottom: 30 },
});