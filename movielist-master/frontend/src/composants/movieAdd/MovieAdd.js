import React,{useState} from 'react'
import "./MovieAdd.css"
import { useNavigate } from 'react-router';
import {addMovie} from '../../Api/movieApi'
const MovieAdd = () => {

  const [titre,setTitre]=useState()
  const [image,setImage]=useState()
  const[description,setDescription]=useState()
  const[rate,setRate]=useState()

  // navigation
  const navigate = useNavigate()

//fucntion add  
const ajout=async(value)=>{
await addMovie(value)
 await alert('add reussi')
navigate('/home')
 
}

  return (
    <div className='bodyForm'>
     <div className="form-container">


  <h1 className="title">Add Movie </h1>



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
    <button className="sign-in"   type='button'  onClick={()=>ajout({titre,image,description,rate})}    >Add Movie </button>
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

export default MovieAdd