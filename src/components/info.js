import React from 'react';
import Header from './header';

function Info() {
  return (
    <div className="w-10/12">
      <Header/>
      <div className="covid-status flex flex-wrap justify-center my-4">
        <div className="covid-status__total-count shadow-lg rounded h-24 w-full lg:w-40 m-4 border-black flex flex-col justify-center">
          <h5 className="text-sm py-2 uppercase">Cases</h5>
          <p className="text-yellow-500 text-sm">000</p>
        </div>
        <div className="covid-status__death shadow-lg rounded h-24 w-full lg:w-40 m-4 border-black flex flex-col justify-center">
          <h5 className="text-sm py-2 uppercase">Death</h5>
          <p className="text-red-500 text-sm">000</p>
        </div>
        <div className="covid-status__recovered shadow-lg rounded h-24 w-full lg:w-40 m-4 border-black flex flex-col justify-center">
          <h5 className="text-sm py-2 uppercase">Recovered</h5>
          <p className="text-green-500 text-sm">000</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
