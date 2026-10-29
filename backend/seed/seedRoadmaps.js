import dns from "node:dns";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { fileURLToPath } from "node:url";
import Roadmap from "../models/Roadmap.js";

dotenv.config({ path: fileURLToPath(new URL("../.env", import.meta.url)) });
dns.setServers(["8.8.8.8"]);

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

const roadmaps = [
  ...roleRoadmaps.map(([title, slug]) => ({
    title,
    slug,
    category: "role",
    status: "published",
  })),
  ...skillRoadmaps.map(([title, slug]) => ({
    title,
    slug,
    category: "skill",
    status: "published",
  })),
  ...practiceRoadmaps.map(([title, slug]) => ({
    title,
    slug,
    category: "practice",
    status: "published",
  })),
];

await mongoose.connect(process.env.MONGO_URI.trim());

try {
  const result = await Roadmap.bulkWrite(
    roadmaps.map((roadmap) => ({
      updateOne: {
        filter: { slug: roadmap.slug },
        update: { $setOnInsert: roadmap },
        upsert: true,
      },
    }))
  );
  console.log(`Added ${result.upsertedCount} roadmaps`);
} finally {
  await mongoose.disconnect();
}
