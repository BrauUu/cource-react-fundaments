import React, { useState } from "react";

import Child from './Child'

export default props => {

    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [likePopcorn, setLikePopcorn] = useState(false)

    function getInformations(name, age, likePopcorn){
       setName(name)
       setAge(age)
       setLikePopcorn(likePopcorn)
    }

    return(
        <div>
            <div>
            <span><strong>Nome:</strong> {name} </span>
            <span><strong>Idade:</strong> {age} </span>
                <span><strong>Gosta de Pipoca:</strong> {likePopcorn ? 'Verdadeiro' : 'Falso'}!</span>
            </div>
            <div>
                <Child onClick={getInformations}/>
            </div>
        </div>
    )
}