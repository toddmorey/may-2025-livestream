import Button from './components/button/Button.jsx';
import './ComponentsPage.css';

function ComponentsPage() {
  return (
    <div className="sg-main">
      <header className="sg-header">
        <h1>Components</h1>
      </header>
      <section>
        <h2>Button</h2>
        <div className="sg-btn-examples">
          <Button label="Learn more" href="#" variant="primary" />
          <Button label="Request a demo" href="#" variant="secondary" />
        </div>
      </section>
    </div>
  );
}

export default ComponentsPage; 