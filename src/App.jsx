import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FreeResources from './components/FreeResources'; // Adjust the path based on your project structure
import ResourceDetail from './components/ResourceDetail';
import ResumeTemplates from './components/ResumeTemplates';
import InterviewKit from './components/InterviewKit';
import CodingSheets from './components/CodingSheets';
import FreeCourses from './components/FreeCourses';
import CareerRoadmaps from './components/CareerRoadmaps';
import CommunityAccess from './components/CommunityAccess';

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
          <Route path="/free-resources/:resourceId" element={<ResourceDetail />} />
          <Route path="/free-resources/resume-templates" element={<ResumeTemplates />} />
          <Route path="/free-resources/interview-kit" element={<InterviewKit />} />
          <Route path="/free-resources/coding-sheets" element={<CodingSheets />} />
          <Route path="/free-resources/free-courses" element={<FreeCourses />} />
          <Route path="/free-resources/career-roadmaps" element={<CareerRoadmaps />} />
          <Route path="/free-resources/community" element={<CommunityAccess />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
