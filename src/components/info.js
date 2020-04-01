import React from 'react';
import Header from './header';

var moment = require('moment');

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: null,
      death: null,
      recovered: null,
      lastUpdate: [{date: null, time: null}],
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
        recovered: data.totals.ncumul_released,
        lastUpdate: {date: data.records.slice(-1)[0].date, time: data.records.slice(-1)[0].time}
      }));
  }

  render() {
    const { cases, death, recovered, lastUpdate } = this.state

    return(
      <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-20 lg:mb-12">
        <Header/>
        <div className="covid-status flex flex-col justify-center lg:w-1/2">
          <div className="flex flex-row justify-center">
            <div className="covid-status__total-count w-auto lg:w-40 m-4 border-black flex flex-col justify-center">
              <h5 className="shadow rounded font-bold text-sm p-2 uppercase">Cases <span className=" font-normal text-sm">{cases}</span></h5>
            </div>
            <div className="covid-status__recovered w-auto lg:w-40 m-4 border-black flex flex-col justify-center">
              <h5 className="shadow rounded font-bold text-sm p-2 uppercase">Recovered <span className="font-normal text-sm">{recovered}</span></h5>
            </div>
            <div className="covid-status__death w-auto lg:w-40 m-4 border-black flex flex-col justify-center">
              <h5 className="shadow rounded font-bold text-sm p-2 uppercase">Death <span className="font-normal text-sm">{death}</span></h5>
            </div>
          </div>
          <p style={{fontSize: `0.70rem`}}>last updated
            <span className="mx-1">{
              lastUpdate.time !== "" ?  moment(`${lastUpdate.date} ${lastUpdate.time}`, "YYYY-MM-DD HH-mm").fromNow() : moment(`${lastUpdate.date}`, "YYYY-MM-DD").fromNow()
            }</span>
          </p>
        </div>
      </div>
    )
  }
}

export default Info;
