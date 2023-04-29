import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ExamplePC from './examples/pc';
import ExampleMobile from './examples/mobile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/examples/pc" element={<ExamplePC />}></Route>
          <Route path="/examples/mobile" element={<ExampleMobile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
