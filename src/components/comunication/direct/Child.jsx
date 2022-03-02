import React from "react";

export default props => {
    return(
        <div>
            <span><strong>Nome:</strong> {props.name} </span>
            <span><strong>Idade:</strong> {props.age} </span>
            <span><strong>Gosta de Pipoca:</strong> {props.likePopcorn ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}