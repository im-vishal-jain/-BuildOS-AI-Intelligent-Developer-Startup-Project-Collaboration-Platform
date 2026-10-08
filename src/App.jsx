import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Search, Bell, Settings, ChevronDown, ArrowRight, Bot, Code2, LayoutDashboard, Users, Rocket,
  Sparkles, FileText, ShieldCheck, Calendar, Network, Target, BarChart3, Activity, CheckCircle2,
  Zap, Plus, LayoutGrid, List, MoreHorizontal, Clock, MessageSquare, Lightbulb, TrendingUp,
  UserPlus, Mail, Award, Briefcase, Play, Send, ChevronRight, Folder, FolderOpen,
  Globe, Heart, ArrowUp, ArrowLeft, Tag, Flag, Home, BookOpen, Sun, Moon, Save,
  Package, Smartphone, ShoppingCart, Building2, Layers3, Database, Wind, Code, User, Users2,
  CheckCircle, Info, Sparkle, X
} from "lucide-react";

/* =========================================================
   CUSTOM SOCIAL ICONS
========================================================= */
function TwitterIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* =========================================================
   DATA
========================================================= */
const navLinks = [
  { name: "Workspace", path: "/", icon: LayoutDashboard },
  { name: "Projects", path: "/projects", icon: Folder },
  { name: "AI Hub", path: "/ai-hub", icon: Bot },
  { name: "Team", path: "/team", icon: Users },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Startup Hub", path: "/startup-hub", icon: Rocket },
];

const heroStats = [
  { value: "6", label: "Active Projects", icon: Folder, color: "#3b82f6", bg: "#eff6ff", path: "/projects" },
  { value: "24", label: "Pending Tasks", icon: CheckCircle2, color: "#10b981", bg: "#ecfdf5", path: "/projects" },
  { value: "87%", label: "Sprint Health", icon: Zap, color: "#8b5cf6", bg: "#f5f3ff", path: "/analytics" },
  { value: "12", label: "Team Members", icon: Users, color: "#f59e0b", bg: "#fffbeb", path: "/team" },
];

const modulesData = [
  { id: "ai", title: "AI Intelligence", badge: "8 Tools", desc: "Supercharge your productivity with AI-powered tools and intelligent automation.", theme: "purple", icon: Bot, items: ["AI Copilot", "Task Intelligence", "Sprint Planner", "Issue Intelligence", "Code Review", "Meeting Summarizer", "Risk Prediction", "More Tools..."], link: "Explore AI Hub", path: "/ai-hub" },
  { id: "dev", title: "Developer Intelligence", badge: "9 Tools", desc: "Build better with integrated development and code management tools.", theme: "blue", icon: Code2, items: ["GitHub Integration", "Code Review", "PR Management", "Documentation", "System Design", "Technical Debt", "Dependency Check", "More Tools..."], link: "Explore Developer Hub", path: "/projects" },
  { id: "project", title: "Project Command Center", badge: "9 Tools", desc: "Plan, track and deliver projects with powerful project management tools.", theme: "green", icon: LayoutDashboard, items: ["Kanban Board", "Milestones", "Timeline", "Risk Prediction", "Dependencies", "Burndown Chart", "Activity", "More Tools..."], link: "Explore Projects", path: "/projects" },
  { id: "team", title: "Team Intelligence", badge: "10 Tools", desc: "Build high-performing teams with smart collaboration and analytics.", theme: "indigo", icon: Users, items: ["Workload", "Skill Matrix", "Performance", "Capacity", "Onboarding", "Knowledge Map", "Collaboration", "More Tools..."], link: "Explore Team Hub", path: "/team" },
  { id: "startup", title: "Startup Intelligence Hub", badge: "5 Tools", desc: "Turn your ideas into successful products with AI-driven startup tools.", theme: "orange", icon: Rocket, items: ["Idea Analyzer", "MVP Builder", "Roadmap", "Feature Matrix", "Competitors", "PRD Generator", "Feedback", "More Tools..."], link: "Explore Startup Hub", path: "/startup-hub" }
];

const allProjectsData = [
  { id: 1, name: "BuildOS AI Platform", category: "SaaS Platform", status: "Active", desc: "AI-powered collaboration platform for developers and founders.", members: ["RS", "PS", "AV"], memberCount: 12, tasks: 24, repos: 5, progress: 87, color: "#8b5cf6", updated: "2h ago" },
  { id: 2, name: "CampusX", category: "EdTech", status: "Active", desc: "Student community platform with placement resources and mentorship.", members: ["NG", "KM", "RS"], memberCount: 8, tasks: 18, repos: 3, progress: 64, color: "#10b981", updated: "5h ago" },
  { id: 3, name: "SkillSync", category: "Learning Platform", status: "Planning", desc: "Skill development and learning platform with personalized recommendations.", members: ["PS", "AV"], memberCount: 6, tasks: 12, repos: 2, progress: 32, color: "#ec4899", updated: "1d ago" },
  { id: 4, name: "ProblemHub", category: "Community", status: "Completed", desc: "Community platform for solving real-world problems and challenges.", members: ["KM", "NG"], memberCount: 5, tasks: 10, repos: 2, progress: 100, color: "#f59e0b", updated: "3d ago" },
  { id: 5, name: "DevBridge", category: "Developer Tools", status: "Active", desc: "Connect developers, mentors and internships with AI matching.", members: ["RS", "PS", "KM"], memberCount: 7, tasks: 16, repos: 4, progress: 72, color: "#3b82f6", updated: "4h ago" },
  { id: 6, name: "FounderMatch", category: "Startup", status: "Planning", desc: "Helps founders find co-founders and build startup together.", members: ["AV", "NG"], memberCount: 4, tasks: 8, repos: 2, progress: 45, color: "#6366f1", updated: "1d ago" },
];

const aiTools = [
  { name: "AI Copilot", desc: "Your personal AI assistant for coding and planning.", icon: Bot, color: "#8b5cf6", bg: "#f5f3ff" },
  { name: "Code Review", desc: "Automated AI code reviews for pull requests.", icon: Code2, color: "#3b82f6", bg: "#eff6ff" },
  { name: "Sprint Planner", desc: "Generate optimal sprint plans based on velocity.", icon: Target, color: "#10b981", bg: "#ecfdf5" },
  { name: "Meeting Summarizer", desc: "Convert meeting transcripts into action items.", icon: MessageSquare, color: "#f59e0b", bg: "#fffbeb" },
  { name: "SRS Document", desc: "Generate Software Requirement Specifications.", icon: FileText, color: "#ef4444", bg: "#fef2f2" },
  { name: "Risk Prediction", desc: "Predict project risks before they happen.", icon: ShieldCheck, color: "#6366f1", bg: "#eef2ff" },
];

const teamMembers = [
  { name: "Rahul Sharma", role: "Frontend Developer", email: "rahul@buildos.ai", avatar: "RS", color: "#3b82f6", workload: 85, skills: ["React", "TypeScript", "UI/UX"] },
  { name: "Priya Singh", role: "Backend Developer", email: "priya@buildos.ai", avatar: "PS", color: "#8b5cf6", workload: 70, skills: ["Node.js", "Python", "AWS"] },
  { name: "Amit Verma", role: "Full Stack Developer", email: "amit@buildos.ai", avatar: "AV", color: "#10b981", workload: 95, skills: ["React", "Go", "Docker"] },
  { name: "Neha Gupta", role: "UI/UX Designer", email: "neha@buildos.ai", avatar: "NG", color: "#f59e0b", workload: 60, skills: ["Figma", "Prototyping", "CSS"] },
  { name: "Karan Malhotra", role: "DevOps Engineer", email: "karan@buildos.ai", avatar: "KM", color: "#ec4899", workload: 80, skills: ["Kubernetes", "CI/CD", "Terraform"] },
  { name: "Sneha Patel", role: "Product Manager", email: "sneha@buildos.ai", avatar: "SP", color: "#6366f1", workload: 75, skills: ["Agile", "Analytics", "Roadmapping"] },
];

const teamRosterStorageKey = "buildos-team-roster";
const teamDraftStorageKey = "buildos-project-team-draft";

function readStoredArray(key, fallback) {
  try {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return fallback;

    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? parsedValue : fallback;
  } catch (error) {
    console.error(`Unable to load saved data for "${key}".`, error);
    return fallback;
  }
}

const analyticsKPIs = [
  { label: "Sprint Velocity", value: "42", unit: "pts", change: "+12%", trend: "up", icon: TrendingUp, color: "#10b981" },
  { label: "Avg. Completion", value: "87", unit: "%", change: "+5%", trend: "up", icon: CheckCircle2, color: "#3b82f6" },
  { label: "Bug Rate", value: "2.4", unit: "/sprint", change: "-18%", trend: "down", icon: ShieldCheck, color: "#ef4444" },
  { label: "Active Tasks", value: "24", unit: "", change: "+4", trend: "up", icon: Activity, color: "#8b5cf6" },
];

const startupTools = [
  { name: "Idea Analyzer", desc: "Validate your startup idea with AI market analysis.", icon: Lightbulb, color: "#f59e0b", bg: "#fffbeb" },
  { name: "MVP Builder", desc: "Generate a technical roadmap for your MVP.", icon: Rocket, color: "#8b5cf6", bg: "#f5f3ff" },
  { name: "Competitor Analysis", desc: "Analyze your competitors and market positioning.", icon: Target, color: "#3b82f6", bg: "#eff6ff" },
  { name: "PRD Generator", desc: "Create detailed Product Requirement Documents.", icon: FileText, color: "#10b981", bg: "#ecfdf5" },
  { name: "Feature Matrix", desc: "Prioritize features using AI-driven scoring.", icon: LayoutGrid, color: "#ec4899", bg: "#fdf2f8" },
  { name: "User Feedback", desc: "Analyze user feedback and extract insights.", icon: MessageSquare, color: "#6366f1", bg: "#eef2ff" },
];

const projectTemplates = [
  { id: "saas", name: "SaaS", desc: "Full-stack web application", icon: Package, popular: true },
  { id: "ai", name: "AI Startup", desc: "AI/ML powered product", icon: Sparkles },
  { id: "mobile", name: "Mobile App", desc: "iOS & Android", icon: Smartphone },
  { id: "ecommerce", name: "E-Commerce", desc: "Online store platform", icon: ShoppingCart },
  { id: "enterprise", name: "Enterprise", desc: "Scalable business solution", icon: Building2 },
];

const recommendedStack = [
  { name: "React", category: "Frontend", icon: Code, color: "#61dafb" },
  { name: "Node.js", category: "Backend", icon: Package, color: "#68a063" },
  { name: "PostgreSQL", category: "Database", icon: Database, color: "#336791" },
  { name: "Tailwind CSS", category: "Styling", icon: Wind, color: "#38bdf8" },
];

const suggestedTeam = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Project Manager",
];

const getInitials = (name = "") => {
  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase())
    .join("");

  return initials || "NA";
};

const nextSteps = [
  "Create GitHub repository",
  "Setup CI/CD pipeline",
  "Add documentation folder",
  "Configure environment variables",
];

const toSlug = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

