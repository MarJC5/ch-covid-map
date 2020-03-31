import React from 'react';

function InfoCard({canton, cases, deaths}) {
  return (
    <div className={`absolute card-info opacity-0 bg-white py-2 px-4 CARD-CH-${canton} flex flex-col`}>
        <h6 className="font-bold">{canton}</h6>
        <p className="text-sm">Cases: {cases}</p>
        {deaths == "" ? <p></p> : <p className="text-sm">Death: {deaths}</p>}
    </div>
  );
}

export default InfoCard;
