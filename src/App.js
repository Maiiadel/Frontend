import './App.css';
import Login from './pages/Login';
import Header1 from './Components/Header1';
import Header from './Components/Header';
import Signup from './pages/Signup';
import Footer from './Components/Footer';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Myprofile from './pages/Myprofile';
import About from './pages/About';
import SingleProject from './pages/SingleProject';
function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      {/* <Header1></Header1> */}
      {/* <Login></Login> */}
      {/* <Home></Home> */}
      {/* <Signup ></Signup> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='about' element={<About/>}/>
        {/* 3ayzeen nzbot el routeen dool 3a4an da el profile bta3 user mo3yn fa --> htb2a 8aleban '/:userid/myprojects' */}
        <Route path='myprofile' element={<Myprofile/>}/>
        <Route path='myprofile/:singleproject' element={<SingleProject/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
