import { useState, useEffect } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { UserProvider } from './components/UserContext.jsx';  // Import UserProvider
import PersonalInfo from "./forms/PersonalInfo";
import CompanyInfo from "./forms/CompanyInfo";
import SocialAccounts from "./forms/SocialAccounts";
import Navi from "./components/Navi";
import Card from "./components/card-read-page/Card.jsx";
import Homepage from "./components/Homepage.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    accept: false
  });
  const [companyInfo, setCompanyInfo] = useState({
    companyName: '',
    companyLocationLink: '',
    email: '',
    phone: '',
    iban: '',
    taxAdministrationNumber: '',
    taxadministration: '',
    accept: false
  });
  const [socialAccounts, setSocialAccounts] = useState({
    links: []
  });
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const savedPersonalInfo = localStorage.getItem('personalInfo');
    if (savedPersonalInfo) {
      setPersonalInfo(JSON.parse(savedPersonalInfo));
    }

    const savedCompanyInfo = localStorage.getItem('companyInfo');
    if (savedCompanyInfo) {
      setCompanyInfo(JSON.parse(savedCompanyInfo));
    }

    const savedSocialAccounts = localStorage.getItem('socialAccounts');
    if (savedSocialAccounts) {
      setSocialAccounts(JSON.parse(savedSocialAccounts));
    }
  }, []);

  const handleButtonClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <UserProvider>
    <div className="App bg-darkgrey">
      <Navi />
      <Homepage/>
      <nav className="items-center flex justify-between space-x-2 tabs">
       
        <NavLink
          className={`align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg ${activeTab === 'Kişisel Bilgiler' ? 'bg-green text-darkgrey' : 'border-b border-[#cbe54e] text-white'} shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
          to="/personal"
          onClick={() => handleButtonClick('Kişisel Bilgiler')}
        >
          Kişisel Bilgiler
        </NavLink>
        <NavLink
          className={`align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg ${activeTab === 'Şirket Bilgileri' ? 'bg-green text-darkgrey' : 'border-b border-[#cbe54e] text-white'} shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
          to="/company"
          onClick={() => handleButtonClick('Şirket Bilgileri')}
        >
          Şirket Bilgileri
        </NavLink>
        <NavLink
          className={`align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg ${activeTab === 'Sosyal Hesaplar' ? 'bg-green text-darkgrey' : 'border-b border-[#cbe54e] text-white'} shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
          to="/social"
          onClick={() => handleButtonClick('Sosyal Hesaplar')}
        >
          Sosyal Hesaplar
        </NavLink>
      </nav>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route
          path="/personal"
          element={<PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />}
        />
        <Route
          path="/company"
          element={<CompanyInfo companyInfo={companyInfo} setCompanyInfo={setCompanyInfo} />}
        />
        <Route
          path="/social"
          element={<SocialAccounts socialAccounts={socialAccounts} setSocialAccounts={setSocialAccounts} />}
        />
        <Route path="/test" element={<Card />} />
      </Routes>
    </div>
    </UserProvider>
  );
}

export default App;
