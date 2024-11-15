import { Routes, Route} from 'react-router-dom';
import Banner from "./components/Banner";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import SignUp from './Pages/SignUp';
import "./App.css";

function App() {
  return (
    <>
      <Banner />
      <Navbar />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;