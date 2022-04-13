import { useContext } from "react";
import { CadastroContext } from "../contexts/CadastroContext";

export default function useCadastro(){
    const {criarUsuario} = useContext(CadastroContext)

    return criarUsuario
}