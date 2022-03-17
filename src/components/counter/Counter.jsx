import React  from 'react'

import './Counter.css'

export default class Counter extends React.Component {

    state = {
        number : this.props.initialValue || 0,
        step: this.props.step || 1
    }

    constructor(props) {
        super(props)

    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        })
    }

    setStep = (event) => {
        this.setState({
            step: +event.target.value
        })
    }

     render() {
         return (
             <div className='counter-div'>
                <h1>Contador</h1>
                <div>
                    <h2>{this.state.number}</h2>
                    <label>Intervalo de Mudança: </label>
                    <input 
                        type="number" 
                        value={this.state.step}
                        onChange={this.setStep}
                    ></input>
                </div>
                <button onClick={this.inc}> + </button>
                <button onClick={this.dec}> - </button>
             </div>
         )
     }
}