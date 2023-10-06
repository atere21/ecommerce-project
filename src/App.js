import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='' >
      <Header/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App