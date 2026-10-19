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
import {
  AdminContentForm,
  AdminRoadmapForm,
  AdminUserForm,
  ForgotPasswordForm,
  MentorApplicationForm,
  OrganizationForm,
  ProfileForm,
  ResetPasswordForm,
} from "./components/AdditionalForms.jsx";
import LoginForm from "./components/LoginForm.jsx";
import SignupForm from "./components/SignupForm.jsx";
import AuthLayout from "./components/AuthLayout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />}>
        <Route index element={<AdminHome />} />
        <Route path="users" element={<AdminTablePage section="users" />} />
        <Route path="learners" element={<AdminTablePage section="learners" />} />
        <Route path="mentors" element={<AdminTablePage section="mentors" />} />
        <Route
          path="organizations"
          element={<AdminTablePage section="organizations" />}
        />
        <Route path="roadmaps" element={<AdminTablePage section="roadmaps" />} />
        <Route path="content" element={<AdminTablePage section="content" />} />
        <Route path="users/new" element={<AdminUserForm />} />
        <Route path="users/edit" element={<AdminUserForm mode="edit" />} />
        <Route path="learners/new" element={<AdminUserForm defaultRole="learner" entityLabel="learner" />} />
        <Route path="learners/edit" element={<AdminUserForm mode="edit" defaultRole="learner" entityLabel="learner" />} />
        <Route path="mentors/new" element={<AdminUserForm defaultRole="mentor" entityLabel="mentor" />} />
        <Route path="mentors/edit" element={<AdminUserForm mode="edit" defaultRole="mentor" entityLabel="mentor" />} />
        <Route path="organizations/new" element={<AdminUserForm defaultRole="organization" entityLabel="organization" />} />
        <Route path="organizations/edit" element={<AdminUserForm mode="edit" defaultRole="organization" entityLabel="organization" />} />
        <Route path="roadmaps/new" element={<AdminRoadmapForm />} />
        <Route path="roadmaps/edit" element={<AdminRoadmapForm mode="edit" />} />
        <Route path="content/new" element={<AdminContentForm />} />
        <Route path="content/edit" element={<AdminContentForm mode="edit" />} />
        <Route path="approvals" element={<AdminApprovals />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
      <Route
        path="/login"
        element={
          <AuthLayout pageLabel="Log in">
            <LoginForm />
          </AuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthLayout pageLabel="Sign up">
            <SignupForm />
          </AuthLayout>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <AuthLayout pageLabel="Reset password">
            <ForgotPasswordForm />
          </AuthLayout>
        }
      />
      <Route path="/reset-password" element={<AuthPage><ResetPasswordForm /></AuthPage>} />
      <Route
        path="/profile/setup"
        element={
          <AuthLayout pageLabel="Complete your profile">
            <ProfileForm mode="setup" />
          </AuthLayout>
        }
      />
      <Route
        path="/profile/edit"
        element={
          <AuthLayout pageLabel="Edit your profile">
            <ProfileForm mode="edit" />
          </AuthLayout>
        }
      />
      <Route
        path="/mentor/apply"
        element={
          <AuthLayout pageLabel="Mentor application">
            <MentorApplicationForm />
          </AuthLayout>
        }
      />
      <Route
        path="/organization/setup"
        element={
          <AuthLayout pageLabel="Organization setup">
            <OrganizationForm />
          </AuthLayout>
        }
      />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

function AuthPage({ children, className = "" }) {
  return <main className={`auth-page ${className}`.trim()}>{children}</main>;
}

function HomePage() {
  return (
    <>
      <main>
        <section className="hero-section">
          <nav className="site-nav" aria-label="Main navigation">
            <Link className="brand" to="#top" aria-label="DevPath home">
              <img className="brand-logo" src="/logo.png" alt="DevPath" />
            </Link>
            <div className="nav-links">
              <Link className="nav-link" to="#roadmaps">Roadmaps</Link>
              <Link className="nav-link" to="#guides">AI Tutor</Link>
              <Link className="nav-link" to="#community">Guides</Link>
              <Link className="nav-link" to="#about">Newsletters</Link>
            </div>
            <div className="nav-actions">
              <Link className="nav-search" to="#roadmaps">
                <span aria-hidden="true">⌕</span>
                <span className="nav-search-text">Search</span>
                <kbd className="nav-search-kbd">⌘ K</kbd>
              </Link>
              <span className="nav-divider" aria-hidden="true" />
              <Link className="login-link" to="/admin">
                Admin
              </Link>
              <Link className="upgrade-link" to="#community">
                <span className="upgrade-dot" aria-hidden="true" />
                Upgrade
              </Link>
              <Link className="login-link" to="/login">
                Log in
              </Link>
              <Link className="button button-small" to="/signup">
                Sign Up
              </Link>
            </div>
          </nav>
          <div className="hero-layout">
            <div className="hero-content" id="top">
              <span className="hero-badge">✦ New: AI-powered roadmaps</span>
              <h1>Developer <span className="hero-title-accent">Roadmaps</span></h1>
              <p className="hero-copy">
                Skill up with <span className="hero-accent">community</span> created roadmaps,{" "}
                <span className="hero-accent">guides</span>, and courses.
              </p>
              <div className="search-bar">
                <span aria-hidden="true">⌕</span>
                <input
                  id="roadmap-search"
                  type="search"
                  placeholder="What do you want to learn today?"
                  aria-label="Search roadmaps"
                />
                <kbd>Ctrl K</kbd>
                <button type="button">Search</button>
              </div>
              <p className="search-note">
                Search available roadmaps or learn anything with AI.
              </p>
            </div>
            <div className="hero-card-stack" aria-label="Featured roadmaps">
              <Link className="hero-roadmap-card hero-card-frontend" to="/roadmaps/frontend">
                <strong>Frontend</strong>
                <span>Build polished experiences for the web.</span>
              </Link>
              <Link className="hero-roadmap-card hero-card-ai" to="/roadmaps/learn-with-ai">
                <strong>Learn with AI</strong>
                <span>Your next step, guided by AI.</span>
              </Link>
              <Link className="hero-roadmap-card hero-card-python" to="/roadmaps/python">
                <strong>Python</strong>
                <span>Start building with a versatile language.</span>
              </Link>
              <Link className="hero-roadmap-card hero-card-devops" to="/roadmaps/devops">
                <strong>DevOps</strong>
                <span>Bring code from build to delivery.</span>
              </Link>
            </div>
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
              <Link
                className="active"
                to="#roadmaps"
                role="tab"
                aria-selected="true"
              >
                Roadmaps
              </Link>
              <Link to="#guides" role="tab">
                Lesson Packs <small>NEW</small>
              </Link>
              <Link to="#community" role="tab">
                Project Ideas
              </Link>
            </div>
            <Link className="text-link" to="#community">
              ✦ Go Pro
            </Link>
          </div>
          <div className="roadmap-content-grid">
          <div className="roadmap-group roadmap-group-role">
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
          </div>
          <div className="roadmap-group roadmap-group-skill">
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
          </div>
          <div className="roadmap-group roadmap-group-practices">
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
          </div>
          </div>
        </section>

        <section className="guides-section" id="guides">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">FIELD NOTES</p>
                <h2>Guides for the road ahead.</h2>
              </div>
              <Link className="text-link" to="#community">
                See all guides <span>↗</span>
              </Link>
            </div>
            <div className="guide-list">
              <Link to="#community">
                <span className="guide-number">01</span>
                <strong>How to set environment variables in Python</strong>
                <span className="guide-type">Tutorial · 8 min</span>
              </Link>
              <Link to="#community">
                <span className="guide-number">02</span>
                <strong>
                  From zero to your first open-source contribution
                </strong>
                <span className="guide-type">Guide · 12 min</span>
              </Link>
              <Link to="#community">
                <span className="guide-number">03</span>
                <strong>What actually happens when you visit a website?</strong>
                <span className="guide-type">Deep dive · 10 min</span>
              </Link>
              <Link to="#community">
                <span className="guide-number">04</span>
                <strong>Building a portfolio that gets you noticed</strong>
                <span className="guide-type">Career · 6 min</span>
              </Link>
            </div>
            <Link className="button dark-button" to="#community">
              Browse the library <span>→</span>
            </Link>
          </div>
        </section>
        <section className="community-section" id="community">
          <div className="page-width community-inner">
            <div className="community-copy">
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
            </div>
            <div className="community-aside">
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
              <Link className="button light-button" to="#about">
                Join the community <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer id="about">
        <div className="page-width footer-top">
          <Link className="brand" to="#top">
            <img className="brand-logo" src="/logo.png" alt="DevPath" />
          </Link>
          <div className="footer-links">
            <Link to="#roadmaps">Roadmaps</Link>
            <Link to="/roadmaps/guides">Guides</Link>
            <Link to="#community">Community</Link>
            <Link to="#about">About</Link>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <p>Learning in public, one useful step at a time.</p>
          <span>© 2026 DevPath Studio</span>
          <div>
            <Link to="#about">Privacy</Link>
            <Link to="#about">Terms</Link>
          </div>
        </div>
      </footer>

      <section
        className="stakeholder-forms"
        aria-label="Stakeholder forms"
      ></section>
    </>
  );
}

export default App;
