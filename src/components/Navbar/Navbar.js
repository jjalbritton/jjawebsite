import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  margin-right: 1.5rem;
  text-decoration: none;
  &:hover {
    color: #ffcc00;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function AppNavbar() {
  return (
    <Navbar>
      <NavbarContainer>
        {/* <NavLink to="/">My Music</NavLink> */}
        <div>
          <NavLink to="/">Home</NavLink>
          {/* <NavLink to="/bio">Bio</NavLink> */}
          <NavLink to="/calendar">Calendar</NavLink>
          <NavLink to="/photos">Photos</NavLink>
          {/* <NavLink to="/videos">Videos</NavLink> */}
          {/* <NavLink to="/contact">Contact</NavLink> */}
        </div>
      </NavbarContainer>
    </Navbar>
  );
}

export default AppNavbar;