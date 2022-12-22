import "./index.css";
import MainPage from "./pages/main page/main";
import PersonalInfo from "./pages/aplication form/personalinfo/personalinfo";
import Techskill from "./pages/aplication form/technicalskill/techskill";
import CovidPg from "./pages/aplication form/covid pg/covidpg";
import InsigtPg from "./pages/aplication form/redberian insight/Insight";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubmitPg from "./pages/aplication form/submit pg/submit";
import SubmitApp from "./pages/submited aplication/SubmitApp";
import ThankPage from "./pages/aplication form/submit pg/ThankPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MainPage />}></Route>
          <Route path="personalinfo" element={<PersonalInfo />}></Route>
          <Route path="TechSkill" element={<Techskill />}></Route>
          <Route path="covidpg" element={<CovidPg />}></Route>
          <Route path="InsigtPg" element={<InsigtPg />}></Route>
          <Route path="submit" element={<SubmitPg />}></Route>
          <Route path="aplications" element={<SubmitApp />}></Route>
          <Route path="thankpg" element={<ThankPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
