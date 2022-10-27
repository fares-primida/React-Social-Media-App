import React from 'react'
import {BiImageAdd} from 'react-icons/bi'
import { useDropzone } from 'react-dropzone'
import '../style.css'

const DD = () => {
    return (
        <div className='Drag-Space'>
            <a href='#' className='drag-icon'>
            <BiImageAdd />
            </a>
            <h2>Drag Your Photo</h2>
            <button>Browse Images</button>
        </div>
    )
}

export default DD