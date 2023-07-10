/* eslint-disable no-unused-vars */
import './App.css'
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import { apiUrl, filterData } from './data'
import { useEffect, useState } from 'react'
import Spinner from './Components/Spinner'
import { toast } from 'react-toastify';



function App() {
 
  const [courses,setCourses]=useState(null);
  const[loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title)
  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output= await response.json();
      //setting output data
      console.log(output.data);
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network me Koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className='min-h-screen flex flex-col'>
     <div> <Navbar /></div>
     <div> <Filter filterData={filterData} category={category} setCategory={setCategory}/></div>
      <div className='w-11/12 max-w-{1200px} flex justify-center items-center min-h-[50vh]'>
        {
          loading?(<Spinner/>):(<Cards courses={courses}  category={category}
            setCategory={setCategory}/>)
        }
      </div>
    </div>
  )
}

export default App
