import './index.css';
import Categories from './Categories';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Start from './Components/Start';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";


function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  return (
    <div className='bg-avocado'>
      <Router>
        <Navbar />
        <Routes>
        {!user && (
          <>
          <Route path='/' element={<Start />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          </>
        )}
        {user && (
          <>
          <Route path='/' element={<Home />} />
          <Route path='/Outer' element={<Categories name="Outer" />} />
          <Route path='/Tops' element={<Categories name="Tops" />} />
          <Route path='/Bottoms' element={<Categories name="Bottoms" />} />
          <Route path='/Accessories' element={<Categories name="Accessories" />} />
          <Route path='/Dresses' element={<Categories name="Dresses" />} />
          <Route path='/Shoes' element={<Categories name="Shoes" />} />
          </>
        )}
        </Routes>
      </Router>
    </div>
    );
}

export default App;
