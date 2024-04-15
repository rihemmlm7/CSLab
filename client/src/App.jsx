import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext'; // Import LanguageProvider
import Nav from './components/Nav';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import News from './pages/News';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Research from './pages/Research';

import Feeter from './components/Feeter';
import PrivateRoute from './components/PrivateRoute';

import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';


export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <Nav />
        <Header />
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path='/search' element={<Search />} />
          <Route element={<PrivateRoute />}>
            <Route path='/Dashboard' element={<Dashboard />} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/update-post/:postId' element={<UpdatePost />} />
          </Route>
          <Route path='/projects' element={<Projects />} />
          <Route path='/post/:postSlug' element={<PostPage />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/News" element={<News />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Publications" element={<Publications />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/Log-in" element={<LogIn />} />
        </Routes>
        
        <Feeter/>
      </LanguageProvider>
    </Router>
  );
}