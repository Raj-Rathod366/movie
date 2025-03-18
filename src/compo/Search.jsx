import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../context/Context'

function Search() {
  const { register, handleSubmit,reset } = useForm()

  const {setTitle} =  useContext(UserContext)
  
  const handleTitle = (e)=>{
    setTitle(e.Title)
    reset()  
  }

  return (
    <div className='flex justify-center ' >
      <form onSubmit={handleSubmit(handleTitle)}>
        <input {...register('Title')} className='h-full w-150  p-4 text-lg font-semibold rounded-lg text-black bg-[#ECDFCC]' type="text" placeholder='search' />
        <button type="submit"></button>
      </form>
   </div>
  )
}

export default Search
