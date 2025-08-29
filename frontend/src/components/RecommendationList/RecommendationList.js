import React from 'react';

import { PiUsersThree, PiChatsCircle, PiRobot, PiRocket } from 'react-icons/pi';

const iconMap = {
  'RD Station CRM': {
    icon: PiUsersThree,
    color: 'bg-blue-300',
    description: 'Organize sua operação e aumente suas vendas',
  },
  'RD Station Marketing': {
    icon: PiRocket,
    color: 'bg-emerald-300',
    description:
      'A nossa ferramenta de automação de marketing: crie landing pages, campanhas de email e muito mais',
  },
  'RD Conversas': {
    icon: PiChatsCircle,
    color: 'bg-amber-300',
    description:
      'Centralize as conversas e em todos os canais, inclusive o WhatsApp',
  },
  'RD Mentor AI': {
    icon: PiRobot,
    color: 'bg-violet-300',
    description: 'Automatize procesoss e venda mais',
  },
};

function RecommendationList({ recommendations }) {
  if (!recommendations || recommendations.length === 0) {
    return <p>Nenhuma recomendação encontrada.</p>;
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {recommendations.map((recommendation, index) => {
        const {
          icon: IconComponent,
          color,
          description,
        } = iconMap[recommendation.name] || {};

        const isSingle = recommendations.length === 1;

        return (
          <div
            key={recommendation.id}
            className={`flex flex-col gap-4 border rounded-xl p-4 shadow-custom ${
              isSingle ? 'w-fit' : 'w-3/4 mx-auto'
            }`}
          >
            <div
              className={`text-xs w-fit ${color} px-2 rounded-full font-semibold`}
            >
              {recommendation.category}
            </div>
            <div className="flex gap-4 items-center">
              {IconComponent && <IconComponent size={24} />}
              <span className="font-display font-bold">
                {recommendation.name}
              </span>
            </div>
            <p className="text-sm">{description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default RecommendationList;
