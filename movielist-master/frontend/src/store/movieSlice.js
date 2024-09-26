import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const movieSlice= createSlice ({
    name:"movie",
    initialState:[
        {
        id:uuidv4(),
        titre:"mario redux ",
        image:"https://fr.web.img3.acsta.net/c_310_420/pictures/23/03/20/14/57/4979368.jpg",
        description:"Un plombier nommé Mario parcourt un labyrinthe souterrain avec son frère, Luigi, essayant de sauver une princesse capturée. Adaptation cinématographique du célèbre jeu vidéo.",
        rate:9
        },
        {
            id:uuidv4(),
            titre:"superman redux",
            image:"https://fr.web.img5.acsta.net/c_310_420/img/0a/9c/0a9cd08ac153415df19801e63230f612.jpg",
            description:"L'équilibre fragile que doit trouver Clark Kent, alias Superman, entre son origine Kryptonienne et sa vie d'humain.",
            rate:8
            }
    ],
    reducers:{
        setMovie:(state,action) => {
            return action.payload
        }
    }
    


})
export const {setMovie} = movieSlice.actions
export default movieSlice.reducer
