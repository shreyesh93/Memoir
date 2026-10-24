import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registeredUsers } from './RegisterForm'
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const validateInfo = {
    username: "",
     password: ""
}
const Login = () => {
    const [validate, setValidate] = useState(validateInfo);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange=(e)=>{
        const {name, value} = e.target;

        setValidate(
            {
                ...validate,
                [name]: value
            }
        )

        if(errors[name]){
            setErrors({
                ...errors,
                [name]: ''
            })
        }
    }

    const validateForm=()=>{
        const newErrors = {}
        

        
        const validUser = registeredUsers.some(
            (user) =>
                user.username && user.username.toLowerCase() === validate.username.toLowerCase() &&
                user.password === validate.password
        );
       
        if(!validUser){
            newErrors.error = "Incorrect username / password"
            
        }
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;


    }
    const handleSubmit=(e)=>{
        

        e.preventDefault();
        const isValid = validateForm();
        if(!isValid){
            return;
        }
        alert('login successfull')
        setSubmitted(true);
        navigate("/home");
        

    }

    const handleReset = () => {
    setValidate(validateInfo)
    setErrors({});
    setSubmitted(false);
  };

  return (
    <form className='Login-form' onSubmit={handleSubmit}>
        <h1>Login !</h1>
        <div className='inpt-fields'>
        <input type="text" id='username'name='username' value={validate.username} onChange={handleChange} placeholder='Enter your username...' autoComplete='username' />
        <input type="password" id='password' name='password' value={validate.password} onChange={handleChange} placeholder='Enter your password..' autoComplete='current-password'/>
        {
            errors.error && <p>{errors.error}</p>
        }
        </div>
        <div className='form-btns'>

            <button type='submit' className='submit-btn'>Login</button>
            <button type='button' className='reset-btn' onClick={handleReset}>Reset</button>
        </div>

        <p>
            New user ?{" "}
            <Link to='/register'>Sign-UP</Link>
        </p> 
        
        </form>
    
  )
}

export default Login