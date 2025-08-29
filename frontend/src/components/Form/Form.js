// Form.js

import React, { useContext } from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';
import { RecommendationContext } from '../../context/RecommendationContext';

function Form() {
  const { preferences, features, products } = useProducts();
  const { updateRecommendations } = useContext(RecommendationContext);
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const disableButton = ({ selectedPreferences, selectedFeatures }) => {
    return selectedPreferences.length === 0 && selectedFeatures.length === 0;
  };

  const { getRecommendations } = useRecommendations(products);

  // O submit ficou responsavél apneas por chamar getRecommendations, passando o formData e a lista de produtos.
  // O resultado no contexto da aplicação usando a função "updateRecommendations" para que possa ser exibido na lista de recomendações.
  const handleSubmit = (e) => {
    e.preventDefault();

    const dataRecommendations = getRecommendations(formData, products);
    updateRecommendations(dataRecommendations);
  };

  return (
    <form
      className=" mx-auto p-4 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />

      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />

      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />

      <div className="md:col-span-2 flex justify-end md:items-end">
        <SubmitButton
          text="Obter recomendação"
          disabled={disableButton(formData)}
        />
      </div>
    </form>
  );
}

export default Form;
