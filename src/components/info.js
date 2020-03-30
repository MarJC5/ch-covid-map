import React from 'react';
import Header from './header';

function Info() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full">
      <Header/>
      <div className="covid-status flex justify-center mb-20 lg:mb-4 h-full">
        <div className="covid-status__total-count h-24 w-full lg:w-40 m-4 border-black flex flex-col justify-center">
          <h5 className="text-sm p-2 uppercase">Cases</h5>
          <p className="font-bold opacity-75 text-sm">000</p>
        </div>
        <div className="covid-status__death h-24 w-full lg:w-40 m-4 border-black flex flex-col justify-center">
          <h5 className="text-sm p-2 uppercase">Death</h5>
          <p className="font-bold opacity-75 text-sm">000</p>
        </div>
        <div className="covid-status__recovered h-24 w-full lg:w-40 m-4 border-black flex flex-col justify-center">
          <h5 className="text-sm p-2 uppercase">Recovered</h5>
          <p className="font-bold opacity-75 text-sm">000</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
