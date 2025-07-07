import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home";

import Ang from "./pages/Ang";

import AA from "./pages/aa/AA";
import AA01 from "./pages/aa/AA01";

import AB from "./pages/ab/AB";
import AB01 from "./pages/ab/AB01";
import AB04 from "./pages/ab/AB04";
import AB05 from "./pages/ab/AB05";
import AB06 from "./pages/ab/AB06";
import AB07 from "./pages/ab/AB07";
import AB08 from "./pages/ab/AB08";
import AB09 from "./pages/ab/AB09";
import AB10 from "./pages/ab/AB10";
import AB12 from "./pages/ab/AB12";
import AB13 from "./pages/ab/AB13";
import AB14 from "./pages/ab/AB14";
import AB15 from "./pages/ab/AB15";
import AB17 from "./pages/ab/AB17";
import AB18 from "./pages/ab/AB18";
import AB19 from "./pages/ab/AB19";
import AB20 from "./pages/ab/AB20";
import AB28 from "./pages/ab/AB28";
import AB30 from "./pages/ab/AB30";
import AB31 from "./pages/ab/AB31";
import AB34 from "./pages/ab/AB34";
import AB40 from "./pages/ab/AB40";
import AB41 from "./pages/ab/AB41";
import AB42 from "./pages/ab/AB42";
import AB43 from "./pages/ab/AB43";
import AB44 from "./pages/ab/AB44";

import AG from "./pages/ag/AG";
import AG08 from "./pages/ag/AG08";
import AG10 from "./pages/ag/AG10";

import Alfabeta from "./pages/son/Alfabeta";


import AS from "./pages/as/AS";
import AS01 from "./pages/as/AS01";
import AS02 from "./pages/as/AS02";
import AS03 from "./pages/as/AS03";
import AS06 from "./pages/as/AS06";
import AS07 from "./pages/as/AS07";


import Bob from "./pages/Bob";

import Cnicro from "./pages/grm/Cnicro";


import Dan from "./pages/Dan";

import DK from "./pages/dk/DK";
import DK01 from "./pages/dk/DK01";

import FlipCardPage from "./components/FlipCardPage";

import GK from "./pages/gk/GK";
import GK01 from "./pages/gk/GK01";
import GK02 from "./pages/gk/GK02";
import GK03 from "./pages/gk/GK03";
import GK05 from "./pages/gk/GK05";

import GP from "./pages/gp/GP";
import GP01 from "./pages/gp/GP01";
import GP02 from "./pages/gp/GP02";
import GP03 from "./pages/gp/GP03";
import GP06 from "./pages/gp/GP06";
import GP07 from "./pages/gp/GP07";
import GP11 from "./pages/gp/GP11";
import GP12 from "./pages/gp/GP12";

import Grm01 from "./pages/grm/Grm01";
import Grm02 from "./pages/grm/Grm02";

import IC from "./pages/ic/IC";
import IC01 from "./pages/ic/IC01";

import IK from "./pages/ik/IK";
import IK01 from "./pages/ik/IK01";
import IK02 from "./pages/ik/IK02";
import IK13 from "./pages/ik/IK13";
import IK14 from "./pages/ik/IK14";
import IK15 from "./pages/ik/IK15";
import IK16 from "./pages/ik/IK16";
import IK17 from "./pages/ik/IK17";

import IM from "./pages/im/IM";
import IM01 from "./pages/im/IM01";
import IM04 from "./pages/im/IM04";
import IM07 from "./pages/im/IM07";
import IM09 from "./pages/im/IM09";
import IM10 from "./pages/im/IM10";
import IM12 from "./pages/im/IM12";

import IP from "./pages/ip/IP";
import IP03 from "./pages/ip/IP03";
import IP04 from "./pages/ip/IP04";
import IP05 from "./pages/ip/IP05";
import IP06 from "./pages/ip/IP06";
import IP07 from "./pages/ip/IP07";
import IP08 from "./pages/ip/IP08";
import IP09 from "./pages/ip/IP09";
import IP10 from "./pages/ip/IP10";
import IP11 from "./pages/ip/IP11";
import IP12 from "./pages/ip/IP12";
import IP13 from "./pages/ip/IP13";
import IP14 from "./pages/ip/IP14";
import IP17 from "./pages/ip/IP17";
import IP18 from "./pages/ip/IP18";
import IP19 from "./pages/ip/IP19";
import IP20 from "./pages/ip/IP20";
import IP21 from "./pages/ip/IP21";
import IP26 from "./pages/ip/IP26";
import IP27 from "./pages/ip/IP27";
import IP28 from "./pages/ip/IP28";
import IP29 from "./pages/ip/IP29";
import IP30 from "./pages/ip/IP30";
import IP31 from "./pages/ip/IP31";
import IP33 from "./pages/ip/IP33";
import IP34 from "./pages/ip/IP34";
import IP42 from "./pages/ip/IP42";
import IP43 from "./pages/ip/IP43";
import IP44 from "./pages/ip/IP44";
import IP45 from "./pages/ip/IP45";
import IP46 from "./pages/ip/IP46";
import IP47 from "./pages/ip/IP47";
import IP48 from "./pages/ip/IP48";

