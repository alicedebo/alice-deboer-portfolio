import "./portfolio.scss"
import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import four from "../../images/four.png";
import five from "../../images/five.png";
import six from "../../images/six.png";
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const list = [
        {
            id: "Recipe Generator",
            title: "Recipe Generator",
        },
        {
            id: "Note Taker",
            title: "Note Taker",
        },
        {
            id: "Team Profile Generator",
            title: "Team Profile Generator",
        },
        {
            id: "ReadMe Generator",
            title: "ReadMe Generator",
        },
        {
            id: "Weather Dashboard",
            title: "Weather Dashboard",
        },
        {
            id: "Coding Quiz",
            title: "Coding Quiz",
        }
    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src={one} alt="" />
                    <h3>Recipe Generator</h3>
                </div>
                <div className="item">
                    <img src={two} alt="" />
                    <h3>Note Taker</h3>
                </div>
                <div className="item">
                    <img src={three} alt="" />
                    <h3>Team Profile Generator</h3>
                </div>
                <div className="item">
                    <img src={four} alt="" />
                    <h3>ReadMe Generator</h3>
                </div>
                <div className="item">
                    <img src={five} alt="" />
                    <h3>Weather Dashboard</h3>
                </div>
                <div className="item">
                    <img src={six} alt="" />
                    <h3>Coding Quiz</h3>
                </div>
            </div>
        </div>
    )
}