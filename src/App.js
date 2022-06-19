import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Welcome from './Pages/Welcome-page';
import Login from './Pages/login-page';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/log-in" element={<Login />} />
          <Route path="/welcome-user" element={<Welcome />} />
        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
