import Button from './components/button/Button';
import './ConferencePage.css';

function ConferencePage() {
  return (
    <div className="conference-main">
      {/* Hero Section */}
      <section className="conference-hero">
        <div className="conference-hero__content">
          <h1 className="conference-hero__title">Video Summit 2025</h1>
          <p className="conference-hero__tagline">The Ultimate Video Production & Streaming Conference</p>
          <div className="conference-hero__meta">
            <span className="conference-hero__dates">June 13 & 17, 2025</span>
            <span className="conference-hero__format">Hybrid (in-person and remote)</span>
          </div>
          <div className="conference-hero__cta">
            <Button label="Get Tickets" href="#tickets" variant="primary" />
            <Button label="View Workshops" href="#workshops" variant="secondary" />
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="conference-section" id="details">
        <h2 className="conference-section__title">Event Details</h2>
        <div className="conference-details__grid">
          <div className="conference-details__item">
            <h3>Format</h3>
            <ul>
              <li>June 13: In-person in Amsterdam with livestream</li>
              <li>June 17: Remote format</li>
            </ul>
          </div>
          <div className="conference-details__item">
            <h3>Location</h3>
            <p>Circa Amsterdam<br />Seineweg 2, Amsterdam, 1043 BG</p>
            <p>Shuttle bus service from Sloterdijk station provided</p>
          </div>
        </div>
        <div className="conference-sponsors__row" style={{ flexDirection: 'column', alignItems: 'center', marginTop: 'var(--space-10)' }}>
          <div className="conference-sponsors__label" style={{ color: 'var(--text-color-muted)', fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-4)' }}>Brought to you by</div>
          <div style={{ color: 'var(--color-blue-primary)', display: 'flex', gap: 'var(--space-10)', justifyContent: 'center', alignItems: 'center' }}>
            <AdidasLogo />
            <ReactLogo />
            <ThreejsLogo />
            <BuilderLogo />
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="conference-section" id="audience">
        <h2 className="conference-section__title">Audience</h2>
        <div className="conference-audience__cards">
          <div className="conference-audience__card">
            <img src="/images/shapes.avif" alt="Video creators and producers" className="conference-audience__img" />
            <div className="conference-audience__text">Video creators and producers of all levels</div>
          </div>
          <div className="conference-audience__card">
            <img src="/images/main-stage.avif" alt="Streaming professionals" className="conference-audience__img" />
            <div className="conference-audience__text">Streaming professionals and content strategists</div>
          </div>
          <div className="conference-audience__card">
            <img src="/images/livestream.avif" alt="Remote audience" className="conference-audience__img" />
            <div className="conference-audience__text">10,000+ content creators from around the world expected (remote)</div>
          </div>
          <div className="conference-audience__card">
            <img src="/images/filming.avif" alt="In-person audience" className="conference-audience__img" />
            <div className="conference-audience__text">1,500+ in-person attendees expected in Amsterdam</div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="conference-section conference-section--alt" id="structure">
        <h2 className="conference-section__title">Conference Structure</h2>
        <div className="conference-structure__grid">
          <div className="conference-structure__item">
            <h3>Tracks</h3>
            <p>2 tracks: Creator Studio & Production Summit</p>
          </div>
          <div className="conference-structure__item">
            <h3>Speakers</h3>
            <p>60+ speakers sharing video production insights</p>
          </div>
          <div className="conference-structure__item">
            <h3>Format</h3>
            <p>Hybrid with in-person and remote components</p>
          </div>
          <div className="conference-structure__item">
            <h3>Pre-Conference Workshops</h3>
            <p>June 11, 2025 (In-person in Amsterdam)</p>
            <p>Remote workshops: Various dates in June 2025</p>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="conference-section" id="themes">
        <h2 className="conference-section__title">Key Conference Themes</h2>
        <ul className="conference-themes__list">
          <li>High-Quality Live Streaming</li>
          <li>Advanced Video Editing Techniques</li>
          <li>Growing Your Audience & Monetization</li>
          <li>AI-Assisted Video Production</li>
          <li>Multi-Platform Distribution Strategies</li>
        </ul>
      </section>

      {/* Tickets */}
      <section className="conference-section conference-section--alt" id="tickets">
        <h2 className="conference-section__title">Ticket Options</h2>
        <div className="conference-tickets__grid">
          <div className="conference-ticket__card">
            <h3>In-person Ticket</h3>
            <p className="conference-ticket__price">€990</p>
            <ul>
              <li>Participation on June 12-13 and remote access on June 16-17</li>
              <li>Option to add hotel package: 3 nights with breakfast at Holiday Inn Express Amsterdam – Sloterdijk Station (June 11-14)</li>
            </ul>
          </div>
          <div className="conference-ticket__card">
            <h3>Remote Ticket</h3>
            <p>Included with Vimeo Creator Multipass</p>
            <ul>
              <li>Remote access to all sessions</li>
            </ul>
          </div>
          <div className="conference-ticket__card">
            <h3>Workshop Passes</h3>
            <ul>
              <li>In-person PRO workshop passes (additional cost)</li>
              <li>20+ free workshops included with full ticket</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="conference-section" id="workshops">
        <h2 className="conference-section__title">Workshops</h2>
        <div className="conference-workshops__grid">
          <div className="conference-workshops__col">
            <h3>In-Person Workshops (June 11, Amsterdam)</h3>
            <ul>
              <li>Professional Lighting Techniques (09:00 - 13:00 CET)</li>
              <li>Advanced Video Encoding for Streaming (09:00 - 13:00 CET)</li>
              <li>Building Interactive Video Experiences (14:00 - 18:00 CET)</li>
              <li>Multi-Camera Production Setup (14:00 - 18:00 CET)</li>
            </ul>
          </div>
          <div className="conference-workshops__col">
            <h3>Remote Workshops (Various dates in June)</h3>
            <ul>
              <li>Modern Video Production Architecture (June 18-19, 2025)</li>
              <li>Full-stack Video App in a Day: Vimeo API Development Bootcamp (June 23-24, 16:00-20:00)</li>
              <li>Troubleshoot, Monitor, Fix: A Hands-On Video Streaming Debugging Session (June 2, 16:00-19:00 CET)</li>
              <li>Test-Driven Video Production (June 3, 16:00-18:00 CET)</li>
              <li>Enhancing Streaming Quality with Advanced Analytics (June 4, 16:00-17:30 CET)</li>
              <li>Building Interactive Overlays for Live Streams (June 5, 16:00-18:00 CET)</li>
              <li>Build and Customize a Node-Based Video Effects Builder (June 9, 16:00-19:00 CET)</li>
              <li>The Journey From Content Creator to Production Studio Owner (June 19, 16:00-19:00 CET)</li>
              <li>Developing Production-Ready Video Apps with AI Integration (June 24, 16:00-18:00 CET)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="conference-section conference-section--alt" id="speakers">
        <h2 className="conference-section__title">Featured Speakers</h2>
        <ul className="conference-speakers__list">
          <li>Anjali Rodriguez (Head of Creator Experience at Vimeo)</li>
          <li>Casey Williams (Award-winning Documentary Filmmaker)</li>
          <li>Liu Wei (Pioneer in Virtual Production)</li>
          <li>Taylor Jackson (Creator of StreamPro Platform)</li>
          <li>Sofia Mendez (Video Encoding Specialist)</li>
          <li>Miguel Ángel Durán (Leading Streaming Architect)</li>
          <li>Sacha Greif (Creator of the State of Video Production survey)</li>
          <li>Neha Kapoor (Color Grading Expert)</li>
          <li>Trevor Kumar (Live Streaming Specialist)</li>
          <li>Naomi Chen (Vimeo, Video Optimization Lead)</li>
          <li>Steve Sewell (Co-founder of VideoBuilder.io)</li>
          <li>Jessica Parker (Vimeo API Development Lead)</li>
          <li>Lucas Martinez (Multi-platform Distribution Expert)</li>
          <li>Sarah Taylor (Video Monetization Strategist)</li>
        </ul>
      </section>

      {/* Special Features */}
      <section className="conference-section" id="features">
        <h2 className="conference-section__title">Special Features</h2>
        <ul className="conference-features__list">
          <li>Video Creator Awards</li>
          <li>Discussion Rooms & Speaker Q&A sessions</li>
          <li>Hybrid networking opportunities</li>
          <li>The Biggest Video Creators Party Worldwide:
            <ul>
              <li>Video-Driven Performances</li>
              <li>VJ Sets & Visual Experiences</li>
              <li>Creator Showcase Room</li>
              <li>Silent Cinema</li>
            </ul>
          </li>
          <li>Amsterdam city experiences:
            <ul>
              <li>Boat tours along Amsterdam channels</li>
              <li>Walking tours</li>
            </ul>
          </li>
          <li>100 scholarships for underrepresented groups in media production</li>
        </ul>
      </section>
    </div>
  );
}

export default ConferencePage;

// Inline SVG logo components for sponsors
function AdidasLogo() {
  return (
    <svg viewBox="0 0 85 45" width="85" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M30.9301 29.2874L28.1823 24.7079L25.8619 20.8514L16.0012 26.7738L17.5072 29.2874H30.9301ZM53.7451 29.2874H67.168L49.5731 0L39.7222 5.92247L53.7451 29.2874ZM49.0543 33.877C48.1075 33.2668 46.9981 32.9103 45.7972 32.9103H45.7668C42.4497 32.9306 39.7529 35.6375 39.7529 38.955C39.7529 42.2728 42.4497 44.9794 45.7668 45H45.7972C46.9981 45 48.1075 44.6439 49.0543 44.0333V44.6642H51.8321V29.2877H49.0543V33.877ZM49.0543 39.5862C48.7593 41.1128 47.4055 42.2826 45.7972 42.2826H45.7668C43.9452 42.2624 42.4699 40.7766 42.4699 38.955C42.4699 37.1337 43.9452 35.648 45.7668 35.6375H45.7972C47.4055 35.6375 48.759 36.7979 49.0543 38.3242V39.5862ZM62.1002 33.877C61.1317 33.245 60.0001 32.9091 58.8438 32.9103H58.8127C55.4955 32.9306 52.7991 35.6375 52.7991 38.955C52.7991 42.2728 55.4955 44.9794 58.8127 45H58.8438C60.0447 45 61.1639 44.6439 62.1002 44.0333V44.6642H64.8787V33.2154H62.1002V33.877ZM62.1002 39.5862C61.8052 41.1128 60.4513 42.2826 58.8438 42.2826H58.8127C56.9918 42.2624 55.5161 40.7766 55.5161 38.955C55.5161 37.1337 56.9918 35.648 58.8127 35.6375H58.8438C60.4513 35.6375 61.8048 36.7979 62.1002 38.3242V39.5862ZM74.7596 38.202C74.658 38.1506 74.5152 38.1 74.3521 38.0389C73.7314 37.8253 72.7239 37.5607 71.3195 37.2556C70.0882 36.9805 69.4675 36.6247 69.4675 36.1768C69.4675 35.8613 69.5792 35.6068 69.7929 35.4238C70.0781 35.1795 70.5864 35.0573 71.3195 35.0573C72.0624 35.0573 72.6018 35.2203 72.9173 35.5355C73.1107 35.7289 73.2528 36.0745 73.3446 36.5633H76.2959C76.2959 35.1184 75.7056 34.0805 74.5455 33.4497C74.4844 33.4098 74.4197 33.3758 74.3521 33.3481C73.5478 32.9714 72.4796 32.778 71.1467 32.778C69.5283 32.778 68.3075 33.2057 67.4937 34.0704C66.8427 34.7623 66.5271 35.6068 66.5271 36.6041C66.5271 37.8463 67.1373 38.7413 68.3791 39.3215C68.8472 39.5453 69.9867 39.8609 71.7985 40.2477C73.0095 40.5123 73.6194 40.889 73.6194 41.3673C73.6194 41.6525 73.4979 41.8965 73.2333 42.1203C72.8971 42.4051 72.3881 42.5479 71.7067 42.5479C70.8008 42.5479 70.1598 42.3954 69.7835 42.1004C69.4064 41.8155 69.213 41.3984 69.213 40.8691H66.1197C66.1197 42.2736 66.71 43.3216 67.9004 44.0131C68.8472 44.5525 70.0886 44.8276 71.6257 44.8276C72.6531 44.8276 73.5688 44.6544 74.3525 44.3189C74.5155 44.2477 74.6583 44.1761 74.8109 44.0948C76.0219 43.4235 76.6325 42.3549 76.6325 40.8897C76.6321 39.6877 76.0107 38.7919 74.7596 38.202ZM18.3011 33.877C17.3283 33.2463 16.1938 32.9105 15.0345 32.9103H15.0038C11.6968 32.9306 9 35.6375 9 38.955C9 42.2728 11.6968 44.9794 15.0038 45H15.0345C16.2354 45 17.3546 44.6439 18.3011 44.0333V44.6642H21.0792V33.2154H18.3011V33.877ZM18.3011 39.5862C18.0061 41.1128 16.6523 42.2826 15.0345 42.2826H15.0038C13.1927 42.2624 11.717 40.7766 11.717 38.955C11.717 37.1337 13.1927 35.648 15.0038 35.6375H15.0345C16.6526 35.6375 18.0061 36.7979 18.3011 38.3242V39.5862ZM35.6415 32.0048H38.664V29.3485H35.6415V32.0048ZM35.6415 44.6638H38.664V32.9103H35.6415V44.6638ZM31.4796 33.877C30.5067 33.2462 29.3721 32.9105 28.2127 32.9103H28.1823C24.8648 32.9306 22.168 35.6375 22.168 38.955C22.168 42.2728 24.8645 44.9794 28.1823 45H28.2127C29.3721 45 30.5068 44.6642 31.4796 44.0333V44.6642H34.2577V29.2877H31.4796V33.877ZM31.4796 39.5862C31.1846 41.1128 29.8308 42.2826 28.2127 42.2826H28.1823C26.3607 42.2624 24.8851 40.7766 24.8851 38.955C24.8851 37.1337 26.3607 35.648 28.1823 35.6375H28.2127C29.8308 35.6375 31.1842 36.7979 31.4796 38.3242V39.5862ZM49.0435 29.2874L45.7668 23.8128L37.7176 10.4206L28.1823 16.1602L27.8566 16.3532L28.1823 16.8926L35.6311 29.2874H49.0435Z" fill="currentColor"/>
    </svg>
  );
}
function ReactLogo() {
  return (
    <svg width="54" height="30" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M44.3988 18.5253C43.8387 18.3325 43.2582 18.15 42.6605 17.9775C42.7588 17.5766 42.8489 17.1809 42.9291 16.7919C44.245 10.4045 43.3846 5.25872 40.4467 3.56453C37.6296 1.94001 33.0225 3.63383 28.3696 7.68314C27.9222 8.07252 27.4735 8.48478 27.025 8.91683C26.7262 8.63097 26.4278 8.35473 26.1302 8.09049C21.2538 3.76071 16.3659 1.93607 13.4309 3.63517C10.6166 5.2644 9.78312 10.1019 10.9676 16.1553C11.082 16.74 11.2157 17.3371 11.3669 17.9442C10.6751 18.1405 10.0073 18.3499 9.36826 18.5726C3.65119 20.5658 0 23.6897 0 26.93C0 30.2766 3.91955 33.6332 9.87433 35.6686C10.3443 35.8292 10.8319 35.981 11.3344 36.1252C11.1713 36.7818 11.0294 37.4252 10.9103 38.0528C9.78091 44.0011 10.6629 48.7243 13.4698 50.3433C16.369 52.0152 21.2348 50.2967 25.9728 46.1551C26.3473 45.8277 26.7231 45.4805 27.0996 45.1166C27.5876 45.5865 28.0748 46.0313 28.5594 46.4484C33.1488 50.3977 37.6814 51.9924 40.4857 50.3689C43.3821 48.6922 44.3234 43.6184 43.1013 37.4452C43.008 36.9738 42.8994 36.4921 42.7774 36.0019C43.1191 35.9009 43.4546 35.7966 43.7817 35.6882C49.9722 33.6371 54 30.3212 54 26.93C54 23.678 50.2311 20.533 44.3988 18.5253ZM43.0561 33.4985C42.7609 33.5962 42.4579 33.6907 42.1492 33.7823C41.4658 31.6188 40.5434 29.3181 39.4147 26.9412C40.4918 24.6209 41.3785 22.3497 42.0428 20.2002C42.5952 20.36 43.1313 20.5286 43.648 20.7065C48.645 22.4268 51.6931 24.9702 51.6931 26.93C51.6931 29.0175 48.4012 31.7274 43.0561 33.4985ZM40.8383 37.8932C41.3787 40.6229 41.4559 43.0909 41.0979 45.0202C40.7763 46.7538 40.1295 47.9096 39.3298 48.3725C37.628 49.3576 33.9887 48.0772 30.0639 44.6997C29.614 44.3126 29.1608 43.8992 28.7061 43.4616C30.2277 41.7975 31.7484 39.8629 33.2326 37.7144C35.8431 37.4827 38.3094 37.104 40.546 36.587C40.6561 37.0313 40.754 37.4671 40.8383 37.8932ZM18.4098 48.2023C16.7471 48.7895 15.4229 48.8063 14.6224 48.3448C12.9191 47.3623 12.211 43.57 13.1769 38.483C13.2875 37.9004 13.4192 37.302 13.571 36.6903C15.7831 37.1795 18.2313 37.5314 20.8481 37.7436C22.3423 39.846 23.9069 41.7785 25.4836 43.4706C25.1391 43.8031 24.796 44.1197 24.4548 44.4181C22.3596 46.2495 20.2601 47.5488 18.4098 48.2023ZM10.6204 33.4857C7.98732 32.5857 5.81281 31.416 4.32229 30.1397C2.98297 28.9927 2.30677 27.854 2.30677 26.93C2.30677 24.9637 5.23831 22.4556 10.1276 20.7509C10.7209 20.5441 11.3419 20.3492 11.9864 20.1661C12.6621 22.3641 13.5485 24.6622 14.6182 26.9861C13.5347 29.3445 12.6356 31.6792 11.9533 33.903C11.4938 33.771 11.0487 33.632 10.6204 33.4857ZM13.2315 15.7123C12.2167 10.5259 12.8907 6.61343 14.5867 5.63167C16.3932 4.58579 20.3881 6.07699 24.5985 9.81555C24.8676 10.0545 25.1378 10.3046 25.4087 10.5634C23.8398 12.248 22.2895 14.166 20.8086 16.256C18.2689 16.4914 15.8379 16.8695 13.6027 17.3759C13.4622 16.8106 13.3377 16.2552 13.2315 15.7123ZM36.5247 21.464C35.9903 20.541 35.4418 19.6399 34.8825 18.7634C36.6055 18.9812 38.2562 19.2703 39.8065 19.6241C39.341 21.1157 38.761 22.6752 38.0781 24.274C37.5883 23.344 37.0702 22.4064 36.5247 21.464ZM27.0258 12.212C28.0898 13.3648 29.1554 14.6518 30.2035 16.0482C29.1473 15.9983 28.0781 15.9724 27 15.9724C25.9321 15.9724 24.8708 15.9977 23.8211 16.0468C24.8703 14.6633 25.9451 13.378 27.0258 12.212ZM17.466 21.4799C16.9323 22.4054 16.4238 23.338 15.9417 24.2723C15.2699 22.6791 14.6952 21.1124 14.2257 19.5997C15.7664 19.2549 17.4094 18.973 19.1214 18.7593C18.5543 19.6439 18.0012 20.5517 17.466 21.4797V21.4799ZM19.1707 35.2651C17.4019 35.0678 15.7342 34.8004 14.1939 34.4651C14.6709 32.9254 15.2583 31.3253 15.9443 29.6978C16.4276 30.6314 16.9381 31.5644 17.4752 32.4919H17.4753C18.0223 33.4369 18.589 34.3625 19.1707 35.2651ZM27.0896 41.8106C25.9962 40.6309 24.9057 39.326 23.8406 37.9224C24.8745 37.9629 25.9287 37.9837 27 37.9837C28.1007 37.9837 29.1887 37.9589 30.2597 37.9112C29.2081 39.3401 28.1464 40.6471 27.0896 41.8106ZM38.1001 29.6149C38.8219 31.2599 39.4303 32.8517 39.9134 34.3652C38.3477 34.7224 36.6573 35.01 34.8762 35.2238C35.4368 34.3355 35.9901 33.4189 36.5339 32.476C37.084 31.5222 37.6063 30.5668 38.1001 29.6149ZM34.5357 31.3236C33.6915 32.7872 32.8249 34.1844 31.9451 35.5032C30.3427 35.6178 28.6873 35.6768 27 35.6768C25.3195 35.6768 23.6849 35.6246 22.1109 35.5225C21.1956 34.1863 20.3102 32.785 19.4715 31.3362H19.4716C18.6351 29.8913 17.8652 28.4342 17.1676 26.9853C17.865 25.5331 18.6329 24.0744 19.4646 22.6321L19.4644 22.6324C20.2984 21.1863 21.176 19.7918 22.0828 18.464C23.6888 18.3426 25.3356 18.2792 26.9999 18.2792H27C28.6718 18.2792 30.3207 18.3431 31.9262 18.4655C32.8192 19.7836 33.6909 21.1736 34.5281 22.6199C35.3748 24.0824 36.1526 25.5314 36.856 26.9526C36.1547 28.3981 35.3786 29.8617 34.5357 31.3236ZM39.2944 5.56304C41.1027 6.60584 41.8059 10.8114 40.6698 16.3263C40.5973 16.6782 40.5157 17.0366 40.4271 17.3998C38.1867 16.8829 35.754 16.4982 33.2069 16.2593C31.7231 14.1463 30.1855 12.2254 28.6421 10.5623C29.057 10.1631 29.4714 9.78248 29.8841 9.42328C33.8707 5.95386 37.5968 4.58406 39.2944 5.56304ZM27 22.108C29.6631 22.108 31.822 24.2668 31.822 26.93C31.822 29.593 29.6631 31.752 27 31.752C24.3369 31.752 22.178 29.593 22.178 26.93C22.178 24.2668 24.3369 22.108 27 22.108Z" fill="currentColor"/>
    </svg>
  );
}
function ThreejsLogo() {
  return (
    <svg width="54" height="30" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2_24)">
        <path d="M0.0183704 0.756194C-0.0940497 0.301081 0.328056 -0.105218 0.778549 0.0244813L13.905 3.80364C14.0226 3.80322 14.1388 3.8367 14.238 3.89957L40.1263 11.3529C40.2336 11.3551 40.3393 11.3855 40.4314 11.4407L53.5589 15.2203C54.0099 15.3501 54.151 15.9197 53.8127 16.245L14.1987 54.3506C13.8606 54.6758 13.2972 54.513 13.1847 54.0575L6.61345 27.4553C6.60466 27.428 6.59776 27.4001 6.59282 27.3719L0.0183704 0.756194ZM11.2626 41.195L14.1145 52.7403L22.7026 44.4789L11.2626 41.195ZM20.1088 32.0648L11.794 40.0795L22.8708 43.2595L20.1088 32.0648ZM21.3431 31.9792L24.0962 43.1384L32.3884 35.162L21.3431 31.9792ZM8.03925 28.1456L10.8044 39.3407L19.1095 31.3356L8.03925 28.1456ZM29.9143 22.6026L21.4661 30.746L32.7245 33.9904L29.9143 22.6026ZM31.0981 22.313L33.9082 33.7002L42.3797 25.5515L31.0981 22.313ZM16.8427 18.8239L8.37634 26.9744L19.6554 30.2244L16.8427 18.8239ZM18.022 18.5164L20.784 29.7108L29.0988 21.6961L18.022 18.5164ZM4.72163 14.7148L7.53258 26.0951L15.9929 17.9504L4.72163 14.7148ZM39.7776 13.1348L31.4628 21.1495L42.5396 24.3295L39.7776 13.1348ZM40.966 12.8628L43.7672 24.2167L52.2063 16.0991L40.966 12.8628ZM26.6519 9.38108L18.3743 17.3496L29.399 20.5143L26.6519 9.38108ZM27.8332 9.0817L30.599 20.2897L38.9163 12.2726L27.8332 9.0817ZM13.5712 5.58564L5.25638 13.6003L16.3332 16.7803L13.5712 5.58564ZM14.7606 5.31795L17.5156 16.4843L25.8103 8.4993L14.7606 5.31795ZM1.45423 1.48703L4.26452 12.864L12.7067 4.72669L1.45423 1.48703Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_2_24">
          <rect width="54" height="54" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}
function BuilderLogo() {
  return (
    <svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.7568 12.508C33.7568 15.8088 32.2781 18.7542 29.9655 20.6805L2.72672 4.7595C2.62122 4.69781 2.52501 4.62309 2.43977 4.53881C2.41698 4.51622 2 4.1374 2 3.47619C2 3.0687 2.16036 2.69943 2.42032 2.43269C2.67943 2.16508 3.03816 2 3.434 2H23.5485C29.1856 2 33.756 6.70488 33.756 12.508H33.7568Z" fill="currentColor" stroke="white" strokeWidth="3.8161" strokeMiterlimit="10"/>
      <path d="M33.7569 28.853C33.7569 34.6561 29.1866 39.361 23.5494 39.361H3.43487C2.73181 39.361 2.00092 38.7893 2.00092 37.8857C2.00092 37.2332 2.40013 36.8657 2.44233 36.8205L2.44402 36.8187C2.52842 36.7362 2.62294 36.6632 2.72591 36.6024L13.4424 30.3388L29.963 20.6822H29.9647V20.6814C32.2773 22.6077 33.756 25.5531 33.756 28.8539L33.7569 28.853Z" fill="currentColor" stroke="white" strokeWidth="3.8161" strokeMiterlimit="10"/>
      <path d="M29.9655 20.6805H29.9638L13.4431 30.3379L2.72668 36.6015C2.62287 36.6623 2.52831 36.7353 2.44476 36.8178C6.38123 32.6473 8.80609 26.9554 8.80609 20.6805C8.80609 14.4055 6.3804 8.7093 2.44055 4.5379C2.5258 4.62218 2.62201 4.69691 2.72751 4.7586L29.9663 20.6796L29.9655 20.6805Z" fill="currentColor" stroke="white" strokeWidth="3.8161" strokeMiterlimit="10"/>
    </svg>
  );
} 