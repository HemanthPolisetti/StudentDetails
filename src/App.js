import { useState } from 'react';
import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import AuthReducer from './Context/AuthReducer';
function App() {
  // const currentUser = useContext(AuthReducer);
  const [currentUser,setCurrentUser] = useState(false);
  const RequireAuth= (({homepage})=>{
    return currentUser ? {homepage} : <Navigate to='/' />
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
        <Route path="home" 
        element={<RequireAuth> <Home /> </RequireAuth>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
