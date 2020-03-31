import React from 'react';
import InfoCard from './infoCard';

function CantonsInfo({AG, AI, AR, BE, BL, BS, FR, GE, GL, GR, JU, LU, NE, NW, OW, SH, SG, SO, SZ, TI, UR, VS, VD, ZH, ZG, TG}) {
  return (
    <div className="relative">
      <InfoCard canton={`AG`} cases={AG.cases} deaths={AG.death}/>
      <InfoCard canton={`AI`} cases={AI.cases} deaths={AI.death}/>
      <InfoCard canton={`AR`} cases={AR.cases} deaths={AR.death}/>
      <InfoCard canton={`BE`} cases={BE.cases} deaths={BE.death}/>
      <InfoCard canton={`BL`} cases={BL.cases} deaths={BL.death}/>
      <InfoCard canton={`BS`} cases={BS.cases} deaths={BS.death}/>
      <InfoCard canton={`FR`} cases={FR.cases} deaths={FR.death}/>
      <InfoCard canton={`GE`} cases={GE.cases} deaths={GE.death}/>
      <InfoCard canton={`GL`} cases={GL.cases} deaths={GL.death}/>
      <InfoCard canton={`GR`} cases={GR.cases} deaths={GR.death}/>
      <InfoCard canton={`JU`} cases={JU.cases} deaths={JU.death}/>
      <InfoCard canton={`LU`} cases={LU.cases} deaths={LU.death}/>
      <InfoCard canton={`NE`} cases={NE.cases} deaths={NE.death}/>
      <InfoCard canton={`NW`} cases={NW.cases} deaths={NW.death}/>
      <InfoCard canton={`OW`} cases={OW.cases} deaths={OW.death}/>
      <InfoCard canton={`SH`} cases={SH.cases} deaths={SH.death}/>
      <InfoCard canton={`SG`} cases={SG.cases} deaths={SG.death}/>
      <InfoCard canton={`SO`} cases={SO.cases} deaths={SO.death}/>
      <InfoCard canton={`SZ`} cases={SZ.cases} deaths={SZ.death}/>
      <InfoCard canton={`TI`} cases={TI.cases} deaths={TI.death}/>
      <InfoCard canton={`UR`} cases={UR.cases} deaths={UR.death}/>
      <InfoCard canton={`VS`} cases={VS.cases} deaths={VS.death}/>
      <InfoCard canton={`VD`} cases={VD.cases} deaths={VD.death}/>
      <InfoCard canton={`ZH`} cases={ZH.cases} deaths={ZH.death}/>
      <InfoCard canton={`ZG`} cases={ZG.cases} deaths={ZG.death}/>
      <InfoCard canton={`TG`} cases={TG.cases} deaths={TG.death}/>
    </div>
  );
}

export default CantonsInfo;
