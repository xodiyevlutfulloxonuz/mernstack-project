
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
     <>
     
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/">Story</Link>
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/add">Add story </Link>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>
</>
    
    )

}

export default Navbar 