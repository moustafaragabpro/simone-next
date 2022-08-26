import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return ( 
        <div className="header" id="home">
            <div className="overlay">
                <div className="header-content">
                <p className="sup-heading">Welcome</p>
                <h1>I{"'"}m</h1>
                <p className="sub-heading">based in Los Angeles, California.</p>
                <a href="#" className="btn btn-outline-main">Hire Me</a>
                </div>
                <a href="#about" className="see-more">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faAngleDown}></FontAwesomeIcon>
                </a>
            </div>
        </div>
        );
}
 
export default Header;