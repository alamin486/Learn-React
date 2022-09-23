import React from "react"
import logo from "./react.png"
export default function Navbar(){
    return <nav class="Navbar">
      <img src={logo} />
        <h3 >React Facts</h3>
        <h4 className="nav--text">React Course- Project 1</h4>
    </nav>
}