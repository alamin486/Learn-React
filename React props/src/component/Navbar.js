import React from "react"
import logo from "./logo.png"
export default function Navbar(){
    return <nav class="Navbar">
      <img src={logo} />
        <h3 className="name--title">AbirShop</h3>
    </nav>
}