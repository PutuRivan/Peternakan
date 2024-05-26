import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import Hewan from "./pages/Hewan";
import Data from "./pages/Data";
import Kebutuhan from "./pages/Kebutuhan";
import Babi from "./pages/Babi/Babi";
import Sapi from "./pages/Sapi/Sapi";
import Kambing from "./pages/Kambing/Kambing";
import AddDataBabi from "./pages/Babi/AddDataBabi";
import AddDataSapi from "./pages/Sapi/AddDataSapi";
import AddDataKambing from "./pages/Kambing/AddDataKambing";
import UpdateDataBabi from "./pages/Babi/UpdateDataBabi";
import KesehatanBabi from "./pages/Babi/KesehatanBabi";
import UpdateDataKambing from "./pages/Kambing/UpdateDataKambing";
import UpdateDataSapi from "./pages/Sapi/UpdateDataSapi";

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
        <Route path="/Add-data-Babi" element={<AddDataBabi />} />
        <Route path="/Update-Data-Babi" element={<UpdateDataBabi />} />
        <Route path="/Kesehatan-Babi" element={<KesehatanBabi />} />

        <Route path="/Sapi" element={<Sapi />} />
        <Route path="/Add-data-Sapi" element={<AddDataSapi />} />
        <Route path="/Update-Data-Sapi" element={<UpdateDataSapi />} />
        
        <Route path="/Kambing" element={<Kambing />} />
        <Route path="/Add-data-kambing" element={<AddDataKambing />} />
        <Route path="/Update-Data-kambing" element={<UpdateDataKambing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
