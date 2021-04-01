import React from 'react'
import Photos from '../photos/Photos'
import SearchAPicture from '../photos/SearchAPicture'

const Home=()=>{
    
    return(
    <div className="home">  
            <div>
                <div>Home page</div> 
                <SearchAPicture />
                <Photos />
            </div>       
    </div>
)}

export default Home