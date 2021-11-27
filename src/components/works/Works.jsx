import "./works.scss";
import rightarrow from "../../images/right-arrow.png";
import work from "../../images/work.png";
import school from "../../images/school.png";
import contact from "../../images/contact.png";
import workicon from "../../images/workicon.png";
import schoolicon from "../../images/schoolicon.png";
import contacticon from "../../images/contacticon.png";
import { useState  } from "react";

export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: workicon,
            title: "Work Experience",
            description: "",
            img: work
        },
        {
            id: "2",
            icon: schoolicon,
            title: "University of Denver",
            description: "Coding Bootcamp Graduate 2021",
            img: school
        },
        {
            id: "3",
            icon: contacticon,
            title: "Contact Me",
            description: "Information above or scroll once :)",
            img: contact
        }
    ];

    const handleClick = (way) =>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide<data.length -1 ?currentSlide+1 : 0)
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide *100}vw)` }}>
                {data.map(d=>(

                
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img className={"img"} src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.description}</p>
                            </div>
                        </div>
                        <div className="right">
                           <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>))} 
            </div>
        <img src={rightarrow} className="arrow left" alt="change to a right arrow" onClick={()=>handleClick("left")} />
        <img src={rightarrow} className="arrow right" alt="change to a right arrow" onClick={()=>handleClick()} />
        </div>
    )
}