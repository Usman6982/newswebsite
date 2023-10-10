import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_API_KEY;

  const [progress, setProgress] = useState(0)
  return (
    <div>
      <NavBar />
      <LoadingBar

        height={4}
        color='#f11946'
        progress={progress}

      />
      <Routes>
      <Route exact path="/home" element={<News setProgress={setProgress} apiKey={apiKey} key="home" pageSize={pageSize} country="us" category="home" />} />
        <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />} />
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />} />
      </Routes>
    </div>
  );

}
export default App;
