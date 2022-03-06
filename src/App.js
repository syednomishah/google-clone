import Layout from './components/Layout';
import { useState } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import Results from './components/Results';
function App() {
  let [darkTheme, toggleDarkTheme] = useState(true);
  return (
    <div className={darkTheme?'dark':''}>
        <Layout darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme}>
          <Routes>
            <Route exact path="/" exact element={<Navigate to="/search" />} />
            <Route exact path="/:tab" element={ <Results />} />
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
