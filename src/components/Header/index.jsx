import React from 'react'
import { HeaderContainer, Logo, MenuContainer, MenuItem } from './styles';
import logo from '../../assets/oc-top-logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Company Logo" />
      <MenuContainer>
        <MenuItem>Home</MenuItem>
        <MenuItem>About Us</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Our Work</MenuItem>
        <MenuItem>Our Partners</MenuItem>
        <MenuItem>Our Prices</MenuItem>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
