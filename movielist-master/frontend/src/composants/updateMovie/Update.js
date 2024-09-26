import React,{useEffect, useState} from 'react'
import { useNavigate ,useParams} from 'react-router';
import './update.css'
import { updateMovie ,fetchuniqueMovie} from '../../Api/movieApi';

const Update = () => {

    const [titre,setTitre]=useState()
  const [image,setImage]=useState()
  const[description,setDescription]=useState()
  const[rate,setRate]=useState()

  // navigation
  const navigate = useNavigate()

//nkapty el id mil url 
const {id}=useParams()



const updatyMovies=async (id,values)=>{
await updateMovie(id,values)
await alert('update reussite ')
navigate('/home')
}

//get unique movie 

const getuniMovie=async(id)=>{
    const data = await fetchuniqueMovie(id)
    console.log(id)
    console.log("data =>",data.getMovie)
     setTitre(data.getMovie.titre)
     setDescription(data.getMovie.description)
     setImage(data.getMovie.image)
     setRate(data.getMovie.rate)
}

useEffect(()=>{
    if(id){getuniMovie(id)}

},[id])




  return (
    <div className='bodyForm'>
     <div className="form-container">


  <h1 className="title">update  Movie </h1>



  <form className="form">



    <div className="input-group">
      <label  className="titre">
        titre 
      </label>
      <input type="text" name="titre" required=""  value={titre}    onChange={(e)=>setTitre(e.target.value)} />
    </div>




    <div className="input-group">
      <label  className="password">
        image
      </label>
      <input type="text" name="image" required="" value={image}    onChange={(e)=>setImage(e.target.value)} />
    </div>

    <div className="input-group">
      <label  className="password">
        description 
      </label>
      <input type="text" name="image" required=""  value={description}    onChange={(e)=>setDescription(e.target.value)}   />
    </div>


    <div className="input-group">
      <label  className="password">
        rate
      </label>
      <input type="text" name="rate" required=""  value={rate}    onChange={(e)=>setRate(e.target.value)}  />
    </div>




    <div className="forgot">
    
    </div>
    <button className="sign-in"   type='button'   onClick={()=>updatyMovies(id,{titre,description,image,rate})}    >Update Movie </button>
    <div className="social-messages">
      <div className="line" />
      <p className="message">any other idea </p>
      <div className="line" />
    </div>
    <div className="icons">
      <i className="fa-brands fa-google" />
      <i className="fa-brands fa-x-twitter" />
      <i className="fa-brands fa-github" />
    </div>
    <p className="sign-up">
      Don't you have any other movie ?
      <a href="#">go back to movie list </a>
    </p>
  </form>
</div>

    </div>
  )
}

export default Update