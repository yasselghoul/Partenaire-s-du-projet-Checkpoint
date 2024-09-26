import axios from'axios'


//get all

export const fetchMovie = async () => {
    try {
      const response = await axios.get('http://localhost:4000/movie/getall');
      // Access the 'movies' property from the response
      return response.data.movies || []; // Ensure it returns an array
    } catch (error) {
      console.error('Error fetching movies:', error);
      return []; // Return an empty array in case of an error
    }
  };// get by id

export const fetchuniqueMovie=async(id)=>{
    const {data}=await axios.get(`http://localhost:4000/movie/getunique/${id}`)
return data
}

//addmovie

export const addMovie=async(value)=>{
    const addingMovie= await axios.post('http://localhost:4000/movie/addmovie',value)
}
// update
export const updateMovie=async(id,values)=>{
    const updtaMovie= await axios.put(`http://localhost:4000/movie/update/${id}`,{...values})
}

//delete
export const removeMovie=async(id)=>{
    const removeMovie=await axios.delete(`http://localhost:4000/movie/delete/${id}`)
}

// recherche
export const searchMovie = async (titre) => {
    const response = await axios.get(`http://localhost:4000/movie/search?titre=${titre}`);
    return response.data.movies;
  };
