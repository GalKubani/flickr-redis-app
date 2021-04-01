import React, { createContext, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { initHomepageAction } from '../actions/photoActions';
import PhotosReducer, { initialPhotoState } from '../reducers/photoReducer';
import { getPhotosFromDB } from '../server/db';

export const PhotoContext= createContext();

const PhotoContextProvider=(props)=>{
    const [photoState,photoDispatch]=useReducer(PhotosReducer,initialPhotoState)
    const history= useHistory()
    useEffect(()=>{
        let isComponentExist=true;
        getPhotosFromDB("dog").then((photoData)=>{
            if(isComponentExist) photoDispatch(initHomepageAction(photoData))
        },(err)=>{
            if(err.message){
                console.log(err.message)
                history.push("/")
            }
        })
        return()=>{
            isComponentExist=false;
        }
    },[])
    return(
        <PhotoContext.Provider value={{photoState,photoDispatch}}>
            {props.children}
        </PhotoContext.Provider>

    )
}
export default PhotoContextProvider;