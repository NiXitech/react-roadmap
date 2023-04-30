import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ExamplePC from './pages/pc';
import ExampleMobile from './pages/mobile';
import isMobileFn from 'is-mobile';
import React from 'react';

function App() {
  const isMobile = isMobileFn({
    ua: navigator.userAgent,
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isMobile ? <ExampleMobile /> : <ExamplePC />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
