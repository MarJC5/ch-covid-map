import React from 'react';
import InfoCard from './infoCard';

function CantonsInfo({AG, AI, AR, BE, BL, BS, FR, GE, GL, GR, JU, LU, NE, NW, OW, SH, SG, SO, SZ, TI, UR, VS, VD, ZH, ZG, TG}) {
  return (
    <div className="relative">
      <InfoCard canton={`AG`} cases={AG.cases} deaths={AG.death} flag={AG.flag}/>
      <InfoCard canton={`AI`} cases={AI.cases} deaths={AI.death} flag={AI.flag}/>
      <InfoCard canton={`AR`} cases={AR.cases} deaths={AR.death} flag={AR.flag}/>
      <InfoCard canton={`BE`} cases={BE.cases} deaths={BE.death} flag={BE.flag}/>
      <InfoCard canton={`BL`} cases={BL.cases} deaths={BL.death} flag={BL.flag}/>
      <InfoCard canton={`BS`} cases={BS.cases} deaths={BS.death} flag={BS.flag}/>
      <InfoCard canton={`FR`} cases={FR.cases} deaths={FR.death} flag={FR.flag}/>
      <InfoCard canton={`GE`} cases={GE.cases} deaths={GE.death} flag={GE.flag}/>
      <InfoCard canton={`GL`} cases={GL.cases} deaths={GL.death} flag={GL.flag}/>
      <InfoCard canton={`GR`} cases={GR.cases} deaths={GR.death} flag={GR.flag}/>
      <InfoCard canton={`JU`} cases={JU.cases} deaths={JU.death} flag={JU.flag}/>
      <InfoCard canton={`LU`} cases={LU.cases} deaths={LU.death} flag={LU.flag}/>
      <InfoCard canton={`NE`} cases={NE.cases} deaths={NE.death} flag={NE.flag}/>
      <InfoCard canton={`NW`} cases={NW.cases} deaths={NW.death} flag={NW.flag}/>
      <InfoCard canton={`OW`} cases={OW.cases} deaths={OW.death} flag={OW.flag}/>
      <InfoCard canton={`SH`} cases={SH.cases} deaths={SH.death} flag={SH.flag}/>
      <InfoCard canton={`SG`} cases={SG.cases} deaths={SG.death} flag={SG.flag}/>
      <InfoCard canton={`SO`} cases={SO.cases} deaths={SO.death} flag={SO.flag}/>
      <InfoCard canton={`SZ`} cases={SZ.cases} deaths={SZ.death} flag={SZ.flag}/>
      <InfoCard canton={`TI`} cases={TI.cases} deaths={TI.death} flag={TI.flag}/>
      <InfoCard canton={`UR`} cases={UR.cases} deaths={UR.death} flag={UR.flag}/>
      <InfoCard canton={`VS`} cases={VS.cases} deaths={VS.death} flag={VS.flag}/>
      <InfoCard canton={`VD`} cases={VD.cases} deaths={VD.death} flag={VD.flag}/>
      <InfoCard canton={`ZH`} cases={ZH.cases} deaths={ZH.death} flag={ZH.flag}/>
      <InfoCard canton={`ZG`} cases={ZG.cases} deaths={ZG.death} flag={ZG.flag}/>
      <InfoCard canton={`TG`} cases={TG.cases} deaths={TG.death} flag={TG.flag}/>
    </div>
  );
}

export default CantonsInfo;
