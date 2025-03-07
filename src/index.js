import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home";
import IM from "./pages/IM";
import IM01 from "./pages/IM01";
import ML from "./pages/ML";
import ML25 from "./pages/ML25";
import SS from "./pages/SS";
import SS00 from "./pages/SS00";
import SS01 from "./pages/SS01";
import SS04 from "./pages/SS04";
import SS05 from "./pages/SS05";
import AB01 from "./pages/AB01";
import Bob from "./pages/Bob";
import Jaw from "./pages/Jaw";
import Leo from "./pages/Leo";
import Tim from "./pages/Tim";
import Sam from "./pages/Sam";
import Dan from "./pages/Dan";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ab01" element={<AB01 />} />
          <Route path="im" element={<IM />} />
          <Route path="im01" element={<IM01 />} />
          <Route path="ml" element={<ML />} />
          <Route path="ml25" element={<ML25 />} />
          <Route path="ss" element={<SS />} />
          <Route path="ss00" element={<SS00 />} />
          <Route path="ss01" element={<SS01 />} />
          <Route path="ss04" element={<SS04 />} />
          <Route path="ss05" element={<SS05 />} />
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