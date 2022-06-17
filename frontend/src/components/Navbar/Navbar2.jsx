import React from 'react'
import Logo from './logo.png'
import './Navbar2.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
const Navbar2 = ({signedIn, setSignedIn}) => {

  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();
    const [click, setClick] = useState(false);
    const quantity = useSelector(state => state.cart.quantity)
    const closeMobileMenu = () => setClick(false);

    const logOut = () => {
       localStorage.setItem('access', '')
       localStorage.setItem('refresh', '')
      setSignedIn(false)
      navigate('/login')
    }
  return (
    <nav className="navbar">
        <div className="left">
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className = "navbarImg" src={Logo} alt="" />
        </Link>
        </div>
        <div className="right">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/design-services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Design Services
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/consultancy-service'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Consultancy Service
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/equipment-rental'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Equipment Rentals
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/technicians'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Technicians
              </Link>
            </li>
            {
              signedIn ?  <li className='nav-item'>
              <div style = {{cursor : 'pointer'}} onClick = {logOut} className="nav-links">Log Out</div>
            </li> :  <li className='nav-item'>
              <Link
                to='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
           
            }
             {
                signedIn && <Link to = '/cart' className = "navLinks" style = {{marginRight : "20px"}}><Badge badgeContent={quantity}  color="secondary">
                <ShoppingCartIcon className = "shoppingIcon" style = {{fill : "white"}}/>
              </Badge>
              </Link>
              }

            <li className='nav-item menu-icon-container'>
                
            <MenuIcon className = "navbar-menu-icon" onClick = {showSidebar} />    
            </li>
           
            

            </ul>
           

        </div>
    </nav>
  )
}

export default Navbar2