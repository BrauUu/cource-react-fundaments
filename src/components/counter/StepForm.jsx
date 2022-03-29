import React from 'react'

export default props => {
    return (
        <div>
            <label>Intervalo de Mudança: </label>
            <input
                type="number"
                value={props.step}
                onChange={(e) => props.setStep(Number(e.target.value))}
            ></input>
        </div>
    )
}