import { createContext, useState } from "react";

export const LanguageContext = createContext();


export function LanguageProvider(props) {
  
  const [cardId, setCardId] = useState(0);

  const [language, setLanguage] = useState('es');

  

  return (
    <LanguageContext.Provider value={{language, setLanguage, cardId, setCardId}} >{props.children}</LanguageContext.Provider>
  );
}