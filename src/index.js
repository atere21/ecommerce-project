import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import { Menu } from '@mui/material';
import Contact from './pages/Contact';
import About from './pages/About';


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Home/>} />
      <Route path='menu' element={<Menu/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}/>
);