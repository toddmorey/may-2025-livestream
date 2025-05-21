import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import StyleGuidePage from './StyleGuidePage'

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/styleguide">Style Guide</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/styleguide" element={<StyleGuidePage />} />
      </Routes>
    </>
  );
}

export default App
