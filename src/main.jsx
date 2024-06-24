import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage.jsx';
import PostsPage from './pages/PostsPage.jsx';
import CreatePostPage from './pages/CreatePostPage.jsx';
import SinglePostPage from './pages/SinglePostPage.jsx';
import FilterPage from './pages/FilterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import PrivateRouteMiddleware from './middlewares/PrivateRouteMiddleware.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

const App = () => {
  return (
    <div className="container">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route
              path="/create"
              element={<PrivateRouteMiddleware element={CreatePostPage} />}
            />
            <Route path="/posts/:slug" element={<SinglePostPage />} />
            <Route path="/filter" element={<FilterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>

  );
};

// Utilizzo di createRoot per renderizzare l'applicazione in React 18
createRoot(document.getElementById('root')).render(<App />);
