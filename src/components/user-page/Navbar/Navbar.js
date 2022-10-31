import React from 'react'
import './main'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt , FaUserFriends} from 'react-icons/fa'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {FcSettings} from 'react-icons/fc'
import '../styles.css'


const List = document.querySelectorAll(".list");
function ActiveLink() {
    List.forEach(
        (item) => item.classList.remove("active"),
        this.classList.add("active")
    );
}

List.forEach((li) => li.addEventListener("click", ActiveLink));

const Navbar = () => {

    return (
        <header className='navbar'>
            <div className='navbar-container'>
                <div className='navigation-routing'>
                    <ul>

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