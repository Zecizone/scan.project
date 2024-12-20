import Menu from '../Menu/Menu';
import {StyledHeader} from './Header.styled'

const Header = () => (
  <StyledHeader>
    <img src="src\components\Header\img\header.svg" alt="" />
    <Menu />
  </StyledHeader>
);

export default Header;