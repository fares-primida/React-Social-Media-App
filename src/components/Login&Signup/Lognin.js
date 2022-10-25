import React from 'react'

const Lognin = () => {
    return (
    <div className='form'>
    <form>
        <h1 className='title'>Start Now</h1>
        <input
        placeholder='Name' 
        type='text'
        />
        <input
        placeholder='Password' 
        type='password'
        />
        <div className='btns'>
        <button type='submit' className='submit-button'>
        <a href='#'>Submit</a>
        </button>
        </div>
    </form>
    </div>
    )
}

export default Lognin