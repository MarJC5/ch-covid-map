import React from 'react';
import logo from '../assets/image/covid.svg';

function Header() {
  return (
    <>
      <header className="App-header flex flex-row justify-center items-center p-4">
        <img src={logo} className="App-logo m-4" alt="logo" />
        <div>
          <h1 className="text-sm uppercase font-bold">switzerland<br/> covid-19 map</h1>
        </div>
      </header>
    </>
  );
}

export default Header;
