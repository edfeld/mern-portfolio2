import React from "react"

function Project (props) {
    return (
        <a key={props.projectItem.id} href={props.projectItem.projectLink} target="_blank" rel="noopener noreferrer">
            <figure className="figure ml-2 mb-0">
                <img style={{height: 170}} src={props.projectItem.image} className="figure-img img-fluid rounded" alt={props.projectItem.altText}/>
                <figcaption class="figure-caption text-center position-relative py-2">{props.projectItem.name}</figcaption>
            </figure>
        </a>
    )
}

export default Project