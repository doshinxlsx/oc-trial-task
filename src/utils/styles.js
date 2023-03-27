import styled from "styled-components";

export const Header = styled.header`
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 80px;
  padding: 0 32px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.img`
  height: 32px;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  li {
    margin-right: 32px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const PinkStripe = styled.div`
  height: 6px;
  background-color: #f5a3b3;
  width: 0;
  transition: width 0.3s;
`;

export const MenuItem = styled.a`
  position: relative;
  color: #2a2a2a;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  &:hover ${PinkStripe} {
    width: 100%;
  }
`;

export const Slider = styled.div`
  background-color: #fff;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

