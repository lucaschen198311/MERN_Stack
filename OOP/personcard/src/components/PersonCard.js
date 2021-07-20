import React, {Component} from 'react';
class PersonCard extends Component{
    render(){
        const {firstName, lastName, age, hariColor} = this.props;
        return (
            <div>
                <h1>{firstName}, {lastName}</h1>
                <p>age: {age}</p>
                <p>Hari Color: {hariColor}</p>
            </div>
        )
    }
}
export default PersonCard;