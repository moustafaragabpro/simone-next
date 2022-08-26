import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Clients = () => {
    return ( 
        <div className="client" id="client">
            <div className="main-heading">
            <h2>TESTIMONIAL</h2>
            <h3>Client Speak</h3>
            </div>
            <div className="container">
            <div className="clients-container">
                <div className="client-item">
                <div className="client-header">
                    <img
                    src="./images/testimonial/client-sm-1.jpg"
                    alt="client image"
                    />
                    <div className="client-info">
                    <h4>Dennis Jacques</h4>
                    <p>Founder at Icomatic Pvt Ltd</p>
                    </div>
                </div>
                <div className="client-caption">
                    <p>
                    Easy to use, reasonably priced simply dummy text of the printing
                    and typesetting industry. Quidam lisque persius interesset his
                    et, in quot quidam possim iriure.â€
                    </p>
                    <p className="client-rate">
                    <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar}></FontAwesomeIcon>
                    </p>
                </div>
                </div>
                <div className="client-item">
                <div className="client-header">
                    <img
                    src="./images/testimonial/client-sm-4.jpg"
                    alt="client image"
                    />
                    <div className="client-info">
                    <h4>Dennis Jacques</h4>
                    <p>User from USA</p>
                    </div>
                </div>
                <div className="client-caption">
                    <p>
                    â€œOnly trying it out since a few days. But up to now excellent.
                    Seems to work flawlessly. priced simply dummy text of the
                    printing and typesetting industry.â€
                    </p>
                    <p className="client-rate">
                    <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar}></FontAwesomeIcon>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
}
 
export default Clients;