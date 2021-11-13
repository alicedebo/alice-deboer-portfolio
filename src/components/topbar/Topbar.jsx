import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">About Alice</a>
                    <div className="itemContainer">
                    <span class="material-icons icon">call</span>
                    <span>555-5555</span>
                    </div>
                    <div className="itemContainer">
                    <span class="material-icons icon">email</span>
                    <span>arichardel@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                    <span class="material-icons icon">pets</span>
                    <a className="link" href="https://github.com/alicedebo" target="_blank">GitHub</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}