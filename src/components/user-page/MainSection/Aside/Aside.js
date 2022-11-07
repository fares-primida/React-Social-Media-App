import React, {useState , useEffect , useRef} from 'react'
import {AiFillHome , AiFillSetting} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BsFillChatFill , BsFillQuestionCircleFill} from 'react-icons/bs'
import {GoSignOut} from 'react-icons/go'
import WebLogo from '../../../../assets/Logo/white-logo.png'
import '../../styles.css'

const Aside = () => {

    
    const Ref = useRef(null)
    const [active , setActive] = useState(false)
    

    useEffect(() => {
        const Toggle = document.querySelector(".toggle")

        Toggle.addEventListener('click', function() {
            setActive(!active)
        })
    })

    return (
        <div ref={Ref} className={active ? "sidebar active" : "sidebar"}>
            <ul>
                <li>
                    <a href='#'>
                        <span className='icon'>
                            <img src={WebLogo} alt=''  className='web-logo'/>
                        </span>
                        <span className='title'>DigiCupid</span>
                    </a>
                </li>

                <li>
                    <a href='#'>
                        <span className='icon'>
                            <AiFillHome classname='fares-icon' />
                        </span>
                        <span className='title'>Home Page</span>
                    </a>
                </li>

                <li>
                    <a href='#'>
                        <span className='icon'>
                            <FaUserAlt classname='fares-icon'/>
                        </span>
                        <span className='title'>Friends</span>
                    </a>
                </li>

                <li>
                    <a href='#'>
                        <span className='icon'>
                            <BsFillChatFill classname='fares-icon'/>
                        </span>
                        <span className='title'>Messages</span>
                    </a>
                </li>

                <li>
                    <a href='#'>
                        <span className='icon'>
                            <BsFillQuestionCircleFill classname='fares-icon'/>
                        </span>
                        <span className='title'>Help</span>
                    </a>
                </li>

                <li>
                    <a href='#'>
                        <span className='icon'>
                            <AiFillSetting classname='fares-icon'/>
                        </span>
                        <span className='title'>Settings</span>
                    </a>
                </li>

                <li>
                    <a href='#'>
                        <span className='icon'>
                            <GoSignOut classname='fares-icon'/>
                        </span>
                        <span className='title'>Sign Out</span>
                    </a>
                </li>

            </ul>
            <div className='toggle'></div>
        </div>
    )
}

export default Aside