import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faChartArea, faDisplay, faPaintBrush, faPalette, faPenRuler } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return ( 
        <div className="services" id="services">
            <div className="main-heading">
            <h2>Services</h2>
            <h3>What I Do</h3>
            </div>
            <div className="container">
            <div className="services-container">
                <div className="service-item">
                <div className="icon">
                    <FontAwesomeIcon className='FontAwesomeIcon' icon={faPalette}></FontAwesomeIcon>
                </div>
                <div className="caption">
                    <h3>Graphic Design</h3>
                    <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                    </p>
                </div>
                </div>
                <div className="service-item">
                <div className="icon">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faDisplay}></FontAwesomeIcon>
                </div>
                <div className="caption">
                    <h3>Web Design</h3>
                    <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                    </p>
                </div>
                </div>
                <div className="service-item">
                <div className="icon">
                <FontAwesomeIcon  className='FontAwesomeIcon' icon={faPenRuler}></FontAwesomeIcon>
                </div>
                <div className="caption">
                    <h3>UI/UX Design</h3>
                    <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                    </p>
                </div>
                </div>
                <div className="service-item">
                <div className="icon">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faPaintBrush}></FontAwesomeIcon>   
                </div>
                <div className="caption">
                    <h3>App Design & Develop</h3>
                    <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                    </p>
                </div>
                </div>
                <div className="service-item">
                <div className="icon">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faChartArea}></FontAwesomeIcon>   
                </div>
                <div className="caption">
                    <h3>Business Analysis</h3>
                    <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                    </p>
                </div>
                </div>
                <div className="service-item">
                <div className="icon">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faBullhorn}></FontAwesomeIcon>  
                </div>
                <div className="caption">
                    <h3>SEO Marketing</h3>
                    <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
  
        );
}
 
export default Services;