import React from 'react'
import Projects from "../Projects.json"
import Project from "../components/Project"

function Portfolio () {

    const projectsMap = Projects.map(project => {
        return (
        <Project projectItem={project} />
        )
    })
    return (
        <div>
            <div className="container main-container col-12 col-md-10 offset-md-1 clear-fix mt-3">
            <div class="row">
                <div class="col-md-12 col-12  m-2">
                    <h1 class="border-bottom border-secondary" >Portfolio</h1>
                </div>
            </div>    
            <div className="row port-img-row  ml-auto mr-auto">
                <div>
                    {/* <a href="https://edfeld.github.io/Word-Guess-Game/" target="_blank" rel="noopener noreferrer">
                    <figure className="figure ml-2 mb-0">
                        <img src="assets/images/catone.jpg" className="figure-img img-fluid rounded" alt="A generic square placeholder a cat."/>
                        <figcaption class="figure-caption text-center position-relative py-2">Word Guess</figcaption>
                    </figure>
                    </a> */}
                    {projectsMap}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Portfolio