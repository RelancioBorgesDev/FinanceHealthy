import { createContext } from "react";

const dadosCadastro = {
    nome: "",
    email: "",
    senha: "",
    confimaSenha: "",
}

export const CadastroContext = createContext(dadosCadastro)


export const CadastroContextProvider = (props) => {
    return(
        <CadastroContext.Provider>
            {props.children}
        </CadastroContext.Provider>
    )
}
