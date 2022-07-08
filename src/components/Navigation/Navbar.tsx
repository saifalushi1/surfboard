import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <>
      <header>
        <div className="nav">
          <ul>
            <Link to="/">
              <li className="home">Home</li>
            </Link>
            <li className="tutorials">
              <a className="active" href="#">
                Tutorials
              </a>
            </li>
            <li className="about">
              <a href="#">About</a>
            </li>
            <li className="news">
              <a href="#">Newsletter</a>
            </li>
            <li className="contact">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
