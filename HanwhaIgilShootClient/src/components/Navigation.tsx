import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import BestPick from "./BestPick";
import Login from "./Login";
function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <BestPick />
      <nav className="font-esamanru border-b border-b-silver-black mb-5">
        <div className="flex justify-between items-center p-5">
          <div className="flex items-center">
            <Link to={ROUTES.HOME}>
              <img src="/img/logo.svg" alt="로고" />
            </Link>
          </div>
          <ul className="flex items-center space-x-8 text-lg font-medium">
            <li>
              <Link
                to={ROUTES.HOME}
                className={`transition-colors text-2xl hover:text-main-orange ${
                  isActive(ROUTES.HOME) ? "text-main-orange" : ""
                }`}
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.COMMUNITY}
                className={`transition-colors text-2xl hover:text-main-orange ${
                  isActive(ROUTES.COMMUNITY) ? "text-main-orange" : ""
                }`}
              >
                커뮤니티
              </Link>
            </li>
          </ul>
          <Login />
        </div>
      </nav>
    </>
  );
}

export default Navigation;
