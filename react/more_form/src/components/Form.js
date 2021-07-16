import React, {useState} from 'react';
const Form = (props)=>{
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e)=>{
        setFirstName(e.target.value);
        if(e.target.value.length<2){
            setFirstNameError("First name must be at least 2 characters.")
        }else{
            setFirstNameError("")
        }
    }

    const handleLastName = (e)=>{
        setLastName(e.target.value);
        if(e.target.value.length<2){
            setLastNameError("Last name must be at least 2 characters.")
        }else{
            setLastNameError("")
        }
    }

    const handleEmail = (e)=>{
        setEmail(e.target.value);
        if(e.target.value.length<2){
            setEmailError("Email must be at least 2 characters.")
        }else{
            setEmailError("")
        }
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
        if(e.target.value.length<8){
            setPasswordError("Password must be at least 8 characters.")
        }else{
            setPasswordError("")
        }
    }

    const handleConfirmPassword = (e)=>{
        setConfirmPassword(e.target.value);
        if(e.target.value!==password){
            setConfirmPasswordError("Comfirmed password must be identical to password.")
        }else{
            setConfirmPasswordError("")
        }
    }

    return (
            <form onSubmit={(e)=>e.preventDefault}>
                <div className="input">
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ handleFirstName } />
                </div>
                {
                    firstNameError? <span>{firstNameError}</span>: ''
                }
                <div className="input">
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ handleLastName } />
                </div>
                {
                    lastNameError? <span>{lastNameError}</span>: ''
                }
                <div className="input">
                    <label>Email: </label> 
                    <input type="text" value={email} onChange={ handleEmail } />
                </div>
                {
                    emailError? <span>{emailError}</span>: ''
                }
                <div className="input">
                    <label>Password: </label> 
                    <input type="text" value={password} onChange={ handlePassword } />
                </div>
                {
                    passwordError? <span>{passwordError}</span>: ''
                }
                <div className="input">
                    <label>Confirm Password: </label> 
                    <input type="text" value={confirmPassword} onChange={ handleConfirmPassword } />
                </div>
                {
                    confirmPasswordError? <span>{confirmPasswordError}</span>: ''
                }
            </form>
    )

}

export default Form;