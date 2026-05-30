import React from 'react';
import type { CoreExpertiseItem } from '../data/coreExpertise';

type CoreExpertiseCardProps = {
  item: CoreExpertiseItem;
};

const CoreExpertiseCard: React.FC<CoreExpertiseCardProps> = ({ item }) => {
  return (
    <div className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-700/70 transition-colors duration-300">
      <div className="mx-auto mb-3 flex h-12 w-full max-w-[7rem] items-center justify-center gap-2">
        <img
          src={item.iconSrc}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 object-contain"
          loading="lazy"
          decoding="async"
        />
        {item.secondaryIconSrc ? (
          <img
            src={item.secondaryIconSrc}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 object-contain"
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </div>
      <span className="sr-only">
        {item.iconAlt}
        {item.secondaryIconAlt ? ` and ${item.secondaryIconAlt}` : ''}
      </span>
      <span className="text-gray-300 font-medium text-sm leading-snug">{item.label}</span>
    </div>
  );
};

export default CoreExpertiseCard;
