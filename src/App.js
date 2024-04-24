import './App.css';
import MobileDevicePage from './components/MobileDevicePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() { //1 page only, shouldnt be a problem while working on app.js
  return (
    <>
   <Navbar />
   <MobileDevicePage />
   <Footer />
   </>
  );
}

export default App;
