import React, { useContext } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import { RecommendationContext } from './context/RecommendationContext';

function App() {
  const { recommendations } = useContext(RecommendationContext);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <img
        src="./logo.svg"
        alt="RD Station logo"
        className="sm:h-12 h-8 my-6"
      />

      <div className="p-8 rounded-lg shadow-md w-full md:w-3/4 ">
        <div className="col-span-2 mb-4">
          <h1 className="sm:text-3xl text-2xl font-extrabold mb-8 font-display text-center">
            Recomendador de Produtos RD Station
          </h1>

          <p className="sm:text-lg text-base">
            Bem-vindo ao Recomendador de Produtos RD Station. <br />
            Aqui você pode encontrar uma variedade de produtos da RD Station,
            cada um projetado para atender às necessidades específicas do seu
            negócio. De CRM a Marketing, de Conversas a Inteligência Artificial,
            temos uma solução para ajudar você a alcançar seus objetivos. <br />{' '}
            <br />
            Use o formulário abaixo para selecionar suas preferências e
            funcionalidades desejadas e receba recomendações personalizadas de
            produtos que melhor atendam às suas necessidades.
          </p>
        </div>
        <div>
          <Form />
        </div>
        <div className="mt-12">
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
