import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'

const UpdateStore=()=>{
  const [name, setName]=useState('')
  const [age, setAge]=useState('')
  const [job,setJob]=useState('')
  const navigate=useNavigate()
  
  const {id}=useParams()
  
  const fetchData=async()=>{
     const {data}= await axios.get(`http://localhost:5000/api/store/${id}`)
     setName(data.store.name)
     setAge(data.store.age)
     setJob(data.store.job)
    
     

  }
  const updateHandler= async(e)=>{
    e.preventDefault()
    await axios.put(`http://localhost:5000/api/store/${id}`,{
      name,
      age,
      job
    })
     navigate('/')

  }
  useEffect(()=>{
    fetchData()
  },[])

    return(
        <div className="container">
            <h3>Update User:</h3>
             <form className="mt-3" onSubmit={updateHandler}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">FullName:</label>
    <input type="text"
     name="name" 
     className="form-control" 
     id="name"
     onChange={(e=>setName(e.target.value))}
     value={name}
    
      ></input>
    
  </div>
  <div className="mb-3">
    <label htmlFor="age" className="form-label">Age:</label>
    <input type="text"
     className="form-control" 
     name ="age" 
     id="age"
     onChange={(e=>setAge(e.target.value))}
     value={age}
     
     ></input>
  </div>
  <div className="mb-3">
    <label htmlFor="job" className="form-label">Job:</label>
    <input type="text" 
    className="form-control"
     name ="job" 
     id="job"
     onChange={(e=>setJob(e.target.value))}
     value={job}
    
     >
    
     </input>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default UpdateStore 