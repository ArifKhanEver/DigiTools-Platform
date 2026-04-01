import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Counter from './components/Counter'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Workflow from './components/Workflow'
import Footer from './components/Footer'
import DigitalTools from './components/DigitalTools/DigitalTools'

const toolsData = fetch('/data.json').then(res=>res.json())
function App() {

  const [cartCount, setCartCount] = useState(0)

  return (
    <>
      <Navbar cartCount = {cartCount}></Navbar>
      <Hero></Hero>
      <Counter></Counter>

      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <DigitalTools toolsData={toolsData} cartCount={cartCount} setCartCount={setCartCount}></DigitalTools>
      </Suspense>

      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  )
}

export default App
