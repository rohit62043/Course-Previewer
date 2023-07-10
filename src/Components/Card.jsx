/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast} from 'react-toastify'

const Card = (props) => {
  let likedCourse=props.likedCourse;
  let setLikedCourse=props.setLikedCourse;
  function clickHandler() {
    console.log('cliced clicked');
        if(likedCourse.includes(course.id)){
          //phle se liked hai
        setLikedCourse((prev)=>prev.filter((cid)=>(cid!==course.id)));
          toast.warning("Liked removed");
        }
        else{
          // phle se liked nhi hai ie we have to insert it
          if(likedCourse.length===0){
            console.log("phle se liked nhi hai &Empty")
            setLikedCourse(course.id); 
          }
          else{
            //non-empty phle se
            setLikedCourse((prev)=>[...prev,course.id])
          }
          toast.success("Liked Sucessfully");
        }
  }
  let course=props.course;
  return (
    <div className='w-[300px] bg-blue-500 bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-0 flex align-middle justify-center'>
        <button onClick={clickHandler}>
          {
            likedCourse.includes(course.id)?(<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
          }
           </button>
      </div>
      </div>
     
      <div className='p-4'>
        <p className='text-white font-semibold text-lg'>{course.title}</p>
        <p className='mt-2 text-white'>{course.description.length>100?(course.description.substr(0,100)+"..."):(course.description)}</p>
      </div>
    </div>
  )
}

export default Card