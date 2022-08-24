import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Portal from './Portal';
import Header from './Component/Header';
import About from './Component/About';
import Contact from './Component/Contact';
import Blogview from './Component/Blogview';
import Sample from './Component/Sample';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portal/>}>
        <Route index element={<Header/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path=":id" element={<Blogview/>}/>
        <Route path="Sample" element={<Sample/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
