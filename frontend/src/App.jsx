import "../styles.css";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ExploreMenu from "./components/ExploreMenu.jsx";
import AccountMenu from "./components/AccountMenu.jsx";
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
import AuthLayout from "./components/AuthLayout.jsx";
import AccountDashboard from "./components/AccountDashboard.jsx";
import RoadmapPage from "./components/RoadmapPage.jsx";
import { roadmapsApi } from "./services/api.js";

const roleRoadmaps = [
  ["Frontend", "frontend"],
  ["Backend", "backend"],
  ["Full Stack", "full-stack"],
  ["Android", "android"],
  ["DevOps", "devops"],
  ["DevSecOps", "devsecops"],
  ["Data Analyst", "data-analyst"],
  ["SEO", "seo"],
  ["AI Engineer", "ai-engineer"],
  ["AI and Data Scientist", "ai-and-data-scientist"],
  ["Data Engineer", "data-engineer"],
  ["Machine Learning", "machine-learning"],
  ["Product Design", "product-design"],
  ["PostgreSQL", "postgresql"],
  ["iOS", "ios"],
  ["Blockchain", "blockchain"],
  ["QA", "qa"],
  ["Software Architect", "software-architect"],
  ["Cyber Security", "cyber-security"],
  ["UX Design", "ux-design"],
  ["Technical Writer", "technical-writer"],
  ["Game Developer", "game-developer"],
  ["Server Side Game Developer", "server-side-game-developer"],
  ["MLOps", "mlops"],
  ["Product Manager", "product-manager"],
  ["Engineering Manager", "engineering-manager"],
  ["Developer Relations", "developer-relations"],
  ["BI Analyst", "bi-analyst"],
  ["Network Engineer", "network-engineer"],
  ["Forward Deployed Engineer", "forward-deployed-engineer"],
];

const skillRoadmaps = [
  ["Claude Code", "claude-code"],
  ["Vibe Coding", "vibe-coding"],
  ["Python", "python"],
  ["Python for Data Analysis", "python-for-data-analysis"],
  ["R Programming", "r-programming"],
  ["Computer Science", "computer-science"],
  ["SQL", "sql"],
  ["OpenClaw", "openclaw"],
  ["React", "react"],
  ["Vue", "vue"],
  ["Angular", "angular"],
  ["JavaScript", "javascript"],
  ["TypeScript", "typescript"],
  ["Node.js", "node-js"],
  ["System Design", "system-design"],
  ["LeetCode", "leetcode"],
  ["Java", "java"],
  ["ASP.NET Core", "asp-net-core"],
  ["API Design", "api-design"],
  ["Power BI", "power-bi"],
  ["Spring Boot", "spring-boot"],
  ["Flutter", "flutter"],
  ["C Programming", "c-programming"],
  ["C++", "c"],
  ["Rust", "rust"],
  ["Go Roadmap", "go-roadmap"],
  ["AI Product Builders", "ai-product-builders"],
  ["Design and Architecture", "design-and-architecture"],
  ["GraphQL", "graphql"],
  ["React Native", "react-native"],
  ["Design System", "design-system"],
  ["Prompt Engineering", "prompt-engineering"],
  ["MongoDB", "mongodb"],
  ["Linux", "linux"],
  ["Kubernetes", "kubernetes"],
  ["Docker", "docker"],
  ["AWS", "aws"],
  ["Terraform", "terraform"],
  ["Data Structures & Algorithms", "data-structures-algorithms"],
  ["Redis", "redis"],
  ["Git and GitHub", "git-and-github"],
  ["PHP", "php"],
  ["Cloudflare", "cloudflare"],
  ["AI Red Teaming", "ai-red-teaming"],
  ["AI Agents", "ai-agents"],
  ["Next.js", "next-js"],
  ["Code Review", "code-review"],
  ["Kotlin", "kotlin"],
  ["HTML", "html"],
  ["CSS", "css"],
  ["Swift & Swift UI", "swift-swift-ui"],
  ["Shell / Bash", "shell-bash"],
  ["Laravel", "laravel"],
  ["Elasticsearch", "elasticsearch"],
  ["WordPress", "wordpress"],
  ["Django", "django"],
  ["Ruby", "ruby"],
  ["Ruby on Rails", "ruby-on-rails"],
  ["Scala", "scala"],
];

