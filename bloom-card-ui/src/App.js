import { useState } from "react";
import {  Route, Routes, NavLink } from "react-router-dom";
import PersonalInfo from "./forms/PersonalInfo"
import CompanyInfo from "./forms/CompanyInfo"
import SocialAccounts from "./forms/SocialAccounts"
import Navi from "./components/Navi"
import Card from "./components/card-read-page/Card.jsx"
import Samplecard  from "./components/card-read-page/Samplecard.jsx";
import Homepage from "./components/Homepage.jsx";
import Glass from "./components/Glass.jsx"



function App() {
  const [activeTab, setActiveTab] = useState('');

  const handleButtonClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="App bg-darkgrey ">
      <Navi />
      <nav className="items-center flex justify-between space-x-2 tabs">
      <NavLink 
          className={`align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg ${activeTab === 'home' ? 'bg-green	text-darkgrey' : 'border-b border-[#cbe54e]  text-white'} shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
          to = "/home"
          onClick={() => handleButtonClick('')}
          >
          Anasayfa
        </NavLink>
        <NavLink 
          className={`align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg ${activeTab === 'Kişisel Bilgiler' ? 'bg-green	text-darkgrey' : 'border-b border-[#cbe54e]  text-white'} shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
          to = "/personal"
          onClick={() => handleButtonClick('Kişisel Bilgiler')}
          >
          Kişisel Bilgiler
        </NavLink>
        <NavLink 
          className={`align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg ${activeTab === 'Şirket Bilgileri' ? 'bg-green	 text-darkgrey' : 'border-b border-[#cbe54e] text-white'} shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
          to = 'company' 
          onClick={() => handleButtonClick('Şirket Bilgileri')}
        >
          Şirket Bilgileri
        </NavLink>
        <NavLink
          className={`align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg ${activeTab === 'Sosyal Hesaplar' ? 'bg-green	 text-darkgrey' : 'border-b border-[#cbe54e] text-white'} shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
          to= 'social'
          onClick={() => handleButtonClick('Sosyal Hesaplar')}
        >
          Sosyal Hesaplar
        </NavLink>
        <NavLink
          to= 'test'
        >
          Deneme
        </NavLink>
      </nav>
      <Routes>
        <Route path="/home" element={<Homepage/>} />
        <Route path="/personal" element={<PersonalInfo/>} />
        <Route path="/company" element={<CompanyInfo/>} />
        <Route path="/social" element={<SocialAccounts/>} />
        <Route path="/test" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
