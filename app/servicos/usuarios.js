import { Alert } from "react-native";
import api from "./api";

export async function listarUsuarios(setUsuarios) {
    try {
        // const resposta = await api.get('/usuarios');
        // setUsuarios(resposta.data);

        await api.get('/usuarios').then((resposta) => setUsuarios(resposta.data));
    } catch (erro) {
        Alert.alert("Erro ao listar usuários: ", erro);
    }
}