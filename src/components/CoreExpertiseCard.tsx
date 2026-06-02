import React from 'react';
import type { CoreExpertiseItem } from '../data/coreExpertise';

type CoreExpertiseCardProps = {
  item: CoreExpertiseItem;
};

const CoreExpertiseCard: React.FC<CoreExpertiseCardProps> = ({ item }) => {
  return (
    <div className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-700/70 transition-colors duration-300">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-white/10">
        <img
          src={item.iconSrc}
          alt=""
          width={40}
          height={40}
          className="h-full w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="sr-only">{item.iconAlt}</span>
      <span className="text-gray-300 font-medium text-sm leading-snug">{item.label}</span>
    </div>
  );
};

export default CoreExpertiseCard;
