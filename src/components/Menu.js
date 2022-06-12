import "./Menu.css";
import logo from '../images/tetris-logo.png'

const Menu = ({ onClick }) => (
  <div className='Menu'>
    <div>
      <img src={logo} alt='' width={600} />
    </div>
    <button className='Button' onClick={onClick}>
      Start
    </button>
  </div>
);

export default Menu;
