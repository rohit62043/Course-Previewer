/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from './Card'

const Cards = (props) => {
    let courses=props.courses;

    function getCourse(){
        let allCourses=[];
        Object.values(courses).forEach(array=>{
            array.forEach(courseData=>{
                allCourses.push(courseData);
            })
        })

        return allCourses;
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
       {
        getCourse().map((course)=>{
          return <Card key={course.id} course={course}/>
        })
       }
    </div>
  )
}

export default Cards