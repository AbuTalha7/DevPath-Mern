const roleBased = ['Learn with AI', 'Frontend', 'Backend', 'Full Stack', 'Android', 'DevOps', 'DevSecOps', 'Data Analyst', 'SEO', 'AI Engineer', 'AI and Data Scientist', 'Data Engineer', 'Machine Learning', 'Product Design', 'PostgreSQL', 'iOS', 'Blockchain', 'QA', 'Software Architect', 'Cyber Security', 'UX Design', 'Technical Writer', 'Game Developer', 'Server Side Game Developer', 'MLOps', 'Product Manager', 'Engineering Manager', 'Developer Relations', 'BI Analyst', 'Network Engineer', 'Forward Deployed Engineer']
const skillBased = ['Claude Code', 'Vibe Coding', 'Python', 'Python for Data Analysis', 'R Programming', 'Computer Science', 'SQL', 'OpenClaw', 'React', 'Vue', 'Angular', 'JavaScript', 'TypeScript', 'Node.js', 'System Design', 'LeetCode', 'Java', 'ASP.NET Core', 'API Design', 'Power BI', 'Spring Boot', 'Flutter', 'C Programming', 'C++', 'Rust', 'Go Roadmap', 'AI Product Builders', 'Design and Architecture', 'GraphQL', 'React Native', 'Design System', 'Prompt Engineering', 'MongoDB', 'Linux', 'Kubernetes', 'Docker', 'AWS', 'Terraform', 'Data Structures & Algorithms', 'Redis', 'Git and GitHub', 'PHP', 'Cloudflare', 'AI Red Teaming', 'AI Agents', 'Next.js', 'Code Review', 'Kotlin', 'HTML', 'CSS', 'Swift & Swift UI', 'Shell / Bash', 'Laravel', 'Elasticsearch', 'WordPress', 'Django', 'Ruby', 'Ruby on Rails', 'Scala']
const bestPractices = ['AWS', 'API Security', 'Backend Performance', 'Frontend Performance', 'Code Review']

const cardGrid = (items, featured = false) => items.map((item, index) => {
  const isFeatured = featured && index === 0
  return `<a ${isFeatured ? 'class="featured-card"' : ''} href="#guides">${isFeatured ? '✣ &nbsp; Learn with AI' : `${item} <small>♧</small>`}</a>`
}).join('')

document.querySelector('#app').innerHTML = `
  <main>
    <section class="hero-section">
      <nav class="site-nav page-width" aria-label="Main navigation">
        <a class="brand" href="#top" aria-label="DevPath home"><img class="brand-logo" src="/logo.png" alt="DevPath" /></a>
        <div class="nav-links"><a href="#roadmaps">Roadmaps</a><a href="#guides">AI Tutor</a><a href="#community">Guides</a><a href="#about">Newsletters</a></div>
        <div class="nav-actions"><a class="nav-search" href="#roadmaps">⌕ <span>Search</span></a><a class="upgrade-link" href="#community">✦ Upgrade</a><a class="login-link" href="#community">Log in</a><a class="button button-small" href="#community">Sign Up</a></div>
      </nav>
      <div class="hero-content page-width" id="top"><h1>Developer Roadmaps</h1><p class="hero-copy">Skill up with community created roadmaps, guides, and courses.</p><a class="search-bar" href="#roadmaps"><span>⌕</span> What do you want to learn today? <kbd>Ctrl K</kbd></a><p class="search-note">Search available roadmaps or learn anything with AI.</p></div>
      <div class="hero-grid" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
    </section>
    <section class="roadmap-section page-width" id="roadmaps">
      <div class="browse-bar"><div class="browse-tabs" role="tablist" aria-label="Browse content"><a class="active" href="#roadmaps" role="tab" aria-selected="true">Roadmaps</a><a href="#guides" role="tab">Lesson Packs <small>NEW</small></a><a href="#community" role="tab">Project Ideas</a></div><a class="text-link" href="#community">✦ Go Pro</a></div>
      <div class="topic-heading"><h3>Role-based</h3><span>30 roadmaps</span></div><div class="topic-grid">${cardGrid(roleBased, true)}</div>
      <div class="topic-heading second-heading"><h3>Skill-based</h3><span>59 roadmaps</span></div><div class="topic-grid">${cardGrid(skillBased)}</div>
      <div class="topic-heading second-heading"><h3>Best Practices</h3><span>5 roadmaps</span></div><div class="topic-grid">${cardGrid(bestPractices)}</div>
    </section>
    <section class="guides-section" id="guides"><div class="page-width"><div class="section-heading"><div><p class="eyebrow">FIELD NOTES</p><h2>Guides for the road ahead.</h2></div><a class="text-link" href="#community">See all guides <span>↗</span></a></div><div class="guide-list"><a href="#community"><span class="guide-number">01</span><strong>How to set environment variables in Python</strong><span class="guide-type">Tutorial · 8 min</span></a><a href="#community"><span class="guide-number">02</span><strong>From zero to your first open-source contribution</strong><span class="guide-type">Guide · 12 min</span></a><a href="#community"><span class="guide-number">03</span><strong>What actually happens when you visit a website?</strong><span class="guide-type">Deep dive · 10 min</span></a><a href="#community"><span class="guide-number">04</span><strong>Building a portfolio that gets you noticed</strong><span class="guide-type">Career · 6 min</span></a></div><a class="button dark-button" href="#community">Browse the library <span>→</span></a></div></section>
    <section class="community-section" id="community"><div class="page-width community-inner"><p class="eyebrow">A BETTER WAY TO LEARN</p><h2>Keep moving,<br /><em>together.</em></h2><p>Join thousands of builders sharing notes, asking better questions, and making the next step feel a little less lonely.</p><div class="stats"><div><strong>369K</strong><span>learners exploring</span></div><div><strong>3.2M</strong><span>lessons completed</span></div><div><strong>52K</strong><span>members connected</span></div></div><a class="button light-button" href="#about">Join the community <span>→</span></a></div></section>
  </main>
  <footer id="about"><div class="page-width footer-top"><a class="brand" href="#top"><img class="brand-logo" src="/logo.png" alt="DevPath" /></a><div class="footer-links"><a href="#roadmaps">Roadmaps</a><a href="#guides">Guides</a><a href="#community">Community</a><a href="#about">About</a></div></div><div class="page-width footer-bottom"><p>Learning in public, one useful step at a time.</p><span>© 2026 DevPath Studio</span><div><a href="#about">Privacy</a><a href="#about">Terms</a></div></div></footer>
`
