import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FreeResources from './components/FreeResources'; // Adjust the path based on your project structure


import Home from './pages/Home';
import About from './pages/About';
import InternshipPage from './pages/InternshipPage';
import Blog from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#001a17] text-white">
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/internship" element={<InternshipPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/free-resources" element={<FreeResources />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
