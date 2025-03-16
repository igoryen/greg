import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home";

import Ang from "./pages/Ang";
import AB from "./pages/AB";
import AB01 from "./pages/AB01";
import AB04 from "./pages/AB04";
import AB05 from "./pages/AB05";
import AB06 from "./pages/AB06";
import AB07 from "./pages/AB07";
import Bob from "./pages/Bob";
import Dan from "./pages/Dan";
import IM from "./pages/IM";
import IM01 from "./pages/IM01";
import IP from "./pages/IP";
import IP03 from "./pages/IP03";
import IP04 from "./pages/IP04";
import IP05 from "./pages/IP05";
import IP06 from "./pages/IP06";
import Jaw from "./pages/Jaw";
import Leo from "./pages/Leo";
import ML from "./pages/ML";
import ML25 from "./pages/ML25";
import ML26 from "./pages/ML26";
import ML27 from "./pages/ML27";
import MS from "./pages/MS";
import MS06 from "./pages/MS06";
import Sam from "./pages/Sam";
import SS from "./pages/SS";
import SS00 from "./pages/SS00";
import SS01 from "./pages/SS01";
import SS04 from "./pages/SS04";
import SS05 from "./pages/SS05";
import SS06 from "./pages/SS06";
import SS07 from "./pages/SS07";
import SS08 from "./pages/SS08";
import VK from "./pages/VK";
import VK05 from "./pages/VK05";
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
          <Route path="im" element={<IM />} />
          <Route path="im01" element={<IM01 />} />
          <Route path="ip" element={<IP />} />
          <Route path="ip03" element={<IP03 />} />
          <Route path="ip04" element={<IP04 />} />
          <Route path="ip05" element={<IP05 />} />
          <Route path="ip06" element={<IP06 />} />
          <Route path="ml" element={<ML />} />
          <Route path="ml25" element={<ML25 />} />
          <Route path="ml26" element={<ML26 />} />
          <Route path="ml27" element={<ML27 />} />
          <Route path="ms" element={<MS />} />
          <Route path="ms06" element={<MS06 />} />
          <Route path="ss" element={<SS />} />
          <Route path="ss00" element={<SS00 />} />
          <Route path="ss01" element={<SS01 />} />
          <Route path="ss04" element={<SS04 />} />
          <Route path="ss05" element={<SS05 />} />
          <Route path="ss06" element={<SS06 />} />
          <Route path="ss07" element={<SS07 />} />
          <Route path="ss08" element={<SS08 />} />
          <Route path="vk" element={<VK />} />
          <Route path="vk05" element={<VK05 />} />
          <Route path="bob" element={<Bob />} />
          <Route path="jaw" element={<Jaw />} />
          <Route path="leo" element={<Leo />} />
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