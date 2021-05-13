import React from "react";

let TechCard=(a)=>{
  let eachTech=a.map((e)=>{
    return <span key={e}>{e}</span>
  })
  return eachTech
}

function ProjectItem({ name, about, technologies}) {
  return (
    <div className="project-item" >
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {TechCard(technologies)}
      </div>
    </div>
  );
}

export default ProjectItem;
