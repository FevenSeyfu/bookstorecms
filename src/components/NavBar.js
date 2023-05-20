import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="NavBar">
      <h1 className="main-header">Bookstore CMS</h1>
      <ul className="NavList">
        <li className="NavItem"><Link className="NavLink" to="/">Books</Link></li>
        <li className="NavItem"><Link className="NavLink" to="/catagories">Catagories</Link></li>
      </ul>
      <img width="48" height="48" src="https://img.icons8.com/color/48/test-account.png" alt="Avatar" className="Mask" />
    </nav>
  );
}
export default NavBar;
