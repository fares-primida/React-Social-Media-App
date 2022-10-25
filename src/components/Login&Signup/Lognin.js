import React, {useState , useEffect} from 'react'
import {db} from '/src/firebase-config'
import {collection , getDoc , addDoc} from 'firebase/firestore'

const Lognin = () => {

    const [newName , setNewName] = useState("")
    const [password , setpassword] = useState(0)

    const [users , setUsers] = useState([])
    const UserCollection = collection(db , "users")
    

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDoc(UserCollection)
            setUsers(data.docs.map((doc) => ({...doc.data() , id: doc.id})))
        }
        getUsers()
    }, [])

    const CreateUser = async () => {
        await addDoc(UserCollection , {name: newName , password: password})
    }

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
        <button type='submit' onClick={CreateUser} className='submit-button'>
            <a href='../Join/MainPage.js'>Submit</a>
        </button>
        </div>
    </form>
    </div>
    )
}

export default Lognin