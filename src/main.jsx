import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './features/moviesSlice';
import App from './App';
import './index.css';

// Create a root element
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Configure the store
const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

// Render the App component
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import moviesReducer from './features/moviesSlice';
// import App from './App';
// import './index.css';

// const store = configureStore({
//   reducer: {
//     movies: moviesReducer,
//   },
// });

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

