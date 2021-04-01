import React, { useContext,useState } from 'react'
import { initHomepageAction } from '../../actions/photoActions'
import { PhotoContext } from '../../context/photoContext'
import { getPhotosFromDB,getSearchSuggestions } from '../../server/db'

const SearchAPicture=()=>{
    const {photoDispatch}= useContext(PhotoContext)
    const [photosSuggetions, setPhotosSuggetions] = useState([]);

    const onSubmit=async (e)=>{
        e.preventDefault()
        const searchValue= e.target.children[1].value
        await getPhotosFromDB(searchValue).then((res)=>{
            setPhotosSuggetions([]);
            photoDispatch(initHomepageAction(res))
        })
    }
    const onInput= async(e)=>{
        e.preventDefault()
        if(e.target.value==="")return
        await getSearchSuggestions(e.target.value).then((res)=>{
            setPhotosSuggetions(res)
        })
    }
    const onClickSuggestion = (suggestion) => {
        console.log("onClickSuggestion", suggestion);
        getPhotosFromDB(suggestion)
          .then(photosData => {
            setPhotosSuggetions([]);
            photoDispatch(initHomepageAction(photosData));
          });
      };
    return(
    <div>
        <form className="search-form" onSubmit={onSubmit}>
            <div>Find any picture you would like</div>
            <input onInput={onInput} type="text" />
            { photosSuggetions.length > 0 &&
          <div className="suggetions-container">
            <p>Suggetions:</p>
            { photosSuggetions.map(suggestion => (
              <p
                key={ suggestion } onClick={ (event) => {
                  event.stopPropagation();
                  onClickSuggestion(suggestion);
                } }
                className="suggestion"
              >
                { suggestion }
              </p>
            )) }
          </div>
        }
            <button>Search</button>
        </form> 
    </div>
)}

export default SearchAPicture