
// function App() {
//   return (
//     <>
      
//     </>
//   )
// }

// export default App

import React from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <div className="app">
      <h1>Movie Finder</h1>
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default App;

