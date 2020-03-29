import React from 'react';
import logo from '../assets/image/covid.svg';

function Header() {
  return (
    <>
      <header className="App-header w-full flex flex-col justify-center items-center p-4">
        <img src={logo} className="App-logo m-4" alt="logo" />
        <div className="m-4">
          <h1 className="text-md uppercase font-bold">switzerland covid-19 map</h1>
          <p> Data sources are from <a className="text-red-500" href="https://github.com/openZH/covid_19/tree/master/fallzahlen_kanton_total_csv">openZH</a></p>
        </div>
        </header>
    </>
  );
}

export default Header;
