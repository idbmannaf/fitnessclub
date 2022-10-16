import Logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import './navbar.css';
import { useState } from 'react';
const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
    return (
        <nav>
            <div className="container nav__container">
                <Link to='/' className='logo'>
                    <img src={Logo} alt="Fitness Logo" className="logo-img" onClick={() => setIsNavShowing(false)} />
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {links.map(({ name, path }, index) => {
                        return (
                            <li key={index}><NavLink key={index} to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink></li>
                        )
                    })}

                </ul>
                <button className="nav_toggle_btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
                </button>

            </div>
        </nav >
    )
}

export default Navbar