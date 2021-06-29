import "./attachments/stars.scss";
import Typed from "react-typed";
import "./Introduction.css"
import useWebAnimations, { rotateIn } from "@wellyshen/use-web-animations";
import homeSVG from './attachments/home-main.svg'

const Introduction = () => {
    const frames = [
        { transform: "rotate(0deg)" },
        { transform: "rotate(14deg)" },
        { transform: "rotate(-8deg)" },
        { transform: "rotate(14deg)" },
        { transform: "rotate(-4deg)" },
        { transform: "rotate(10deg)" },
        { transform: "rotate(0deg)" },
        { transform: "rotate(0deg)" },
        
    ];
    const duration = {

        duration: 2100,
        
        iterations: Infinity,
        direction: "normal",
        easing: "ease-in-out",
    }
    const containerDiv = useWebAnimations({ keyframes: frames, animationOptions: duration });
    return (
        <div id="home" className="intro route bg-image background">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className="row intro-content">
                <div className=" col-sm-12 col-md-6">
                    <div className="display-table">
                        <div className="table-cell">
                            <div id="intro-container" className="container">
                                <h1 className="intro-title mb-5 ">Hi There! <span ref={containerDiv.ref} className="wave">👋🏻</span><br/>

                                    I am Usama Tariq</h1>
                                <h1 className="intro-subtitle">
                                    <span className="text-slider-items"></span>
                                    <strong className="text-slider">
                                        <Typed
                                            strings={[
                                                "Front End Developer",

                                                "Software Engineer"
                                            ]}
                                            typeSpeed={80}
                                            backDelay={1100}
                                            backSpeed={30}
                                            loop
                                        />
                                    </strong>
                                </h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="intro-img" className="col-sm-12 col-md-6">
                    <img src={homeSVG} alt="" height="60%" width="60%" />
                </div>
            </div>
        </div>
    );
}

export default Introduction;