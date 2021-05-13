import React from "react";
import ProjectItem from "./ProjectItem";

let Cards=(a)=>{
  let each=a.map((e)=>{
    return (
         <ProjectItem key={e.id} name={e.name} about={e.about} technologies={e.technologies}/>
    )
  })
  return each
}


function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{Cards(projects)}</div>
    </div>
  );
}

export default ProjectList;
