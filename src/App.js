import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetMovies from './pages/GetMovies';
import ParticularMovie from './pages/ParticularMovie';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<GetMovies/>}/>
    <Route path='/partmovie' element={<ParticularMovie/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
