/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Filter = ({filterData,category,setCategory}) => {
  function filterHandler(title){
     setCategory(title);
  }
  return (
    <div className='w-50% flex flex-wrap space-x-4 gap-y-4 py-4 justify-center'>
      {filterData.map((data) =>{
        return (<button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 ${category===data.title?"bg-opacity-60 border-white":"bg-opacity-40 border-transparent"}`} key={data.id} onClick={()=>{
          return filterHandler(data.title);
        }}>
            {data.title}
        </button>)
  })}
    </div>
  )
}

export default Filter