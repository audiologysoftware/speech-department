import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import SidebarData from '../../data/sidebar.json';
import PositionContext from '../../store/RouteContextProvider';

function Header() {
  const { current } = useContext(PositionContext);
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  let labName = 'Home'; // Default lab name

  if (current > 0 && current <= SidebarData.length) {
    labName = SidebarData[current - 1].title; // Adjust for zero-based indexing
  }

  return (
    <header className="header">
      <h3>{labName}</h3>
      <h3 className="department">Department of Speech Language Pathology</h3>
    </header>
  );
}

export default Header;
