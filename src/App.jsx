import './var.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import View from './pages/view';
import About from './pages/about';

import * as data from './data.json';

function App() {
  const list = data.default.map((ele, n)=>{return {...ele, index: n};});
  const groups = Array.from(new Set(list.map((ele)=>ele.group)));

  return (
    <div>
      <Navbar list={list} groups={groups} />

      <main className='content-wrapper'>
        <Routes>
          <Route path='/' element={<Home list={list} groups={groups} />} />
          <Route path='/view/:id' element={<View list={list} />} />
          <Route path='/about' Component={About} />
        </Routes>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default App
