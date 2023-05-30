import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    //TODO: 로그인 로직 구현
    setIsLoggedIn(true);
    setUsername('user');
  };

  const handleLogout = () => {
    //TODO: 로그아웃 로직 구현
    setIsLoggedIn(false);
    setUsername('');
    navigate('/');
  };

  return (
    <Nav>
      <Logo>
        <NavLink href="/">CVG</NavLink>
      </Logo>
      <UserBlock>
        {isLoggedIn ? (
          <>
            <UserImage
              src="../images/components/Header/userIcon.svg"
              alt="userImage"
            />
            <UserName>{username}님 반갑습니다!</UserName>
            <NavLink onClick={handleLogout}>로그아웃</NavLink>
          </>
        ) : (
          <NavLink onClick={handleLogin}>로그인 / 회원가입</NavLink>
        )}
      </UserBlock>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #252525;
  height: 70px;
  color: #f5ecd7;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 21px;
  font-weight: 600;
  padding: 20px;
  color: #f5ecd7;
`;

const UserBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 80px;
  font-size: 16px;
  font-weight: 400;
`;

const UserName = styled.span`
  margin-right: 14px;
`;

const NavLink = styled.a`
  color: #f5ecd7;
  text-decoration: none;
  margin-left: 30px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: transparent;
    transition: background-color 0.3s ease-in-out;
  }

  &:hover::before {
    background-color: #fff;
  }

  &:hover {
    color: #fff;
  }
`;

const UserImage = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

export default Navbar;
