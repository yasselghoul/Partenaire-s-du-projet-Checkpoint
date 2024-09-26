const express = require ('express')

const movieSchema = require('../model/movie')

const movieRoute = express.Router()


// route get all movie
// http://localhost:4000/movie/getall

movieRoute.get('/getall',async(req,res)=>{
try{
const movies= await movieSchema.find()

res.status(200).json({msg :'you got all movies',movies})
}catch(err){
    console.log(err)
}

})

// route post or add movie
//http://localhost:4000/movie/addmovie

movieRoute.post('/addmovie',async(req,res)=>{
    try{
        const newMovie= new movieSchema (req.body)  
       await  newMovie.save()
        
    res.status(200).json({msg :'you added the movie',newMovie})
    }catch(err){
        console.log(err)
    }
    
    })

// route update movie
//http://localhost:4000/movie/update/:id
movieRoute.put('/update/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const updateMovie=await  movieSchema.findByIdAndUpdate(id,{$set:{...req.body}})
    res.status(200).json({msg :'you put update your movie',updateMovie})
    }catch(err){
        console.log(err)
    }
    
    })

// route delete movie
//http://localhost:4000/movie/delete/:id
movieRoute.delete('/delete/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const deleteMovie=await  movieSchema.findByIdAndDelete(id)
    res.status(200).json({msg :'you delete  movie'})
    }catch(err){
        console.log(err)
    }
    
    })



// route get unique movie
//http://localhost:4000/movie/getunique/:id

movieRoute.get('/getunique/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const getMovie=await  movieSchema.findById(id)
    res.status(200).json({msg :'you get unique  movie',getMovie})
    }catch(err){
        console.log(err)
    }
    
    })

    // route search http://localhost:4000/movie/search
    movieRoute.get('/search', async (req, res) => {
        const { titre } = req.query;
        try {
           const results = await movieSchema.find({ titre: new RegExp(titre, 'i') }).exec();
          res.json(results);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });




module.exports= movieRoute