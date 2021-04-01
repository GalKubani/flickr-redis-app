import Axios from 'axios'

// // const DB_URL=`http://ec2-18-203-251-138.eu-west-1.compute.amazonaws.com`
// const DB_URL=`https://udemy-expense-default-rtdb.firebaseio.com/`
// const DB_URL='http://imagesserver-env.eba-uemuextf.eu-west-1.elasticbeanstalk.com/'
const DB_URL=`http://localhost:3030`
export const getPhotosFromDB = async (searchValue) => {
    try {
        const res = await Axios.get(DB_URL+"/search-photos/"+searchValue);
        const photos = [];
        for (let id in res.data) {
            photos.push({
                ...res.data[id]
            });
        }
        return photos;
    } catch (err) {
        console.log(err);
    }
};
export const getSearchSuggestions = async (searchValue) => {
    try {
        const { data } = await Axios.get(DB_URL + "/get-search-suggestions/" + searchValue);
        console.log("getSearchSuggestions:", data);
        return data;
    } catch (err) {
        console.log(err);
    }
};