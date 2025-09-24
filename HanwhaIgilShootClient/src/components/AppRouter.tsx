import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import HomePage from "../pages/HomePage";
import CommunityPage from "../pages/CommunityPage";
import { ROUTES } from "../constants/routes";

function AppRouter() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.COMMUNITY} element={<CommunityPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRouter;
