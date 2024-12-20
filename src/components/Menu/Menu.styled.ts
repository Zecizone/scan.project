import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../global";

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: ${colors.lightBrown};
  z-index: 1;

  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    padding: 10px;
    position: initial;
    transform: none;
    background-color: wheat;
    height: auto;
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  padding: 0 2rem;
  font-size: 2rem;
  color: ${colors.pearl};
  text-decoration: none;

  :hover {
    color: ${colors.yellowMellow};
  }

  @media (min-width: 1024px) {
    padding: 5px;
  }
`;
