// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, SearchFeed, Feed, VideoDetail, ChannelDetail } from "./components";
import ThemeToggleButton from './components/ThemeToggleButton';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const { themeMode } = useTheme();

  return (
    <Box sx={{ backgroundColor: themeMode === 'dark' ? "#000" : "#fff" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
