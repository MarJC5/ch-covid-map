import React from 'react';
import InfoCard from './infoCard';
import AGFlag from '../assets/image/cantons/AG.svg';
import AIFlag from '../assets/image/cantons/AI.svg';
import ARFlag from '../assets/image/cantons/AR.svg';
import BEFlag from '../assets/image/cantons/BE.svg';
import BLFlag from '../assets/image/cantons/BL.svg';
import BSFlag from '../assets/image/cantons/BS.svg';
import FRFlag from '../assets/image/cantons/FR.svg';
import GEFlag from '../assets/image/cantons/GE.svg';
import GLFlag from '../assets/image/cantons/GL.svg';
import GRFlag from '../assets/image/cantons/GR.svg';
import JUFlag from '../assets/image/cantons/JU.svg';
import LUFlag from '../assets/image/cantons/LU.svg';
import NEFlag from '../assets/image/cantons/NE.svg';
import NWFlag from '../assets/image/cantons/NW.svg';
import OWFlag from '../assets/image/cantons/OW.svg';
import SHFlag from '../assets/image/cantons/SH.svg';
import SGFlag from '../assets/image/cantons/SG.svg';
import SOFlag from '../assets/image/cantons/SO.svg';
import SZFlag from '../assets/image/cantons/SZ.svg';
import TIFlag from '../assets/image/cantons/TI.svg';
import URFlag from '../assets/image/cantons/UR.svg';
import VSFlag from '../assets/image/cantons/VS.svg';
import VDFlag from '../assets/image/cantons/VD.svg';
import ZHFlag from '../assets/image/cantons/ZH.svg';
import ZGFlag from '../assets/image/cantons/ZG.svg';
import TGFlag from '../assets/image/cantons/TG.svg';

function CantonsInfo({AG, AI, AR, BE, BL, BS, FR, GE, GL, GR, JU, LU, NE, NW, OW, SH, SG, SO, SZ, TI, UR, VS, VD, ZH, ZG, TG}) {
  return (
    <div className="relative">
      <InfoCard canton={`AG`} cases={AG.cases} deaths={AG.death} flag={AGFlag}/>
      <InfoCard canton={`AI`} cases={AI.cases} deaths={AI.death} flag={AIFlag}/>
      <InfoCard canton={`AR`} cases={AR.cases} deaths={AR.death} flag={ARFlag}/>
      <InfoCard canton={`BE`} cases={BE.cases} deaths={BE.death} flag={BEFlag}/>
      <InfoCard canton={`BL`} cases={BL.cases} deaths={BL.death} flag={BLFlag}/>
      <InfoCard canton={`BS`} cases={BS.cases} deaths={BS.death} flag={BSFlag}/>
      <InfoCard canton={`FR`} cases={FR.cases} deaths={FR.death} flag={FRFlag}/>
      <InfoCard canton={`GE`} cases={GE.cases} deaths={GE.death} flag={GEFlag}/>
      <InfoCard canton={`GL`} cases={GL.cases} deaths={GL.death} flag={GLFlag}/>
      <InfoCard canton={`GR`} cases={GR.cases} deaths={GR.death} flag={GRFlag}/>
      <InfoCard canton={`JU`} cases={JU.cases} deaths={JU.death} flag={JUFlag}/>
      <InfoCard canton={`LU`} cases={LU.cases} deaths={LU.death} flag={LUFlag}/>
      <InfoCard canton={`NE`} cases={NE.cases} deaths={NE.death} flag={NEFlag}/>
      <InfoCard canton={`NW`} cases={NW.cases} deaths={NW.death} flag={NWFlag}/>
      <InfoCard canton={`OW`} cases={OW.cases} deaths={OW.death} flag={OWFlag}/>
      <InfoCard canton={`SH`} cases={SH.cases} deaths={SH.death} flag={SHFlag}/>
      <InfoCard canton={`SG`} cases={SG.cases} deaths={SG.death} flag={SGFlag}/>
      <InfoCard canton={`SO`} cases={SO.cases} deaths={SO.death} flag={SOFlag}/>
      <InfoCard canton={`SZ`} cases={SZ.cases} deaths={SZ.death} flag={SZFlag}/>
      <InfoCard canton={`TI`} cases={TI.cases} deaths={TI.death} flag={TIFlag}/>
      <InfoCard canton={`UR`} cases={UR.cases} deaths={UR.death} flag={URFlag}/>
      <InfoCard canton={`VS`} cases={VS.cases} deaths={VS.death} flag={VSFlag}/>
      <InfoCard canton={`VD`} cases={VD.cases} deaths={VD.death} flag={VDFlag}/>
      <InfoCard canton={`ZH`} cases={ZH.cases} deaths={ZH.death} flag={ZHFlag}/>
      <InfoCard canton={`ZG`} cases={ZG.cases} deaths={ZG.death} flag={ZGFlag}/>
      <InfoCard canton={`TG`} cases={TG.cases} deaths={TG.death} flag={TGFlag}/>
    </div>
  );
}

export default CantonsInfo;
