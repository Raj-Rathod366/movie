import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext= createContext()
function Context(props) {
    
  const [title , setTitle] = useState('')
  const [movie, setMovie] = useState([])
  const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTQ0MmJkYTZlMTgwMmY2MjQ3YTk0ZDM5ZGNkMWFjMCIsIm5iZiI6MTc0MjIxMTM0OS42MjYsInN1YiI6IjY3ZDgwOTE1MTkxODY4YzU0ZmYxY2RmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M-fg6Qs452y_-fgwaVCd3T789YqrPDAzSTWDdhIYC1E"
  
  const handleSearchMovie = (data)=>{
    setMovie(data)
  }

  useEffect(()=>{
    // popular movie api
    axios({
    
      url: "https://api.themoviedb.org/3/movie/popular",
      method: "GET",
      headers: { 
          Authorization:  `Bearer ${API_KEY}`,
      }
      }).then(res =>setMovie(res.data.results)).catch(err=>console.log(err));
  
  },[])
  
 
    {title && 
      axios({
        url:`https://api.themoviedb.org/3/search/movie?query=${title}`,
        method :'GET',
        headers:{
          Authorization: `Bearer ${API_KEY}`,
        }
      }).then(res=>handleSearchMovie(res.data.results)).catch(err=>console.log(err))
  
    }
    
  return (
    <UserContext value={{title,setTitle,movie,setMovie}} >
        {props.children}
    </UserContext>
  )
}
export default Context