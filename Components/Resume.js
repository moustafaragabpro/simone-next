const Resume = () => {
    return ( 
        <div className="resume" id="resume">
            <div className="main-heading">
            <h2>Summary</h2>
            <h3>Resume</h3>
            </div>
            <div className="container">
            <div className="summary">
                <div className="summary-container">
                <h2>My Education</h2>
                <div className="summary-item">
                    <span>2000-2004</span>
                    <h3>Computer Science</h3>
                    <p className="sub-summary">International University</p>
                    <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                    </p>
                </div>
                <div className="summary-item">
                    <span>2005-2008</span>
                    <h3>Bachelor Degree</h3>
                    <p className="sub-summary">University of California</p>
                    <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                    </p>
                </div>
                <div className="summary-item">
                    <span>2009-2012</span>
                    <h3>Master Science</h3>
                    <p className="sub-summary">Harvard University</p>
                    <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                    </p>
                </div>
                </div>
                <div className="summary-container">
                <h2>My Experience</h2>
                <div className="summary-item">
                    <span>2012-2013</span>
                    <h3>Jr. UI UX Designer</h3>
                    <p className="sub-summary">Themeforest</p>
                    <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                    </p>
                </div>
                <div className="summary-item">
                    <span>2014-2016</span>
                    <h3>Jr. Product Designer</h3>
                    <p className="sub-summary">Dribbble</p>
                    <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                    </p>
                </div>
                <div className="summary-item">
                    <span>2017-2019</span>
                    <h3>Product Designer</h3>
                    <p className="sub-summary">Adobe</p>
                    <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                    </p>
                </div>
                </div>
            </div>
            <div className="skills">
                <h2>My skills</h2>
                <div className="skills-container">
                <div className="skill-item">
                    <p>Web Design <span>65%</span></p>
                    <div className="skill-score">
                    <div className="score w-65"></div>
                    </div>
                </div>
                <div className="skill-item">
                    <p>HTML/CSS <span>95%</span></p>
                    <div className="skill-score">
                    <div className="score w-95"></div>
                    </div>
                </div>
                <div className="skill-item">
                    <p>JavaSript <span>80%</span></p>
                    <div className="skill-score">
                    <div className="score w-80"></div>
                    </div>
                </div>
                <div className="skill-item">
                    <p>React JS<span>70%</span></p>
                    <div className="skill-score">
                    <div className="score w-70"></div>
                    </div>
                </div>
                <div className="skill-item">
                    <p>Angular JS<span>60%</span></p>
                    <div className="skill-score">
                    <div className="score w-60"></div>
                    </div>
                </div>
                <div className="skill-item">
                    <p>Bootstrap<span>99%</span></p>
                    <div className="skill-score">
                    <div className="score w-99"></div>
                    </div>
                </div>
                </div>
                <div className="btn-box">
                <a href="#" className="btn btn-secondary">Download CV</a>
                </div>
            </div>
            </div>
        </div>
        );
}
 
export default Resume;