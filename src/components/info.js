import React from 'react';
import Header from './header';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: null,
      death: null,
      recovered: null,
    };
  }

  componentDidMount(){
    // Fetch Totals cases data
    const url = '/api/openzh/v1/country/CH';

    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(response => response.json())
      .then(data => this.setState({
        cases: data.totals.ncumul_conf,
        death: data.totals.ncumul_deceased,
        recovered: data.totals.ncumul_released
      }));
  }

  render() {
    const { cases, death, recovered } = this.state

    return(
      <div className="flex flex-col lg:flex-row justify-between items-center w-full">
        <Header/>
        <div className="covid-status flex justify-center mb-20 lg:mb-4 h-full">
          <div className="covid-status__total-count h-24 w-full lg:w-40 m-4 border-black flex flex-col justify-center">
            <h5 className="text-sm p-2 uppercase">Cases</h5>
            <p className="font-bold opacity-75 text-sm">{cases}</p>
          </div>
          <div className="covid-status__death h-24 w-full lg:w-40 m-4 border-black flex flex-col justify-center">
            <h5 className="text-sm p-2 uppercase">Death</h5>
            <p className="font-bold opacity-75 text-sm">{death}</p>
          </div>
          <div className="covid-status__recovered h-24 w-full lg:w-40 m-4 border-black flex flex-col justify-center">
            <h5 className="text-sm p-2 uppercase">Recovered</h5>
            <p className="font-bold opacity-75 text-sm">{recovered}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Info;
