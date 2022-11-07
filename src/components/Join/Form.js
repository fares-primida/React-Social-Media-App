import React from 'react'
import DD from './Drag&Drop/DD'
// import {db} from '../../firebase-config'
// import {addDoc, collection, getDocs} from 'firebase/firestore'

const Form = () => {
//     const [email , setEmail] = useState("")
//     const [number , setNubmer] = useState(0)


//     const [UserName , getUserName] = useState("")
//     const [UserPass , getUserPass] = useState("")



//     const[users , setUsers] = useState([])
//     const userCollectionRef = collection(db , "users")

//     const CreateUser = async () => {
//         await addDoc(userCollectionRef , {
//             name: UserName,
//             password: UserPass,
//             email: email,
//             number: Number(number)
//         })
//     }

//     useEffect(() => {
//         const getUsers = async () => {
//             const data = await getDocs(userCollectionRef)
//             setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
//         }
        
//         getUsers()

//     }, [])


//     const handleSubmit = event => {
//     // 👇️ prevent page refresh
//     event.preventDefault();

//     console.log('form submitted ✅');
// };



    return (
        <div className='page-container'>
            <button className='start-button'>Start Now</button>
            <div className='form-1'>
                <div className='animated-el'></div>
                <div className='form-container'>
                    <form>
                        <h2>Step 1</h2>
                        <input placeholder='Name'required type='text' />
                        <input placeholder='Password'required type='password' />
                    </form>
                </div>
            </div> 
                <DD className='DD' />
            <div className='form-1'>
                <div className='animated-el'></div>
                <div className='form-container'>
                    <form>
                        <h2>Step 3</h2>
                        <input placeholder='...@gmail.com'required type='email' />
                        <input placeholder='Phone Number'required type='text' />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Form