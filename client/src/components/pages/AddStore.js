import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const AddStore=()=>{
  const [name, setName]=useState('')
  const [age, setAge]=useState('')
  const [job,setJob]=useState('')
  const navigate= useNavigate()

  const handleSubmit= async(e)=>{
    e.preventDefault()
    await axios.post('http://localhost:5000/api/store/add',{
      name:name,
      age:age,
      job:job
    })
    navigate('/')

  }


    return(
        <div className="container">
             <form className="mt-3" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">FullName:</label>
    <input type="text"
     name="name" 
     className="form-control" 
     id="name"
     onChange={(e=>setName(e.target.value))}
      ></input>
    
  </div>
  <div className="mb-3">
    <label htmlFor="age" className="form-label">Age:</label>
    <input type="text"
     className="form-control" 
     name ="age" 
     id="age"
     onChange={(e=>setAge(e.target.value))}
     
     ></input>
  </div>
  <div className="mb-3">
    <label htmlFor="job" className="form-label">Job:</label>
    <input type="text" 
    className="form-control"
     name ="job" 
     id="job"
     onChange={(e=>setJob(e.target.value))}
     >
    
     </input>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default AddStore 