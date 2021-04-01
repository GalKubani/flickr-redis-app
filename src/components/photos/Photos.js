import React, { useContext } from 'react'
import { PhotoContext } from '../../context/photoContext'
import Photo from './Photo'

const Photos=()=>{
    const {photoState}= useContext(PhotoContext)
    return(
    <div>
        <div className="photos-container">    
        { photoState.photos.map((photo)=>(
                <Photo key={photo.url} photo={ photo } />
            ))
            }
        </div>
    </div>
)}

export default Photos