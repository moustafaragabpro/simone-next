const About = () => {
    return ( 
        <div className="about" id="about">
            <div className="container">
                <div className="main-heading">
                <h2>About Me</h2>
                <h3>Know Me More</h3>
                </div>
                <div className="about-container">
                <div className="about-desc">
                    <h3>I{"'"}m <span>Simone Olivia,</span> a Web Developer</h3>
                    <p>
                    I help you build brand for your business at an affordable price.
                    Thousands of clients have procured exceptional results while
                    working with our dedicated team. when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p>
                    Delivering work within time and budget which meets clientâ€™s
                    requirements is our moto. Lorem Ipsum has been the industry{"'"}s
                    standard dummy text ever when an unknown printer took a galley.
                    Lorem Ipsum has been the industry{"'"}s standard dummy text ever when
                    an unknown printer took a galley.
                    </p>
                </div>
                <div className="about-list">
                    <ul>
                    <li><span>Name: </span>Simone Olivia</li>
                    <li><span>Email: </span> <a href="#">chat@simone.com</a></li>
                    <li><span>Age: </span>28</li>
                    <li><span>From: </span>Los Angeles, California</li>
                    </ul>
                    <a href="#" className="btn btn-main">Download CV</a>
                </div>
                </div>
                <div className="about-numbers">
                <div className="number-item">
                    <h4>10+</h4>
                    <p>Years Experience</p>
                </div>
                <div className="number-item">
                    <h4>250+</h4>
                    <p>Happy Clients</p>
                </div>
                <div className="number-item">
                    <h4>650+</h4>
                    <p>Projects Done</p>
                </div>
                <div className="number-item">
                    <h4>38</h4>
                    <p>Get Awards</p>
                </div>
                </div>
            </div>
        </div>

        );
}
 
export default About;