import React from 'react';
import styled from 'styled-components';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => <Nav>Navigation</Nav>;

export default Navigation;

const Nav = styled.nav`
  background-color: #252525;
  position: fixed;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid rgb(49, 49, 49);
`;
