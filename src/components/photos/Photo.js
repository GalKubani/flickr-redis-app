import React from 'react'

const Photo=(props)=>{
    return(
    <div>
        <img className="photo" src={props.photo.url} alt={props.photo.alt}></img>
    </div>
)}

export default Photo