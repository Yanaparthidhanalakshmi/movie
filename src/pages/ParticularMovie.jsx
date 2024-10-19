import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import YouTube from 'react-youtube';
import "../style.css"

const ParticularMovie = () => {
    let location=useLocation();
   let specificMovie=location.state["cards"]
    let[trailer,setTrailer]=useState("")

    async function GetTrailer(id) {
        fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=4010f125677ceb848cba3ea144e40c8c`).then(x=>x.json()).then(val=>setTrailer(val.results[0].key))
    }
    console.log(trailer)
  return (
    <div className='movie-container'>
    <p>  ParticularMovie</p>
    <img src={`https://image.tmdb.org/t/p/original/${specificMovie.backdrop_path}`} alt="pic"  style={{height:"250px",width:"250px"}} className='movie-image'/>

      <h3 className='movie-title'>{specificMovie.title}</h3>
      <p className='movie-overview'>{specificMovie.overview}</p>
      <b className='movie-rating'>rating:{specificMovie.vote_average}⭐</b>
      <br />
      <button onClick={()=>GetTrailer(specificMovie.id)} className='play-trailer-button'>playTrailer</button>
        <div className='trailer-container'>
            {trailer&&<YouTube videoId={trailer}/>}
        </div>
    </div>
  )
}

export default ParticularMovie

