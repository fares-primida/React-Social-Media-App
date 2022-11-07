import React, {useState , useEffect} from 'react'
import DD from './Drag&Drop/DD'
import {db} from '../../firebase-config'
import {addDoc, collection, getDocs} from 'firebase/firestore'

const Form = () => {

    const [UserName , getUserName] = useState("")
    const [UserPass , getUserPass] = useState("")


    const [email , setEmail] = useState("")
    const [number , setNumber] = useState(0)

    const [image , setImage] = useState([])


    const[users , setUsers] = useState([])
    const userCollectionRef = collection(db , "users")

    const CreateUser = async () => {
        await addDoc(userCollectionRef , {
            name: UserName,
            password: UserPass,
            email: email,
            number: Number(number)
        })
    }
    console.log(image)
    console.log(UserName)
    console.log(UserPass)
    console.log(email)
    console.log(number)
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        
        getUsers()

    },[])


    const PassData = (img) => {
        setImage(img)
    }





    return (
        <div className='page-container'>
            <button onClick={CreateUser} className='start-button'>Start Now</button>
            <div className='form-1'>
                <div className='animated-el'></div>
                <div className='form-container'>
                    <form>
                        <h2>Step 1</h2>
                        <input placeholder='Name'required type='text' onChange={(e) => getUserName(e.target.value)} />
                        <input placeholder='Password'required type='password' onChange={(e) => getUserPass(e.target.value)}/>
                    </form>
                </div>
            </div> 
                <DD className='DD' PassData={PassData}/>
            <div className='form-1'>
                <div className='animated-el'></div>
                <div className='form-container'>
                    <form>
                        <h2>Step 3</h2>
                        <input placeholder='...@gmail.com'required type='email' onChange={(e) => setEmail(e.target.value)}/>
                        <input placeholder='Phone Number'required type='text' onChange={(e) => setNumber(e.target.value)}/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Form