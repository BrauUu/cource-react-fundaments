import React from "react";

export default props => {

    const min = 20
    const max = 70

    const getIdade = () => {
        return parseInt((Math.random() * (max - min)) + min)
    }

    const getName = () => {

        const names = ["Pedro", "Paulo", "Alex", "Sandro", "Mateus", "Heitor", "Walter", "Lucas", "Marcos"]

        return names[parseInt((Math.random() * (names.length)))]
    }

    const getBool = () => {

        const options = [true, false]

        return options[parseInt((Math.random() * (options.length)))]
    }

    return(
        <div>
           <div>Componente Filho</div>
           <button onClick={ 
                 () => {
                    props.onClick(getName(), getIdade(), getBool())
                }
            }
            >
                Fornecer Informações
            </button>
        </div>
    )
}