const practiceRoadmaps = [
  ["AWS", "aws"],
  ["API Security", "api-security"],
  ["Backend Performance", "backend-performance"],
  ["Frontend Performance", "frontend-performance"],
  ["Code Review", "code-review"],
];

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
      <Route path="/dashboard" element={<HomePage isAuthenticatedHome />} />
      <Route path="/roadmaps/:slug" element={<RoadmapPage />} />
      <Route path="/account" element={<AccountDashboard />} />
      <Route path="/profile" element={<AccountDashboard />} />
      <Route path="/friends" element={<AccountDashboard />} />
      <Route
        path="/signup"
        element={
          <AuthLayout pageLabel="Sign up">
            <SignupForm />
          </AuthLayout>
        }
      />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

function RoadmapCards({ roadmaps }) {
  return roadmaps.map(([title, slug]) => (
    <RoadmapCard key={`${title}-${slug}`} title={title} slug={slug} />
  ));
}

function RoadmapCard({ title, slug }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="topic-card">
      <Link className="topic-card-link" to={`/roadmaps/${slug}`}>
        {title}
      </Link>
      <button
        className="topic-card-save"
        type="button"
        aria-label={isSaved ? `Remove ${title} from saved items` : `Save ${title}`}
        aria-pressed={isSaved}
        title={isSaved ? `Remove ${title} from saved items` : `Save ${title}`}
        onClick={() => setIsSaved((saved) => !saved)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
        </svg>
      </button>
    </div>
  );
}

function HomePage({ isAuthenticatedHome = false }) {
  const [roadmapGroups, setRoadmapGroups] = useState(null);

  useEffect(() => {
    roadmapsApi
      .getAll({ status: "published" })
      .then((roadmaps) => {
        if (!roadmaps.length) return;
        setRoadmapGroups({
          role: roadmaps
            .filter((roadmap) => roadmap.category === "role")
            .map(({ title, slug }) => [title, slug]),
          skill: roadmaps
            .filter((roadmap) => roadmap.category === "skill")
            .map(({ title, slug }) => [title, slug]),
          practice: roadmaps
            .filter((roadmap) => roadmap.category === "practice")
            .map(({ title, slug }) => [title, slug]),
        });
      })
      .catch(() => setRoadmapGroups(null));
  }, []);

  const roleCards = roadmapGroups?.role ?? roleRoadmaps;
  const skillCards = roadmapGroups?.skill ?? skillRoadmaps;
  const practiceCards = roadmapGroups?.practice ?? practiceRoadmaps;

  return (
    <>
      <main className={isAuthenticatedHome ? "authenticated-home" : undefined}>
        <section className="hero-section">
          <nav className="site-nav" aria-label="Main navigation">
            <Link className="brand" to="#top" aria-label="DevPath home">
              <img className="brand-logo" src="/logo.png" alt="DevPath" />
            </Link>
            <ExploreMenu />
            <div className="nav-links">
              <Link
                className="nav-link"
                to="#roadmaps"
              >
                Roadmaps
              </Link>
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
              {isAuthenticatedHome ? (
                <AccountMenu />
              ) : (
                <>
                  <Link className="login-link" to="/login">
                    Log in
                  </Link>
                  <Link className="button button-small" to="/signup">
                    Sign Up
                  </Link>
                </>
              )}
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
                <span>{roleCards.length} roadmaps</span>
              </div>
              <div className="topic-grid">
                <Link className="featured-card" to="/roadmaps/learn-with-ai">
                  ✣ &nbsp; Learn with AI
                </Link>
                <RoadmapCards roadmaps={roleCards} />
              </div>
            </div>
            <div className="roadmap-group roadmap-group-skill">
              <div className="topic-heading second-heading">
                <h3>Skill-based</h3>
                <span>{skillCards.length} roadmaps</span>
              </div>
              <div className="topic-grid">
                <RoadmapCards roadmaps={skillCards} />
              </div>
            </div>
            <div className="roadmap-group roadmap-group-practices">
              <div className="topic-heading second-heading">
                <h3>Best Practices</h3>
                <span>{practiceCards.length} roadmaps</span>
              </div>
              <div className="topic-grid">
                <RoadmapCards roadmaps={practiceCards} />
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
