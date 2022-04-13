import { createContext } from "react";
import { api } from "../services/api";

const dadosCadastro = {
    nome: "",
    email: "",
    senha: "",
}

export const CadastroContext = createContext(dadosCadastro)


export const CadastroContextProvider = (props) => {
    const criarUsuario = (data) => {
        const randomId = (max, min) => Math.floor(Math.random() * (max - min) + min)
        let objUsuario = {
            id: randomId(1, Infinity),
            nome: data.nome,
            email: data.email,
            senha: data.senha,
        }
        api.post('/usuario', objUsuario)
    }
    return(
        <CadastroContext.Provider value={{criarUsuario}}>
            {props.children}
        </CadastroContext.Provider>
    )
}
