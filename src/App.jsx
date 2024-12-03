import React from 'react';
import './style.css';
import Header from './components/Header';
import Grid from './components/Grid'
import About from './components/About';

const App = () => (
  <div>
    <Header />
    {/* <Grid /> */}
    <About />
  </div>
)

export default App

// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<App />)