import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './App.css'

function App() {
  return (

    <>
      <Banner />
      <Navbar />

      <Footer />
    </>

  )
}

export default App
