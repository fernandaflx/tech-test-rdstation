// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  const data = {
    features: new Set(formData?.selectedFeatures),
    preferences: new Set(formData?.selectedPreferences),
  };

  const matchProducts = products.filter((product) => {
    const searchByFeature =
      data.features.size > 0
        ? product.features.some((item) => data.features.has(item))
        : data.features.has(product.features);

    const searchByPreference =
      data.preferences.size > 0
        ? product.preferences.some((item) => data.preferences.has(item))
        : data.preferences.has(product.preferences);

    return searchByFeature || searchByPreference;
  });

  return matchProducts;
};

export default { getRecommendations };
