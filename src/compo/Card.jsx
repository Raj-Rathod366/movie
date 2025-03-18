import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import CardDetail from './CardDetail'

function Card() {
    const {movie}= useContext(UserContext)
    const {title} = useContext(UserContext)
  return (
    <div className='flex gap-20 flex-wrap justify-center scroll-smooth'>
      {movie.length>0? 
            title.length>0 ? movie.map((e,i)=><CardDetail e={e} key={i} index={i}/> ): movie.map((e,i)=><CardDetail e={e} key={i}/>)
        : 
        <div className='h-150 bg-[#1E201E] text-white font-bold text-2xl mt-20'>movie not found.. </div>
      }
      
    </div>
  )
}

export default Card
