import { Alert } from "react-native";
import api from "./api";

export async function listarProfissionais(setProfissionais) {
    try {
        await api.get('/profissionais')
                 .then((resposta) => setProfissionais(resposta.data));
    } catch (erro) {
        Alert.alert("Erro ao listar profissionais: ", erro);
    }
}

export async function buscarProfissional(id, setProfissional) {
    try {
        await api.get(`/profissionais/${id}`)
                 .then((resposta) => setProfissional(resposta.data));
    } catch (erro) {
        Alert.alert("Erro ao buscar profissional: ", erro);
    }
}