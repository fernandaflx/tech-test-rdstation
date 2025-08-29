import { createContext, useState } from 'react';

// Optei pela criação de um context para armazenar o resultado das recomendações para garantir que os dados não seriam perdidos.
// Além disso, num cenário onde essa aplicação ganhasse mais telas, seria possível sempre recuperar os valores das recomendaçõoes ou outras informações relacionadas.
// Como neste cenário, só precisava das recomendações, o context ficou simples e possui: um state chamado recommendations e uma função chamada updateRecommendations.
// O contexto permite o acesso ao estado que está armazenados os valores e à função que faz a atualização do estado.

export const RecommendationContext = createContext();

export const RecommendationProvider = ({ children }) => {
  const [recommendations, setRecommendations] = useState([]);

  const updateRecommendations = (products) => {
    setRecommendations(products);
  };

  return (
    <RecommendationContext.Provider
      value={{
        recommendations,
        updateRecommendations,
      }}
    >
      {children}
    </RecommendationContext.Provider>
  );
};
