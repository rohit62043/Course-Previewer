/* eslint-disable no-unused-vars */
import './App.css'
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import { apiUrl, filterData } from './data'
import { useEffect, useState } from 'react'
import { toast} from 'react-toastify'
import Spinner from './Components/Spinner'


function App() {
 
  const [courses,setCourses]=useState(null);
  const[loading,setLoading]=useState(true);
  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output= await response.json();
      //setting output data
      console.log(output);
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
     <div> <Navbar className='bg-sky-950 py-4' /></div>
     <div> <Filter filterData={filterData} /></div>
      <div>
        {
          loading?(<Spinner/>):(<Cards courses={courses}/>)
        }
      </div>
    </div>
  )
}

export default App
