import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="NavBar">
      <h1 className="main-header">Bookstore CMS</h1>
      <ul className="NavList">
        <li className="NavItem"><Link className="NavLink" to="/">Books</Link></li>
        <li className="NavItem"><Link className="NavLink" to="/catagories">Catagories</Link></li>
      </ul>
      <div><img src="../assets/avatar.png" style={{ width: '30px', height: '30px' }} alt="Avatar" /></div>
    </nav>
  );
}
export default NavBar;
