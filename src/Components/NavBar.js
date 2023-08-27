import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <h1>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </h1>
          <div>
            <Link to="/products" className="navbar-button">
              Products
            </Link>
            <Link to="/products/new" className="navbar-button">
              Add New Product
            </Link>
            {/* <Link to="/users" className="navbar-button">
              Users
            </Link> */}
            {/* <Link to="/reviews" className="navbar-button">
              Reviews
            </Link> */}
            {/* <Link to="/login" className="navbar-button">
              Login
            </Link> */}
            {/* <Link to="/logout" className="navbar-button">
              Logout
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

