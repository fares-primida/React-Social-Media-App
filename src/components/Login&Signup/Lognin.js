import React, {useState} from 'react'

const Lognin = () => {

    const [newName , setNewName] = useState("")
    const [password , setpassword] = useState(0)

    const [users , setUsers] = useState([])
    

    return (
    <div className='form'>
    <form>
        <h1 className='title'>Start Now</h1>
        <input
        placeholder='Name' 
        type='text'
        onChange={(event) => {setNewName(event.target.value)}}
        />
        <input
        placeholder='Password' 
        type='password'
        onChange={(event) => {setpassword(event.target.value)}}
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