import React from 'react';
import CHFlag from '../assets/image/cantons/CH.svg';

function Header() {
  return (
    <>
      <a href="/ch-covid-map">
        <header className="App-header flex flex-row justify-start items-center lg:w-1/2 mx-6 p-4">
          <img src={CHFlag} className="App-logo m-4 rounded" alt="logo" />
          <div>
            <h1 className="text-sm uppercase font-bold">switzerland<br/><span className="font-normal">covid-19 map</span></h1>
          </div>
        </header>
      </a>
    </>
  );
}

export default Header;
