import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import BestPick from "./BestPick";
function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <BestPick />
      <nav className="font-esamanru">
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
                className={`transition-colors hover:text-main-orange ${
                  isActive(ROUTES.HOME) ? "text-main-orange" : ""
                }`}
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.COMMUNITY}
                className={`transition-colors hover:text-main-orange ${
                  isActive(ROUTES.COMMUNITY) ? "text-main-orange" : ""
                }`}
              >
                커뮤니티
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-light-gray hover:text-main-orange transition-colors">
              로그인
            </button>
            <button className="px-4 py-2 bg-main-orange text-white rounded-lg hover:bg-dim-black transition-colors">
              회원가입
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
