import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import HomePage from "../pages/HomePage";
import CommunityPage from "../pages/CommunityPage";
import JoinPage from "../pages/JoinPage";
import { ROUTES } from "../constants/routes";

function AppRouter() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content flex justify-center flex-col">
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.COMMUNITY} element={<CommunityPage />} />
            <Route path={ROUTES.JOIN} element={<JoinPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRouter;
