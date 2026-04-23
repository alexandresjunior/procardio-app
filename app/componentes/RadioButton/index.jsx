import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { tema } from "../../tema";

export default function RadioButton({ label, selected, onPress }) {
    return (
        <TouchableOpacity style={estilos.radioContainer} onPress={onPress}>
            <Ionicons
                name={selected ? "radio-button-on" : "radio-button-off"}
                size={20}
                color={selected ? tema.colors.secondary : tema.colors.primary}
            />
            <Text style={[
                estilos.radioLabel,
                selected && { fontWeight: 'bold', color: tema.colors.secondary }
            ]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    radioContainer: { flexDirection: 'row', alignItems: 'center' },
    radioLabel: { marginLeft: 5, fontSize: 14, color: tema.colors.primary },
});