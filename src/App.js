import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import Login from './components/Login';
import { GlobalStorage } from './customHooks/GlobalContext';

const App = () => {
  return (
    <div>
      <GlobalStorage>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cadastro' element={<Cadastro/>}/>
        </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </div>
  );
};
export default App;
