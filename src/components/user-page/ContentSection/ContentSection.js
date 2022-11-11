import React, {useState} from 'react'
import Form from '../../Join/Form'
import Friends from './Friends/Friends'
import './Styles.css'

const ContentSection = () => {
    const Name = (Name) => {
        setName(Name)
    }

    const Image = (Image) => {
        setImage(Image)
    }

    const UsersInfo = (UsersInfo) => {
        setUsers(UsersInfo)
    }

    const [name , setName] = useState("")
    const [image , setImage] = useState("")
    const [users , setUsers] = useState([])

    console.log(name)
    console.log(image)
    console.log(users)
return (
    <div className='content-section'>
        <Friends />
        <div className='Hidden'>
            <Form className='hidden-com' Name={Name} Image={Image} UsersInfo={UsersInfo}/>
        </div>
    </div>
)
}

export default ContentSection