import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage.js';
import AboutPage from '../pages/AboutPage/AboutPage.js';
import MeetTheTeamPage from '../pages/MeetTheTeamPage/MeetTheTeamPage.js';
import AccomplishmentsPage from '../pages/AccomplishmentsPage/AccomplishmentsPage.js';
import BasicOutline from '../components/basicOutline/BasicOutline';
import Footer from '../components/Footer/Footer';
import SchedulePage from '../pages/SchedulePage/SchedulePage';

export default function App() {
  return (
    <div className="app">
      <div className="content">
        <Routes>
          <Route path="/" element={<BasicOutline />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="meetTheTeam" element={<MeetTheTeamPage />} />
            <Route path="accomplishments" element={<AccomplishmentsPage />} />
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
