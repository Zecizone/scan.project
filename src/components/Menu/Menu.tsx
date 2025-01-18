import { useState, useRef } from "react";
import Hamburger from "../Hamburger/Hamburger";
import { StyledMenu, StyledLink } from "./Menu.styled";
import { useOnClickOutside } from "./hooks";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, close);

  return (
    <div ref={node}>
      <Hamburger open={open} setOpen={setOpen} />
      <StyledMenu open={open}>
        <StyledLink to="/" onClick={close}>Главная</StyledLink>
        <StyledLink to="/tariff" onClick={close}>Тарифы</StyledLink>
        <StyledLink to="/faq" onClick={close}>FAQ</StyledLink>
      </StyledMenu>
    </div>
  );
};

export default Menu;
