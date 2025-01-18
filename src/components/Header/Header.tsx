import Menu from '../Menu/Menu';
import {StyledHeader} from './Header.styled'

const Header = () => (
  <StyledHeader>
    <img src="src\components\Header\img\header.svg" alt="" />
    <Menu />
    <div className="card">
      <p className="icompany">Использовано компаний <span>34</span></p>
      <p className="lcompany">Лимит по компаниям <span>100</span></p>
    </div>
    <div className='login'>
      <div>
      <p className='loginName'>Алексей А.</p>
      <p>Выйти</p>
      </div>
      <img src="" alt="rrr" />
    </div>
  </StyledHeader>
);

export default Header;