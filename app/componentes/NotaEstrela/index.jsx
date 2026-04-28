import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export default function NotaEstrela({ nota }) {
    const estrelas = [];

    for (let i = 1; i <= 5; i++) {
        if (nota >= i) {
            estrelas.push(
                <FontAwesome 
                    key={i} 
                    name="star" 
                    size={14} 
                    color={"#FFD700"} 
                    style={estilos.star} 
                />
            );
        } else if (nota >= i - 0.5) {
            estrelas.push(
                <FontAwesome 
                    key={i} 
                    name="star-half-empty" 
                    size={14} 
                    color={"#FFD700"} 
                    style={estilos.star} 
                />
            );
        } else {
            estrelas.push(
                <FontAwesome 
                    key={i} 
                    name="star-o" 
                    size={14} 
                    color={"#FFD700"} 
                    style={estilos.star} 
                />
            );
        }
    }

    return <View style={estilos.container}>{estrelas}</View>
}

const estilos = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center' },
    star: { marginRight: 2 }
});