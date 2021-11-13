import "./intro.scss"
import me from "../../images/alice.png";
import arrow from "../../images/arrow.png"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={me} alt="selfie" />
                </div>
                
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Alice Richardel-DeBoer</h1>
                    <h3>Full-Stack Developer<span></span></h3>
                </div>
                <a href="#portfolio">
                <img src={arrow} alt="arrow pointing down"/>
                </a>
            </div>
            
        </div>
    )
}