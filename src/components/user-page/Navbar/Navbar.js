import React, {useEffect , useRef} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt , FaUserFriends , FaSearch} from 'react-icons/fa'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {FcSettings} from 'react-icons/fc'
import '../styles.css'
import Image from '../../../assets/Logo/white-logo.png'




const Navbar = () => {

    const Ref = useRef(null)

    

    useEffect(() => {
        const List = document.querySelectorAll(".list");

        function ActiveLink(e) {
            List.forEach(
                (item) => item.classList.remove("active"),
            );
            e.classList.add('active')
        }
        List.forEach((li) => li.addEventListener("click", function(e) {
            const selection = e.currentTarget
            ActiveLink(selection)
        }));
    })
    

    return ( 
        <header className='navbar'>
            <div className='navbar-container'>
                <div className='logo'>
                    <img src={Image} alt='' />
                </div>
                <div className='search'>
                    <div className='search-area'>
                        <div className='search-logo'>
                            <FaSearch className='search-mark' />
                        </div>
                        <div className="search-input">
                            <input type='text' placeholder='Search...' />
                        </div>
                    </div>
                </div>
                <div className='navigation-routing'>
                    <ul className='UL' ref={Ref} >

                        <li className='list active'>
                            <a href='#'>
                                <span className='icon'>
                                <AiFillHome />
                                </span>
                                <span className='text'>Home</span>
                            </a>
                        </li>

                        <li className='list'>
                            <a href='#'>
                                <span className='icon'>
                                    <FaUserAlt />
                                </span>
                                <span className='text'>Profile</span>
                            </a>
                        </li>

                        <li className='list'>
                            <a href='#'>
                                <span className='icon'>
                                    <BsFillBookmarkFill />
                                </span>
                                <span className='text'>Post</span>
                            </a>
                        </li>

                        <li className='list'>
                            <a href='#'>
                                <span className='icon'>
                                    <FaUserFriends />
                                </span>
                                <span className='text'>Friends</span>
                            </a>
                        </li>

                        <li className='list'>
                            <a href='#'>
                                <span className='icon'>
                                    <FcSettings />
                                </span>
                                <span className='text'>Settings</span>
                            </a>
                        </li>

                    <div className='indicator'></div>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar