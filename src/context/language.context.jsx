import { createContext, useState } from "react";

export const LanguageContext = createContext();


export function LanguageProvider({children}) {
  
  const [cardId, setCardId] = useState(0);

  const [language, setLanguage] = useState('es');

  return (
    <LanguageContext.Provider value={{language, setLanguage, cardId, setCardId}} >{children}</LanguageContext.Provider>
  );
}