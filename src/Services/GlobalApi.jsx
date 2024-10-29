import axios from "axios";

const key = "c8058efccf4c4552992e06a3dcfb867a";
const axiosCreate = axios.create({
    baseURL: "https://api.rawg.io/api"
})

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGameListByGenreId = (id) => axiosCreate.get('/games?key='+key+'&genres='+id);

export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId
}