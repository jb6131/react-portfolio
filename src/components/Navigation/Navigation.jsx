import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;