import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <div>
            <Link to="/" className="navbar-item" style={{ justifyContent: 'flex-start' }}>
              Home
            </Link>
          </div>
          <div>
            <Link to="/products" className="navbar-item" style={{ justifyContent: 'center' }}>
              Products
            </Link>
          </div>
          <div>
            <Link to="/products/new" className="navbar-item" style={{ justifyContent: 'flex-end' }}>
              Add New Product
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}



