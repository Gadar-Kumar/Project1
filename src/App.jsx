import { useState } from 'react'
import './App.css'
import Header from './component/Headers/Header'
import { useEffect } from 'react'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    axios.get("http://localhost:3000/app-m")
    .then(()=>{
      console.log("");
      
    })
  })

  return (
    <>
      <Header />
    </>
  )
}

export default App
