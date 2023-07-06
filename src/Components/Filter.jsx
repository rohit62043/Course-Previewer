/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Filter = ({filterData}) => {
  return (
    <div>
      {filterData.map((data) =>{
        return (<button id={data.id}>
            {data.title}
        </button>)
  })}
    </div>
  )
}

export default Filter