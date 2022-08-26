const Portfolio = () => {
    return ( 
        <div className="portfolio" id="portfolio">
            <div className="main-heading">
            <h2>portfolio</h2>
            <h3>My Work</h3>
            </div>
            <div className="portfolio-links">
            <ul>
                <li><a href="#" className="active">All</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Brand</a></li>
                <li><a href="#">Photos</a></li>
            </ul>
            </div>
            <div className="container">
            <div className="gallary">
                <div className="gallary-img">
                <div className="img-inner">
                    <img src="./images/projects/project-1.jpg" alt="" />
                    <div className="img-caption">
                    <h3>Project Title</h3>
                    <p>Category</p>
                    </div>
                </div>
                </div>
                <div className="gallary-img">
                <div className="img-inner">
                    <img src="./images/projects/project-4.jpg" alt="" />
                    <div className="img-caption">
                    <h3>Project Title</h3>
                    <p>Category</p>
                    </div>
                </div>
                </div>
                <div className="gallary-img">
                <div className="img-inner">
                    <img src="./images/projects/project-3.jpg" alt="" />
                    <div className="img-caption">
                    <h3>Project Title</h3>
                    <p>Category</p>
                    </div>
                </div>
                </div>
                <div className="gallary-img">
                <div className="img-inner">
                    <img src="./images/projects/project-2.jpg" alt="" />
                    <div className="img-caption">
                    <h3>Project Title</h3>
                    <p>Category</p>
                    </div>
                </div>
                </div>
                <div className="gallary-img">
                <div className="img-inner">
                    <img src="./images/projects/project-5.jpg" alt="" />
                    <div className="img-caption">
                    <h3>Project Title</h3>
                    <p>Category</p>
                    </div>
                </div>
                </div>
                <div className="gallary-img">
                <div className="img-inner">
                    <img src="./images/projects/project-6.jpg" alt="" />
                    <div className="img-caption">
                    <h3>Project Title</h3>
                    <p>Category</p>
                    </div>
                </div>
                </div>
                <div className="gallary-img">
                <div className="img-inner">
                    <img src="./images/projects/project-7.jpg" alt="" />
                    <div className="img-caption">
                    <h3>Project Title</h3>
                    <p>Category</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
  
        );
}
 
export default Portfolio;