import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 80px;
  padding: 0 40px;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const MenuContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin: 0 20px;
  position: relative;

  &:hover::before {
    width: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 5px;
    background-color: #ff69b4;
    transition: width 0.3s ease;
  }
`;