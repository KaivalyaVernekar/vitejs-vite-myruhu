import { useState, lazy, Suspense, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const Browse = lazy(() => import('./pages/Browse.jsx'));
const ManageProfiles = lazy(() => import('./pages/ManageProfiles.jsx'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/browse" element={<Browse />}></Route>
          <Route path="/manageprofiles" element={<ManageProfiles />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
