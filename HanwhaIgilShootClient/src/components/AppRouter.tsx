import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import HomePage from "../pages/HomePage";
import CommunityPage from "../pages/CommunityPage";
import PostDetailPage from "../pages/PostDetailPage";
import JoinPage from "../pages/JoinPage";
import { ROUTES } from "../constants/routes";
import LoginPage from "../pages/LoginPage";

function AppRouter() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content flex justify-center flex-col">
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.COMMUNITY} element={<CommunityPage />} />
            <Route path="/community/post/:id" element={<PostDetailPage />} />
            <Route path={ROUTES.JOIN} element={<JoinPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRouter;
