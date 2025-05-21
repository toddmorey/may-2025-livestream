import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import StyleGuidePage from "./StyleGuidePage";
import BuilderPage from "./builder-page";
import ComponentsPage from "./ComponentsPage";
import HomePage from "./HomePage";
import ConferencePage from "./ConferencePage";
import PatternsPage from "./PatternsPage";

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/conference">Conference</Link>
          </li>
          <li>
            <Link to="/styleguide">Style Guide</Link>
          </li>
          <li>
            <Link to="/components">Components</Link>
          </li>
          <li>
            <Link to="/patterns">Patterns</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/conference" element={<ConferencePage />} />
        <Route path="/styleguide" element={<StyleGuidePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/patterns" element={<PatternsPage />} />
        <Route path="*" element={<BuilderPage />} />
      </Routes>
    </>
  );
}

export default App;
