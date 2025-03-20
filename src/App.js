import './App.css';
import EasyUpload from './components/easyUpload/EasyUpload.js';
import BillsPage from './components/BillsReview/BillsPage.js';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <NavLink to="/bills" className={({ isActive }) => isActive ? "active-link" : ""}>Bills Review</NavLink>
          <NavLink to="/easyupload" className={({ isActive }) => isActive ? "active-link" : ""}>Easy Upload</NavLink>
        </nav>

        <Routes>
          <Route path="/easyupload" element={<EasyUpload />} />
          <Route path="/bills" element={<BillsPage />} />
          <Route path="/bills/:billId" element={<BillsPage />} />
          <Route path="/" element={<EasyUpload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
