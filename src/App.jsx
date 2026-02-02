import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Otto from './pages/otto/otto';
import Wankel from './pages/wankel/wankel';
import Piston_sim from './pages/piston_simulasyonu/piston_simulasyonu';
import Awd from './pages/quattro_vs_xdrive/quattro_vs_xdrive';
import Vocabulary from './pages/vocabulary/vocabulary';
import Home from './pages/home/home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Blogs from './pages/blogs/blogs';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/otto" element={<Otto />} />
            <Route path="/blogs/wankel" element={<Wankel />} />
            <Route path="/piston-simulasyonu" element={<Piston_sim />} />
            <Route path="/blogs/quattro-vs-xdrive" element={<Awd />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>

        <Footer /> {/* Footer artık her sayfada otomatik görünecek */}
      </div>
    </Router>
  );
}

export default App;