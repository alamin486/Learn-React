import React from "react"
import logo from "./logo2.png"
export default function Navbar(){
    return <nav className="Navbar">
      <img src={logo} className="img--logo"/>
        <h3 className="name--title">MemeGenerator</h3>
        <p className="text--nav">Project 3</p>
    </nav>
}