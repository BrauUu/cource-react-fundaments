import React, { useState} from "react";

import './Input.css'

export default props => {

    const[value, setValue] = useState('')

    function onChange (e) {
        console.log(e)
    }

    return (
        <div className="div-input">
            <input value={value} onChange={(e) => { setValue(e.target.value)}}/>
            <input value={value} readOnly />
        </div>
    )
}