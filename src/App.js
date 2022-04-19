import Login from './containers/Login/Login';
import Dashboard from './containers/Home/Main/Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <>
   <Router>
     <Routes>
        <Route exact path='/login' element= {<Login />} />
        <Route exact path='/' element= {<Dashboard />} />
     </Routes>
   </Router>
   </> 
  )
}

export default App;
