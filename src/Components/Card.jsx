/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {FcLike} from 'react-icons/fc'

const Card = (props) => {
  let course=props.course;
  return (
    <div>
      <div>
        <img src={course.image.url} />
      </div>
      <div>
        <button>
          <FcLike/>
        </button>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  )
}

export default Card