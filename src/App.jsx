import React from 'react';
import './style.css';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';

const App = () => (
  <div>
    <Header />
  </div>
);

// export default App

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)