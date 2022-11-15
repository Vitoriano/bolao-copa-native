import { createContext, ReactNode } from "react";


interface UserProps {
  nome: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);


export function AuthContextProvider({ children }: AuthProviderProps) {

  async function signIn() { console.log("Vamos Logar!")}

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        nome: "Vitoriano",
        avatarUrl: "https://github.com.br/Vitoriano.png"
      }
    }}>
      {children}
    </AuthContext.Provider>
  );
}