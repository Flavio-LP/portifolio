import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import correto
import Header from './components/Header/Header';
import Footer from './components/Footer/index';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

const App: React.FC = () => {
  return (
    <Router basename='/portifolio'> {}
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;