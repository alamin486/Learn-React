import React from "react"

import image2 from "./start.png"
export default function Card(props) {

    return (

        <div class="card">
            <img src={props.img} class="card--img"></img>
            <div class="card--status">
                <img src={image2} class="card--star"></img>
                <span>{props.rating}</span>
                <span>({props.reviewCount}).</span>
                <span>{props.country}</span>

            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price} / person</b></p>
        </div>
    )
}