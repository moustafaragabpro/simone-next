import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneFlip , faFax , faEnvelope } from '@fortawesome/free-solid-svg-icons';



const Contacts = () => {
    return ( 
        <div className="contact" id="contact">
            <div className="main-heading">
            <h2>contact</h2>
            <h3>Get in Touch</h3>
            </div>
            <div className="container">
            <div className="contacts-container">
                <div className="contacts-form">
                <h3>Send us a note</h3>
                <form>
                    <div className="form-input">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    </div>
                    <textarea
                    cols="5"
                    rows="5"
                    placeholder="Tell us more about your needs....."
                    ></textarea>
                    <button type="submit" className="btn btn-main">Send Message</button>
                </form>
                </div>
                <div className="contacts-info">
                <h3>address</h3>
                <div className="contacts-item">
                    <p>4th Floor, Plot No.22,</p>
                    <p>145 Murphy Canyon Rd.</p>
                    <p>San Diego CA 2028</p>
                </div>
                <div className="contacts-item">
                    <p><FontAwesomeIcon className='FontAwesomeIcon' icon={faPhoneFlip}></FontAwesomeIcon> (060) 444 434 444</p>
                    <p><FontAwesomeIcon className='FontAwesomeIcon' icon={faFax}></FontAwesomeIcon> (060) 555 545 555</p>
                    <p><FontAwesomeIcon className='FontAwesomeIcon' icon={faEnvelope}></FontAwesomeIcon>chat@simone.com</p>
                </div>
                <h3>Follow me</h3>
                </div>
            </div>
            </div>
        </div>
    
        );
}
 
export default Contacts;