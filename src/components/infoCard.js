import React from 'react';

function InfoCard({canton, cases, deaths, flag}) {
  console.log(flag)
  return (
    <div className={`absolute card-info opacity-0 bg-white py-2 px-4 CARD-CH-${canton} flex flex-col`}>
        <div className="flex justify-center items-center">
          <h6 className="font-bold">{canton}</h6>
          <img src={flag} className="canton-flag m-1 rounded" alt={`logo ${canton}`} />
        </div>
        <p className="text-sm">Cases: {cases}</p>
        {deaths === "" ? <p></p> : <p className="text-sm">Death: {deaths}</p>}
    </div>
  );
}

export default InfoCard;
