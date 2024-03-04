import { useState } from "react";
import PersonalInfo from "./forms/PersonalInfo"
import CompanyInfo from "./forms/CompanyInfo"
import SocialAccounts from "./forms/SocialAccounts"
import Navi from "./components/Navi"
import Deneme from "./components/Deneme";
import FormsTab from "./components/FormsTab"


function App() {
  const [view, setView] = useState("");
  return (
    <div className="App">
    
      <Navi />
      <nav className="tabs">
        <h3
          onClick={() => setView("personal")}
          style={{ color: view === "personal" ? "#CF9FFF" : "" }}
        >
          Kişisel Bilgiler
        </h3>
        <h3
          onClick={() => setView("company")}
          style={{ color: view === "company" ? "#fff" : "" }}
        >
          Şirket Bilgileri
        </h3>
        <h3
          onClick={() => setView("social")}
          style={{ color: view === "social" ? "#fff" : "" }}
        >
          Sosyal Hesaplar
        </h3>
      </nav>
      {view === "personal" ? (
      <PersonalInfo />
    ) : view === "company" ? (
      <CompanyInfo />
    ) : view === "social" ? (
      <SocialAccounts />
    ) : null}
    </div>
  );
}

export default App;
