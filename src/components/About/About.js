import "./About.css"
import useWebAnimations from "@wellyshen/use-web-animations";

const About = () => {
    const frames = [
        { transform: "translateX(0)" },
        { transform: "translateY(5px)" },
        { transform: "translate(5px,5px)" },
        { transform: "translateX(-5)" },
        { transform: "translateY(0)" }
    ];
    const duration = {

        duration: 5000,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in-out",
    }
    const descDiv = useWebAnimations({ keyframes: frames, animationOptions: duration });


    return (

        <div id="home" className="about route bg-image background">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className="container-fluid" >

                <div className="conatiner" >
                    <h1 className="text-center">LET ME <span style={{ color: "#7a4988", fontWeight: "bold" }}>INTRODUCE</span> MYSELF</h1>
                    <div className="row" >
                        <div className="col-sm-12 col-md-6" >
                            <span className="text-wrap" >Html</span>
                            <div className="progress" style={{ height: "25px" }}>
                                <div className="progress-bar " role="progressbar" style={{ width: "100%", backgroundColor: "#7a4988" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                            <span className="text-wrap" >Css</span>
                            <div className="progress" style={{ height: "25px" }}>
                                <div className="progress-bar " role="progressbar" style={{ width: "90%", backgroundColor: "#7a4988" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>
                            <span className="text-wrap" >Bootstrap</span>
                            <div className="progress" style={{ height: "25px" }}>
                                <div className="progress-bar " role="progressbar" style={{ width: "80%", backgroundColor: "#7a4988" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>
                            <span className="text-wrap" >Javascript</span>
                            <div className="progress" style={{ height: "25px" }}>
                                <div className="progress-bar " role="progressbar" style={{ width: "95%", backgroundColor: "#7a4988" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">95%</div>
                            </div>
                            <span className="text-wrap" >ReactJs</span>
                            <div className="progress" style={{ height: "25px" }}>
                                <div className="progress-bar " role="progressbar" style={{ width: "80%", backgroundColor: "#7a4988" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>

                        </div>
                        <div ref={descDiv.ref} id="about-me-desc" className="col-sm-12 col-md-6" >

                            <p>I fell in love with programming and I am working with <span style={{ color: "#7a4988", fontWeight: "bold" }}>Html, Css, Javascript</span> since 2018.<br /><br />

                                I am fluent in classics like <span style={{ color: "#7a4988", fontWeight: "bold" }}>Javascript.</span><br /><br />

                                My field of Interest's are building new  <span style={{ color: "#7a4988", fontWeight: "bold" }}>Web Technologies and Products.</span><br /><br />

                                Whenever possible, I also apply my passion for developing products with Modern Javascript Library and Frameworks  like <span style={{ color: "#7a4988", fontWeight: "bold" }}>React.js</span></p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default About;