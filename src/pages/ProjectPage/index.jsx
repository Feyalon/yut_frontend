import React, { useContext } from "react";
import "./index.css"
import { useLocation } from "react-router-dom";
import { projectContext } from "../../App";
import CardProject from "../../components/cardProject";
export default function ProjectPage() {
    function useQuery() {
        const { search } = useLocation();
      
        return React.useMemo(() => new URLSearchParams(search), [search]);
      }
    const query = useQuery()
    const Projects = useContext(projectContext)
    const res = Projects.filter(x => x.id === Number(query.get("id")))

    return (
        <div className="Projectpage">
            {res.map((item) => (
                <CardProject key={item.id} props={item} />

            ))}
        </div>
    )
}