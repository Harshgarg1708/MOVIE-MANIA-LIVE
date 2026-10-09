import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';
import MovieCard from './components/MovieCard/MovieCard';
import './App.css'
import Popular from './components/Popular/popular';
import Home from './components/Home/home';
import TopRated from './components/TopRated/TopRated';
import Upcoming from './components/Upcoming/Upcoming';

function App() {
  

  return (
    <BrowserRouter>
    <div className="app">
      <Navbar></Navbar>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/top-rated" element={<TopRated />} />

        
        <Route path="/upcoming" element={<Upcoming/>}/>
      </Routes>
      {/* <MovieList></MovieList> */}
      {/* <MovieCard></MovieCard> */}
     
    </div>
    </BrowserRouter>
  )
}

export default App

