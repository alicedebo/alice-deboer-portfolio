import "./portfolio.scss"
// import one from "../../images/one.png";
// import two from "../../images/two.png";
// import three from "../../images/three.png";
// import four from "../../images/four.png";
// import five from "../../images/five.png";
// import six from "../../images/six.png";
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import {
    recipeGenerator, 
    noteTaker,
    teamProfileGenerator,
    readMeGenerator,
    weatherDashboard,
    codingQuiz
} from "../../data"

export default function Portfolio() {
    const [selected, setSelected] = useState("recipeGenerator")
    const [data, setdata] = useState([])
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

    useEffect(() => {
        switch(selected){
            case "Recipe Generator":
                setdata(recipeGenerator);
                break;
            case "Note Taker":
                setdata(noteTaker);
                break;
            case "Team Profile Generator":
                setdata(teamProfileGenerator);
                break;
            case "ReadMe Generator":
                setdata(readMeGenerator);
                break;
            case "Weather Dashboard":
                setdata(weatherDashboard);
                break;
            case "Coding Quiz":
                setdata(codingQuiz);
                break;
                default:
                    setdata(recipeGenerator)
        }
    },[selected])
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
                {data.map(d=>(
                  <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>  
                ))}
                
            </div>
        </div>
    )
}