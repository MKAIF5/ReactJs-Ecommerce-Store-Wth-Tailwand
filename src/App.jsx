

import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CardSection from './components/CardSection'
import Card from './components/Card'
import Category from './components/Category'
import Month from './components/Month'
import Enhance from './components/Enhance'
import Products from './components/Products'
import Feautured from './components/Feautured'
import Footer from './components/Footer'
import './App.css'
// import { RouterProvider } from 'react-router-dom'

function App() {
  return (

    <>
      {/* <RouterProvider router={router} /> */}
      <Banner />
      <Navbar />
      <Home />
      <CardSection />
      <Card />
      <Category />
      <Month />
      <Enhance />
      <Products />
      <Feautured />
      <Footer />
    </>

  )
}

export default App
