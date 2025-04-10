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
import AG from "./pages/AG";
import AG08 from "./pages/AG08";
import AG10 from "./pages/AG10";
import OS from "./pages/OS";
import OS01 from "./pages/OS01";
import OS02 from "./pages/OS02";
import Bob from "./pages/Bob";
import Dan from "./pages/Dan";
import GP from "./pages/GP";
import GP01 from "./pages/GP01";
import IM from "./pages/IM";
import IM01 from "./pages/IM01";
import IM04 from "./pages/IM04";
import IM07 from "./pages/IM07";
import IM09 from "./pages/IM09";
import IM10 from "./pages/IM10";
import IM12 from "./pages/IM12";
import IP from "./pages/ip/IP";
import IP03 from "./pages/IP03";
import IP04 from "./pages/IP04";
import IP05 from "./pages/IP05";
import IP06 from "./pages/IP06";
import IP07 from "./pages/IP07";
import IP08 from "./pages/IP08";
import IP09 from "./pages/IP09";
import IP10 from "./pages/IP10";
import IP11 from "./pages/IP11";
import IP12 from "./pages/IP12";
import IP13 from "./pages/IP13";
import IP14 from "./pages/IP14";
import IP17 from "./pages/ip/IP17";
import IS from "./pages/IS";
import IS01 from "./pages/IS01";
import Jaw from "./pages/Jaw";
import Leo from "./pages/Leo";
import ML from "./pages/ml/ML";
import ML25 from "./pages/ML25";
import ML26 from "./pages/ML26";
import ML27 from "./pages/ML27";
import ML29 from "./pages/ML29";
import ML30 from "./pages/ML30";
import ML32 from "./pages/ML32";
import ML33 from "./pages/ML33";
import ML34 from "./pages/ML34";
import ML35 from "./pages/ML35";
import ML37 from "./pages/ML37";
import ML38 from "./pages/ml/ML38";
import MS from "./pages/MS";
import MS06 from "./pages/MS06";
import MS09 from "./pages/MS09";
import MS10 from "./pages/MS10";
import MS11 from "./pages/MS11";
import MS12 from "./pages/MS12";
import MS13 from "./pages/MS13";
import Sam from "./pages/Sam";
import SB from "./pages/SB";
import SB01 from "./pages/SB01";
import SB02 from "./pages/SB02";
import SB03 from "./pages/SB03";
import SB05 from "./pages/SB05";
import SS from "./pages/ss/SS";
import SS00 from "./pages/SS00";
import SS01 from "./pages/SS01";
import SS04 from "./pages/SS04";
import SS05 from "./pages/SS05";
import SS06 from "./pages/SS06";
import SS07 from "./pages/SS07";
import SS08 from "./pages/SS08";
import SS10 from "./pages/SS10";
import SS12 from "./pages/SS12";
import SS14 from "./pages/SS14";
import SS15 from "./pages/SS15";
import SS16 from "./pages/SS16";
import SS17 from "./pages/SS17";
import SS19 from "./pages/ss/SS19";
import VK from "./pages/VK";
import VK05 from "./pages/VK05";
import VK06 from "./pages/VK06";
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
          <Route path="ag" element={<AG />} />
          <Route path="ag08" element={<AG08 />} />
          <Route path="ag10" element={<AG10 />} />
          <Route path="os" element={<OS />} />
          <Route path="os01" element={<OS01 />} />
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
          <Route path="vk" element={<VK />} />
          <Route path="vk05" element={<VK05 />} />
          <Route path="vk06" element={<VK06 />} />
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