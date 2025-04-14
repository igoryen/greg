import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home";

import Ang from "./pages/Ang";

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

import AG from "./pages/ag/AG";
import AG08 from "./pages/ag/AG08";
import AG10 from "./pages/ag/AG10";

import OS from "./pages/os/OS";
import OS01 from "./pages/os/OS01";
import OS02 from "./pages/os/OS02";

import Bob from "./pages/Bob";
import Dan from "./pages/Dan";

import GK from "./pages/gk/GK";
import GK01 from "./pages/gk/GK01";

import GP from "./pages/gp/GP";
import GP01 from "./pages/gp/GP01";

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

import IS from "./pages/is/IS";
import IS01 from "./pages/is/IS01";

import Jaw from "./pages/Jaw";
import Leo from "./pages/Leo";

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

import MS from "./pages/ms/MS";
import MS06 from "./pages/ms/MS06";
import MS09 from "./pages/ms/MS09";
import MS10 from "./pages/ms/MS10";
import MS11 from "./pages/ms/MS11";
import MS12 from "./pages/ms/MS12";
import MS13 from "./pages/ms/MS13";

import OT from "./pages/ot/OT";
import OT01 from "./pages/ot/OT01";

import Sam from "./pages/Sam";

import SB from "./pages/sb/SB";
import SB01 from "./pages/sb/SB01";
import SB02 from "./pages/sb/SB02";
import SB03 from "./pages/sb/SB03";
import SB05 from "./pages/sb/SB05";

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

import VK from "./pages/vk/VK";
import VK05 from "./pages/vk/VK05";
import VK06 from "./pages/vk/VK06";

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

          <Route path="ag" element={<AG />} />
          <Route path="ag08" element={<AG08 />} />
          <Route path="ag10" element={<AG10 />} />

          <Route path="os" element={<OS />} />
          <Route path="os01" element={<OS01 />} />

          <Route path="gk" element={<GK />} />
          <Route path="gk01" element={<GK01 />} />

          <Route path="gp" element={<GP />} />
          <Route path="gp01" element={<GP01 />} />

          <Route path="os02" element={<OS02 />} />

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

          <Route path="is" element={<IS />} />
          <Route path="is01" element={<IS01 />} />

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

          <Route path="ms" element={<MS />} />
          <Route path="ms06" element={<MS06 />} />
          <Route path="ms09" element={<MS09 />} />
          <Route path="ms10" element={<MS10 />} />
          <Route path="ms11" element={<MS11 />} />
          <Route path="ms12" element={<MS12 />} />
          <Route path="ms13" element={<MS13 />} />

          <Route path="ot" element={<OT />} />
          <Route path="ot01" element={<OT01 />} />

          <Route path="sb" element={<SB />} />
          <Route path="sb01" element={<SB01 />} />
          <Route path="sb02" element={<SB02 />} />
          <Route path="sb03" element={<SB03 />} />
          <Route path="sb05" element={<SB05 />} />

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

          <Route path="vk" element={<VK />} />
          <Route path="vk05" element={<VK05 />} />
          <Route path="vk06" element={<VK06 />} />

          {/* // voksa - the file to use for pairs of words to make reels on Instagram */}
          <Route path="voksa" element={<Voksa />} />
          <Route path="bob" element={<Bob />} />
          <Route path="jaw" element={<Jaw />} />
          <Route path="leo" element={<Leo />} />

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