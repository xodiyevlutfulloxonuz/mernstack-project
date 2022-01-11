import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
const StoreUser=()=>{
    const [storeUsers, setStoreUsers]=useState([])
    const [id,setId]=useState('')
    


  const fetchData=async()=>{
     
      const {data} =await axios.get('http://localhost:5000/api/store')
      setStoreUsers(data.stories)
      
      
  }
  const deleteHandler=async(e)=>{
      e.preventDefault()
      await axios.delete(`http://localhost:5000/api/store/${id}`)
      fetchData() 
      
  }


  useEffect(()=>{
    fetchData() 
  },[])

   return(
       <>
       {
      storeUsers.map(user=>{
            return (
                <div className="col-md-6 offset-3 mt-3" key={user._id}>
                <div className="card">
                    <div className="card-header">
                        <h3>{user.name}</h3>
                    </div>
                    <div className="card-body">
                        <h3>{user.job}</h3>
                        <h3>{user.age}</h3>
                    </div>
                    <div className="d-flex">
                         <Link className="btn btn-primary" to={`/update/${user._id}`}>Update </Link>  
                         <form onSubmit={deleteHandler}>
                             <button 
                             type="submit"
                              className="btn btn-danger mx-2"
                              onClick={()=>setId(user._id)}
                              > Delete</button>
                             </form>       
                    </div>
                </div>
            </div>
            )
        })
       }
      
       </>
   )
}

export default StoreUser 