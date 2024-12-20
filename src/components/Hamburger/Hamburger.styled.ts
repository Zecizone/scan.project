import styled from "styled-components";
import { colors } from "../../global";

export const StyledHamburger = styled.button<{ open: boolean }>`
  position: fixed;
  right: ${({ open }) => (open ? "29vw" : "3vw")};
  top: 3vw;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border: none;
  cursor: pointer;
  outline: none;
  z-index: 10;

  @media (min-width: 1024px) {
    display: none;
  }

  @media (max-width: 600px) {
    right: 3vw;
    left: initial;

  }

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: ${({ open }) => (open ? colors.pearl : colors.lightBrown)};


     &.first {
       transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &.middle {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    &.last {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
