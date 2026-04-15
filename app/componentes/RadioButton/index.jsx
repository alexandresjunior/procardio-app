import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function RadioButton({ label, selected, onPress }) {
    return (
        <TouchableOpacity style={estilos.radioContainer} onPress={onPress}>
            <Ionicons
                name={selected ? "radio-button-on" : "radio-button-off"}
                size={20}
                color={selected ? "#007DFF" : "#0063c7"}
            />
            <Text style={[
                estilos.radioLabel,
                selected && { fontWeight: 'bold', color: '#007BFF' }
            ]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    radioContainer: { flexDirection: 'row', alignItems: 'center' },
    radioLabel: { marginLeft: 5, fontSize: 14, color: '#0063c7' },
});