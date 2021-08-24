import React, {useState} from 'react';
import MenuModal from '../components/MenuModal';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {VscMenu} from 'react-icons/vsc'
import {BiSearch} from 'react-icons/bi'

const NavStyle = styled.nav`

    height: 7rem;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    align-items: center;
    background-color: white;
    position: fixed;
    width: 100vw;
    z-index: 999;
  
    @media screen and (min-width: 767px) {
      height: 8rem;
     padding: 2rem;
    }
  
  
    @media screen and (min-width: 991px) {
      flex-direction: column; 
      height: 100%;
      max-width: 10rem;
    } 


.menu-icon, .search-icon {
  font-size: 3rem;
}

.nav-logo__link {

  @media screen and (min-width: 1024px){
    transform: rotate(-90deg);
  }

  .nav-logo {
    width: 10rem;
  }

}

`



const Nav = (props) => {

  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
    console.log(visible);
  }

  return (
    visible ? (<MenuModal toggleMenu={toggleMenu}/>) :
    <NavStyle className="mobile-nav">
        <div onClick={toggleMenu}><VscMenu className="menu-icon"/></div>
        <Link to='/' className="nav-logo__link"><img src="../../assets/img/aurea-logo.svg" className="nav-logo"/></Link>
        <div onClick={props.toggleCart} className="search-icon"><BiSearch/></div>
    </NavStyle>

    
  )
}

export default Nav