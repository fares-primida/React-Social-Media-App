import React, { useState , useEffect} from 'react'
import DD from './Drag&Drop/DD'
import Lognin from '../Login&Signup/Lognin'
import {db} from '../firebase-config'
import {addDoc, collection, getDocs} from 'firebase/firestore'

const Form = () => {
    const [email , setEmail] = useState("")
    const [number , setNubmer] = useState(0)


    const [imageData , setImageData] = useState([])
    const [UserName , getUserName] = useState("")
    const [UserPass , getUserPass] = useState("")


    

    const[users , setUsers] = useState([])
    const userCollectionRef = collection(db , "users")

    const CreateUser = async () => {
        await addDoc(userCollectionRef , {
            image: imageData,
            name: UserName,
            password: UserPass,
            email: email,
            number: Number(number)
        })
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUsers(data.docs.map((doc) => ({...doc.data, id: doc.id})))
        }
        
        getUsers()
    }, [])

    const PassData = (val) => {
        setImageData(val)
    }

    const Name = (n) => {
        getUserName(n)
    }

    const Pass = (p) => {
        getUserPass(p)
    }





    return (
        <div className='form-container'>
            <DD PassData={PassData} />
            <span className='steak'></span>
            <div className='form'>
                <form>
                <div className='title'>Your Info</div>
                
                <label htmlFor='name'>Name: <input placeholder='name' value={UserName} id='name' type='text' /></label>
                
                <label htmlFor='pass'>Password: <input placeholder='password' value={UserPass} id='pass' type='password' /></label>

                <label htmlFor='email'>Email: <input onChange={(event) => setEmail(event.target.value)} placeholder='Email...' id='email' type='email' /></label>

                <label htmlFor='number'>Number: <input onChange={(event) => setNubmer(event.target.value)} placeholder='Number...' id='number' type='text' /></label>

                <button onClick={CreateUser} className='submit-btn' type='submit'>Submit</button>

                </form>
            </div>

            <div className='hidden-area'><Lognin Pass={Pass} Name={Name} className='hidden' /></div>
        </div>
    )
}
export default Form