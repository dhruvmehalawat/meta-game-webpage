import React from 'react'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <main className=' relative min-h-screen w-screen overflow-x-hidden'>
      <Hero/>
      <About/>
      <section className='z-0 min-h-screen bg-amber-400'/>
    </main>
  )
}

export default App