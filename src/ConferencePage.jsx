import { Link } from "react-router-dom";
import Button from "./components/button/Button";
import "./ConferencePage.css";

function ConferencePage() {
  return (
    <div className="conference-container">
      {/* Hero Section */}
      <section className="conference-hero">
        <div className="conference-hero-content">
          <h1 className="conference-title">Video Summit 2025</h1>
          <p className="conference-tagline">
            The Ultimate Video Production & Streaming Conference
          </p>
          <div className="conference-dates">June 13 & 17, 2025</div>
          <div className="conference-format-badge">
            Hybrid (in-person and remote)
          </div>
          <div className="conference-cta">
            <Button
              label="Get Your Tickets"
              href="#tickets"
              variant="primary"
            />
            <Button
              label="View Schedule"
              href="#workshops"
              variant="secondary"
            />
          </div>
        </div>
        <div className="conference-hero-overlay"></div>
      </section>

      {/* Event Details Section */}
      <section className="conference-section" id="details">
        <div className="conference-section-inner">
          <h2 className="section-title">Event Details</h2>
          <div className="conference-details-grid">
            <div className="conference-detail-card">
              <h3 className="detail-card-title">Event Format</h3>
              <div className="detail-card-content">
                <p>
                  <strong>June 13:</strong> In-person in Amsterdam with
                  livestream
                </p>
                <p>
                  <strong>June 17:</strong> Remote format
                </p>
              </div>
            </div>
            <div className="conference-detail-card">
              <h3 className="detail-card-title">Location</h3>
              <div className="detail-card-content">
                <p>
                  <strong>Venue:</strong> Circa Amsterdam
                </p>
                <p>
                  <strong>Address:</strong> Seineweg 2, Amsterdam, 1043 BG
                </p>
                <p>
                  <strong>Transportation:</strong> Shuttle bus service from
                  Sloterdijk station provided
                </p>
              </div>
            </div>
            <div className="conference-detail-card">
              <h3 className="detail-card-title">Audience</h3>
              <div className="detail-card-content">
                <ul className="detail-card-list">
                  <li>Video creators and producers of all levels</li>
                  <li>Streaming professionals and content strategists</li>
                  <li>
                    10,000+ content creators from around the world expected
                    (remote)
                  </li>
                  <li>1,500+ in-person attendees expected in Amsterdam</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Structure Section */}
      <section
        className="conference-section conference-section-alt"
        id="structure"
      >
        <div className="conference-section-inner">
          <h2 className="section-title">Conference Structure</h2>
          <div className="conference-structure-grid">
            <div className="structure-item">
              <div className="structure-icon">
                <img
                  src="/images/filming.avif"
                  alt="Conference tracks"
                  className="structure-image"
                />
              </div>
              <h3 className="structure-title">2 Tracks</h3>
              <p className="structure-description">
                Creator Studio & Production Summit
              </p>
            </div>
            <div className="structure-item">
              <div className="structure-icon">
                <img
                  src="/images/main-stage.avif"
                  alt="Conference speakers"
                  className="structure-image"
                />
              </div>
              <h3 className="structure-title">60+ Speakers</h3>
              <p className="structure-description">
                Sharing video production insights
              </p>
            </div>
            <div className="structure-item">
              <div className="structure-icon">
                <img
                  src="/images/livestream.avif"
                  alt="Conference format"
                  className="structure-image"
                />
              </div>
              <h3 className="structure-title">Hybrid Format</h3>
              <p className="structure-description">
                In-person and remote components
              </p>
            </div>
            <div className="structure-item">
              <div className="structure-icon">
                <img
                  src="/images/format.avif"
                  alt="Pre-conference workshops"
                  className="structure-image"
                />
              </div>
              <h3 className="structure-title">Pre-Conference</h3>
              <p className="structure-description">
                Workshops on June 11, 2025 (In-person in Amsterdam)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Themes Section */}
      <section className="conference-section" id="themes">
        <div className="conference-section-inner">
          <h2 className="section-title">Key Conference Themes</h2>
          <div className="conference-themes-grid">
            <div className="theme-item">
              <h3 className="theme-title">High-Quality Live Streaming</h3>
              <p className="theme-description">
                Learn techniques and best practices for professional live
                streaming
              </p>
            </div>
            <div className="theme-item">
              <h3 className="theme-title">Advanced Video Editing Techniques</h3>
              <p className="theme-description">
                Discover cutting-edge editing workflows and tools
              </p>
            </div>
            <div className="theme-item">
              <h3 className="theme-title">
                Growing Your Audience & Monetization
              </h3>
              <p className="theme-description">
                Strategies to expand your reach and generate revenue
              </p>
            </div>
            <div className="theme-item">
              <h3 className="theme-title">AI-Assisted Video Production</h3>
              <p className="theme-description">
                How artificial intelligence is transforming content creation
              </p>
            </div>
            <div className="theme-item">
              <h3 className="theme-title">
                Multi-Platform Distribution Strategies
              </h3>
              <p className="theme-description">
                Optimize your content across different platforms and channels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Options Section */}
      <section
        className="conference-section conference-section-alt"
        id="tickets"
      >
        <div className="conference-section-inner">
          <h2 className="section-title">Ticket Options</h2>
          <div className="conference-tickets-grid">
            <div className="ticket-card">
              <div className="ticket-header">
                <h3 className="ticket-title">In-person Ticket</h3>
                <p className="ticket-price">€990</p>
              </div>
              <div className="ticket-content">
                <ul className="ticket-features">
                  <li>Participation on June 12-13 in Amsterdam</li>
                  <li>Remote access on June 16-17</li>
                  <li>Access to 20+ free workshops</li>
                  <li>Networking opportunities</li>
                  <li>Conference materials</li>
                  <li>Recordings of all sessions</li>
                </ul>
                <div className="ticket-cta">
                  <Button
                    label="Buy In-person Ticket"
                    href="#"
                    variant="primary"
                  />
                </div>
              </div>
              <div className="ticket-addon">
                <p>
                  <strong>Option to add hotel package:</strong>
                </p>
                <p>
                  3 nights with breakfast at Holiday Inn Express Amsterdam –
                  Sloterdijk Station (June 11-14)
                </p>
              </div>
            </div>
            <div className="ticket-card">
              <div className="ticket-header">
                <h3 className="ticket-title">Remote Ticket</h3>
                <p className="ticket-note">
                  Included with Vimeo Creator Multipass
                </p>
              </div>
              <div className="ticket-content">
                <ul className="ticket-features">
                  <li>Full access to all remote sessions on June 16-17</li>
                  <li>Access to remote workshops</li>
                  <li>Virtual networking opportunities</li>
                  <li>Recordings of all sessions</li>
                  <li>Digital conference materials</li>
                </ul>
                <div className="ticket-cta">
                  <Button
                    label="Buy Remote Ticket"
                    href="#"
                    variant="secondary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="conference-section" id="workshops">
        <div className="conference-section-inner">
          <h2 className="section-title">Workshops</h2>

          <div className="workshop-category">
            <h3 className="category-title">
              In-Person Workshops (June 11, Amsterdam)
            </h3>
            <div className="workshops-grid">
              <div className="workshop-card">
                <div className="workshop-time">09:00 - 13:00 CET</div>
                <h4 className="workshop-title">
                  Professional Lighting Techniques
                </h4>
                <p className="workshop-description">
                  Master professional lighting setups for various video
                  production scenarios.
                </p>
              </div>
              <div className="workshop-card">
                <div className="workshop-time">09:00 - 13:00 CET</div>
                <h4 className="workshop-title">
                  Advanced Video Encoding for Streaming
                </h4>
                <p className="workshop-description">
                  Learn optimal encoding settings to ensure high-quality
                  streaming across platforms.
                </p>
              </div>
              <div className="workshop-card">
                <div className="workshop-time">14:00 - 18:00 CET</div>
                <h4 className="workshop-title">
                  Building Interactive Video Experiences
                </h4>
                <p className="workshop-description">
                  Create engaging interactive elements to enhance viewer
                  experience.
                </p>
              </div>
              <div className="workshop-card">
                <div className="workshop-time">14:00 - 18:00 CET</div>
                <h4 className="workshop-title">
                  Multi-Camera Production Setup
                </h4>
                <p className="workshop-description">
                  Design and manage professional multi-camera productions for
                  live events.
                </p>
              </div>
            </div>
          </div>

          <div className="workshop-category">
            <h3 className="category-title">
              Remote Workshops (Various dates in June)
            </h3>
            <div className="workshops-grid">
              <div className="workshop-card">
                <div className="workshop-time">June 18-19, 2025</div>
                <h4 className="workshop-title">
                  Modern Video Production Architecture
                </h4>
                <p className="workshop-description">
                  Design scalable systems for efficient video production
                  workflows.
                </p>
              </div>
              <div className="workshop-card">
                <div className="workshop-time">June 23-24, 16:00-20:00 CET</div>
                <h4 className="workshop-title">
                  Full-stack Video App in a Day: Vimeo API Development Bootcamp
                </h4>
                <p className="workshop-description">
                  Build a complete video application using the Vimeo API.
                </p>
              </div>
              <div className="workshop-card">
                <div className="workshop-time">June 2, 16:00-19:00 CET</div>
                <h4 className="workshop-title">
                  Troubleshoot, Monitor, Fix: A Hands-On Video Streaming
                  Debugging Session
                </h4>
                <p className="workshop-description">
                  Learn to identify and resolve common streaming issues.
                </p>
              </div>
              <div className="workshop-card">
                <div className="workshop-time">June 3, 16:00-18:00 CET</div>
                <h4 className="workshop-title">Test-Driven Video Production</h4>
                <p className="workshop-description">
                  Apply test-driven methodologies to improve video production
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers Section */}
      <section
        className="conference-section conference-section-alt"
        id="speakers"
      >
        <div className="conference-section-inner">
          <h2 className="section-title">Featured Speakers</h2>
          <div className="speakers-grid">
            <div className="speaker-card">
              <div className="speaker-image-placeholder"></div>
              <h3 className="speaker-name">Anjali Rodriguez</h3>
              <p className="speaker-role">
                Head of Creator Experience at Vimeo
              </p>
            </div>
            <div className="speaker-card">
              <div className="speaker-image-placeholder"></div>
              <h3 className="speaker-name">Casey Williams</h3>
              <p className="speaker-role">
                Award-winning Documentary Filmmaker
              </p>
            </div>
            <div className="speaker-card">
              <div className="speaker-image-placeholder"></div>
              <h3 className="speaker-name">Liu Wei</h3>
              <p className="speaker-role">Pioneer in Virtual Production</p>
            </div>
            <div className="speaker-card">
              <div className="speaker-image-placeholder"></div>
              <h3 className="speaker-name">Taylor Jackson</h3>
              <p className="speaker-role">Creator of StreamPro Platform</p>
            </div>
            <div className="speaker-card">
              <div className="speaker-image-placeholder"></div>
              <h3 className="speaker-name">Sofia Mendez</h3>
              <p className="speaker-role">Video Encoding Specialist</p>
            </div>
            <div className="speaker-card">
              <div className="speaker-image-placeholder"></div>
              <h3 className="speaker-name">Miguel Ángel Durán</h3>
              <p className="speaker-role">Leading Streaming Architect</p>
            </div>
            <div className="speaker-card">
              <div className="speaker-image-placeholder"></div>
              <h3 className="speaker-name">Sacha Greif</h3>
              <p className="speaker-role">
                Creator of the State of Video Production survey
              </p>
            </div>
            <div className="speaker-card">
              <div className="speaker-image-placeholder"></div>
              <h3 className="speaker-name">Neha Kapoor</h3>
              <p className="speaker-role">Color Grading Expert</p>
            </div>
          </div>
          <div className="speakers-footer">
            <p>And many more video production experts from around the world!</p>
            <div className="speakers-cta">
              <Button label="View All Speakers" href="#" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="conference-section" id="features">
        <div className="conference-section-inner">
          <h2 className="section-title">Special Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3 className="feature-title">Video Creator Awards</h3>
              <p className="feature-description">
                Celebrating excellence in video production across multiple
                categories
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Discussion Rooms & Speaker Q&A</h3>
              <p className="feature-description">
                Interactive sessions with industry experts
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Hybrid Networking</h3>
              <p className="feature-description">
                Connect with peers both in-person and virtually
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">
                The Biggest Video Creators Party Worldwide
              </h3>
              <p className="feature-description">
                Featuring video-driven performances, VJ sets, visual
                experiences, and a creator showcase room
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Amsterdam City Experiences</h3>
              <p className="feature-description">
                Boat tours along Amsterdam channels and guided walking tours
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">
                Diversity & Inclusion Initiative
              </h3>
              <p className="feature-description">
                100 scholarships for underrepresented groups in media production
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="conference-cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Join Us at Video Summit 2025</h2>
          <p className="cta-description">
            Don't miss the biggest video production event of the year
          </p>
          <div className="cta-buttons">
            <Button label="Register Now" href="#tickets" variant="primary" />
            <Button label="Learn More" href="#details" variant="secondary" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConferencePage;
