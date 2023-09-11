import { useState } from 'react'
import { Body } from './component/Body'
import { Header } from './component/Header'
import { Contact } from './component/Contact'
import { Card } from './component/Card'
import { Footer } from './component/Footer'
import { Last } from './component/Last'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Header/>
      <Body/>
      <Footer/>
      <Contact/>
      <Card/>
      <Last/>
      
    
    </div>
  )
}

export default App
