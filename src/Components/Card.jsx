/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {FcLike} from 'react-icons/fc'

const Card = (props) => {
  let course=props.course;
  return (
    <div className='w-[300px] bg-blue-500 bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-0 flex align-middle justify-center'>
        <button>
          <FcLike fontSize="1.75rem"/>
        </button>
      </div>
      </div>
     
      <div className='p-4'>
        <p className='text-white font-semibold text-lg'>{course.title}</p>
        <p className='mt-2 text-white'>{course.description}</p>
      </div>
    </div>
  )
}

export default Card