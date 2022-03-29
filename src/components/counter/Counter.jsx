import React  from 'react'

import Display from './Display'
import Buttons from './Buttons'
import StepForm from './StepForm'

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

    setStep = (newStep) => {
        this.setState({
            step: newStep
        })
    }

     render() {
         return (
             <div className='counter-div'>
                <h1>Contador</h1>
                <Display number={this.state.number} />
                <StepForm setStep={this.setStep} step={this.state.step}/>
                <Buttons inc={this.inc} dec={this.dec}/>
             </div>
         )
     }
}