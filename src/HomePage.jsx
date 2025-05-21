import { Link } from "react-router-dom";
import Button from "./components/button/Button";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Vimeo Design System</h1>
        <p>
          Explore our design system and components used to build consistent and
          beautiful user interfaces.
        </p>
      </header>

      <div className="home-cards">
        <div className="home-card">
          <div className="home-card-image">
            <img src="/images/shapes.avif" alt="Design system visualization" />
          </div>
          <div className="home-card-content">
            <h2 className="home-card-title">Style Guide</h2>
            <p className="home-card-description">
              Discover our design tokens, typography, colors, and spacing
              guidelines. The style guide provides a comprehensive overview of
              our design system fundamentals.
            </p>
            <div className="home-card-footer">
              <Button
                label="Explore Style Guide"
                href="/styleguide"
                variant="primary"
              />
            </div>
          </div>
        </div>

        <div className="home-card">
          <div className="home-card-image">
            <img src="/images/format.avif" alt="UI components visualization" />
          </div>
          <div className="home-card-content">
            <h2 className="home-card-title">Components</h2>
            <p className="home-card-description">
              Browse our library of UI components including buttons, cards, form
              elements, and more. Each component is designed to be accessible,
              responsive, and easy to implement.
            </p>
            <div className="home-card-footer">
              <Button
                label="View Components"
                href="/components"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
