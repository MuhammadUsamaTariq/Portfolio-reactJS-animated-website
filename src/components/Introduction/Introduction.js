import "./attachments/stars.scss";
import Typed from "react-typed";
import "./Introduction.css"
import useWebAnimations from "@wellyshen/use-web-animations";
import homeSVG from './attachments/home-main.svg'

const Introduction = () => {
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
                                <h1 className="intro-title mb-5 ">Hi There! <span className="wave">👋🏻</span><br/>

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