import "./intro.scss"
import me from "../../images/alice.png";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={me} alt="selfie" />
                </div>
                
            </div>
            <span className="material-icons">south</span>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Alice Richardel-DeBoer</h1>
                    <h3>Full-Stack Developer<span></span></h3>
                </div>
                
            </div>
            
        </div>
    )
}