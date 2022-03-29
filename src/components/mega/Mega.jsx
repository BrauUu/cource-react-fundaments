import React, {useState} from 'react'

export default props => {

    const [numValues, setNumValues] = useState()
    const [generatedNumbers, setgeneratedNumbers] = useState([])

    return (
        <div>
            <label>Digite o número a ser gerado (5 à 15):</label>
            <input type='number' min={5} max={15} onChange={(e) => setNumValues(+e.target.value)}></input>
            <button onClick={() => setgeneratedNumbers(randomValues(1,60, numValues))}>
                Gerar
            </button>
            <div>
            {
               generatedNumbers == -1 ? 
                    <p>Algum problema ocorreu!</p>
                :
                    generatedNumbers.map(number => {
                        if(generatedNumbers[generatedNumbers.length - 1] == number)
                            return <span>{number}</span>
                        return <span>{number}, </span>
                    })
            }
            </div>
        </div>
    )
}

function randomValues(min,max, numValues) {

    let arrRandomValues = []

    if(!(numValues <  5 || numValues > 15)) {
        for(let i = 0; i < numValues;i++) {
            let randomNum = Math.round(Math.random() * (max - min) + min)
            if(!arrRandomValues.includes(randomNum))
            {
                arrRandomValues.push(randomNum)   
            }
            else i--
        }

        arrRandomValues.sort( (a, b) => {
            return a - b;
        });

        return arrRandomValues
    }

    return -1
} 

