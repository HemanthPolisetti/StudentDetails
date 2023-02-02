import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom';
import { useContext } from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import { AuthContext } from './Context/AuthContext';
function App() {
  const {currentUser} = useContext(AuthContext);
  const RequireAuth= (({children})=>{
    return currentUser ? {children} : <Navigate to='/login' />
  })
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/">
        <Route path='login' element={<Login />}/>
        <Route index element={<RequireAuth> <Home /> </RequireAuth> }/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
export default App;
