import React from 'react'

const Form = () => {

    const drag = document.getElementById('grag')
    const space = document.querySelector('.space')


    const setimage = () => {
        const val = drag.value
        space.value = val
    }
    return (
        <div>
            <div className='dropper'>
            <input type='file' id='grag' />
            <div className='space'></div>
            <button onClick={setimage}>see</button>
            </div>
        </div>
    )
}

export default Form