import React, { useReducer } from 'react';
const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };

    const reducer=(state, action) =>{
        return {
            ...state,
            [action.type]: action.payload
        };
    }

    const ValidateEmail = (email)=>{
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(email).toLowerCase());
    }

    const Form = ()=>{
        const [state, dispatch] = useReducer(reducer, initialState);
        const handleFirstName = (e)=>{
            const { name, value } = e.target;
            let error;
            console.log(value);
            if(value.length<2 && value.length>0){
                error = 'First name must be at least 2 characters';
            }else{
                error = null;
            }
            dispatch({
                type: name,
                payload: {value: value, error: error}
            });
        }
        const handleLastName = (e)=>{
            const { name, value } = e.target;
            let error;
            console.log(value);
            if(value.length<2 && value.length>0){
                error = 'Last name must be at least 2 characters';
            }else{
                error = null;
            }
            dispatch({
                type: name,
                payload: {value: value, error: error}
            });
        }
        const handleEmail = (e)=>{
            const { name, value } = e.target;
            let error;
            console.log(String(value));
            if(!ValidateEmail(value) && value.length>0){
                error = 'It is not a valid email address';
            }else{
                error = null;
            }
            dispatch({
                type: name,
                payload: {value: value, error: error}
            });
        }

        return (
            <form onSubmit={e=>e.preventDefault()}>
                <div className="input">
                    <label>
                        <span>First Name:</span>{' '}
                        {
                            state.firstName.error?
                            <input className = "error" name="firstName" value={state.firstName.value}  onChange={handleFirstName}/> :
                            <input  name="firstName" value={state.firstName.value}  onChange={handleFirstName}/>
                        }
                        {
                            state.firstName.error? <p>{state.firstName.error}</p> : ''
                        }
                    </label>
                </div>
                <div className="input">
                    <label>
                        <span>Last Name:</span>{' '}
                        {
                            state.lastName.error?
                            <input className="error" name="lastName" value={state.lastName.value} onChange={handleLastName}/> :
                            <input name="lastName" value={state.lastName.value} onChange={handleLastName}/>
                        }
                        {
                            state.lastName.error? <p>{state.lastName.error}</p> : ''
                        }
                    </label>
                </div>
                <div className="input">
                    <label>
                        <span>Email:</span>{' '}
                        {
                            state.email.error?
                            <input className="error" name="email" value={state.email.value} onChange={handleEmail}/> :
                            <input name="email" value={state.email.value} onChange={handleEmail}/>
                        }
                        {
                            state.email.error? <p>{state.email.error}</p> : ''
                        }
                    </label>
                </div>
            </form>
        )
    }

    export default Form;