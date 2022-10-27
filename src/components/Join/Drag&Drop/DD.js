import React, { useState } from 'react'
import {BiImageAdd} from 'react-icons/bi'
import { useDropzone } from 'react-dropzone'
import '../style.css'

const DD = () => {

    const [file , setFile] = useState([])

    const [getRootProps , getInputProps , acceptedFile] = useDropzone(
        {
            maxFiles: 1,
            accept: {"image/png":[".png" , ".jpg" , ".jpeg"]},
                
            onDrop:(acceptedFile) => {setFile(acceptedFile.map((file) => Object.assign(file, {preview: URL.createObjectURL(file)})))}
        }
    )

    return (
        <div {...getRootProps(
            {className: 'Drag-Space'}
        )}>
            <input {...getInputProps()} />
            <a href='#' className='drag-icon'>
            <BiImageAdd />
            </a>
            <h2>Drag Your Photo</h2>
            <button>Browse Images</button>
        </div>
    )
}

export default DD