/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {
    let courses=props.courses;
    let category=props.category;
    //the likedcourse will contain id of tha course which is liked
    const [likedCourse,setLikedCourse] = useState([null]);

    function getCourse(){
        if(category==="All"){
          let allCourses=[];
          Object.values(courses).forEach(array=>{
              array.forEach(courseData=>{
                  allCourses.push(courseData);
              })
          })
  
          return allCourses;
        }
        else{

          // may sirf specific category ka data pass akrunga
          return courses[category];
        }
       
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourse().map((course)=>{
          return <Card key={course.id} 
          course={course} 
          likedCourse={likedCourse} 
          setLikedCourse={setLikedCourse}/>
        })
       }
    </div>
  )
}

export default Cards