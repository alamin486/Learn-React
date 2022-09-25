import React from "react"
import Navbar from "./component/Navbar"
import Form from "./component/form"
import Main from "./component/main"

import "./app.css"

export default function App(){
    return(
        <div className="container">
            <Navbar />
            <Form />
            <Main />
        </div>
    )
}