import { Alert } from "react-native";
import api from "./api";

export async function listarProfissionais(setProfissionais) {
    try {
        await api.get('/profissionais').then((resposta) => setProfissionais(resposta.data));
    } catch (erro) {
        Alert.alert("Erro ao listar profissionais: ", erro);
    }
}