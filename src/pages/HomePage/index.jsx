import { useContext } from "react"
import CardProject from "../../components/cardProject"
import "./index.css"
import { projectContext } from "../../App"
function HomePage() {
    const Projects = useContext(projectContext)
    return (
        <div className="Home">
            <div className="Home_title">
                <h1>
                    Home
                </h1>
                <div className="Home_content_filter">
                    <button>
                        filter
                    </button>
                </div>
            </div>
            <div className="Home_content_news">
                <div className="Home_banner">
                    <h1>
                        This is news banner
                    </h1>
                </div>
            </div>
            {Projects.map((item) => (
                <CardProject key={item.id} props={item} />
            ))}
        </div>
    )
}

export default HomePage
