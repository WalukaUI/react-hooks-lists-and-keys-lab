import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navlink=links.map((e,index)=>{
    return <a href={`#${e}`} key={index}>{e}</a>
  })
  return <nav>{navlink}</nav>;
}

export default NavBar;
