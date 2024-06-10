import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profiles from './pages/Profiles';
import ProfileCreate from './components/ProfileCreate';
import Movies from './pages/Movies';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/create-profile" element={<ProfileCreate />} />
        <Route path="/movies/*" element={<Movies />} />
      </Routes>
    </Router>
  );
};

export default App;
