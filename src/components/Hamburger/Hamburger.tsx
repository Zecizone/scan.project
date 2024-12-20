import { StyledHamburger } from "./Hamburger.styled";

export type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Hamburger = ({ open, setOpen }: Props) => (
  <StyledHamburger open={open} onClick={() => setOpen(!open)} aria-label="Toggle menu">
    <div className="first" />
    <div className="middle" />
    <div className="last" />
  </StyledHamburger>
);

export default Hamburger;
