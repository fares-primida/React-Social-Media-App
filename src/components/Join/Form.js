import React from 'react'
import DD from './Drag&Drop/DD'

const Form = () => {
    return (
        <div className='form-container'>
            <DD />
            <span className='steak'></span>
            <div className='form'>
                <form>
                <div className='title'>Your Info</div>
                
                <label for='name'>Name: <input placeholder='name' id='name' type='text' /></label>
                
                <label for='pass'>Password: <input placeholder='password' id='pass' typy='password' /></label>
                <label for='email'>Email: <input placeholder='Email...' id='email' typy='email' /></label>
                <label for='number'>Number: <input placeholder='Number...' id='number' typy='number' /></label>
                <button className='submit-btn' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form