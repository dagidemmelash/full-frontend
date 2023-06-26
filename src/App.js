import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DataVisualization from "./pages/DataVisualization";
import AdminDashboard from "./pages/AdminDashboard";
import Authentication from "./pages/Authentication";
import Update from "./pages/Update";
import CriminalInfo from "./pages/CriminalInfo";
import LoginPage2 from "./pages/LoginPage2";
import JudgeDashbord from "./pages/JudgeDashbord";
import Registration from "./pages/Registration";
import CriminalList from "./pages/CriminalList";
import AddEvidence from "./pages/AddEvidence";
import PoliceDashboard from "./pages/PoliceDashboard";
import BarChart from "./pages/BarChart";
import DataVisualization1 from "./pages/DataVisualization1";
import LoginPage1 from "./pages/LoginPage1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/datavisualization1":
        title = "";
        metaDescription = "";
        break;
      case "/admin-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/authentication":
        title = "";
        metaDescription = "";
        break;
      case "/update":
        title = "";
        metaDescription = "";
        break;
      case "/criminal-info":
        title = "";
        metaDescription = "";
        break;
      case "/login-page2":
        title = "";
        metaDescription = "";
        break;
      case "/judge-dashbord":
        title = "";
        metaDescription = "";
        break;
      case "/registration":
        title = "";
        metaDescription = "";
        break;
      case "/criminal-list":
        title = "";
        metaDescription = "";
        break;
      case "/add-evidence":
        title = "";
        metaDescription = "";
        break;
      case "/police-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/bar-chart":
        title = "";
        metaDescription = "";
        break;
      case "/datavisualization":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/datavisualization1" element={<DataVisualization />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/update" element={<Update />} />
      <Route path="/criminal-info" element={<CriminalInfo />} />
      <Route path="/login-page2" element={<LoginPage2 />} />
      <Route path="/judge-dashbord" element={<JudgeDashbord />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/criminal-list" element={<CriminalList />} />
      <Route path="/add-evidence" element={<AddEvidence />} />
      <Route path="/police-dashboard" element={<PoliceDashboard />} />
      <Route path="/bar-chart" element={<BarChart />} />
      <Route path="/datavisualization" element={<DataVisualization1 />} />
      <Route path="/login-page" element={<LoginPage1 />} />
    </Routes>
  );
}
export default App;
