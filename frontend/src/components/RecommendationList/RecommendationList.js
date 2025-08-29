import React from 'react';

import { PiUsersThree, PiChatsCircle, PiRobot, PiRocket } from 'react-icons/pi';

const iconMap = {
  'RD Station CRM': { icon: PiUsersThree, color: 'bg-blue-300' },
  'RD Station Marketing': { icon: PiRocket, color: 'bg-emerald-300' },
  'RD Conversas': { icon: PiChatsCircle, color: 'bg-amber-300' },
  'RD Mentor AI': { icon: PiRobot, color: 'bg-violet-300' },
};

function RecommendationList({ recommendations }) {
  if (!recommendations || recommendations.length === 0) {
    return <p>Nenhuma recomendação encontrada.</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {recommendations.map((recommendation) => {
          const { icon: IconComponent, color } =
            iconMap[recommendation.name] || {};
          return (
            <div
              key={recommendation.id}
              className="w-3/4 mx-auto flex flex-col gap-4 border border-black rounded-xl p-4 text-right"
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecommendationList;
