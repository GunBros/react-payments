import { createContext, useState } from "react";

interface CardNumberContextProps {
    children: string | JSX.Element | JSX.Element[];
}

interface CardNumberContextType {
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
}

export const CardNumberContext = createContext<CardNumberContextType | undefined>(undefined);

export function CardNumberProvider({ children }: CardNumberContextProps) {
  const [cardNumber, setCardNumber] = useState<string>('');
  
  return (
    <CardNumberContext.Provider value={{cardNumber, setCardNumber}}>
      { children }
    </CardNumberContext.Provider>
  )
}