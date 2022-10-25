import React from 'react'
import './styles.css'
import Logo from './images/full-logo.png'
import Lognin from './Lognin'

const MainPage = () => {
    return (
        <div className='main-into-page'>
            <div className='container'>
                <div className='left-side'>
                    <div className='logo'>
                        <img src={Logo}/>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='form-conatiner'>
                        <div className='cover'></div>
                        <Lognin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage