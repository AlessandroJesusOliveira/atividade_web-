import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ActivitiesProvider } from './context';

import './App.css';
import Form from './pages/form';
import List from './pages/list';

const App = () => {
  return (
    <ActivitiesProvider>
      <Router>
        <div className="container">
          <h1>Cadastrar Atividades</h1>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </div>
      </Router>
    </ActivitiesProvider>
  );
};

export default App;