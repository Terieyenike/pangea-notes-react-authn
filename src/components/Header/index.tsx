import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@pangeacyber/react-auth";

const Header = () => {
  const { authenticated, login, logout } = useAuth();

  const handleLogout = (e: MouseEvent) => {
    e.preventDefault();
    logout();
  }

  return (
    <div className="header">
      <h1>
        <Link to='/' style={{textDecoration: "none"}}>Notes</Link>
      </h1>
      {authenticated && (
        <div className="nav">
          <Link to="/profile">Profile</Link>
        </div>
      )}

      {authenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Header;
