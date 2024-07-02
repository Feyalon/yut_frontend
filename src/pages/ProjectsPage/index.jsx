import React, { useContext } from "react";
import CardProject from "../../components/cardProject"
import { projectContext } from "../../App";

export default function Projects() {
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
            
            {Projects.map((item) => (
                <CardProject key={item.id} props={item} />
            ))}
        </div>
    )
}