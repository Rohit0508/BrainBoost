import './App.css';
import Navigation from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/SignUp';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Privatecomp from './Components/PrivateComponents';
import Profile from './Components/Profile';
import Question from './Components/Question';
import Addproblem from './Components/Addproblem'
import Statement from './Components/Statement';

function App() {
  return (
    <div className='App' >

      <BrowserRouter>
        <Navigation />

        <Routes>


          

          <Route element={<Privatecomp />}>
            <Route path='/' element={<h1>HOME</h1>} />
            <Route path='/add-problem' element={<Addproblem />}/>
            <Route path='/about' element={<h1>about page</h1>} />
            <Route path='/profile/:name' element={<Profile />} />
            <Route path='/:type' element={<Question />} />
            <Route path='/problem/:id' element={<Statement />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