/* =========================================================
   MAIN APP
========================================================= */
export default function App() {
  const [projects, setProjects] = useState(allProjectsData);
  const [teamRoster, setTeamRoster] = useState(() => readStoredArray(teamRosterStorageKey, teamMembers));
  const [teamStorageError, setTeamStorageError] = useState("");

  React.useEffect(() => {
    try {
      localStorage.setItem(teamRosterStorageKey, JSON.stringify(teamRoster));
    } catch (error) {
      console.error("Unable to save the team directory.", error);
      setTeamStorageError("Team changes could not be saved in this browser.");
    }
  }, [teamRoster]);

  const addProject = (newProject) => {
    setProjects(prev => [newProject, ...prev]);
  };

  const addTeamMembers = (members) => {
    setTeamRoster(prev => {
      const knownEmails = new Set(prev.map(member => member.email?.trim().toLowerCase()).filter(Boolean));
      const additions = [];
      members.forEach(member => {
        const email = member.email?.trim().toLowerCase();
        if (!email || knownEmails.has(email)) return;

        knownEmails.add(email);
        additions.push({
          name: member.name || member.email.split("@")[0],
          role: member.role,
          email: member.email,
          avatar: getInitials(member.name || member.email.split("@")[0]),
          color: "#6366f1",
          workload: 0,
          skills: [],
        });
      });

      return [...prev, ...additions];
    });
  };

  return (
    <BrowserRouter>
      <div className="buildos-app">
        <GlobalStyles />
        <TopNav />
        <div className="main-content-wrapper">
          <Routes>
            <Route path="/" element={<WorkspaceDashboard />} />
            <Route path="/projects" element={<ProjectsPage projects={projects} />} />
            <Route path="/new-project" element={<NewProjectPage addProject={addProject} addTeamMembers={addTeamMembers} teamStorageError={teamStorageError} setTeamStorageError={setTeamStorageError} />} />
            <Route path="/ai-hub" element={<AIHubPage />} />
            <Route path="/team" element={<TeamPage members={teamRoster} storageError={teamStorageError} />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/startup-hub" element={<StartupHubPage />} />
            <Route path="/feature/:featureName" element={<FeaturePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

/* =========================================================
   TOP NAV
========================================================= */
function TopNav() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <header className="top-nav">
      <div className="nav-left">
        <Link to="/" className="brand"><div className="brand-logo">B</div>BuildOS AI</Link>
        <nav className="nav-links">
          {navLinks.map((link, i) => {
            const IconComponent = link.icon;
            return (
              <Link to={link.path} key={i} className={location.pathname === link.path ? "active" : ""}>
                {IconComponent && <IconComponent size={18} />}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="nav-right">
        <div className="search-bar">
          <Search size={16} color="#94a3b8" />
          <input placeholder="Search anything... (⌘K)" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <button className="icon-btn"><Bell size={18} /><span className="notification-dot"></span></button>
        <button className="icon-btn"><Settings size={18} /></button>
        <div className="user-profile">
          <div className="user-avatar">VK</div>
          <div className="user-info"><strong>Vishal Kumar</strong><span>Developer</span></div>
          <ChevronDown size={14} color="#94a3b8" />
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   WORKSPACE DASHBOARD
========================================================= */
function WorkspaceDashboard() {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <div className="hero-badge"><Sparkles size={14} /> Build Your Next Big Thing</div>
          <h1>Good Afternoon, Vishal 👋</h1>
          <p>Your AI-Powered Workspace for Developers, Founders & Teams.</p>
          <div className="hero-tags"><span>Plan</span><span>Build</span><span>Collaborate</span><span>Grow</span></div>
        </div>
        <div className="hero-stats-card">
          <div className="stats-header"><BarChart3 size={16} color="#4f46e5" /> Workspace Overview</div>
          <div className="stats-grid">
            {heroStats.map((stat, i) => (
              <div className="stat-item" key={i} onClick={() => navigate(stat.path)}>
                <div className="stat-icon-wrapper" style={{ background: stat.bg, color: stat.color }}><stat.icon size={16} /></div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="ai-promo-card">
          <div>
            <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#e0e7ff", color: "#4f46e5", display: "grid", placeItems: "center", marginBottom: "16px" }}><Bot size={20} /></div>
            <p className="ai-promo-text">Let AI handle the routine, so you can focus on what matters.</p>
          </div>
          <button className="ai-promo-btn" onClick={() => navigate("/ai-hub")}>Open AI Copilot <ArrowRight size={16} /></button>
        </div>
      </section>

      <section className="modules-section">
        <div className="modules-header">
          <div><h2>Explore BuildOS Modules</h2><p>Everything you need to build, manage and scale your ideas — in one place.</p></div>
          <div className="modules-actions">
            <span className="quick-access" onClick={() => navigate("/ai-hub")}><Zap size={14} /> Quick Access</span>
            <button className="view-all-btn" onClick={() => navigate("/projects")}>View All Features <ArrowRight size={14} /></button>
          </div>
        </div>
        <div className="modules-grid">
          {modulesData.map((module) => (
            <div className={`module-card theme-${module.theme}`} key={module.id}>
              <div className="module-header" onClick={() => navigate(module.path)} style={{ cursor: 'pointer' }}>
                <div className="module-icon"><module.icon size={20} /></div>
                <div className="module-badge">{module.badge}</div>
              </div>
              <h3 className="module-title" onClick={() => navigate(module.path)} style={{ cursor: 'pointer' }}>{module.title}</h3>
              <p className="module-desc">{module.desc}</p>
              <div className="module-list">
                {module.items.map((item, i) => (
                  <div className="module-list-item" key={i} onClick={(e) => { e.stopPropagation(); if (item === "More Tools...") navigate(module.path); else navigate(`/feature/${toSlug(item)}`); }}>
                    <CheckCircle2 size={14} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="module-link" onClick={() => navigate(module.path)} style={{ cursor: 'pointer' }}>
                {module.link} <ArrowRight size={14} />
              </div>
              <module.icon className="module-bg-icon" />
            </div>
          ))}
          <div className="copilot-dark-card">
            <div className="copilot-dark-header">
              <div className="copilot-dark-icon"><Bot size={20} /></div>
              <div><h3>BuildOS AI Copilot</h3><span>Beta</span></div>
            </div>
            <p className="copilot-dark-desc">Ask, plan, generate, analyze — all in one place.</p>
            <div className="copilot-actions-grid">
              <button className="copilot-action-btn"><FileText size={14} /> Generate SRS Document</button>
              <button className="copilot-action-btn"><Network size={14} /> Design System Architecture</button>
              <button className="copilot-action-btn"><Users size={14} /> Create User Stories</button>
              <button className="copilot-action-btn"><Calendar size={14} /> Plan Sprint & Tasks</button>
              <button className="copilot-action-btn"><LayoutDashboard size={14} /> Design System Architecture</button>
              <button className="copilot-action-btn"><ShieldCheck size={14} /> Analyze Project Risks</button>
            </div>
            <div className="copilot-input-wrapper">
              <input placeholder="Ask BuildOS AI anything..." />
              <button className="copilot-send-btn"><ArrowRight size={16} /></button>
            </div>
            <div className="copilot-footer"><span>Code</span><span>Plan</span><span>Analyze</span><span>Build</span></div>
          </div>
        </div>
      </section>

      <section className="bottom-banner">
        <div className="banner-left">
          <div className="banner-icon"><Rocket size={24} /></div>
          <div className="banner-text">
            <h3>Build Smarter. Faster. Together.</h3>
            <p>Join thousands of developers and teams building the future with BuildOS AI.</p>
          </div>
        </div>
        <button className="banner-btn" onClick={() => navigate("/projects")}>Get Started <ArrowRight size={16} /></button>
      </section>
    </>
  );
}

/* =========================================================
   FEATURE PAGE
========================================================= */
function FeaturePage() {
  const { featureName } = useParams();
  const navigate = useNavigate();
  const formattedName = featureName.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const getFeatureDetails = () => {
    if (featureName.includes("ai") || featureName.includes("copilot") || featureName.includes("intelligence")) return { icon: Bot, color: "#8b5cf6", bg: "#f5f3ff", category: "AI Intelligence" };
    if (featureName.includes("code") || featureName.includes("github") || featureName.includes("pr")) return { icon: Code2, color: "#3b82f6", bg: "#eff6ff", category: "Developer Intelligence" };
    if (featureName.includes("kanban") || featureName.includes("milestone") || featureName.includes("sprint")) return { icon: LayoutDashboard, color: "#10b981", bg: "#ecfdf5", category: "Project Command Center" };
    if (featureName.includes("team") || featureName.includes("workload") || featureName.includes("skill")) return { icon: Users, color: "#f59e0b", bg: "#fffbeb", category: "Team Intelligence" };
    if (featureName.includes("idea") || featureName.includes("mvp") || featureName.includes("roadmap")) return { icon: Rocket, color: "#ef4444", bg: "#fef2f2", category: "Startup Hub" };
    return { icon: Sparkles, color: "#6366f1", bg: "#eef2ff", category: "BuildOS AI" };
  };
  const details = getFeatureDetails();
  return (
    <div className="feature-page-container">
      <button className="back-btn" onClick={() => navigate("/")}><ArrowLeft size={18} /> Back to Workspace</button>
      <div className="feature-hero-card">
        <div className="feature-breadcrumb"><span>{details.category}</span><ChevronRight size={14} /><strong>{formattedName}</strong></div>
        <div className="feature-hero-icon" style={{ background: details.bg, color: details.color }}><details.icon size={40} /></div>
        <h1>{formattedName}</h1>
        <p>This is the dedicated page for the <strong>{formattedName}</strong> feature.</p>
        <div className="feature-info-grid">
          <div className="feature-info-item"><CheckCircle2 size={20} color="#10b981" /><div><strong>Status</strong><span>Active & Ready</span></div></div>
          <div className="feature-info-item"><Zap size={20} color="#f59e0b" /><div><strong>Powered By</strong><span>BuildOS AI Engine</span></div></div>
        </div>
        <div className="feature-actions">
          <button className="btn-primary"><Play size={18} /> Launch {formattedName}</button>
          <button className="btn-secondary" onClick={() => navigate("/")}><ArrowLeft size={18} /> Go Back</button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECTS PAGE — UPDATED (receives `projects` from state)
========================================================= */
function ProjectsPage({ projects }) {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === "All" || project.status === activeFilter;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || project.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-left">
          <div className="page-header-icon" style={{ background: "#eff6ff", color: "#3b82f6" }}><Folder size={24} /></div>
          <div><h1>My Projects</h1><p>Manage all your active and archived projects here.</p></div>
        </div>
        <button className="btn-primary" onClick={() => navigate("/new-project")}><Plus size={18} /> New Project</button>
      </div>
      <div className="toolbar">
        <div className="filter-tabs">
          {["All", "Active", "Planning", "Completed"].map(filter => (
            <button key={filter} className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)}>{filter}</button>
          ))}
        </div>
        <div className="toolbar-right">
          <div className="search-bar projects-search">
            <Search size={16} color="#94a3b8" />
            <input placeholder="Search projects..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
          <div className="view-toggle">
            <button className={viewMode === "grid" ? "active" : ""} onClick={() => setViewMode("grid")}><LayoutGrid size={18} /></button>
            <button className={viewMode === "list" ? "active" : ""} onClick={() => setViewMode("list")}><List size={18} /></button>
          </div>
        </div>
      </div>
      <div className="projects-grid-full">
        {filteredProjects.map((project) => (
          <div className="project-card-full" key={project.id}>
            <div className="project-card-header">
              <div className="project-icon" style={{ background: project.color }}><FolderOpen size={20} /></div>
              <div className="project-header-actions">
                <span className={`project-status ${project.status}`}>{project.status}</span>
                <button className="more-btn"><MoreHorizontal size={18} /></button>
              </div>
            </div>
            <h3>{project.name}</h3>
            <div className="project-category">{project.category}</div>
            <p className="project-desc">{project.desc}</p>
            <div className="project-progress-section">
              <div className="progress-info"><span>Progress</span><strong>{project.progress}%</strong></div>
              <div className="project-progress"><div style={{ width: `${project.progress}%`, background: project.color }}></div></div>
            </div>
            <div className="project-card-footer">
              <div className="footer-members">
                <div className="avatar-stack">{project.members.map((m, i) => <div key={i} className="mini-avatar">{m}</div>)}</div>
                <span>+{Math.max(0, project.memberCount - project.members.length)}</span>
              </div>
              <div className="footer-stats">
                <span><CheckCircle2 size={14} /> {project.tasks}</span>
                <span><Clock size={14} /> {project.updated}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <div className="empty-state" style={{ textAlign: "center", padding: "60px 20px", color: "#64748b" }}>
          <Folder size={48} color="#cbd5e1" />
          <h3 style={{ marginTop: "16px", fontSize: "18px", color: "#0f172a" }}>No projects found</h3>
          <p style={{ marginTop: "8px" }}>Try adjusting your search or filter, or create a new project.</p>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   NEW PROJECT PAGE — UPDATED (receives `addProject` from parent)
========================================================= */
function NewProjectPage({ addProject, addTeamMembers, teamStorageError, setTeamStorageError }) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState("saas");
  const [formData, setFormData] = useState({
    name: "BuildOS AI",
    description: "An intelligent developer and startup collaboration platform to manage projects, team, tasks and AI-powered development tools in one place.",
    projectType: "SaaS",
    timeline: "3 Months",
    visibility: "Private",
  });
  const [teamMembers, setTeamMembers] = useState(() => readStoredArray(teamDraftStorageKey, [
    { id: 1, name: "Vishal Kumar", role: "Product Lead", email: "vishal@buildos.ai" },
  ]));
  const [inviteError, setInviteError] = useState("");
  const [completedNextSteps, setCompletedNextSteps] = useState([]);

  React.useEffect(() => {
    try {
      localStorage.setItem(teamDraftStorageKey, JSON.stringify(teamMembers));
      setTeamStorageError("");
    } catch (error) {
      console.error("Unable to save the project team draft.", error);
      setTeamStorageError("Team changes could not be saved in this browser.");
    }
  }, [teamMembers, setTeamStorageError]);

  const steps = [
    { num: 1, label: "Basic Info", desc: "Project details & template" },
    { num: 2, label: "Team Setup", desc: "Invite members & roles" },
    { num: 3, label: "Workspace Config", desc: "Settings & integrations" },
    { num: 4, label: "Review & Launch", desc: "Confirm & create" },
  ];

  const handleChange = (field, value) => setFormData({ ...formData, [field]: value });

  const addTeamMember = () => {
    setTeamMembers(prev => [...prev, { id: Date.now() + Math.random(), name: "", role: "Developer", email: "" }]);
  };

  const addSuggestedRole = (role) => {
    if (teamMembers.some(member => member.role === role)) return;
    setTeamMembers(prev => [...prev, { id: Date.now() + Math.random(), name: "", role, email: "" }]);
  };

  const toggleNextStep = (step) => {
    setCompletedNextSteps(prev => prev.includes(step)
      ? prev.filter(completedStep => completedStep !== step)
      : [...prev, step]);
  };

  const updateTeamMember = (id, field, value) => {
    setTeamMembers(prev => prev.map(member => member.id === id ? { ...member, [field]: value } : member));
  };

  const removeTeamMember = (id) => {
    setTeamMembers(prev => prev.length > 1 ? prev.filter(member => member.id !== id) : prev);
  };

  const sendInvite = (member) => {
    const email = member.email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setInviteError("Enter a valid email address before sending an invite.");
      return;
    }

    setInviteError("");
    const subject = encodeURIComponent(`Invitation to join ${formData.name || "our project"}`);
    const body = encodeURIComponent(`Hi${member.name.trim() ? ` ${member.name.trim()}` : ""},\n\nYou are invited to join the ${formData.name || "project"} team as ${member.role}.\n`);
    window.location.href = `mailto:${encodeURIComponent(email)}?subject=${subject}&body=${body}`;
  };

  const validTeamMembers = teamMembers.filter(member => member.name.trim() || member.email.trim());
  const teamInitials = validTeamMembers.length
    ? validTeamMembers.map(member => getInitials(member.name || member.email.split("@")[0]))
    : ["VK"];

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!formData.name.trim()) {
      alert("Please enter a project name");
      return;
    }

    const colors = ["#8b5cf6", "#10b981", "#ec4899", "#f59e0b", "#3b82f6", "#6366f1", "#ef4444", "#14b8a6"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newProject = {
      id: Date.now(),
      name: formData.name,
      category: formData.projectType,
      status: "Planning",
      desc: formData.description,
      members: teamInitials,
      memberCount: teamInitials.length,
      tasks: 0,
      repos: 0,
      progress: 0,
      color: randomColor,
      updated: "just now"
    };

    addTeamMembers(validTeamMembers);
    addProject(newProject);
    try {
      localStorage.removeItem(teamDraftStorageKey);
      setTeamStorageError("");
    } catch (error) {
      console.error("Unable to clear the saved project team draft.", error);
      setTeamStorageError("Project created, but the saved team draft could not be cleared.");
    }

    alert(`✅ Project "${formData.name}" created successfully!`);
    navigate("/projects");
  };

  return (
    <div className="new-project-layout">
      {/* MAIN CONTENT */}
      <div className="new-project-main">
        {/* HERO CARD */}
        <div className="np-hero">
          <div className="np-hero-left">
            <div className="np-hero-icon">
              <Package size={28} />
            </div>
            <div>
              <h1>Create New Project</h1>
              <p>Turn your ideas into real products with AI-powered development workspace.</p>
              <div className="np-hero-meta">
                <span><Clock size={14} /> Estimated setup time: 2 min</span>
                <span className="np-hero-divider"></span>
                <span><Calendar size={14} /> Last updated: Just now</span>
              </div>
            </div>
          </div>
          <div className="np-hero-quote">
            <p>"Great products aren't built in isolation,<br />they're built with the right tools."</p>
            <span>— BuildOS AI</span>
          </div>
        </div>

        {/* PROGRESS STEPS */}
        <div className="np-steps">
          {steps.map((step, i) => (
            <React.Fragment key={step.num}>
              <div className={`np-step ${currentStep === step.num ? "active" : ""} ${currentStep > step.num ? "completed" : ""}`}>
                <div className="np-step-circle">
                  {currentStep > step.num ? <CheckCircle2 size={16} /> : step.num}
                </div>
                <div className="np-step-info">
                  <strong>{step.label}</strong>
                  <span>{step.desc}</span>
                </div>
              </div>
              {i < steps.length - 1 && <div className={`np-step-line ${currentStep > step.num ? "active" : ""}`}></div>}
            </React.Fragment>
          ))}
        </div>

        {/* FORM TWO-COLUMN GRID */}
        <form onSubmit={handleSubmit} className="np-grid">
          {/* LEFT COLUMN */}
          <div className="np-left">
            {/* Template Selection */}
            <div className="np-card">
              <div className="np-card-head">
                <FileText size={18} color="#4f46e5" />
                <div>
                  <h3>Choose a Template</h3>
                  <p>Start with a template or create from scratch</p>
                </div>
              </div>
              <div className="np-templates">
                {projectTemplates.map(t => (
                  <button
                    type="button"
                    key={t.id}
                    className={`np-template ${selectedTemplate === t.id ? "selected" : ""}`}
                    onClick={() => setSelectedTemplate(t.id)}
                  >
                    {t.popular && <span className="np-popular">Popular</span>}
                    <div className="np-template-icon"><t.icon size={22} /></div>
                    <strong>{t.name}</strong>
                    <span>{t.desc}</span>
                  </button>
                ))}
                <button type="button" className="np-template np-custom">
                  <Plus size={18} />
                  <strong>Create Custom</strong>
                </button>
              </div>
            </div>

            {/* Project Details */}
            <div className="np-card">
              <div className="np-card-head">
                <FileText size={18} color="#4f46e5" />
                <div>
                  <h3>Project Details</h3>
                  <p>Tell us about your project</p>
                </div>
              </div>

              <div className="np-form-group">
                <label>Project Name <span className="req">*</span></label>
                <div className="np-input-wrap">
                  <Package size={16} />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    maxLength={100}
                    placeholder="Enter project name"
                  />
                  <span className="np-char">{formData.name.length}/100</span>
                </div>
              </div>

              <div className="np-form-group">
                <label>Description <span className="req">*</span></label>
                <div className="np-textarea-wrap">
                  <textarea
                    rows="5"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    maxLength={500}
                    placeholder="Describe your project..."
                  />
                  <span className="np-char">{formData.description.length}/500</span>
                </div>
              </div>

              <div className="np-form-row">
                <div className="np-form-group">
                  <label>Project Type</label>
                  <div className="np-select-wrap">
                    <Briefcase size={16} />
                    <select value={formData.projectType} onChange={(e) => handleChange("projectType", e.target.value)}>
                      <option value="SaaS">SaaS</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="AI Startup">AI Startup</option>
                    </select>
                  </div>
                </div>
                <div className="np-form-group">
                  <label>Estimated Timeline</label>
                  <div className="np-select-wrap">
                    <Calendar size={16} />
                    <select value={formData.timeline} onChange={(e) => handleChange("timeline", e.target.value)}>
                      <option value="1 Month">1 Month</option>
                      <option value="3 Months">3 Months</option>
                      <option value="6 Months">6 Months</option>
                      <option value="1 Year">1 Year</option>
                    </select>
                  </div>
                </div>
                <div className="np-form-group">
                  <label>Visibility</label>
                  <div className="np-select-wrap">
                    <Globe size={16} />
                    <select value={formData.visibility} onChange={(e) => handleChange("visibility", e.target.value)}>
                      <option value="Private">Private</option>
                      <option value="Team">Team</option>
                      <option value="Public">Public</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="np-card">
              <div className="np-card-head">
                <Users size={18} color="#4f46e5" />
                <div style={{ flex: 1 }}>
                  <h3>Team Setup</h3>
                  <p>Invite members and assign roles</p>
                </div>
                <button type="button" className="np-add-member-btn" onClick={addTeamMember}><Plus size={14} /> Add Member</button>
              </div>
              <p className="np-invite-note">Invites open your email app with a ready-to-send message.</p>
              {inviteError && <div className="np-team-error" role="alert">{inviteError}</div>}
              {teamStorageError && <div className="np-team-error" role="alert">{teamStorageError}</div>}

              <div className="np-team-list">
                {teamMembers.map((member, index) => (
                  <div className="np-member-row" key={member.id}>
                    <div className="np-member-avatar">{member.name.trim() ? getInitials(member.name) : `M${index + 1}`}</div>
                    <div className="np-member-field">
                      <label>Name</label>
                      <input
                        type="text"
                        value={member.name}
                        placeholder="Full name"
                        onChange={(e) => updateTeamMember(member.id, "name", e.target.value)}
                      />
                    </div>
                    <div className="np-member-field">
                      <label>Role</label>
                      <select
                        value={member.role}
                        onChange={(e) => updateTeamMember(member.id, "role", e.target.value)}
                      >
                        {["Product Lead", "Project Manager", "Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer", "DevOps Engineer", "QA Engineer", "Developer"].map(role => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>
                    <div className="np-member-field np-member-email">
                      <label>Email</label>
                      <input
                        type="email"
                        value={member.email}
                        placeholder="Email"
                        onChange={(e) => updateTeamMember(member.id, "email", e.target.value)}
                      />
                    </div>
                    <button type="button" className="np-invite-member-btn" onClick={() => sendInvite(member)}><Mail size={13} /> Invite</button>
                    <button type="button" className="np-remove-member" onClick={() => removeTeamMember(member.id)} aria-label="Remove member"><X size={14} /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="np-right">
            {/* AI Project Assistant */}
            <div className="np-card">
              <div className="np-card-head">
                <div className="np-ai-icon"><Sparkles size={16} /></div>
                <div>
                  <h3>AI Project Assistant</h3>
                  <p>Get smart suggestions for your project</p>
                </div>
              </div>

              <div className="np-section-label">
                <Sparkles size={13} /> Recommended Stack ✨
              </div>
              <div className="np-stack-grid">
                {recommendedStack.map((s, i) => (
                  <div className="np-stack-item" key={i}>
                    <div className="np-stack-icon" style={{ background: `${s.color}20`, color: s.color }}>
                      <s.icon size={18} />
                    </div>
                    <strong>{s.name}</strong>
                    <span>{s.category}</span>
                  </div>
                ))}
              </div>

              <div className="np-section-label" style={{ marginTop: "20px" }}>
                <Users size={13} /> Team Members
              </div>
              <div className="np-suggested-team">
                <div className="np-team-count">{validTeamMembers.length} added {validTeamMembers.length === 1 ? "member" : "members"}</div>
                {validTeamMembers.length > 0 ? (
                  <div className="np-added-team-list">
                    {validTeamMembers.map(member => (
                      <div className="np-added-team-member" key={member.id}>
                        <span className="np-added-team-avatar">{getInitials(member.name || member.email.split("@")[0])}</span>
                        <span className="np-added-team-details">
                          <strong>{member.name || member.email}</strong>
                          <small>{member.role}{member.name && member.email ? ` · ${member.email}` : ""}</small>
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="np-empty-team">No members added yet. Choose a suggested role below or add a member in Team Setup.</p>
                )}
              </div>

              <div className="np-section-label" style={{ marginTop: "18px" }}>
                <Sparkles size={13} /> Suggested Roles <span className="np-suggested-badge">Optional</span>
              </div>
              <p className="np-role-help">Suggestions only—not team members until you add someone.</p>
              <div className="np-role-suggestions">
                {suggestedTeam.map(role => {
                  const isAdded = teamMembers.some(member => member.role === role);
                  return (
                    <button
                      type="button"
                      className={`np-role-suggestion ${isAdded ? "added" : ""}`}
                      key={role}
                      onClick={() => addSuggestedRole(role)}
                      disabled={isAdded}
                    >
                      <span>{role}</span>
                      <strong>{isAdded ? <><CheckCircle2 size={13} /> Added</> : <><Plus size={13} /> Add</>}</strong>
                    </button>
                  );
                })}
              </div>

              <div className="np-section-label" style={{ marginTop: "20px" }}>
                ⚡ Next Steps
              </div>
              <p className="np-role-help">Tick each item when you complete it.</p>
              <div className="np-next-steps">
                {nextSteps.map(s => (
                  <label className={`np-next-step ${completedNextSteps.includes(s) ? "completed" : ""}`} key={s}>
                    <input
                      type="checkbox"
                      checked={completedNextSteps.includes(s)}
                      onChange={() => toggleNextStep(s)}
                    />
                    <span>{s}</span>
                  </label>
                ))}
              </div>

              <div className="np-ai-hint">
                <Sparkles size={14} />
                <span>This setup is optimized for scalability and modern development practices.</span>
              </div>
            </div>

            {/* Project Preview */}
            <div className="np-card">
              <div className="np-card-head">
                <div className="np-preview-icon"><Rocket size={16} /></div>
                <div style={{ flex: 1 }}>
                  <h3>Project Preview</h3>
                </div>
                <span className="np-live-badge">● Live Update</span>
              </div>

              <div className="np-preview-banner">
                <div className="np-preview-logo">
                  <Package size={26} />
                </div>
                <h4>{formData.name || "BuildOS AI"}</h4>
                <p>Collaborate · Build · Grow</p>
              </div>

              <div className="np-ready">
                <div className="np-ready-dot"></div>
                <div>
                  <strong>Ready to Create</strong>
                  <span>Your project is all set. Complete the form to continue.</span>
                </div>
              </div>

              <div className="np-summary-title">Project Summary</div>
              <div className="np-summary">
                <div className="np-summary-row">
                  <span><FileText size={13} /> Name</span>
                  <strong>{formData.name || "BuildOS AI"}</strong>
                </div>
                <div className="np-summary-row">
                  <span><Package size={13} /> Type</span>
                  <strong>SaaS</strong>
                </div>
                <div className="np-summary-row">
                  <span><Calendar size={13} /> Timeline</span>
                  <strong>{formData.timeline}</strong>
                </div>
                <div className="np-summary-row">
                  <span><Users size={13} /> Team Size</span>
                  <strong>{validTeamMembers.length} {validTeamMembers.length === 1 ? "Member" : "Members"}</strong>
                </div>
                <div className="np-summary-row">
                  <span><Globe size={13} /> Visibility</span>
                  <strong>{formData.visibility}</strong>
                </div>
              </div>

              <div className="np-health-title">Project Health</div>
              <div className="np-health">
                <div className="np-health-circle">
                  <div className="np-health-inner">
                    <strong>92%</strong>
                  </div>
                </div>
                <div className="np-health-list">
                  <div><CheckCircle2 size={12} color="#10b981" /> Structure Ready</div>
                  <div><CheckCircle2 size={12} color="#10b981" /> Templates Applied</div>
                  <div><CheckCircle2 size={12} color="#10b981" /> Best Practices</div>
                  <div><CheckCircle2 size={12} color="#10b981" /> AI Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* BOTTOM ACTION BAR */}
        <div className="np-bottom-bar">
          <button className="np-btn-ghost" onClick={() => navigate("/projects")}>Cancel</button>
          <div className="np-bottom-right">
            <button className="np-btn-secondary" type="button" onClick={handleSubmit}>
              <Save size={15} /> Save Draft
            </button>
            <button className="np-btn-primary" type="button" onClick={handleSubmit}>
              Create Project <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR (inside new project page) */}
      <aside className="np-sidebar">
        <div className="np-sidebar-logo">
          <div className="np-sidebar-logo-icon">B</div>
          <span>BuildOS AI</span>
        </div>

        <nav className="np-sidebar-nav">
          {[
            { name: "Home", icon: Home, path: "/" },
            { name: "Projects", icon: Folder, path: "/projects", active: true },
            { name: "AI Hub", icon: Sparkles, path: "/ai-hub" },
            { name: "Team", icon: Users, path: "/team" },
            { name: "Analytics", icon: BarChart3, path: "/analytics" },
            { name: "GitHub", icon: GithubIcon, path: "#" },
            { name: "Documentation", icon: BookOpen, path: "#" },
            { name: "Settings", icon: Settings, path: "#" },
          ].map((item, i) => (
            <Link key={i} to={item.path} className={`np-nav-item ${item.active ? "active" : ""}`}>
              <item.icon size={18} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="np-pro-card">
          <div className="np-pro-icon"><Sparkles size={20} /></div>
          <strong>BuildOS Pro</strong>
          <p>Unlock advanced AI features, analytics & more.</p>
          <button>Upgrade Now <ArrowRight size={14} /></button>
        </div>

        <div className="np-workspace">
          <small>Current Workspace</small>
          <div className="np-workspace-item">
            <div className="np-ws-icon">👤</div>
            <span>Personal</span>
            <ChevronDown size={14} />
          </div>
          <div className="np-ws-progress">
            <span>3/10 Projects</span>
            <div className="np-ws-bar"><div style={{ width: "30%" }}></div></div>
          </div>
        </div>
      </aside>
    </div>
  );
}

/* =========================================================
   AI HUB PAGE
========================================================= */
function AIHubPage() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([{ role: "ai", text: "Hello Vishal! I'm your BuildOS AI Copilot. How can I help you today?" }]);
  const handleSend = () => { if (!prompt.trim()) return; setMessages([...messages, { role: "user", text: prompt }]); setPrompt(""); setTimeout(() => setMessages(prev => [...prev, { role: "ai", text: "I'm analyzing your request. This is a demo response." }]), 1000); };
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-left"><div className="page-header-icon" style={{ background: "#f5f3ff", color: "#8b5cf6" }}><Bot size={24} /></div><div><h1>AI Hub</h1><p>Your central hub for AI-powered tools.</p></div></div>
        <button className="btn-primary"><Sparkles size={18} /> New AI Session</button>
      </div>
      <div className="ai-hub-layout">
        <div className="ai-chat-card">
          <div className="ai-chat-header"><div className="copilot-dark-icon"><Bot size={20} /></div><div><h3>BuildOS AI Copilot</h3><span style={{ color: "#10b981", fontSize: "11px", fontWeight: "600" }}>● Online</span></div></div>
          <div className="ai-chat-messages">{messages.map((msg, i) => (<div key={i} className={`chat-message ${msg.role}`}>{msg.role === "ai" && <div className="chat-avatar"><Bot size={16} /></div>}<div className="chat-bubble">{msg.text}</div></div>))}</div>
          <div className="ai-chat-input"><input placeholder="Ask BuildOS AI anything..." value={prompt} onChange={(e) => setPrompt(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()} /><button onClick={handleSend}><Send size={18} /></button></div>
        </div>
        <div className="ai-tools-section">
          <h3>AI Tools</h3>
          <div className="ai-tools-grid">{aiTools.map((tool, i) => (<div className="ai-tool-card" key={i}><div className="ai-tool-icon" style={{ background: tool.bg, color: tool.color }}><tool.icon size={20} /></div><div><h4>{tool.name}</h4><p>{tool.desc}</p></div><ChevronRight size={16} color="#94a3b8" /></div>))}</div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   TEAM PAGE
========================================================= */
function TeamPage({ members, storageError }) {
  return (
    <div className="page-container">
      <div className="page-header"><div className="page-header-left"><div className="page-header-icon" style={{ background: "#ecfdf5", color: "#10b981" }}><Users size={24} /></div><div><h1>Team Directory</h1><p>Manage your team members and workload.</p></div></div><button className="btn-primary"><UserPlus size={18} /> Invite Member</button></div>
      <div className="team-stats-grid">
        <div className="team-stat-card"><Users size={20} color="#4f46e5" /><div><strong>{members.length}</strong><span>Total Members</span></div></div>
        <div className="team-stat-card"><Activity size={20} color="#10b981" /><div><strong>8</strong><span>Active Today</span></div></div>
        <div className="team-stat-card"><Award size={20} color="#f59e0b" /><div><strong>4</strong><span>Top Performers</span></div></div>
        <div className="team-stat-card"><Briefcase size={20} color="#8b5cf6" /><div><strong>6</strong><span>Departments</span></div></div>
      </div>
      {storageError && <div className="np-team-error" role="alert">{storageError}</div>}
      <div className="team-grid">
        {members.map((member, i) => (
          <div className="member-card" key={i}>
            <div className="member-header"><div className="member-avatar" style={{ background: member.color }}>{member.avatar}</div><div className="member-info"><h4>{member.name}</h4><span>{member.role}</span></div><button className="more-btn"><MoreHorizontal size={18} /></button></div>
            <div className="member-email"><Mail size={14} /> {member.email || "No email provided"}</div>
            <div className="member-workload"><div className="workload-header"><span>Workload</span><strong>{member.workload}%</strong></div><div className="workload-bar"><div style={{ width: `${member.workload}%`, background: member.workload > 80 ? "#ef4444" : "#10b981" }}></div></div></div>
            <div className="member-skills">{member.skills.map((skill, j) => <span key={j} className="skill-tag">{skill}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   ANALYTICS PAGE
========================================================= */
function AnalyticsPage() {
  return (
    <div className="page-container">
      <div className="page-header"><div className="page-header-left"><div className="page-header-icon" style={{ background: "#fffbeb", color: "#f59e0b" }}><BarChart3 size={24} /></div><div><h1>Analytics & Insights</h1><p>Deep dive into your workspace metrics.</p></div></div><button className="btn-secondary"><FileText size={18} /> Export Report</button></div>
      <div className="analytics-kpi-grid">
        {analyticsKPIs.map((kpi, i) => (
          <div className="kpi-card" key={i}><div className="kpi-header"><div className="kpi-icon" style={{ background: `${kpi.color}15`, color: kpi.color }}><kpi.icon size={20} /></div><span className={`kpi-change ${kpi.trend}`}>{kpi.change}</span></div><div className="kpi-value">{kpi.value}<span>{kpi.unit}</span></div><div className="kpi-label">{kpi.label}</div></div>
        ))}
      </div>
      <div className="charts-grid">
        <div className="chart-card"><div className="chart-header"><h3>Sprint Velocity</h3><span>Last 6 Sprints</span></div><div className="chart-bars">{[45, 52, 48, 60, 55, 42].map((val, i) => (<div className="bar-wrapper" key={i}><div className="bar" style={{ height: `${(val / 60) * 100}%`, background: i === 5 ? "#4f46e5" : "#c7d2fe" }}></div><span>S{i + 1}</span></div>))}</div></div>
        <div className="chart-card"><div className="chart-header"><h3>Task Distribution</h3><span>By Status</span></div><div className="donut-container"><div className="donut-chart"></div><div className="donut-legend"><div><span className="dot" style={{ background: "#10b981" }}></span> Completed (45)</div><div><span className="dot" style={{ background: "#f59e0b" }}></span> In Progress (30)</div><div><span className="dot" style={{ background: "#ef4444" }}></span> Blocked (10)</div><div><span className="dot" style={{ background: "#cbd5e1" }}></span> Backlog (15)</div></div></div></div>
      </div>
    </div>
  );
}

/* =========================================================
   STARTUP HUB PAGE
========================================================= */
function StartupHubPage() {
  const [idea, setIdea] = useState("");
  return (
    <div className="page-container">
      <div className="page-header"><div className="page-header-left"><div className="page-header-icon" style={{ background: "#fef2f2", color: "#ef4444" }}><Rocket size={24} /></div><div><h1>Startup Hub</h1><p>Tools and insights for founders.</p></div></div><button className="btn-primary"><Play size={18} /> Launch Startup</button></div>
      <div className="startup-hero"><div className="startup-hero-content"><div className="hero-badge"><Lightbulb size={14} /> Validate Your Idea</div><h2>Turn your idea into a successful product.</h2><p>Describe your startup idea and let AI analyze the market.</p><div className="idea-input-wrapper"><input placeholder="e.g. An AI-powered platform..." value={idea} onChange={(e) => setIdea(e.target.value)} /><button><Sparkles size={16} /> Analyze Idea</button></div></div></div>
      <h3 className="section-title">Startup Tools</h3>
      <div className="startup-tools-grid">
        {startupTools.map((tool, i) => (
          <div className="startup-tool-card" key={i}><div className="startup-tool-icon" style={{ background: tool.bg, color: tool.color }}><tool.icon size={22} /></div><h4>{tool.name}</h4><p>{tool.desc}</p><div className="tool-link">Open Tool <ArrowRight size={14} /></div></div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */
function Footer() {
  const [email, setEmail] = useState("");
  const handleSubscribe = (e) => { e.preventDefault(); alert(`Subscribed with: ${email}`); setEmail(""); };
  const footerLinks = [
    { title: "Product", links: [{ name: "Projects", path: "/projects" }, { name: "AI Hub", path: "/ai-hub" }, { name: "Analytics", path: "/analytics" }, { name: "Team", path: "/team" }, { name: "Startup Hub", path: "/startup-hub" }] },
    { title: "Resources", links: [{ name: "Documentation", path: "#" }, { name: "API Reference", path: "#" }, { name: "Community", path: "#" }, { name: "Help Center", path: "#" }, { name: "Changelog", path: "#" }] },
    { title: "Company", links: [{ name: "About Us", path: "#" }, { name: "Careers", path: "#" }, { name: "Blog", path: "#" }, { name: "Press Kit", path: "#" }, { name: "Contact", path: "#" }] },
    { title: "Legal", links: [{ name: "Privacy Policy", path: "#" }, { name: "Terms of Service", path: "#" }, { name: "Security", path: "#" }, { name: "Cookie Settings", path: "#" }] }
  ];
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-column">
            <Link to="/" className="footer-logo"><div className="brand-logo">B</div>BuildOS AI</Link>
            <p className="footer-desc">The intelligent workspace for developers, founders, and modern teams.</p>
            <div className="newsletter-box">
              <h4>Subscribe to our newsletter</h4>
              <p>Get the latest updates.</p>
              <form onSubmit={handleSubscribe} className="newsletter-form"><input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required /><button type="submit"><Send size={16} /></button></form>
            </div>
            <div className="social-links">
              <a href="#"><TwitterIcon size={18} /></a>
              <a href="#"><GithubIcon size={18} /></a>
              <a href="#"><LinkedinIcon size={18} /></a>
              <a href="#"><Globe size={18} /></a>
            </div>
          </div>
          <div className="footer-links-columns">
            {footerLinks.map((column, i) => (
              <div className="link-group" key={i}><h4>{column.title}</h4>{column.links.map((link, j) => (<Link to={link.path} key={j}>{link.name}</Link>))}</div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left"><p>© {new Date().getFullYear()} BuildOS AI. All rights reserved.</p><p className="made-with">Made with <Heart size={14} color="#ef4444" fill="#ef4444" /> for developers</p></div>
          <div className="footer-bottom-center"><div className="system-status"><span className="status-dot"></span>All systems operational</div></div>
          <div className="footer-bottom-right"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a><button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={16} /></button></div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   GLOBAL STYLES
========================================================= */
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

      :root { --bg-body: #f8fafc; --text-main: #0f172a; --text-muted: #64748b; --border-color: #e2e8f0; --primary: #4f46e5; --primary-hover: #4338ca; }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: 'Inter', sans-serif; background: var(--bg-body); color: var(--text-main); font-size: 14px; line-height: 1.5; }
      button { cursor: pointer; border: none; background: none; font: inherit; }
      a { text-decoration: none; color: inherit; }
      .buildos-app { max-width: 1440px; margin: 0 auto; min-height: 100vh; display: flex; flex-direction: column; }
      .main-content-wrapper { flex: 1; }

      /* TOP NAV */
      .top-nav { display: flex; justify-content: space-between; align-items: center; height: 72px; padding: 0 32px; background: #ffffff; border-bottom: 1px solid var(--border-color); position: sticky; top: 0; z-index: 100; }
      .nav-left { display: flex; align-items: center; gap: 40px; }
      .brand { display: flex; align-items: center; gap: 10px; font-size: 20px; font-weight: 800; color: var(--text-main); white-space: nowrap; letter-spacing: -0.5px; }
      .brand-logo { width: 32px; height: 32px; background: #4f46e5; border-radius: 8px; display: grid; place-items: center; color: white; font-size: 16px; }
      .nav-links { display: flex; align-items: center; gap: 4px; }
      .nav-links a { display: flex; align-items: center; gap: 8px; padding: 8px 16px; border-radius: 8px; font-size: 14px; font-weight: 500; color: #475569; transition: all 0.2s; white-space: nowrap; }
      .nav-links a svg { width: 18px; height: 18px; }
      .nav-links a:hover { background: #f1f5f9; color: #0f172a; }
      .nav-links a.active { background: #eef2ff; color: #4f46e5; font-weight: 600; }
      .nav-right { display: flex; align-items: center; gap: 20px; }
      .search-bar { display: flex; align-items: center; gap: 8px; background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 8px 16px; width: 280px; }
      .search-bar:focus-within { border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
      .search-bar input { border: none; background: transparent; outline: none; width: 100%; font-size: 13px; }
      .icon-btn { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; color: var(--text-muted); position: relative; }
      .icon-btn:hover { background: #f1f5f9; color: var(--text-main); }
      .notification-dot { position: absolute; top: 8px; right: 8px; width: 8px; height: 8px; background: #ef4444; border-radius: 50%; border: 2px solid #ffffff; }
      .user-profile { display: flex; align-items: center; gap: 12px; cursor: pointer; padding-left: 20px; border-left: 1px solid var(--border-color); }
      .user-avatar { width: 36px; height: 36px; border-radius: 50%; background: #4f46e5; color: white; display: grid; place-items: center; font-size: 13px; font-weight: 700; }
      .user-info { display: flex; flex-direction: column; line-height: 1.2; }
      .user-info strong { font-size: 13px; font-weight: 600; }
      .user-info span { font-size: 11px; color: var(--text-muted); }

      /* COMMON */
      .page-container { padding: 32px; }
      .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
      .page-header-left { display: flex; align-items: center; gap: 16px; }
      .page-header-icon { width: 52px; height: 52px; border-radius: 14px; display: grid; place-items: center; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
      .page-header h1 { font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
      .page-header p { font-size: 14px; color: var(--text-muted); margin-top: 2px; }
      .btn-primary { background: #4f46e5; color: white; padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; display: flex; align-items: center; gap: 8px; }
      .btn-primary:hover { background: #4338ca; }
      .btn-secondary { background: white; color: var(--text-main); border: 1px solid var(--border-color); padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; display: flex; align-items: center; gap: 8px; }
      .btn-secondary:hover { background: #f8fafc; }
      .section-title { font-size: 20px; font-weight: 800; margin: 32px 0 16px; }

      /* HERO SECTION */
      .hero-section { display: grid; grid-template-columns: 1.2fr 1fr 0.6fr; gap: 24px; padding: 32px; align-items: center; }
      .hero-text { display: flex; flex-direction: column; gap: 12px; }
      .hero-badge { display: inline-flex; align-items: center; gap: 6px; background: #eef2ff; color: #4f46e5; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; width: fit-content; }
      .hero-text h1 { font-size: 32px; font-weight: 800; letter-spacing: -0.5px; display: flex; align-items: center; gap: 8px; }
      .hero-text p { font-size: 15px; color: var(--text-muted); }
      .hero-tags { display: flex; gap: 16px; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-top: 4px; }
      .hero-tags span { display: flex; align-items: center; gap: 6px; }
      .hero-tags span::before { content: '•'; color: #cbd5e1; }
      .hero-tags span:first-child::before { display: none; }
      .hero-stats-card { background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 1px solid var(--border-color); border-radius: 16px; padding: 24px; }
      .stats-header { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 20px; }
      .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
      .stat-item { display: flex; flex-direction: column; gap: 8px; cursor: pointer; transition: transform 0.2s; }
      .stat-item:hover { transform: translateY(-2px); }
      .stat-icon-wrapper { width: 32px; height: 32px; border-radius: 8px; display: grid; place-items: center; }
      .stat-value { font-size: 22px; font-weight: 800; }
      .stat-label { font-size: 11px; color: var(--text-muted); font-weight: 500; }
      .ai-promo-card { background: #f8fafc; border: 1px solid var(--border-color); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 16px; justify-content: space-between; height: 100%; }
      .ai-promo-text { font-size: 13px; color: var(--text-muted); line-height: 1.6; }
      .ai-promo-btn { background: #4f46e5; color: white; padding: 10px 16px; border-radius: 8px; font-size: 13px; font-weight: 600; display: flex; align-items: center; justify-content: space-between; width: 100%; }

      /* MODULES */
      .modules-section { padding: 0 32px 32px; }
      .modules-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px; }
      .modules-header h2 { font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
      .modules-header p { font-size: 14px; color: var(--text-muted); margin-top: 4px; }
      .modules-actions { display: flex; align-items: center; gap: 16px; }
      .quick-access { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #4f46e5; cursor: pointer; }
      .view-all-btn { border: 1px solid var(--border-color); padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 600; color: var(--text-main); display: flex; align-items: center; gap: 8px; background: white; }
      .modules-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
      .module-card { border-radius: 16px; padding: 24px; position: relative; overflow: hidden; display: flex; flex-direction: column; transition: all 0.2s; border: 1px solid transparent; }
      .module-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.06); }
      .module-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px; }
      .module-icon { width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center; color: white; }
      .module-badge { font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 12px; background: rgba(255,255,255,0.6); }
      .module-title { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
      .module-desc { font-size: 13px; color: var(--text-muted); margin-bottom: 20px; line-height: 1.5; }
      .module-list { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; margin-bottom: 24px; }
      .module-list-item { display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 500; color: #334155; cursor: pointer; padding: 4px 8px; margin-left: -8px; border-radius: 6px; transition: all 0.2s; }
      .module-list-item:hover { background: rgba(79, 70, 229, 0.1); color: #4f46e5; }
      .module-list-item svg { width: 14px; height: 14px; color: #64748b; }
      .module-link { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; margin-top: auto; }
      .theme-purple { background: #f5f3ff; border-color: #ddd6fe; } .theme-purple .module-icon { background: linear-gradient(135deg, #8b5cf6, #a78bfa); } .theme-purple .module-badge { color: #6d28d9; } .theme-purple .module-link { color: #6d28d9; }
      .theme-blue { background: #eff6ff; border-color: #bfdbfe; } .theme-blue .module-icon { background: linear-gradient(135deg, #3b82f6, #60a5fa); } .theme-blue .module-badge { color: #1d4ed8; } .theme-blue .module-link { color: #1d4ed8; }
      .theme-green { background: #ecfdf5; border-color: #a7f3d0; } .theme-green .module-icon { background: linear-gradient(135deg, #10b981, #34d399); } .theme-green .module-badge { color: #047857; } .theme-green .module-link { color: #047857; }
      .theme-indigo { background: #f5f3ff; border-color: #c7d2fe; } .theme-indigo .module-icon { background: linear-gradient(135deg, #6366f1, #818cf8); } .theme-indigo .module-badge { color: #4338ca; } .theme-indigo .module-link { color: #4338ca; }
      .theme-orange { background: #fff7ed; border-color: #fed7aa; } .theme-orange .module-icon { background: linear-gradient(135deg, #f59e0b, #fbbf24); } .theme-orange .module-badge { color: #b45309; } .theme-orange .module-link { color: #b45309; }
      .module-bg-icon { position: absolute; right: -20px; bottom: -20px; width: 120px; height: 120px; opacity: 0.1; transform: rotate(-15deg); pointer-events: none; }

      /* COPILOT DARK CARD */
      .copilot-dark-card { background: #0f172a; color: white; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 16px; }
      .copilot-dark-header { display: flex; align-items: center; gap: 12px; }
      .copilot-dark-icon { width: 36px; height: 36px; border-radius: 10px; background: linear-gradient(135deg, #6366f1, #8b5cf6); display: grid; place-items: center; }
      .copilot-dark-header h3 { font-size: 16px; font-weight: 700; }
      .copilot-dark-header span { font-size: 10px; background: #4f46e5; padding: 2px 8px; border-radius: 10px; font-weight: 600; }
      .copilot-dark-desc { font-size: 12px; color: #94a3b8; line-height: 1.5; }
      .copilot-actions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
      .copilot-action-btn { display: flex; align-items: center; gap: 8px; background: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 10px 12px; color: #cbd5e1; font-size: 11px; font-weight: 500; text-align: left; }
      .copilot-action-btn svg { width: 14px; height: 14px; flex-shrink: 0; }
      .copilot-input-wrapper { display: flex; align-items: center; background: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 4px 4px 4px 16px; }
      .copilot-input-wrapper input { border: none; background: transparent; outline: none; width: 100%; color: white; font-size: 13px; }
      .copilot-send-btn { background: #4f46e5; color: white; width: 32px; height: 32px; border-radius: 6px; display: grid; place-items: center; flex-shrink: 0; }
      .copilot-footer { display: flex; justify-content: center; gap: 16px; font-size: 11px; color: #64748b; font-weight: 500; }

      /* BOTTOM BANNER */
      .bottom-banner { margin: 32px; background: linear-gradient(90deg, #f8fafc 0%, #eef2ff 100%); border: 1px solid #c7d2fe; border-radius: 16px; padding: 24px 32px; display: flex; justify-content: space-between; align-items: center; }
      .banner-left { display: flex; align-items: center; gap: 16px; }
      .banner-icon { width: 48px; height: 48px; border-radius: 12px; background: #e0e7ff; color: #4f46e5; display: grid; place-items: center; }
      .banner-text h3 { font-size: 18px; font-weight: 800; color: #1e1b4b; }
      .banner-text p { font-size: 13px; color: #64748b; margin-top: 4px; }
      .banner-btn { background: #4f46e5; color: white; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; display: flex; align-items: center; gap: 8px; }

      /* PROJECTS PAGE */
      .toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 16px; }
      .filter-tabs { display: flex; gap: 8px; background: #f1f5f9; padding: 4px; border-radius: 10px; }
      .filter-tabs button { padding: 8px 20px; border-radius: 8px; font-size: 13px; font-weight: 600; color: var(--text-muted); }
      .filter-tabs button.active { background: white; color: var(--text-main); box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
      .toolbar-right { display: flex; align-items: center; gap: 16px; }
      .projects-search { width: 240px; }
      .view-toggle { display: flex; gap: 4px; background: #f1f5f9; padding: 4px; border-radius: 8px; }
      .view-toggle button { padding: 8px; border-radius: 6px; color: var(--text-muted); display: grid; place-items: center; }
      .view-toggle button.active { background: white; color: #4f46e5; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
      .projects-grid-full { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px; }
      .project-card-full { background: white; border: 1px solid var(--border-color); border-radius: 16px; padding: 24px; transition: all 0.2s; display: flex; flex-direction: column; cursor: pointer; }
      .project-card-full:hover { box-shadow: 0 12px 24px rgba(0,0,0,0.06); transform: translateY(-4px); }
      .project-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
      .project-icon { width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center; color: white; }
      .project-header-actions { display: flex; align-items: center; gap: 8px; }
      .project-status { font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 12px; }
      .project-status.Active { background: #dcfce7; color: #166534; } .project-status.Planning { background: #fef3c7; color: #92400e; } .project-status.Completed { background: #dbeafe; color: #1e40af; }
      .more-btn { color: var(--text-muted); padding: 4px; border-radius: 6px; }
      .project-card-full h3 { font-size: 18px; font-weight: 700; margin-bottom: 4px; }
      .project-category { font-size: 12px; color: var(--text-muted); margin-bottom: 12px; font-weight: 500; }
      .project-desc { font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 20px; flex: 1; }
      .project-progress-section { margin-bottom: 20px; }
      .progress-info { display: flex; justify-content: space-between; font-size: 12px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px; }
      .project-progress { height: 6px; background: #f1f5f9; border-radius: 3px; overflow: hidden; }
      .project-progress div { height: 100%; border-radius: 3px; }
      .project-card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 16px; }
      .footer-members { display: flex; align-items: center; gap: 8px; }
      .avatar-stack { display: flex; }
      .mini-avatar { width: 24px; height: 24px; border-radius: 50%; background: #e2e8f0; display: grid; place-items: center; font-size: 9px; font-weight: 700; color: var(--text-main); border: 2px solid white; margin-left: -8px; }
      .mini-avatar:first-child { margin-left: 0; }
      .footer-stats { display: flex; gap: 12px; font-size: 12px; color: var(--text-muted); font-weight: 500; }
      .footer-stats span { display: flex; align-items: center; gap: 4px; }

      /* =========================================================
         NEW PROJECT PAGE — SCREENSHOT DESIGN
      ========================================================= */
      .new-project-layout { display: flex; gap: 0; background: #f8fafc; min-height: calc(100vh - 72px); }
      .np-sidebar { width: 250px; background: #ffffff; border-right: 1px solid var(--border-color); padding: 24px 18px; display: flex; flex-direction: column; gap: 22px; flex-shrink: 0; }
      .np-sidebar-logo { display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 800; color: #0f172a; padding: 0 6px; letter-spacing: -0.5px; }
      .np-sidebar-logo-icon { width: 34px; height: 34px; background: linear-gradient(135deg, #4f46e5, #7c3aed); border-radius: 9px; display: grid; place-items: center; color: white; font-size: 16px; font-weight: 800; }
      .np-sidebar-nav { display: flex; flex-direction: column; gap: 4px; }
      .np-nav-item { display: flex; align-items: center; gap: 12px; padding: 11px 12px; border-radius: 10px; font-size: 14px; font-weight: 500; color: #64748b; transition: all 0.2s; }
      .np-nav-item svg { width: 18px; height: 18px; }
      .np-nav-item:hover { background: #f1f5f9; color: #0f172a; }
      .np-nav-item.active { background: #eef2ff; color: #4f46e5; font-weight: 600; }
      .np-pro-card { background: linear-gradient(135deg, #0f172a, #1e293b); border-radius: 14px; padding: 18px; color: white; display: flex; flex-direction: column; gap: 10px; position: relative; overflow: hidden; }
      .np-pro-icon { width: 36px; height: 36px; background: rgba(139, 92, 246, 0.25); border-radius: 10px; display: grid; place-items: center; color: #a78bfa; }
      .np-pro-card strong { font-size: 15px; font-weight: 700; }
      .np-pro-card p { font-size: 12px; color: #94a3b8; line-height: 1.5; }
      .np-pro-card button { display: flex; align-items: center; justify-content: center; gap: 6px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; padding: 10px 14px; border-radius: 8px; font-size: 13px; font-weight: 600; margin-top: 6px; }
      .np-workspace { margin-top: auto; display: flex; flex-direction: column; gap: 10px; padding-top: 16px; border-top: 1px solid var(--border-color); }
      .np-workspace small { font-size: 11px; color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
      .np-workspace-item { display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: #f8fafc; border: 1px solid var(--border-color); border-radius: 10px; font-size: 13px; font-weight: 600; }
      .np-ws-icon { width: 26px; height: 26px; border-radius: 50%; background: #e0e7ff; display: grid; place-items: center; font-size: 12px; }
      .np-workspace-item span { flex: 1; }
      .np-ws-progress { display: flex; flex-direction: column; gap: 6px; }
      .np-ws-progress span { font-size: 11px; color: #64748b; font-weight: 600; }
      .np-ws-bar { height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden; }
      .np-ws-bar div { height: 100%; background: linear-gradient(90deg, #4f46e5, #7c3aed); border-radius: 3px; }
      .new-project-main { flex: 1; padding: 24px 28px; display: flex; flex-direction: column; gap: 20px; min-width: 0; }
      .np-hero { background: linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #6d28d9 100%); border-radius: 20px; padding: 28px 32px; color: white; display: flex; justify-content: space-between; align-items: center; gap: 32px; box-shadow: 0 20px 40px -12px rgba(79, 70, 229, 0.35); position: relative; overflow: hidden; }
      .np-hero::before { content: ''; position: absolute; top: -50%; right: -10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%); border-radius: 50%; }
      .np-hero-left { display: flex; align-items: flex-start; gap: 18px; position: relative; z-index: 1; flex: 1; }
      .np-hero-icon { width: 56px; height: 56px; flex-shrink: 0; background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.25); border-radius: 14px; display: grid; place-items: center; }
      .np-hero h1 { font-size: 26px; font-weight: 800; letter-spacing: -0.6px; margin-bottom: 6px; }
      .np-hero p { font-size: 13px; color: rgba(255, 255, 255, 0.85); max-width: 500px; line-height: 1.5; }
      .np-hero-meta { display: flex; align-items: center; gap: 14px; margin-top: 14px; font-size: 12px; color: rgba(255, 255, 255, 0.8); }
      .np-hero-meta span { display: flex; align-items: center; gap: 6px; }
      .np-hero-divider { width: 1px; height: 14px; background: rgba(255, 255, 255, 0.3); }
      .np-hero-quote { position: relative; z-index: 1; text-align: right; font-size: 12px; max-width: 260px; }
      .np-hero-quote p { color: rgba(255, 255, 255, 0.85); line-height: 1.6; font-style: italic; }
      .np-hero-quote span { display: block; margin-top: 8px; font-size: 11px; color: rgba(255, 255, 255, 0.65); font-weight: 600; }
      .np-steps { display: flex; align-items: center; background: white; border: 1px solid var(--border-color); border-radius: 14px; padding: 18px 24px; gap: 8px; }
      .np-step { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
      .np-step-circle { width: 34px; height: 34px; border-radius: 50%; background: #f1f5f9; color: #94a3b8; display: grid; place-items: center; font-size: 13px; font-weight: 700; transition: all 0.3s; flex-shrink: 0; }
      .np-step.active .np-step-circle { background: #4f46e5; color: white; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3); }
      .np-step.completed .np-step-circle { background: #10b981; color: white; }
      .np-step-info { display: flex; flex-direction: column; }
      .np-step-info strong { font-size: 13px; font-weight: 700; color: #94a3b8; transition: color 0.2s; }
      .np-step-info span { font-size: 11px; color: #cbd5e1; }
      .np-step.active .np-step-info strong { color: #0f172a; }
      .np-step.active .np-step-info span { color: #64748b; }
      .np-step-line { flex: 1; height: 2px; background: #e2e8f0; border-radius: 2px; min-width: 20px; }
      .np-step-line.active { background: #10b981; }
      .np-grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 20px; align-items: start; }
      .np-left, .np-right { display: flex; flex-direction: column; gap: 20px; }
      .np-card { background: white; border: 1px solid var(--border-color); border-radius: 16px; padding: 22px; }
      .np-card-head { display: flex; align-items: center; gap: 12px; padding-bottom: 16px; margin-bottom: 18px; border-bottom: 1px solid #f1f5f9; }
      .np-card-head h3 { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 2px; }
      .np-card-head p { font-size: 12px; color: #64748b; }
      .np-ai-icon, .np-preview-icon { width: 36px; height: 36px; border-radius: 10px; background: linear-gradient(135deg, #ede9fe, #ddd6fe); color: #7c3aed; display: grid; place-items: center; flex-shrink: 0; }
      .np-preview-icon { background: linear-gradient(135deg, #dbeafe, #bfdbfe); color: #2563eb; }
      .np-add-member-btn { display: inline-flex; align-items: center; gap: 6px; background: #eef2ff; color: #4f46e5; border: 1px solid #c7d2fe; border-radius: 8px; padding: 8px 12px; font-size: 12px; font-weight: 600; }
      .np-team-list { display: flex; flex-direction: column; gap: 12px; }
      .np-member-row { display: grid; grid-template-columns: 42px minmax(100px, 1fr) minmax(130px, 1fr) minmax(140px, 1.2fr) auto auto; gap: 10px; align-items: end; padding: 12px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc; }
      .np-member-avatar { width: 42px; height: 42px; border-radius: 12px; display: grid; place-items: center; background: linear-gradient(135deg, #4f46e5, #7c3aed); color: white; font-size: 12px; font-weight: 700; }
      .np-member-field { display: flex; flex-direction: column; gap: 6px; }
      .np-member-field label { font-size: 11px; color: #64748b; font-weight: 600; }
      .np-member-field input, .np-member-field select { width: 100%; border: 1px solid #dbe2ea; border-radius: 8px; background: white; padding: 9px 10px; font-size: 13px; outline: none; min-width: 0; }
      .np-member-field input:focus, .np-member-field select:focus { border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
      .np-member-email { min-width: 0; }
      .np-invite-note { margin: -8px 0 14px; color: #64748b; font-size: 11px; }
      .np-team-error { margin: 0 0 12px; padding: 10px 12px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; color: #b91c1c; font-size: 12px; }
      .np-invite-member-btn { height: 34px; display: inline-flex; align-items: center; justify-content: center; gap: 5px; padding: 0 9px; border: 1px solid #c7d2fe; border-radius: 8px; background: #eef2ff; color: #4f46e5; font-size: 11px; font-weight: 600; }
      .np-remove-member { width: 32px; height: 32px; border-radius: 8px; display: grid; place-items: center; background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
      .np-templates { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 12px; }      .np-template { position: relative; display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 20px 12px; border: 1.5px solid var(--border-color); border-radius: 12px; background: white; transition: all 0.2s; text-align: center; }
      .np-template:hover { border-color: #c4b5fd; transform: translateY(-2px); }
      .np-template.selected { border-color: #4f46e5; background: linear-gradient(135deg, #eef2ff, #f5f3ff); box-shadow: 0 8px 20px rgba(79, 70, 229, 0.15); }
      .np-template-icon { width: 44px; height: 44px; border-radius: 12px; background: #f1f5f9; color: #4f46e5; display: grid; place-items: center; }
      .np-template.selected .np-template-icon { background: linear-gradient(135deg, #4f46e5, #7c3aed); color: white; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3); }
      .np-template strong { font-size: 13px; font-weight: 700; color: #0f172a; }
      .np-template span { font-size: 11px; color: #94a3b8; line-height: 1.3; }
      .np-popular { position: absolute; top: 8px; right: 8px; background: #4f46e5; color: white; font-size: 9px; font-weight: 700; padding: 3px 7px; border-radius: 8px; letter-spacing: 0.3px; }
      .np-custom { border-style: dashed; justify-content: center; color: #64748b; }
      .np-custom svg { color: #4f46e5; }
      .np-custom strong { color: #4f46e5; }
      .np-form-group { margin-bottom: 18px; }
      .np-form-group:last-child { margin-bottom: 0; }
      .np-form-group label { display: block; font-size: 13px; font-weight: 600; color: #0f172a; margin-bottom: 8px; }
      .np-form-group .req { color: #ef4444; }
      .np-input-wrap, .np-select-wrap { display: flex; align-items: center; gap: 10px; border: 1px solid var(--border-color); border-radius: 10px; padding: 0 14px; background: white; transition: all 0.2s; position: relative; }
      .np-input-wrap:focus-within, .np-select-wrap:focus-within { border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
      .np-input-wrap svg, .np-select-wrap svg { color: #94a3b8; flex-shrink: 0; }
      .np-input-wrap input, .np-select-wrap select { flex: 1; border: none; outline: none; padding: 12px 0; font-size: 14px; font-family: inherit; color: #0f172a; background: transparent; min-width: 0; }
      .np-select-wrap select { cursor: pointer; appearance: none; }
      .np-select-wrap::after { content: ''; position: absolute; right: 16px; top: 50%; width: 0; height: 0; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 5px solid #94a3b8; pointer-events: none; transform: translateY(-50%); }
      .np-char { font-size: 11px; color: #94a3b8; font-weight: 500; flex-shrink: 0; }
      .np-textarea-wrap { position: relative; border: 1px solid var(--border-color); border-radius: 10px; background: white; transition: all 0.2s; }
      .np-textarea-wrap:focus-within { border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
      .np-textarea-wrap textarea { width: 100%; border: none; outline: none; padding: 14px 14px 28px; font-size: 14px; font-family: inherit; color: #0f172a; resize: vertical; min-height: 100px; background: transparent; }
      .np-textarea-wrap .np-char { position: absolute; bottom: 10px; right: 14px; }
      .np-form-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
      .np-section-label { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; color: #0f172a; margin-bottom: 12px; padding: 6px 10px; background: #f8fafc; border-radius: 8px; width: fit-content; }
      .np-section-label svg { color: #7c3aed; }
      .np-stack-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
      .np-stack-item { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 6px; border: 1px solid var(--border-color); border-radius: 10px; background: white; text-align: center; }
      .np-stack-icon { width: 32px; height: 32px; border-radius: 8px; display: grid; place-items: center; }
      .np-stack-item strong { font-size: 11px; font-weight: 700; color: #0f172a; white-space: nowrap; }
      .np-stack-item span { font-size: 10px; color: #94a3b8; }
      .np-suggested-team { display: flex; flex-direction: column; gap: 10px; }
      .np-team-count { font-size: 12px; font-weight: 600; color: #64748b; }
      .np-added-team-list { display: flex; flex-direction: column; gap: 8px; }
      .np-added-team-member { display: flex; align-items: center; gap: 10px; padding: 9px 10px; background: #f8fafc; border: 1px solid var(--border-color); border-radius: 10px; min-width: 0; }
      .np-added-team-avatar { width: 30px; height: 30px; display: grid; place-items: center; flex-shrink: 0; border-radius: 50%; color: #4f46e5; background: #e0e7ff; font-size: 10px; font-weight: 700; }
      .np-added-team-details { display: flex; flex-direction: column; min-width: 0; }
      .np-added-team-details strong { overflow: hidden; color: #0f172a; font-size: 12px; text-overflow: ellipsis; white-space: nowrap; }
      .np-added-team-details small { overflow: hidden; color: #64748b; font-size: 10px; text-overflow: ellipsis; white-space: nowrap; }
      .np-empty-team, .np-role-help { color: #64748b; font-size: 11px; line-height: 1.5; }
      .np-suggested-badge { margin-left: 2px; padding: 2px 7px; border-radius: 10px; background: #eef2ff; color: #4f46e5; font-size: 9px; font-weight: 700; text-transform: uppercase; }
      .np-role-help { margin: -5px 0 10px; }
      .np-role-suggestions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
      .np-role-suggestion { display: flex; justify-content: space-between; align-items: center; gap: 6px; padding: 9px 10px; border: 1px solid var(--border-color); border-radius: 9px; background: #fff; color: #334155; font-size: 11px; text-align: left; transition: 0.2s; }
      .np-role-suggestion:hover:not(:disabled) { border-color: #a5b4fc; background: #f8faff; }
      .np-role-suggestion strong { display: inline-flex; align-items: center; gap: 3px; flex-shrink: 0; color: #4f46e5; font-size: 10px; }
      .np-role-suggestion.added { background: #f0fdf4; border-color: #bbf7d0; cursor: default; }
      .np-role-suggestion.added strong { color: #15803d; }
      .np-role-suggestion:disabled { opacity: 0.85; }
      .np-next-steps { display: flex; flex-direction: column; gap: 8px; }
      .np-next-step { display: flex; align-items: center; gap: 9px; font-size: 12px; color: #334155; font-weight: 500; cursor: pointer; }
      .np-next-step input { width: 15px; height: 15px; margin: 0; accent-color: #4f46e5; flex-shrink: 0; }
      .np-next-step.completed span { color: #94a3b8; text-decoration: line-through; }
      .np-ai-hint { display: flex; align-items: flex-start; gap: 10px; margin-top: 18px; padding: 12px 14px; background: linear-gradient(135deg, #ede9fe, #f5f3ff); border: 1px solid #ddd6fe; border-radius: 10px; font-size: 12px; font-weight: 500; color: #6d28d9; line-height: 1.5; }
      .np-ai-hint svg { color: #7c3aed; flex-shrink: 0; margin-top: 2px; }
      .np-live-badge { font-size: 10px; font-weight: 700; color: #10b981; background: #d1fae5; padding: 4px 10px; border-radius: 12px; flex-shrink: 0; }
      .np-preview-banner { background: linear-gradient(135deg, #1e1b4b, #4c1d95, #7c3aed); border-radius: 14px; padding: 24px; text-align: center; color: white; margin-bottom: 16px; position: relative; overflow: hidden; }
      .np-preview-banner::before { content: ''; position: absolute; top: -50%; left: -20%; width: 300px; height: 300px; background: radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%); border-radius: 50%; }
      .np-preview-logo { width: 48px; height: 48px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 12px; display: grid; place-items: center; margin: 0 auto 12px; position: relative; z-index: 1; }
      .np-preview-banner h4 { font-size: 20px; font-weight: 800; letter-spacing: -0.5px; margin-bottom: 4px; position: relative; z-index: 1; }
      .np-preview-banner p { font-size: 12px; color: rgba(255, 255, 255, 0.75); position: relative; z-index: 1; }
      .np-ready { display: flex; align-items: flex-start; gap: 10px; padding: 12px 14px; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 10px; margin-bottom: 18px; }
      .np-ready-dot { width: 10px; height: 10px; background: #10b981; border-radius: 50%; margin-top: 5px; flex-shrink: 0; box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2); animation: pulse 2s infinite; }
      .np-ready strong { display: block; font-size: 13px; font-weight: 700; color: #065f46; margin-bottom: 2px; }
      .np-ready span { font-size: 11px; color: #047857; line-height: 1.4; }
      .np-summary-title { font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 12px; }
      .np-summary { display: flex; flex-direction: column; gap: 10px; padding-bottom: 18px; border-bottom: 1px solid #f1f5f9; margin-bottom: 18px; }
      .np-summary-row { display: flex; justify-content: space-between; align-items: center; font-size: 12px; }
      .np-summary-row span { display: flex; align-items: center; gap: 6px; color: #64748b; }
      .np-summary-row span svg { color: #94a3b8; }
      .np-summary-row strong { color: #0f172a; font-weight: 700; max-width: 55%; text-align: right; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .np-health-title { font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 14px; }
      .np-health { display: flex; align-items: center; gap: 20px; }
      .np-health-circle { width: 90px; height: 90px; border-radius: 50%; background: conic-gradient(#10b981 0% 92%, #e2e8f0 92% 100%); display: grid; place-items: center; flex-shrink: 0; position: relative; }
      .np-health-inner { width: 74px; height: 74px; border-radius: 50%; background: white; display: grid; place-items: center; }
      .np-health-inner strong { font-size: 20px; font-weight: 800; color: #0f172a; }
      .np-health-list { display: flex; flex-direction: column; gap: 6px; }
      .np-health-list div { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 500; color: #334155; }
      .np-bottom-bar { display: flex; justify-content: space-between; align-items: center; padding: 18px 24px; background: white; border: 1px solid var(--border-color); border-radius: 14px; margin-top: 4px; }
      .np-btn-ghost { padding: 10px 20px; background: white; border: 1px solid var(--border-color); border-radius: 8px; font-size: 13px; font-weight: 600; color: #64748b; transition: all 0.2s; }
      .np-btn-ghost:hover { background: #f8fafc; color: #0f172a; }
      .np-bottom-right { display: flex; gap: 10px; }
      .np-btn-secondary { display: flex; align-items: center; gap: 6px; padding: 10px 18px; background: white; border: 1px solid var(--border-color); border-radius: 8px; font-size: 13px; font-weight: 600; color: #334155; transition: all 0.2s; }
      .np-btn-secondary:hover { background: #f8fafc; }
      .np-btn-primary { display: flex; align-items: center; gap: 6px; padding: 10px 22px; background: linear-gradient(135deg, #4f46e5, #7c3aed); color: white; border-radius: 8px; font-size: 13px; font-weight: 700; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3); transition: all 0.2s; }
      .np-btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(79, 70, 229, 0.4); }

      /* FEATURE PAGE */
      .feature-page-container { padding: 48px 32px; max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
      .back-btn { align-self: flex-start; display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: var(--text-muted); padding: 8px 16px; border-radius: 8px; margin-bottom: 32px; }
      .feature-hero-card { background: white; border: 1px solid var(--border-color); border-radius: 24px; padding: 56px 48px; text-align: center; width: 100%; display: flex; flex-direction: column; align-items: center; box-shadow: 0 10px 40px rgba(0,0,0,0.05); }
      .feature-breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 600; color: var(--text-muted); margin-bottom: 24px; padding: 6px 14px; background: #f8fafc; border: 1px solid var(--border-color); border-radius: 20px; }
      .feature-hero-icon { width: 96px; height: 96px; border-radius: 24px; display: grid; place-items: center; margin-bottom: 24px; }
      .feature-hero-card h1 { font-size: 36px; font-weight: 800; margin-bottom: 12px; letter-spacing: -1px; }
      .feature-hero-card p { font-size: 16px; color: var(--text-muted); max-width: 520px; margin-bottom: 32px; }
      .feature-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 500px; margin-bottom: 32px; }
      .feature-info-item { display: flex; align-items: center; gap: 12px; background: #f8fafc; border: 1px solid var(--border-color); padding: 16px; border-radius: 12px; text-align: left; }
      .feature-info-item strong { display: block; font-size: 13px; font-weight: 700; }
      .feature-info-item span { font-size: 12px; color: var(--text-muted); }
      .feature-actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }

      /* AI HUB */
      .ai-hub-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
      .ai-chat-card { background: #0f172a; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; height: 600px; }
      .ai-chat-header { display: flex; align-items: center; gap: 12px; padding-bottom: 16px; border-bottom: 1px solid #1e293b; margin-bottom: 16px; }
      .ai-chat-header h3 { font-size: 16px; font-weight: 700; color: white; }
      .ai-chat-messages { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 16px; }
      .chat-message { display: flex; gap: 12px; }
      .chat-message.user { flex-direction: row-reverse; }
      .chat-avatar { width: 32px; height: 32px; border-radius: 50%; background: #4f46e5; color: white; display: grid; place-items: center; flex-shrink: 0; }
      .chat-bubble { background: #1e293b; color: #cbd5e1; padding: 12px 16px; border-radius: 12px; font-size: 13px; max-width: 80%; }
      .chat-message.user .chat-bubble { background: #4f46e5; color: white; }
      .ai-chat-input { display: flex; align-items: center; background: #1e293b; border-radius: 8px; padding: 8px 8px 8px 16px; margin-top: 16px; border: 1px solid #334155; }
      .ai-chat-input input { flex: 1; border: none; background: transparent; outline: none; color: white; font-size: 13px; }
      .ai-chat-input button { background: #4f46e5; color: white; width: 36px; height: 36px; border-radius: 8px; display: grid; place-items: center; }
      .ai-tools-section h3 { font-size: 18px; font-weight: 700; margin-bottom: 16px; }
      .ai-tools-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
      .ai-tool-card { display: flex; align-items: center; gap: 16px; background: white; border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; transition: all 0.2s; cursor: pointer; }
      .ai-tool-card:hover { border-color: #4f46e5; box-shadow: 0 4px 12px rgba(79,70,229,0.1); }
      .ai-tool-icon { width: 44px; height: 44px; border-radius: 10px; display: grid; place-items: center; flex-shrink: 0; }
      .ai-tool-card h4 { font-size: 14px; font-weight: 700; margin-bottom: 2px; }
      .ai-tool-card p { font-size: 12px; color: var(--text-muted); }

      /* TEAM */
      .team-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px; }
      .team-stat-card { display: flex; align-items: center; gap: 16px; background: white; border: 1px solid var(--border-color); border-radius: 12px; padding: 20px; }
      .team-stat-card strong { font-size: 20px; font-weight: 800; display: block; }
      .team-stat-card span { font-size: 12px; color: var(--text-muted); }
      .team-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .member-card { background: white; border: 1px solid var(--border-color); border-radius: 16px; padding: 24px; transition: all 0.2s; }
      .member-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.06); transform: translateY(-2px); }
      .member-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
      .member-avatar { width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; color: white; font-weight: 700; font-size: 14px; flex-shrink: 0; }
      .member-info h4 { font-size: 15px; font-weight: 700; }
      .member-info span { font-size: 12px; color: var(--text-muted); }
      .member-email { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted); margin-bottom: 16px; }
      .member-workload { margin-bottom: 16px; }
      .workload-header { display: flex; justify-content: space-between; font-size: 12px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px; }
      .workload-bar { height: 6px; background: #f1f5f9; border-radius: 3px; overflow: hidden; }
      .workload-bar div { height: 100%; border-radius: 3px; }
      .member-skills { display: flex; flex-wrap: wrap; gap: 6px; }
      .skill-tag { font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 12px; background: #f1f5f9; color: var(--text-muted); }

      /* ANALYTICS */
      .analytics-kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 32px; }
      .kpi-card { background: white; border: 1px solid var(--border-color); border-radius: 16px; padding: 24px; }
      .kpi-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
      .kpi-icon { width: 40px; height: 40px; border-radius: 10px; display: grid; place-items: center; }
      .kpi-change { font-size: 12px; font-weight: 700; padding: 4px 8px; border-radius: 8px; }
      .kpi-change.up { background: #dcfce7; color: #166534; }
      .kpi-change.down { background: #fee2e2; color: #991b1b; }
      .kpi-value { font-size: 32px; font-weight: 800; line-height: 1; }
      .kpi-value span { font-size: 16px; font-weight: 600; color: var(--text-muted); margin-left: 4px; }
      .kpi-label { font-size: 13px; color: var(--text-muted); font-weight: 500; margin-top: 6px; }
      .charts-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 24px; }
      .chart-card { background: white; border: 1px solid var(--border-color); border-radius: 16px; padding: 24px; }
      .chart-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
      .chart-header h3 { font-size: 16px; font-weight: 700; }
      .chart-header span { font-size: 12px; color: var(--text-muted); }
      .chart-bars { display: flex; align-items: flex-end; justify-content: space-between; height: 200px; gap: 12px; padding-bottom: 24px; border-bottom: 1px solid #f1f5f9; position: relative; }
      .bar-wrapper { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px; height: 100%; justify-content: flex-end; }
      .bar { width: 100%; max-width: 40px; border-radius: 6px 6px 0 0; }
      .bar-wrapper span { font-size: 11px; color: var(--text-muted); font-weight: 600; position: absolute; bottom: 0; }
      .donut-container { display: flex; align-items: center; gap: 32px; }
      .donut-chart { width: 140px; height: 140px; border-radius: 50%; background: conic-gradient(#10b981 0% 45%, #f59e0b 45% 75%, #ef4444 75% 85%, #cbd5e1 85% 100%); position: relative; }
      .donut-chart::before { content: ''; position: absolute; inset: 30px; background: white; border-radius: 50%; }
      .donut-legend { display: flex; flex-direction: column; gap: 12px; }
      .donut-legend div { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-muted); }
      .donut-legend .dot { width: 12px; height: 12px; border-radius: 4px; }

      /* STARTUP */
      .startup-hero { background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); border-radius: 20px; padding: 48px; color: white; margin-bottom: 32px; position: relative; overflow: hidden; }
      .startup-hero-content { position: relative; z-index: 1; max-width: 700px; }
      .startup-hero h2 { font-size: 32px; font-weight: 800; margin: 16px 0 8px; letter-spacing: -0.5px; }
      .startup-hero p { font-size: 15px; color: #c7d2fe; margin-bottom: 24px; }
      .idea-input-wrapper { display: flex; align-items: center; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; padding: 8px 8px 8px 20px; }
      .idea-input-wrapper input { flex: 1; background: transparent; border: none; outline: none; color: white; font-size: 14px; }
      .idea-input-wrapper button { background: #8b5cf6; color: white; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; display: flex; align-items: center; gap: 8px; }
      .startup-tools-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .startup-tool-card { background: white; border: 1px solid var(--border-color); border-radius: 16px; padding: 24px; transition: all 0.2s; cursor: pointer; }
      .startup-tool-card:hover { box-shadow: 0 12px 24px rgba(0,0,0,0.06); transform: translateY(-4px); }
      .startup-tool-icon { width: 48px; height: 48px; border-radius: 12px; display: grid; place-items: center; margin-bottom: 16px; }
      .startup-tool-card h4 { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
      .startup-tool-card p { font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 16px; }
      .tool-link { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: #4f46e5; }

      /* FOOTER */
      .site-footer { background: #0b1121; color: #94a3b8; padding: 64px 32px 24px; border-top: 1px solid #1e293b; margin-top: 48px; }
      .footer-container { max-width: 1440px; margin: 0 auto; }
      .footer-top { display: grid; grid-template-columns: 1.5fr 3fr; gap: 64px; padding-bottom: 48px; border-bottom: 1px solid #1e293b; }
      .footer-brand-column { display: flex; flex-direction: column; gap: 20px; }
      .footer-logo { display: flex; align-items: center; gap: 10px; font-size: 22px; font-weight: 800; color: #ffffff; }
      .footer-logo .brand-logo { width: 36px; height: 36px; font-size: 18px; }
      .footer-desc { font-size: 14px; line-height: 1.6; color: #64748b; max-width: 340px; }
      .newsletter-box h4 { font-size: 14px; font-weight: 600; color: #e2e8f0; margin-bottom: 6px; }
      .newsletter-box p { font-size: 12px; color: #64748b; margin-bottom: 12px; }
      .newsletter-form { display: flex; background: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 4px; max-width: 340px; }
      .newsletter-form input { flex: 1; background: transparent; border: none; outline: none; padding: 8px 12px; color: #ffffff; font-size: 13px; }
      .newsletter-form button { background: #4f46e5; color: #ffffff; width: 36px; height: 36px; border-radius: 6px; display: grid; place-items: center; }
      .social-links { display: flex; gap: 12px; }
      .social-links a { width: 36px; height: 36px; border-radius: 50%; background: #1e293b; color: #94a3b8; display: grid; place-items: center; }
      .social-links a:hover { background: #4f46e5; color: #ffffff; }
      .footer-links-columns { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
      .link-group h4 { font-size: 13px; font-weight: 700; color: #ffffff; margin-bottom: 16px; text-transform: uppercase; }
      .link-group a { display: block; font-size: 14px; color: #94a3b8; margin-bottom: 10px; }
      .link-group a:hover { color: #ffffff; }
      .footer-bottom { padding-top: 24px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: #64748b; }
      .footer-bottom-left { display: flex; flex-direction: column; gap: 4px; }
      .made-with { display: flex; align-items: center; gap: 4px; }
      .system-status { display: flex; align-items: center; gap: 8px; background: rgba(16, 185, 129, 0.1); color: #10b981; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
      .status-dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; animation: pulse 2s infinite; }
      @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
      .footer-bottom-right { display: flex; align-items: center; gap: 16px; }
      .footer-bottom-right a { color: #64748b; }
      .back-to-top { width: 36px; height: 36px; border-radius: 50%; background: #1e293b; color: #ffffff; display: grid; place-items: center; }

      /* RESPONSIVE */
      @media (max-width: 1200px) {
        .hero-section { grid-template-columns: 1fr 1fr; }
        .ai-promo-card { grid-column: span 2; }
        .modules-grid { grid-template-columns: repeat(2, 1fr); }
        .ai-hub-layout { grid-template-columns: 1fr; }
        .analytics-kpi-grid { grid-template-columns: repeat(2, 1fr); }
        .charts-grid { grid-template-columns: 1fr; }
        .footer-top { grid-template-columns: 1fr; gap: 48px; }
        .footer-links-columns { grid-template-columns: repeat(2, 1fr); }
        .np-grid { grid-template-columns: 1fr; }
        .np-form-row { grid-template-columns: 1fr 1fr; }
        .new-project-layout { flex-direction: column; }
        .np-sidebar { width: 100%; flex-direction: row; flex-wrap: wrap; padding: 16px; gap: 16px; }
        .np-sidebar-nav { flex-direction: row; flex-wrap: wrap; }
        .np-pro-card, .np-workspace { display: none; }
      }
      @media (max-width: 900px) {
        .hero-section { grid-template-columns: 1fr; }
        .ai-promo-card { grid-column: span 1; }
        .modules-grid { grid-template-columns: 1fr; }
        .top-nav { flex-direction: column; height: auto; padding: 16px; gap: 16px; }
        .nav-left, .nav-right { width: 100%; justify-content: space-between; }
        .nav-links { overflow-x: auto; padding-bottom: 8px; width: 100%; }
        .search-bar { width: 100%; }
        .team-stats-grid { grid-template-columns: repeat(2, 1fr); }
        .page-header { flex-direction: column; align-items: flex-start; gap: 16px; }
        .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
        .np-hero { flex-direction: column; gap: 20px; padding: 24px; }
        .np-hero-quote { text-align: left; max-width: 100%; }
        .np-steps { flex-wrap: wrap; }
        .np-step-info span { display: none; }
        .np-member-row { grid-template-columns: 1fr; }
        .np-remove-member { justify-self: end; }
        .np-stack-grid { grid-template-columns: repeat(2, 1fr); }
        .np-templates { grid-template-columns: repeat(2, 1fr); }
        .np-form-row { grid-template-columns: 1fr; }
      }
      @media (max-width: 600px) {
        .stats-grid { grid-template-columns: repeat(2, 1fr); }
        .module-list { grid-template-columns: 1fr; }
        .bottom-banner { flex-direction: column; text-align: center; gap: 16px; }
        .banner-left { flex-direction: column; }
        .projects-grid-full { grid-template-columns: 1fr; }
        .analytics-kpi-grid { grid-template-columns: 1fr; }
        .team-stats-grid { grid-template-columns: 1fr; }
        .footer-links-columns { grid-template-columns: 1fr; }
        .new-project-main { padding: 16px; }
        .np-hero { padding: 20px; }
        .np-hero h1 { font-size: 22px; }
        .np-templates { grid-template-columns: 1fr; }
        .np-team-grid { grid-template-columns: 1fr; }
        .np-summary-row strong { max-width: 50%; }
        .np-bottom-bar { flex-direction: column; gap: 12px; }
        .np-bottom-right { width: 100%; }
        .np-btn-secondary, .np-btn-primary { flex: 1; justify-content: center; }
        .np-btn-ghost { width: 100%; }
      }
    `}</style>
  );
}