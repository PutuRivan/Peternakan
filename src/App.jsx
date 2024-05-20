import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';
import ChickenPage from './pages/Chicken';
import CowPage from './pages/Cow';
import KambingPage from './pages/Kambing';
import Hewan from './pages/Hewan';
import Status from './pages/Status';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/Dashboard' element={<DashboardPage/>} />
        <Route path='/Chicken' element={<ChickenPage/>} />
        <Route path='/Cow' element={<CowPage/>} />
        <Route path='/Kambing' element={<KambingPage/>} />
        <Route path='/Hewan' element={<Hewan/>} />
        <Route path='/Status' element={<Status/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
