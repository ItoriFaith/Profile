import { useState } from 'react'
import About from "./components/AboutMe"
import Footer from "./components/Footer"
import Personalinfo from "./components/Personalinfo"
import Hobby from './components/Hobby'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Personalinfo />
      <About/>
      <Hobby />
      <Footer />
      
    </div>
  )
}

export default App
