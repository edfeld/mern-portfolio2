import React from "react"

// function Project (props) {
//     return (
//         <a key={props.projectItem.id} href={props.projectItem.projectLink} target="_blank" rel="noopener noreferrer">
//             <figure className="figure ml-2 mb-0">
//                 <img style={{height: 170}} src={props.projectItem.image} className="figure-img img-fluid rounded border border-secondary" alt={props.projectItem.altText}/>
//                 <figcaption className="figure-caption text-center position-relative py-2">{props.projectItem.name}</figcaption>
//             </figure>
//         </a>
//     )
// }

// export default Project

function Project (props) {
    return (
        <div key={props.projectItem.id} className="project card border-secondary rounded mb-2 mx-2 float-left">
            <div className="container rounded-top bg-light px-2"><img class="card-img-top rounded-0"
                    src={props.projectItem.image} alt={props.projectItem.altText}></img>
            </div>
            <div className="card-body border-top">
                <h5 className="card-title">{props.projectItem.name}</h5>
                <p className="card-text">{props.projectItem.summary}.</p>
            </div>
            <div className="card-footer clearfix">
                <a href={props.projectItem.projectLink} className="card-link" target="_blank" rel="noopener noreferrer"><i class="fas fa-code"></i> Project Link</a>

                <a href={props.projectItem.githubLink} className="card-link float-right" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
            </div>
        </div>
        )
}

export default Project