import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import Hewan from "./pages/Hewan";
import Data from "./pages/Data";
import Kebutuhan from "./pages/Kebutuhan";
import Babi from "./pages/Babi/Babi";
import Sapi from "./pages/Sapi/Sapi";
import Kambing from "./pages/Kambing/Kambing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/Hewan" element={<Hewan />} />
        <Route path="/Data" element={<Data />} />
        <Route path="/Kebutuhan" element={<Kebutuhan />} />

        <Route path="/Babi" element={<Babi />} />

        <Route path="/Sapi" element={<Sapi />} />

        <Route path="/Kambing" element={<Kambing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
