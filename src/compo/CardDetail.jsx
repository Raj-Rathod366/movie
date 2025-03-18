import React, { useContext } from 'react'
import { UserContext } from '../context/Context';
import View from './View';

function CardDetail({i,e,index}) {
  const handleView = ()=>{
    console.log(index)
  }
  return (
    <div>
        <div onClick={(View)=><View/>} key={i} className='h-120 mt-10 w-55 bg-[#3C3D37] rounded-lg overflow-hidden '>
          <img className='w-55 h-65 rounded-lg ' src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt='' />
          <div className='  text-lg font-semibold p-4'>
            <h1 className='text-[#ECDFCC] text-bold text-2xl'>{e.title}hello</h1>
            <h1  className='text-white ' >lang :- {e.original_language}</h1>
            <h1 className='text-white ' >Rating :- {e.vote_average}</h1>
          </div>
        </div> 
    </div>
  )
}

export default CardDetail