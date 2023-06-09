import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const H1 = styled.h1`
    color: black;
`;

export const MainDiv = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    padding-left: 1%;
    padding-right: 1%;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: ${COLORS.BACK};

    @media screen and (max-width: 768px) {
      border: none;
    }
`;

export const LogoDiv = styled.div`
    flex: 1;
    height: max;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      margin-left: 20px;
    }
`;

export const ItemsDiv = styled.div`
    flex: 5;
    display: flex;
    justify-content: space-between;
    padding-left: 2%;
    padding-right: 2%;
    height: 100%;
    align-items: center;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const EmployerDiv = styled.div`
    flex: 1;
    border-left: 1px solid black;
    height: max;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const JobsDiv = styled.div`
    display: inline-block;  
    width: fit-content;
    cursor: pointer;
    color: ${props => props.color};
  
    &:hover{
      color: ${COLORS.ORANGE};
    }
`;

export const BlogDiv = styled.div`
    display: inline-block;  
    width: fit-content;
    cursor: pointer;
    color: ${props => props.color};
  
    &:hover{
      color: ${COLORS.ORANGE};
    }
`;

export const ProfileIconDiv = styled.div`
  color: black;

  &:hover{
    color: ${COLORS.ORANGE};
  }

  &:active{
    color: ${COLORS.ORANGE};
  }
`;

export const VolunteerDiv = styled.div`
    order: 0;
    height: max;
`;

export const SignInDiv = styled.div`
    order: 1;
    height: max;
    cursor: pointer;

    &:hover{
      font-weight: bold;
    }

    &:active{
      font-weight: bold;
    }
`;

export const P = styled.h4`
  text-align: center;
  //font-size: small;
  margin: 0px;

  &:hover{
    color: ${COLORS.ORANGE};
  }

  &:active{
    color: ${COLORS.ORANGE};
  }
`;

export const PP = styled.h4`
  text-align: center;
  //font-size: small;
  color: black;

  &:hover{
    color: ${COLORS.ORANGE};
  }

  &:active{
    color: ${COLORS.ORANGE};
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 1;
  background-color: ${COLORS.BACK};
  width: 150px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  transform: ${({ showMenu }) => (showMenu ? 'translateX(0)' : `translateX(100%)`)};
  right: ${({ showMenu }) => (showMenu ? '0' : '160px')};

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;
  cursor: pointer;
  width: 100%;
  
  @media screen and (min-width: 769px) {
    display: none;
  }

  &:hover {
    background-color: ${COLORS.LIGHT_ORANGE};
  }
`;

export const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    width: 20px;
    margin-right: 5px;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
    cursor: pointer;
`;

export const DropdownButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: ${COLORS.BACK};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  color: black;
  padding-top: 8px;
  padding-bottom: 8px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: ${COLORS.LIGHT_ORANGE};
  }
`;