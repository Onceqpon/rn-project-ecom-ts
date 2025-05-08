import React, { createContext, useState, useContext, ReactNode } from "react";

// Definiujemy typ dla naszego kontekstu
interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
}

// Inicjalizujemy kontekst, który domyślnie będzie pusty
const UserContext = createContext<UserContextType | undefined>(undefined);

// Tworzymy hook do korzystania z kontekstu
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// Typ dla właściwości komponentu UserProvider
interface UserProviderProps {
  children: ReactNode; // Określamy typ dla dzieci komponentu
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState<string>("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
