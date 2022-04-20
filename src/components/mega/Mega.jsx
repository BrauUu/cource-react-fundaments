import React, { useState } from 'react'

import './Mega.css';

export default props => {

    const [numValues, setNumValues] = useState(5)
    const [generatedNumbers, setgeneratedNumbers] = useState([])

    return (
        <div>
            <label>Digite o número a ser gerado (5 à 15):</label>
            <input type='number' min={5} max={15} value={numValues} onChange={
                (e) => {
                    setNumValues(+e.target.value);
                    setgeneratedNumbers(randomValues(+e.target.value))
                }
            }
            ></input>

            <div className='mega-result-div'>
                {
                    generatedNumbers == -1 ?
                        <p>Algum problema ocorreu!</p>
                        :
                        generatedNumbers.map(number => {
                            return <div className='mega-result'>{number} </div>
                        })
                }
            </div>
        </div>
    )
}

function randomValues( numValues) {

    let arrRandomValues = []
    let min = 1 
    let max = 60

    if (!(numValues < 5 || numValues > 15)) {
        for (let i = 0; i < numValues; i++) {
            let randomNum = Math.round(Math.random() * (max - min) + min)
            if (!arrRandomValues.includes(randomNum)) {
                arrRandomValues.push(randomNum)
            }
            else i--
        }

        arrRandomValues.sort((a, b) => {
            return a - b;
        });

        return arrRandomValues
    }

    return -1
}

