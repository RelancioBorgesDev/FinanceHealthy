import { createContext } from "react"

let loginInitialState = {
    email: "",
    senha: ""
}

export const LoginContext = createContext(loginInitialState);

export default function LoginContextProvider ({children}) {
    
    <LoginContext.Provider>
        {children}
    </LoginContext.Provider>
}