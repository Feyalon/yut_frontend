import "./index.css"
function CardProject({props}) {


    return (
        <div className="card_project">
            <div className="card_project_content">
                    <div className="card_project_person">
                            <img src={props.image} alt="" />
                            <p>
                                {props.username}
                            </p>
                    </div>
                    <div className="card_project_title">
                        
                        <h1>
                            <a href={"/project?id=" + props.id}>
                                {props.title}
                            </a>
                        </h1>
                    </div>
                    <p>
                        {props.content}
                    </p>
                </div>
        </div>
    )
}



export default CardProject
