import "./index.css"
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <div className="header_content">
                <div className="logo">
                    <img src="https://image.pngaaa.com/701/3102701-middle.png1" alt="" />
                    JUNAPR
                </div>
                <ul>
                    <li>
                        <Link to="/">
                            Juna
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        Login
                    </li>
                    <li>
                        Register
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
