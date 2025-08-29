import { createContext, useState } from 'react';

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
