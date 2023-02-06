import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom';
import Details from './Components/Details';
import Home from './Components/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import { useEffect } from 'react';
import Loginpage from './Components/Loginpage';
function App() {
  // useEffect(()=>{
  //     auth.onAuthStateChanged(user=>{
  //       console.log({
  //         uid:user.uid,
  //         email:user.email
  //     })
  //     })
  // })
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/">
        <Route path='login' element={<Loginpage />}/>
        <Route index element={<Details />} />
        <Route path='home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
export default App;
