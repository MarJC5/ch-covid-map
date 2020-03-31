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
    const url = 'api/openzh/v1/country/CH';

    fetch(url, {
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
      <div className="flex flex-col lg:flex-row justify-between items-center w-full mb-20 lg:mb-12">
        <Header/>
        <div className="covid-status flex justify-center lg:w-1/2">
          <div className="covid-status__total-count h-24 w-auto lg:w-40 m-4 border-black flex flex-col justify-center">
            <h5 className="shadow rounded font-bold text-sm p-2 uppercase">Cases <span className="font-normal text-sm">{cases}</span></h5>
          </div>
          <div className="covid-status__death h-24 w-auto lg:w-40 m-4 border-black flex flex-col justify-center">
            <h5 className="shadow rounded font-bold text-sm p-2 uppercase">Death <span className="font-normal text-sm">{death}</span></h5>

          </div>
          <div className="covid-status__recovered h-24 w-auto lg:w-40 m-4 border-black flex flex-col justify-center">
            <h5 className="shadow rounded font-bold text-sm p-2 uppercase">Recovered <span className="font-normal text-sm">{recovered}</span></h5>

          </div>
        </div>
      </div>
    )
  }
}

export default Info;
