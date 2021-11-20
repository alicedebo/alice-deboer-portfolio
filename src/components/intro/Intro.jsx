import "./intro.scss"
import me from "../../images/alice.png";
import arrow from "../../images/arrow.png";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
const textRef = useRef();
useEffect(() => {
    init(textRef.current, {
        showCursor: true,
        backDelay: 1500, 
        backSpeed: 60,
        strings: ["React", "JavaScript", "Node", "HTML5", "CSS", "MERN", "MySQL", "NoSql", "MongoDB", "Express", "ORM", "MVC", "OOP", "APIs"],
    })
},[]);

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
                    <h1>Alice DeBoer</h1>
                    <h3>Full-Stack Developer <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                <img src={arrow} alt="arrow pointing down"/>
                </a>
            </div>
            
        </div>
    )
}