import IS from "./pages/is/IS";
import IS01 from "./pages/is/IS01";

import Jaw from "./pages/Jaw";

import Kooi from "./pages/grm/Kooi";

import Leo from "./pages/Leo";

import MG from "./pages/mg/MG";
import MG02 from "./pages/mg/MG02";
import MG03 from "./pages/mg/MG03";

import ML from "./pages/ml/ML";
import ML25 from "./pages/ml/ML25";
import ML26 from "./pages/ml/ML26";
import ML27 from "./pages/ml/ML27";
import ML29 from "./pages/ml/ML29";
import ML30 from "./pages/ml/ML30";
import ML32 from "./pages/ml/ML32";
import ML33 from "./pages/ml/ML33";
import ML34 from "./pages/ml/ML34";
import ML35 from "./pages/ml/ML35";
import ML37 from "./pages/ml/ML37";
import ML38 from "./pages/ml/ML38";
import ML40 from "./pages/ml/ML40";
import ML41 from "./pages/ml/ML41";
import ML47 from "./pages/ml/ML47";
import ML49 from "./pages/ml/ML49";
import ML50 from "./pages/ml/ML50";
import ML63 from "./pages/ml/ML63";
import ML64 from "./pages/ml/ML64";
import ML65 from "./pages/ml/ML65";
import ML66 from "./pages/ml/ML66";
import ML67 from "./pages/ml/ML67";
import ML68 from "./pages/ml/ML68";

import MS from "./pages/ms/MS";
import MS06 from "./pages/ms/MS06";
import MS09 from "./pages/ms/MS09";
import MS10 from "./pages/ms/MS10";
import MS11 from "./pages/ms/MS11";
import MS12 from "./pages/ms/MS12";
import MS13 from "./pages/ms/MS13";
import MS17 from "./pages/ms/MS17";
import MS18 from "./pages/ms/MS18";

import OS from "./pages/os/OS";
import OS01 from "./pages/os/OS01";
import OS02 from "./pages/os/OS02";
import OS06 from "./pages/os/OS06";

import OT from "./pages/ot/OT";
import OT01 from "./pages/ot/OT01";
import OT02 from "./pages/ot/OT02";
import OT03 from "./pages/ot/OT03";
import OT05 from "./pages/ot/OT05";
import OT06 from "./pages/ot/OT06";
import OT07 from "./pages/ot/OT07";
import OT09 from "./pages/ot/OT09";
import OT10 from "./pages/ot/OT10";
import OT18 from "./pages/ot/OT18";
import OT19 from "./pages/ot/OT19";
import OT20 from "./pages/ot/OT20";
import OT21 from "./pages/ot/OT21";

import Prenu from "./pages/grm/Prenu";
import Prisma from "./pages/Prisma";


import Rimni from "./pages/son/Rimni";

import Ruo from "./pages/son/Ruo";

import Sam from "./pages/Sam";

import SB from "./pages/sb/SB";
import SB01 from "./pages/sb/SB01";
import SB02 from "./pages/sb/SB02";
import SB03 from "./pages/sb/SB03";
import SB05 from "./pages/sb/SB05";
import SB11 from "./pages/sb/SB11";
import SB12 from "./pages/sb/SB12";
import SB15 from "./pages/sb/SB15";
import SB20 from "./pages/sb/SB20";
import SB21 from "./pages/sb/SB21";
import SB22 from "./pages/sb/SB22";
import SB23 from "./pages/sb/SB23";

