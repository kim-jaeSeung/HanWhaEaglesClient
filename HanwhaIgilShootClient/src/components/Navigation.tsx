import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";

function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to={ROUTES.HOME}>한화 이글스</Link>
        </div>
        <ul className="nav-menu">
          <li>
            <Link
              to={ROUTES.HOME}
              className={isActive(ROUTES.HOME) ? "active" : ""}
            >
              홈
            </Link>
          </li>
          <li>
            <Link
              to={ROUTES.COMMUNITY}
              className={isActive(ROUTES.COMMUNITY) ? "active" : ""}
            >
              커뮤니티
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
