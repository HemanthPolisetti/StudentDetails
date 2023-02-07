import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Details from './Components/Details';
import Home from './Components/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import { useEffect, useState } from 'react';
import Loginpage from './Components/Loginpage';
function App() {
    const [presentUser,setPresentUser]=useState(null)
  useEffect(()=>{
      auth.onAuthStateChanged(user=>{
      if(user)
      {setPresentUser({
        uid:user.uid,
        email:user.email
      })
  }
  else{
    setPresentUser(null);
  }})
  },[])
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/">
        <Route path='login' element={<Loginpage />}/>
        <Route index element={<Details />} />
        <Route path='home' element={presentUser ? <Home /> : <Loginpage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
export default App;
