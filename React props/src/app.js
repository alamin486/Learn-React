import React from "react"
import Navbar from "./component/Navbar"
import Main from "./component/Main"
import Card from "./component/Card"
import "./app.css"
import img from "./component/image 12.png"
import img2 from "./component/image 13.png"
import img3 from "./component/image 14.png"
export default function App(){
    return(
        <div class="container">
            <Navbar />
            <Main />
            <Card
            img={img}
            rating={5.0}
            reviewCount={6}
            country="USA"
            title="life lesson with Katie Zaferes"
            price={136}
            />
            <Card 
             img={img2}
             rating={5.0}
             reviewCount={6}
             country="USA"
             title="life lesson with Katie Zaferes"
             price={136}
            />
            <Card 
             img={img3}
             rating={5.0}
             reviewCount={6}
             country="USA"
             title="life lesson with Katie Zaferes"
             price={136}
            />
        </div>
    )
}