import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import styled, { css } from "styled-components";

export const NavBackdrop = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    position: fixed;
    z-index: 99;
    min-height: 100vh;
    top: 0;
    right: -100%;
    width: 100%;
    background: #5866666b;
    transition: all 200ms ease-in-out;

    ${({ showNavbar }) =>
      showNavbar &&
      css`
        right: 0;
      `}
  }
`;

export const SwiperBlock = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 40px;
    z-index: 777;
  }
`;

export const StyledNavbar = styled.nav`
  margin-top: -0.5px;
  background-color: ${({ theme }) => theme.colors.teal};
  z-index: 999;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: auto;
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    transition: all 300ms ease-in-out;

    ${({ showNavbar }) =>
      showNavbar &&
      css`
        right: 0;
      `}
  }
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 25px 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;

export const ListElement = styled.li`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
    flex-basis: 40px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  position: relative;

  &:hover {
    opacity: 0.8;
  }

  &.active {
    font-weight: 700;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding-left: 20px;
    height: 100%;
    width: 100%;

    &.active {
      background-color: ${({ theme }) => theme.colors.darkTeal};
    }
  }
`;

export const LogoutButton = styled(StyledNavLink)`
  background-color: transparent;
  border: none;
  text-align: start;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding-left: 20px;
  }
`;

export const HideNavbarIcon = styled(IoIosArrowBack)`
  height: 50px;
  width: 50px;
  color: #bababa;
  transform: rotate(180deg);
`;

export const OpenNavbarIcon = styled(IoIosArrowBack)`
  color: ${({ theme }) => theme.colors.white};
`;

export const OpenNavbarButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 10px;
    right: 0;
    height: 55px;
    width: 20px;
    padding: 0;
    z-index: 888;
    border: none;
    border-radius: 5px 0 0 5px;
    background-color: ${({ theme }) => theme.colors.teal};
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const HideNavbarButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: block;
    border: none;
    background-color: #056363;
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const UserPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 10px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 26px;
    height: 26px;
  }
`;

export const UserDummy = styled(FaUserCircle)`
  width: 30px;
  height: 30px;
  margin-left: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 26px;
    height: 26px;
  }
`;
