import "../styles.css";
import AdminCrud from "./components/AdminCrud.jsx";
import AdminForm from "./components/AdminForm.jsx";
import LearnerCrud from "./components/LearnerCrud.jsx";
import LearnerForm from "./components/LearnerForm.jsx";
import MentorCrud from "./components/MentorCrud.jsx";
import MentorForm from "./components/MentorForm.jsx";
import OrganizationCrud from "./components/OrganizationCrud.jsx";
import OrganizationForm from "./components/OrganizationForm.jsx";
import SignupForm from "./components/SignupForm.jsx";

function App() {
  return (
    <>
      <main>
        <section className="hero-section">
          <nav className="site-nav page-width" aria-label="Main navigation">
            <a className="brand" href="#top" aria-label="DevPath home">
              <img className="brand-logo" src="/logo.png" alt="DevPath" />
            </a>
            <div className="nav-links">
              <a href="#roadmaps">Roadmaps</a>
              <a href="#guides">AI Tutor</a>
              <a href="#community">Guides</a>
              <a href="#about">Newsletters</a>
            </div>
            <div className="nav-actions">
              <a className="nav-search" href="#roadmaps">
                ⌕ <span>Search</span>
              </a>
              <a className="upgrade-link" href="#community">
                ✦ Upgrade
              </a>
              <a className="login-link" href="#community">
                Log in
              </a>
              <a className="button button-small" href="#community">
                Sign Up
              </a>
            </div>
          </nav>
          <div className="hero-content page-width" id="top">
            <h1>Developer Roadmaps</h1>
            <p className="hero-copy">
              Skill up with community created roadmaps, guides, and courses.
            </p>
            <a className="search-bar" href="#roadmaps">
              <span>⌕</span> What do you want to learn today? <kbd>Ctrl K</kbd>
            </a>
            <p className="search-note">
              Search available roadmaps or learn anything with AI.
            </p>
          </div>
          <div className="hero-grid" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="roadmap-section page-width" id="roadmaps">
          <div className="browse-bar">
            <div
              className="browse-tabs"
              role="tablist"
              aria-label="Browse content"
            >
              <a
                className="active"
                href="#roadmaps"
                role="tab"
                aria-selected="true"
              >
                Roadmaps
              </a>
              <a href="#guides" role="tab">
                Lesson Packs <small>NEW</small>
              </a>
              <a href="#community" role="tab">
                Project Ideas
              </a>
            </div>
            <a className="text-link" href="#community">
              ✦ Go Pro
            </a>
          </div>
          <div className="topic-heading">
            <h3>Role-based</h3>
            <span>30 roadmaps</span>
          </div>
          <div className="topic-grid">
            <a className="featured-card" href="#guides">
              ✣ &nbsp; Learn with AI
            </a>
            <a href="#guides">
              Frontend <small>♧</small>
            </a>
            <a href="#guides">
              Backend <small>♧</small>
            </a>
            <a href="#guides">
              Full Stack <small>♧</small>
            </a>
            <a href="#guides">
              Android <small>♧</small>
            </a>
            <a href="#guides">
              DevOps <small>♧</small>
            </a>
            <a href="#guides">
              DevSecOps <small>♧</small>
            </a>
            <a href="#guides">
              Data Analyst <small>♧</small>
            </a>
            <a href="#guides">
              SEO <small>♧</small>
            </a>
            <a href="#guides">
              AI Engineer <small>♧</small>
            </a>
            <a href="#guides">
              AI and Data Scientist <small>♧</small>
            </a>
            <a href="#guides">
              Data Engineer <small>♧</small>
            </a>
            <a href="#guides">
              Machine Learning <small>♧</small>
            </a>
            <a href="#guides">
              Product Design <small>♧</small>
            </a>
            <a href="#guides">
              PostgreSQL <small>♧</small>
            </a>
            <a href="#guides">
              iOS <small>♧</small>
            </a>
            <a href="#guides">
              Blockchain <small>♧</small>
            </a>
            <a href="#guides">
              QA <small>♧</small>
            </a>
            <a href="#guides">
              Software Architect <small>♧</small>
            </a>
            <a href="#guides">
              Cyber Security <small>♧</small>
            </a>
            <a href="#guides">
              UX Design <small>♧</small>
            </a>
            <a href="#guides">
              Technical Writer <small>♧</small>
            </a>
            <a href="#guides">
              Game Developer <small>♧</small>
            </a>
            <a href="#guides">
              Server Side Game Developer <small>♧</small>
            </a>
            <a href="#guides">
              MLOps <small>♧</small>
            </a>
            <a href="#guides">
              Product Manager <small>♧</small>
            </a>
            <a href="#guides">
              Engineering Manager <small>♧</small>
            </a>
            <a href="#guides">
              Developer Relations <small>♧</small>
            </a>
            <a href="#guides">
              BI Analyst <small>♧</small>
            </a>
            <a href="#guides">
              Network Engineer <small>♧</small>
            </a>
            <a href="#guides">
              Forward Deployed Engineer <small>♧</small>
            </a>
          </div>
          <div className="topic-heading second-heading">
            <h3>Skill-based</h3>
            <span>59 roadmaps</span>
          </div>
          <div className="topic-grid">
            <a href="#guides">
              Claude Code <small>♧</small>
            </a>
            <a href="#guides">
              Vibe Coding <small>♧</small>
            </a>
            <a href="#guides">
              Python <small>♧</small>
            </a>
            <a href="#guides">
              Python for Data Analysis <small>♧</small>
            </a>
            <a href="#guides">
              R Programming <small>♧</small>
            </a>
            <a href="#guides">
              Computer Science <small>♧</small>
            </a>
            <a href="#guides">
              SQL <small>♧</small>
            </a>
            <a href="#guides">
              OpenClaw <small>♧</small>
            </a>
            <a href="#guides">
              React <small>♧</small>
            </a>
            <a href="#guides">
              Vue <small>♧</small>
            </a>
            <a href="#guides">
              Angular <small>♧</small>
            </a>
            <a href="#guides">
              JavaScript <small>♧</small>
            </a>
            <a href="#guides">
              TypeScript <small>♧</small>
            </a>
            <a href="#guides">
              Node.js <small>♧</small>
            </a>
            <a href="#guides">
              System Design <small>♧</small>
            </a>
            <a href="#guides">
              LeetCode <small>♧</small>
            </a>
            <a href="#guides">
              Java <small>♧</small>
            </a>
            <a href="#guides">
              ASP.NET Core <small>♧</small>
            </a>
            <a href="#guides">
              API Design <small>♧</small>
            </a>
            <a href="#guides">
              Power BI <small>♧</small>
            </a>
            <a href="#guides">
              Spring Boot <small>♧</small>
            </a>
            <a href="#guides">
              Flutter <small>♧</small>
            </a>
            <a href="#guides">
              C Programming <small>♧</small>
            </a>
            <a href="#guides">
              C++ <small>♧</small>
            </a>
            <a href="#guides">
              Rust <small>♧</small>
            </a>
            <a href="#guides">
              Go Roadmap <small>♧</small>
            </a>
            <a href="#guides">
              AI Product Builders <small>♧</small>
            </a>
            <a href="#guides">
              Design and Architecture <small>♧</small>
            </a>
            <a href="#guides">
              GraphQL <small>♧</small>
            </a>
            <a href="#guides">
              React Native <small>♧</small>
            </a>
            <a href="#guides">
              Design System <small>♧</small>
            </a>
            <a href="#guides">
              Prompt Engineering <small>♧</small>
            </a>
            <a href="#guides">
              MongoDB <small>♧</small>
            </a>
            <a href="#guides">
              Linux <small>♧</small>
            </a>
            <a href="#guides">
              Kubernetes <small>♧</small>
            </a>
            <a href="#guides">
              Docker <small>♧</small>
            </a>
            <a href="#guides">
              AWS <small>♧</small>
            </a>
            <a href="#guides">
              Terraform <small>♧</small>
            </a>
            <a href="#guides">
              Data Structures &amp; Algorithms <small>♧</small>
            </a>
            <a href="#guides">
              Redis <small>♧</small>
            </a>
            <a href="#guides">
              Git and GitHub <small>♧</small>
            </a>
            <a href="#guides">
              PHP <small>♧</small>
            </a>
            <a href="#guides">
              Cloudflare <small>♧</small>
            </a>
            <a href="#guides">
              AI Red Teaming <small>♧</small>
            </a>
            <a href="#guides">
              AI Agents <small>♧</small>
            </a>
            <a href="#guides">
              Next.js <small>♧</small>
            </a>
            <a href="#guides">
              Code Review <small>♧</small>
            </a>
            <a href="#guides">
              Kotlin <small>♧</small>
            </a>
            <a href="#guides">
              HTML <small>♧</small>
            </a>
            <a href="#guides">
              CSS <small>♧</small>
            </a>
            <a href="#guides">
              Swift &amp; Swift UI <small>♧</small>
            </a>
            <a href="#guides">
              Shell / Bash <small>♧</small>
            </a>
            <a href="#guides">
              Laravel <small>♧</small>
            </a>
            <a href="#guides">
              Elasticsearch <small>♧</small>
            </a>
            <a href="#guides">
              WordPress <small>♧</small>
            </a>
            <a href="#guides">
              Django <small>♧</small>
            </a>
            <a href="#guides">
              Ruby <small>♧</small>
            </a>
            <a href="#guides">
              Ruby on Rails <small>♧</small>
            </a>
            <a href="#guides">
              Scala <small>♧</small>
            </a>
          </div>
          <div className="topic-heading second-heading">
            <h3>Best Practices</h3>
            <span>5 roadmaps</span>
          </div>
          <div className="topic-grid">
            <a href="#guides">
              AWS <small>♧</small>
            </a>
            <a href="#guides">
              API Security <small>♧</small>
            </a>
            <a href="#guides">
              Backend Performance <small>♧</small>
            </a>
            <a href="#guides">
              Frontend Performance <small>♧</small>
            </a>
            <a href="#guides">
              Code Review <small>♧</small>
            </a>
          </div>
        </section>

        <section className="guides-section" id="guides">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">FIELD NOTES</p>
                <h2>Guides for the road ahead.</h2>
              </div>
              <a className="text-link" href="#community">
                See all guides <span>↗</span>
              </a>
            </div>
            <div className="guide-list">
              <a href="#community">
                <span className="guide-number">01</span>
                <strong>How to set environment variables in Python</strong>
                <span className="guide-type">Tutorial · 8 min</span>
              </a>
              <a href="#community">
                <span className="guide-number">02</span>
                <strong>
                  From zero to your first open-source contribution
                </strong>
                <span className="guide-type">Guide · 12 min</span>
              </a>
              <a href="#community">
                <span className="guide-number">03</span>
                <strong>What actually happens when you visit a website?</strong>
                <span className="guide-type">Deep dive · 10 min</span>
              </a>
              <a href="#community">
                <span className="guide-number">04</span>
                <strong>Building a portfolio that gets you noticed</strong>
                <span className="guide-type">Career · 6 min</span>
              </a>
            </div>
            <a className="button dark-button" href="#community">
              Browse the library <span>→</span>
            </a>
          </div>
        </section>
        <section className="community-section" id="community">
          <div className="page-width community-inner">
            <p className="eyebrow">A BETTER WAY TO LEARN</p>
            <h2>
              Keep moving,
              <br />
              <em>together.</em>
            </h2>
            <p>
              Join thousands of builders sharing notes, asking better questions,
              and making the next step feel a little less lonely.
            </p>
            <div className="stats">
              <div>
                <strong>369K</strong>
                <span>learners exploring</span>
              </div>
              <div>
                <strong>3.2M</strong>
                <span>lessons completed</span>
              </div>
              <div>
                <strong>52K</strong>
                <span>members connected</span>
              </div>
            </div>
            <a className="button light-button" href="#about">
              Join the community <span>→</span>
            </a>
          </div>
        </section>
      </main>
      <footer id="about">
        <div className="page-width footer-top">
          <a className="brand" href="#top">
            <img className="brand-logo" src="/logo.png" alt="DevPath" />
          </a>
          <div className="footer-links">
            <a href="#roadmaps">Roadmaps</a>
            <a href="#guides">Guides</a>
            <a href="#community">Community</a>
            <a href="#about">About</a>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <p>Learning in public, one useful step at a time.</p>
          <span>© 2026 DevPath Studio</span>
          <div>
            <a href="#about">Privacy</a>
            <a href="#about">Terms</a>
          </div>
        </div>
      </footer>
      {/* <AdminCrud />
      <LearnerCrud />
      <MentorCrud /> */}
      {/* <OrganizationCrud /> */}
      {/* <AdminForm />
      <LearnerForm />
      <MentorForm />
      <OrganizationForm />
      <SignupForm /> */}
    </>
  );
}

export default App;
