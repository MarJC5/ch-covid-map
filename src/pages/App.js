import React from 'react';
import Info from '../components/info';
import Map from '../components/map';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App font-sans">
      <div className="flex flex-wrap my-6 lg:mx-6">
        <div className="flex flex-col items-center justify-center w-full">
          <Info/>
        </div>
        <div className="w-full flex items-center justify-center">
          <Map/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
