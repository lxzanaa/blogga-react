import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Article from './pages/Article';
import Single from './pages/Single';
import Library from './pages/Library';
import Category from './pages/Category';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/category" element={<Category />} />
        <Route path="/single" element={<Single />} />
        <Route path="/library" element={<Library />} />
      </Routes>
  );
}
