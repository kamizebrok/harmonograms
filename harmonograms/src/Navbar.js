import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
                        //, useNavigate }
const Navbar = ({ setNo }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    const history = useHistory();
    const handleOptionClick = () => {
      history.push('/');
      setIsDropdownOpen(false); // Zamknięcie menu po kliknięciu
    };

    
    return ( 
        <nav className="navbar">
            <h1><Link to="/" style={{color: "#FF9494"}}>Harmonogramy</Link></h1>
            <div className="links">
                
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-item dropdown">
                    <span onClick={handleDropdownToggle} className="dropdown-toggle">Przeglądaj</span>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                        <li onClick={() => (handleOptionClick('option1'), setNo('1'))}>Harmonogram 1</li>
                        <li onClick={() => (handleOptionClick('option2'), setNo('2'))}>Harmonogram 2</li>
                        <li onClick={() => (handleOptionClick('option3'), setNo('3'))}>Harmonogram 3</li>
                        </ul>
                    )}
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" style={{
                            color: "white",
                            backgroundColor: "#FF9494",
                            borderRadius: "8px"
                        }}>Nowy</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/download" style={{
                            color: "#4d3d3d",
                            backgroundColor: "#FFF5E4",
                            borderRadius: "8px"
                        }}>Pobierz</Link>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;