
export const initialPhotoState = {
    photos: []
};
const PhotosReducer=(photosState, action)=>{
    switch (action.type) {
        case "ADD_PHOTO":
            return {
                photos: photosState.photos.concat(action.photo.res)
            };     
        case "INIT_HOME":
            return { photos: action.photosData };  
        case "REMOVE_PHOTO":
            return{
                photos: photosState.photos.filter((photo)=>{
                    return photo._id !== action.photo.id
                })
            }
        default:
            return { ...photosState };
    }
}
export default PhotosReducer;