import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/input'
import Card from './components/Card'
import Task from './components/Task'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'


function App() {
  
  return (
    <BrowserRouter>
      <div className='App'>
        <title>To-do</title>
        <header><h1>To-do List</h1></header>
        <h2>This is my first application</h2>
         <Navbar />
      <main>
       
        <Routes>
          <Route path="/" element={<Task />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  )
}

export default App
