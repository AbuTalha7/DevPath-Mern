import "../styles.css";
import { Link, Route, Routes } from "react-router-dom";
import {
  AdminApprovals,
  AdminDashboard,
  AdminHome,
  AdminReports,
  AdminSettings,
  AdminTablePage,
} from "./components/AdminDashboard.jsx";
import LoginForm from "./components/LoginForm.jsx";
import SignupForm from "./components/SignupForm.jsx";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />}>
        <Route index element={<AdminHome />} />
        <Route path="users" element={<AdminTablePage section="users" />} />
        <Route path="learners" element={<AdminTablePage section="learners" />} />
        <Route path="mentors" element={<AdminTablePage section="mentors" />} />
        <Route path="organizations" element={<AdminTablePage section="organizations" />} />
        <Route path="roadmaps" element={<AdminTablePage section="roadmaps" />} />
        <Route path="content" element={<AdminTablePage section="content" />} />
        <Route path="approvals" element={<AdminApprovals />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
      <Route path="/login" element={<AuthPage><LoginForm /></AuthPage>} />
      <Route path="/signup" element={<AuthPage><SignupForm /></AuthPage>} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

function AuthPage({ children }) {
  return (
    <main className="auth-page">
      {children}
    </main>
  );
}

function HomePage() {
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
              <Link className="login-link" to="/admin">
                Admin Dashboard
              </Link>
              <a className="upgrade-link" href="#community">
                ✦ Upgrade
              </a>
              <Link className="login-link" to="/login">
                Log in
              </Link>
              <Link className="button button-small" to="/signup">
                Sign Up
              </Link>
            </div>
          </nav>
          <div className="hero-content page-width" id="top">
            <h1>Developer Roadmaps</h1>
            <p className="hero-copy">
              Skill up with community created roadmaps, guides, and courses.
            </p>
            <label className="search-bar" htmlFor="roadmap-search">
              <span aria-hidden="true">⌕</span>
              <input
                id="roadmap-search"
                type="search"
                placeholder="What do you want to learn today?"
              />
              <kbd>Ctrl K</kbd>
            </label>
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
            <Link className="featured-card" to="/roadmaps/learn-with-ai">
              ✣ &nbsp; Learn with AI
            </Link>
            <Link to="/roadmaps/frontend">
              Frontend <small>🔖</small>
            </Link>
            <Link to="/roadmaps/backend">
              Backend <small>🔖</small>
            </Link>
            <Link to="/roadmaps/full-stack">
              Full Stack <small>🔖</small>
            </Link>
            <Link to="/roadmaps/android">
              Android <small>🔖</small>
            </Link>
            <Link to="/roadmaps/devops">
              DevOps <small>🔖</small>
            </Link>
            <Link to="/roadmaps/devsecops">
              DevSecOps <small>🔖</small>
            </Link>
            <Link to="/roadmaps/data-analyst">
              Data Analyst <small>🔖</small>
            </Link>
            <Link to="/roadmaps/seo">
              SEO <small>🔖</small>
            </Link>
            <Link to="/roadmaps/ai-engineer">
              AI Engineer <small>🔖</small>
            </Link>
            <Link to="/roadmaps/ai-and-data-scientist">
              AI and Data Scientist <small>🔖</small>
            </Link>
            <Link to="/roadmaps/data-engineer">
              Data Engineer <small>🔖</small>
            </Link>
            <Link to="/roadmaps/machine-learning">
              Machine Learning <small>🔖</small>
            </Link>
            <Link to="/roadmaps/product-design">
              Product Design <small>🔖</small>
            </Link>
            <Link to="/roadmaps/postgresql">
              PostgreSQL <small>🔖</small>
            </Link>
            <Link to="/roadmaps/ios">
              iOS <small>🔖</small>
            </Link>
            <Link to="/roadmaps/blockchain">
              Blockchain <small>🔖</small>
            </Link>
            <Link to="/roadmaps/qa">
              QA <small>🔖</small>
            </Link>
            <Link to="/roadmaps/software-architect">
              Software Architect <small>🔖</small>
            </Link>
            <Link to="/roadmaps/cyber-security">
              Cyber Security <small>🔖</small>
            </Link>
            <Link to="/roadmaps/ux-design">
              UX Design <small>🔖</small>
            </Link>
            <Link to="/roadmaps/technical-writer">
              Technical Writer <small>🔖</small>
            </Link>
            <Link to="/roadmaps/game-developer">
              Game Developer <small>🔖</small>
            </Link>
            <Link to="/roadmaps/server-side-game-developer">
              Server Side Game Developer <small>🔖</small>
            </Link>
            <Link to="/roadmaps/mlops">
              MLOps <small>🔖</small>
            </Link>
            <Link to="/roadmaps/product-manager">
              Product Manager <small>🔖</small>
            </Link>
            <Link to="/roadmaps/engineering-manager">
              Engineering Manager <small>🔖</small>
            </Link>
            <Link to="/roadmaps/developer-relations">
              Developer Relations <small>🔖</small>
            </Link>
            <Link to="/roadmaps/bi-analyst">
              BI Analyst <small>🔖</small>
            </Link>
            <Link to="/roadmaps/network-engineer">
              Network Engineer <small>🔖</small>
            </Link>
            <Link to="/roadmaps/forward-deployed-engineer">
              Forward Deployed Engineer <small>🔖</small>
            </Link>
          </div>
          <div className="topic-heading second-heading">
            <h3>Skill-based</h3>
            <span>59 roadmaps</span>
          </div>
          <div className="topic-grid">
            <Link to="/roadmaps/claude-code">
              Claude Code <small>🔖</small>
            </Link>
            <Link to="/roadmaps/vibe-coding">
              Vibe Coding <small>🔖</small>
            </Link>
            <Link to="/roadmaps/python">
              Python <small>🔖</small>
            </Link>
            <Link to="/roadmaps/python-for-data-analysis">
              Python for Data Analysis <small>🔖</small>
            </Link>
            <Link to="/roadmaps/r-programming">
              R Programming <small>🔖</small>
            </Link>
            <Link to="/roadmaps/computer-science">
              Computer Science <small>🔖</small>
            </Link>
            <Link to="/roadmaps/sql">
              SQL <small>🔖</small>
            </Link>
            <Link to="/roadmaps/openclaw">
              OpenClaw <small>🔖</small>
            </Link>
            <Link to="/roadmaps/react">
              React <small>🔖</small>
            </Link>
            <Link to="/roadmaps/vue">
              Vue <small>🔖</small>
            </Link>
            <Link to="/roadmaps/angular">
              Angular <small>🔖</small>
            </Link>
            <Link to="/roadmaps/javascript">
              JavaScript <small>🔖</small>
            </Link>
            <Link to="/roadmaps/typescript">
              TypeScript <small>🔖</small>
            </Link>
            <Link to="/roadmaps/node-js">
              Node.js <small>🔖</small>
            </Link>
            <Link to="/roadmaps/system-design">
              System Design <small>🔖</small>
            </Link>
            <Link to="/roadmaps/leetcode">
              LeetCode <small>🔖</small>
            </Link>
            <Link to="/roadmaps/java">
              Java <small>🔖</small>
            </Link>
            <Link to="/roadmaps/asp-net-core">
              ASP.NET Core <small>🔖</small>
            </Link>
            <Link to="/roadmaps/api-design">
              API Design <small>🔖</small>
            </Link>
            <Link to="/roadmaps/power-bi">
              Power BI <small>🔖</small>
            </Link>
            <Link to="/roadmaps/spring-boot">
              Spring Boot <small>🔖</small>
            </Link>
            <Link to="/roadmaps/flutter">
              Flutter <small>🔖</small>
            </Link>
            <Link to="/roadmaps/c-programming">
              C Programming <small>🔖</small>
            </Link>
            <Link to="/roadmaps/c">
              C++ <small>🔖</small>
            </Link>
            <Link to="/roadmaps/rust">
              Rust <small>🔖</small>
            </Link>
            <Link to="/roadmaps/go-roadmap">
              Go Roadmap <small>🔖</small>
            </Link>
            <Link to="/roadmaps/ai-product-builders">
              AI Product Builders <small>🔖</small>
            </Link>
            <Link to="/roadmaps/design-and-architecture">
              Design and Architecture <small>🔖</small>
            </Link>
            <Link to="/roadmaps/graphql">
              GraphQL <small>🔖</small>
            </Link>
            <Link to="/roadmaps/react-native">
              React Native <small>🔖</small>
            </Link>
            <Link to="/roadmaps/design-system">
              Design System <small>🔖</small>
            </Link>
            <Link to="/roadmaps/prompt-engineering">
              Prompt Engineering <small>🔖</small>
            </Link>
            <Link to="/roadmaps/mongodb">
              MongoDB <small>🔖</small>
            </Link>
            <Link to="/roadmaps/linux">
              Linux <small>🔖</small>
            </Link>
            <Link to="/roadmaps/kubernetes">
              Kubernetes <small>🔖</small>
            </Link>
            <Link to="/roadmaps/docker">
              Docker <small>🔖</small>
            </Link>
            <Link to="/roadmaps/aws">
              AWS <small>🔖</small>
            </Link>
            <Link to="/roadmaps/terraform">
              Terraform <small>🔖</small>
            </Link>
            <Link to="/roadmaps/data-structures-algorithms">
              Data Structures &amp; Algorithms <small>🔖</small>
            </Link>
            <Link to="/roadmaps/redis">
              Redis <small>🔖</small>
            </Link>
            <Link to="/roadmaps/git-and-github">
              Git and GitHub <small>🔖</small>
            </Link>
            <Link to="/roadmaps/php">
              PHP <small>🔖</small>
            </Link>
            <Link to="/roadmaps/cloudflare">
              Cloudflare <small>🔖</small>
            </Link>
            <Link to="/roadmaps/ai-red-teaming">
              AI Red Teaming <small>🔖</small>
            </Link>
            <Link to="/roadmaps/ai-agents">
              AI Agents <small>🔖</small>
            </Link>
            <Link to="/roadmaps/next-js">
              Next.js <small>🔖</small>
            </Link>
            <Link to="/roadmaps/code-review">
              Code Review <small>🔖</small>
            </Link>
            <Link to="/roadmaps/kotlin">
              Kotlin <small>🔖</small>
            </Link>
            <Link to="/roadmaps/html">
              HTML <small>🔖</small>
            </Link>
            <Link to="/roadmaps/css">
              CSS <small>🔖</small>
            </Link>
            <Link to="/roadmaps/swift-swift-ui">
              Swift &amp; Swift UI <small>🔖</small>
            </Link>
            <Link to="/roadmaps/shell-bash">
              Shell / Bash <small>🔖</small>
            </Link>
            <Link to="/roadmaps/laravel">
              Laravel <small>🔖</small>
            </Link>
            <Link to="/roadmaps/elasticsearch">
              Elasticsearch <small>🔖</small>
            </Link>
            <Link to="/roadmaps/wordpress">
              WordPress <small>🔖</small>
            </Link>
            <Link to="/roadmaps/django">
              Django <small>🔖</small>
            </Link>
            <Link to="/roadmaps/ruby">
              Ruby <small>🔖</small>
            </Link>
            <Link to="/roadmaps/ruby-on-rails">
              Ruby on Rails <small>🔖</small>
            </Link>
            <Link to="/roadmaps/scala">
              Scala <small>🔖</small>
            </Link>
          </div>
          <div className="topic-heading second-heading">
            <h3>Best Practices</h3>
            <span>5 roadmaps</span>
          </div>
          <div className="topic-grid">
            <Link to="/roadmaps/aws">
              AWS <small>🔖</small>
            </Link>
            <Link to="/roadmaps/api-security">
              API Security <small>🔖</small>
            </Link>
            <Link to="/roadmaps/backend-performance">
              Backend Performance <small>🔖</small>
            </Link>
            <Link to="/roadmaps/frontend-performance">
              Frontend Performance <small>🔖</small>
            </Link>
            <Link to="/roadmaps/code-review">
              Code Review <small>🔖</small>
            </Link>
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
            <Link to="/roadmaps/guides">Guides</Link>
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
      
      <section className="stakeholder-forms" aria-label="Stakeholder forms">
      </section>
    </>
  );
}

export default App;