import SS from "./pages/ss/SS";
import SS00 from "./pages/ss/SS00";
import SS01 from "./pages/ss/SS01";
import SS04 from "./pages/ss/SS04";
import SS05 from "./pages/ss/SS05";
import SS06 from "./pages/ss/SS06";
import SS07 from "./pages/ss/SS07";
import SS08 from "./pages/ss/SS08";
import SS10 from "./pages/ss/SS10";
import SS12 from "./pages/ss/SS12";
import SS14 from "./pages/ss/SS14";
import SS15 from "./pages/ss/SS15";
import SS16 from "./pages/ss/SS16";
import SS17 from "./pages/ss/SS17";
import SS19 from "./pages/ss/SS19";
import SS21 from "./pages/ss/SS21";
import SS23 from "./pages/ss/SS23";
import SS30 from "./pages/ss/SS30";
import SS31 from "./pages/ss/SS31";
import SS32 from "./pages/ss/SS32";
import SS33 from "./pages/ss/SS33";
import SS34 from "./pages/ss/SS34";
import SS35 from "./pages/ss/SS35";
import SS42 from "./pages/ss/SS42";
import SS43 from "./pages/ss/SS43";
import SS44 from "./pages/ss/SS44";


import ST from "./pages/st/ST";
import ST01 from "./pages/st/ST01";
import ST05 from "./pages/st/ST05";

import VK from "./pages/vk/VK";
import VK05 from "./pages/vk/VK05";
import VK06 from "./pages/vk/VK06";

import YK from "./pages/yk/YK";
import YK01 from "./pages/yk/YK01";
import YK03 from "./pages/yk/YK03";
import YK05 from "./pages/yk/YK05";
import YK06 from "./pages/yk/YK06";

