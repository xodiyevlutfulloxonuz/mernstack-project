import Navbar from './components/Navbar'
import MainStore from './components/pages/MainStore'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddStore from './components/pages/AddStore'
import UpdateStore from './components/pages/UpdateStore'
function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/"   element={ <MainStore/>}>  </Route>
        <Route path="/add" element={<AddStore/>}></Route>
        <Route path="/update/:id" element={<UpdateStore/>}></Route>
      </Routes>
     
    </div></BrowserRouter>
  );
}

export default App;
