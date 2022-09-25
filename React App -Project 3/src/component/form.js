import React from "react"
export default function Form() {
    function getMemeImg(){
        console.log("Clicked")
    }
    return (
        <div className="form">
            <input type="text" placeholder="Shut up" className="input--form1" />
            <input type="text" placeholder="and take my money"className="input--form2" />
            <div className="button">
                <button className="input--button" onClick={getMemeImg}>Submit and Get a new meme image</button>
            </div>
        </div>
    )
}