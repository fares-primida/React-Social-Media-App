import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import '../Styles.css'

const Friends = () => {
return (
<div className='firends-section'>
    <div className='Search-area'>
        <div className='contents'>
            <div className='search-icon'>
                <BiSearchAlt className='icon'/>
            </div>
            <div className='search-input'>
                <input type='text'/>
            </div>
        </div>
    </div>
    <div className='friends-area'>
        <div className='user'>
            <div className='image'></div>
            <div className='name'><span>Fares</span></div>
        </div>
    </div>
</div>
)
}

export default Friends