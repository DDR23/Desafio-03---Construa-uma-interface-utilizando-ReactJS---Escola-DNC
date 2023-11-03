import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import './index.scss'

export default function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Outlet/>
      </div>
    </>
  )
}