import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='' >
      <Header/>
      <main className='pt-16 bg-slate-100 drop drop-shadow min-h-[calc(100vh)]'>
        <Outlet/>
      </main>
    </div>
  )
}

export default App