import Voksa from "./pages/Voksa";
import Uenba from "./pages/Uenba";
import Tim from "./pages/Tim";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="ang" element={<Ang />} />

          <Route path="aa" element={<AA />} />
          <Route path="aa01" element={<AA01 />} />

          <Route path="ab" element={<AB />} />
          <Route path="ab01" element={<AB01 />} />
          <Route path="ab04" element={<AB04 />} />
          <Route path="ab05" element={<AB05 />} />
          <Route path="ab06" element={<AB06 />} />
          <Route path="ab07" element={<AB07 />} />
          <Route path="ab08" element={<AB08 />} />
          <Route path="ab09" element={<AB09 />} />
          <Route path="ab10" element={<AB10 />} />
          <Route path="ab12" element={<AB12 />} />
          <Route path="ab13" element={<AB13 />} />
          <Route path="ab14" element={<AB14 />} />
          <Route path="ab15" element={<AB15 />} />
          <Route path="ab17" element={<AB17 />} />
          <Route path="ab18" element={<AB18 />} />
          <Route path="ab19" element={<AB19 />} />
          <Route path="ab20" element={<AB20 />} />
          <Route path="ab28" element={<AB28 />} />
          <Route path="ab30" element={<AB30 />} />
          <Route path="ab31" element={<AB31 />} />
          <Route path="ab34" element={<AB34 />} />
          <Route path="ab40" element={<AB40 />} />
          <Route path="ab41" element={<AB41 />} />
          <Route path="ab42" element={<AB42 />} />
          <Route path="ab43" element={<AB43 />} />
          <Route path="ab44" element={<AB44 />} />

          <Route path="ag" element={<AG />} />
          <Route path="ag08" element={<AG08 />} />
          <Route path="ag10" element={<AG10 />} />

          <Route path="alfabeta" element={<Alfabeta />} />

          <Route path="as" element={<AS />} />
          <Route path="as01" element={<AS01 />} />
          <Route path="as02" element={<AS02 />} />
          <Route path="as03" element={<AS03 />} />
          <Route path="as06" element={<AS06 />} />
          <Route path="as07" element={<AS07 />} />

          <Route path="cnicro" element={<Cnicro />} />

          <Route path="os" element={<OS />} />
          <Route path="os01" element={<OS01 />} />

          <Route path="dk" element={<DK />} />
          <Route path="dk01" element={<DK01 />} />
          <Route path="fcp" element={<FlipCardPage />} />

          <Route path="gk" element={<GK />} />
          <Route path="gk01" element={<GK01 />} />
          <Route path="gk02" element={<GK02 />} />
          <Route path="gk03" element={<GK03 />} />
          <Route path="gk05" element={<GK05 />} />

          <Route path="gp" element={<GP />} />
          <Route path="gp01" element={<GP01 />} />
          <Route path="gp02" element={<GP02 />} />
          <Route path="gp03" element={<GP03 />} />
          <Route path="gp06" element={<GP06 />} />
          <Route path="gp07" element={<GP07 />} />
          <Route path="gp11" element={<GP11 />} />
          <Route path="gp12" element={<GP12 />} />

          <Route path="grm01" element={<Grm01 />} />
          <Route path="grm02" element={<Grm02 />} />

          <Route path="ic" element={<IC />} />
          <Route path="ic01" element={<IC01 />} />

          <Route path="ik" element={<IK />} />
          <Route path="ik01" element={<IK01 />} />
          <Route path="ik02" element={<IK02 />} />
          <Route path="ik13" element={<IK13 />} />
          <Route path="ik14" element={<IK14 />} />
          <Route path="ik15" element={<IK15 />} />
          <Route path="ik16" element={<IK16 />} />
          <Route path="ik17" element={<IK17 />} />

          <Route path="im" element={<IM />} />
          <Route path="im01" element={<IM01 />} />
          <Route path="im04" element={<IM04 />} />
          <Route path="im07" element={<IM07 />} />
          <Route path="im09" element={<IM09 />} />
          <Route path="im10" element={<IM10 />} />
          <Route path="im12" element={<IM12 />} />

          <Route path="ip" element={<IP />} />
          <Route path="ip03" element={<IP03 />} />
          <Route path="ip04" element={<IP04 />} />
          <Route path="ip05" element={<IP05 />} />
          <Route path="ip06" element={<IP06 />} />
          <Route path="ip07" element={<IP07 />} />
          <Route path="ip08" element={<IP08 />} />
          <Route path="ip09" element={<IP09 />} />
          <Route path="ip10" element={<IP10 />} />
          <Route path="ip11" element={<IP11 />} />
          <Route path="ip12" element={<IP12 />} />
          <Route path="ip13" element={<IP13 />} />
          <Route path="ip14" element={<IP14 />} />
          <Route path="ip17" element={<IP17 />} />
          <Route path="ip18" element={<IP18 />} />
          <Route path="ip19" element={<IP19 />} />
          <Route path="ip20" element={<IP20 />} />
          <Route path="ip21" element={<IP21 />} />
          <Route path="ip26" element={<IP26 />} />
          <Route path="ip27" element={<IP27 />} />
          <Route path="ip28" element={<IP28 />} />
          <Route path="ip29" element={<IP29 />} />
          <Route path="ip30" element={<IP30 />} />
          <Route path="ip31" element={<IP31 />} />
          <Route path="ip33" element={<IP33 />} />
          <Route path="ip34" element={<IP34 />} />
          <Route path="ip42" element={<IP42 />} />
          <Route path="ip43" element={<IP43 />} />
          <Route path="ip44" element={<IP44 />} />
          <Route path="ip45" element={<IP45 />} />
          <Route path="ip46" element={<IP46 />} />
          <Route path="ip47" element={<IP47 />} />
          <Route path="ip48" element={<IP48 />} />

          <Route path="is" element={<IS />} />
          <Route path="is01" element={<IS01 />} />

          <Route path="kooi" element={<Kooi />} />

          <Route path="mg" element={<MG />} />
          <Route path="mg02" element={<MG02 />} />
          <Route path="mg03" element={<MG03 />} />

          <Route path="ml" element={<ML />} />
          <Route path="ml25" element={<ML25 />} />
          <Route path="ml26" element={<ML26 />} />
          <Route path="ml27" element={<ML27 />} />
          <Route path="ml29" element={<ML29 />} />
          <Route path="ml30" element={<ML30 />} />
          <Route path="ml32" element={<ML32 />} />
          <Route path="ml33" element={<ML33 />} />
          <Route path="ml34" element={<ML34 />} />
          <Route path="ml35" element={<ML35 />} />
          <Route path="ml37" element={<ML37 />} />
          <Route path="ml38" element={<ML38 />} />
          <Route path="ml40" element={<ML40 />} />
          <Route path="ml41" element={<ML41 />} />
          <Route path="ml47" element={<ML47 />} />
          <Route path="ml49" element={<ML49 />} />
          <Route path="ml50" element={<ML50 />} />
          <Route path="ml63" element={<ML63 />} />
          <Route path="ml64" element={<ML64 />} />
          <Route path="ml65" element={<ML65 />} />
          <Route path="ml66" element={<ML66 />} />
          <Route path="ml67" element={<ML67 />} />
          <Route path="ml68" element={<ML68 />} />

          <Route path="ms" element={<MS />} />
          <Route path="ms06" element={<MS06 />} />
          <Route path="ms09" element={<MS09 />} />
          <Route path="ms10" element={<MS10 />} />
          <Route path="ms11" element={<MS11 />} />
          <Route path="ms12" element={<MS12 />} />
          <Route path="ms13" element={<MS13 />} />
          <Route path="ms17" element={<MS17 />} />
          <Route path="ms18" element={<MS18 />} />

          <Route path="os02" element={<OS02 />} />
          <Route path="os06" element={<OS06 />} />

          <Route path="ot" element={<OT />} />
          <Route path="ot01" element={<OT01 />} />
          <Route path="ot02" element={<OT02 />} />
          <Route path="ot03" element={<OT03 />} />
          <Route path="ot05" element={<OT05 />} />
          <Route path="ot06" element={<OT06 />} />
          <Route path="ot07" element={<OT07 />} />
          <Route path="ot09" element={<OT09 />} />
          <Route path="ot10" element={<OT10 />} />
          <Route path="ot18" element={<OT18 />} />
          <Route path="ot19" element={<OT19 />} />
          <Route path="ot20" element={<OT20 />} />
          <Route path="ot21" element={<OT21 />} />

          <Route path="prenu" element={<Prenu />} />

          <Route path="rimni" element={<Rimni />} />
          <Route path="ruo" element={<Ruo />} />

          <Route path="sb" element={<SB />} />
          <Route path="sb01" element={<SB01 />} />
          <Route path="sb02" element={<SB02 />} />
          <Route path="sb03" element={<SB03 />} />
          <Route path="sb05" element={<SB05 />} />
          <Route path="sb11" element={<SB11 />} />
          <Route path="sb12" element={<SB12 />} />
          <Route path="sb15" element={<SB15 />} />
          <Route path="sb20" element={<SB20 />} />
          <Route path="sb21" element={<SB21 />} />
          <Route path="sb22" element={<SB22 />} />
          <Route path="sb23" element={<SB23 />} />

          <Route path="ss" element={<SS />} />
          <Route path="ss00" element={<SS00 />} />
          <Route path="ss01" element={<SS01 />} />
          <Route path="ss04" element={<SS04 />} />
          <Route path="ss05" element={<SS05 />} />
          <Route path="ss06" element={<SS06 />} />
          <Route path="ss07" element={<SS07 />} />
          <Route path="ss08" element={<SS08 />} />
          <Route path="ss10" element={<SS10 />} />
          <Route path="ss12" element={<SS12 />} />
          <Route path="ss14" element={<SS14 />} />
          <Route path="ss15" element={<SS15 />} />
          <Route path="ss16" element={<SS16 />} />
          <Route path="ss17" element={<SS17 />} />
          <Route path="ss19" element={<SS19 />} />
          <Route path="ss21" element={<SS21 />} />
          <Route path="ss23" element={<SS23 />} />
          <Route path="ss30" element={<SS30 />} />
          <Route path="ss31" element={<SS31 />} />
          <Route path="ss32" element={<SS32 />} />
          <Route path="ss33" element={<SS33 />} />
          <Route path="ss34" element={<SS34 />} />
          <Route path="ss35" element={<SS35 />} />
          <Route path="ss42" element={<SS42 />} />
          <Route path="ss43" element={<SS43 />} />
          <Route path="ss44" element={<SS44 />} />

          <Route path="st" element={<ST />} />
          <Route path="st01" element={<ST01 />} />
          <Route path="st05" element={<ST05 />} />

          <Route path="vk" element={<VK />} />
          <Route path="vk05" element={<VK05 />} />
          <Route path="vk06" element={<VK06 />} />


          <Route path="yk" element={<YK />} />
          <Route path="yk01" element={<YK01 />} />
          <Route path="yk03" element={<YK03 />} />
          <Route path="yk05" element={<YK05 />} />
          <Route path="yk06" element={<YK06 />} />

          {/* // voksa - the file to use for pairs of words to make reels on Instagram */}
          <Route path="voksa" element={<Voksa />} />
          <Route path="bob" element={<Bob />} />
          <Route path="jaw" element={<Jaw />} />
          <Route path="leo" element={<Leo />} />

          <Route path="prisma" element={<Prisma />} />
          <Route path="uenba" element={<Uenba />} />
          <Route path="tim" element={<Tim />} />
          <Route path="dan" element={<Dan />} />
          <Route path="sam" element={<Sam />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);