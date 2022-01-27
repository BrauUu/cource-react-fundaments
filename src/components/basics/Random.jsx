import React from 'react';

export default (props) => {
    const {max, min} = props
    const value = Math.round(Math.random() * (max - min) + min)
    return (
        <>
            <p>O valor máximo foi <strong>{props.max}</strong></p>
            <p>O valor mínimo foi <strong>{props.min}</strong></p>
            <p>O valor escolhido foi <strong>{value}</strong></p>
        </>
    )
}