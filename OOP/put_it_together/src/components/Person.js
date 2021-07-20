import React, { Component } from 'react';
class Person extends Component{
    constructor(props){
        super(props);
        this.state={age: this.props.age}
    }
    addAge=()=>{
        this.setState({age: this.state.age+1})
    }
    render(){
        const {firstName, lastName, hairColor} = this.props; 
        console.log(this.state.age)
        return(
            <div>
                <h1>{firstName}, {lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hari Color: {hairColor}</p>
                <button onClick={this.addAge}>Birthday button for {firstName} {lastName}</button>
            </div>
        )
    }
}
export default Person;