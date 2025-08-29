// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  const selectedFeatures = new Set(formData.selectedFeatures);
  const selectedPreferences = new Set(formData.selectedPreferences);

  // Aqui eu vou buscar, com base nas preferências e funcionalidades informadas pelo usuário, os produtos recomendados.
  // O retorno dessa função é a lista dos produtos com um objeto a mais, chamado de score.
  // O score marca a quantidade de vezes que uma das preferências e funcionalidades daquele produto foi selecionada pelo usuário.
  // Com esse score, consigo lidar com um dos critérios de aceite, que é o caso de empate.
  const scoredProducts = products.map((product) => {
    const featureMatches = product.features.filter((f) =>
      selectedFeatures.has(f)
    ).length;

    const preferenceMatches = product.preferences.filter((p) =>
      selectedPreferences.has(p)
    ).length;

    return {
      ...product,
      score: featureMatches + preferenceMatches,
    };
  });

  // Aqui faço um filtro para ter uma nova lista contendo apenas os produtos con score maior que zero.
  const hasScore = scoredProducts.filter((p) => p.score > 0);

  if (hasScore.length === 0) return [];

  const recommendationType = formData.selectedRecommendationType;

  // Caso o usuário tenha optado por receber uma recomendação única, retorno apenas o último produto válido da lista de produtos com score.
  if (recommendationType === 'SingleProduct') {
    const maxScore = Math.max(...hasScore.map((p) => p.score));
    const topProducts = hasScore.filter((p) => p.score === maxScore);
    return [topProducts[topProducts.length - 1]];
  }

  return hasScore.sort((a, b) => b.score - a.score);
};

export default { getRecommendations };
