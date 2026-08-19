// Dynamic Portfolio Data Store for Public User Website
// Fetches from backend API on http://localhost:5000/api/portfolio with fallback to LocalStorage/Initial JSON

export const API_URL = 'http://localhost:5000/api/portfolio';
export const STORAGE_KEY = 'aj_portfolio_data_v2';

export const initialPortfolioData = {
  profile: {
    name: "Ahmad Junaid",
    headline: "Software Engineering Student & Backend / AI Engineer",
    subheadline: "7th Semester BS Software Engineering @ COMSATS University Islamabad (Lahore Campus)",
    bio: "Passionate software engineer building high-performance backend systems, REST APIs, and practical AI agent workflows. Currently gaining hands-on backend AI experience at FlyRank while developing an episodic memory AI architecture for my final year project (NiHA).",
    location: "Lahore, Pakistan",
    email: "ahmadjuniad007.07@gmail.com",
    githubUrl: "https://github.com/ajunaid05",
    linkedinUrl: "https://www.linkedin.com/in/ahmad-junaid-776720307/",
    cvUrl: "https://drive.google.com/file/d/1aYN55ObztePm3dJfGTEwkFXnj0ragW5W/view?usp=sharing",
    bookingUrl: "https://cal.com/ahmad-junaid/30min",
    avatarMonogram: "AJ"
  },
  about: {
    sectionTitle: "About & Technical Focus",
    sectionSub: "7th Semester BS Software Engineering • COMSATS University",
    narrative1: "I am a Software Engineering student at COMSATS University Islamabad (Lahore Campus), focused on backend systems development and practical AI engineering.",
    narrative2: "My development experience spans building full-stack web applications, Python static analysis tools, and asynchronous APIs using FastAPI. Through my internship training track at FlyRank, I work on real-world assignments covering backend AI workflows, Model Context Protocol (MCP), and production deployment strategies.",
    narrative3: "Rather than building static landing pages, I prioritize code maintainability, clean layer separation, type safety, and real production delivery.",
    stats: [
      {
        label: "Academic Semester",
        value: "7th"
      },
      {
        label: "Deployed Projects",
        value: "1"
      },
      {
        label: "FlyRank Status",
        value: "Backend AI Intern"
      }
    ],
    pillars: [
      {
        id: "p1",
        title: "Backend & API Engineering",
        description: "Designing REST APIs, request validation, database schemas, and microservice integration using FastAPI, Node.js."
      },
      {
        id: "p2",
        title: "AI Workflows & MCP Standards",
        description: "Implementing Model Context Protocol (MCP) servers, agentic prompt tools, and LLM orchestration for reliable, grounded AI operations."
      },
      {
        id: "p3",
        title: "Full-Stack Web Delivery",
        description: "Building responsive React.js interfaces, managing application state, and deploying end-to-end applications to Netlify over HTTPS."
      }
    ]
  },
  experience: [
    {
      id: "exp-flyrank",
      company: "FlyRank",
      role: "Backend AI Engineering Intern",
      period: "July 2026 — Present",
      isCurrent: true,
      endDate: "Present",
      startDate: "2026",
      location: "Remote",
      type: "Internship & Training Track",
      description: "Engaged in hands-on backend and AI engineering workflows, building production-ready FastAPI services, AI agent integrations, and scalable APIs.",
      bullets: [
        "Developing hands-on backend solutions using FastAPI, Node.js, and structured REST API standards.",
        "Implementing Model Context Protocol (MCP) concepts and prompt engineering techniques for practical AI agents.",
        "Executing full-stack assignments involving zero-downtime deployment on Netlify over public HTTPS.",
        "Collaborating on modern web app architectures, automated testing, and developer tooling."
      ],
      technologies: [
        "FastAPI",
        "Python",
        "Node.js",
        "AI Agents",
        "MCP",
        "REST APIs",
        "Netlify"
      ],
      startMonth: "July",
      startYear: "2026",
      endMonth: "Present",
      certificateUrl: "https://drive.google.com/file/d/1F-nWmI3k9jpyQb91dzy_E17JAW-cy5W9/view?usp=sharing",
      certificateTitle: "FLyRank Intern Confirmation"
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "MERN Food Ordering System",
      category: "Full-Stack Web App",
      shortDescription: "A feature-rich online food ordering platform with real-time cart state management, user authentication, menu categories, and order workflows.",
      longDescription: "Engineered a full-stack e-commerce food ordering application designed for seamless customer experience. Built with React.js on the frontend and Node.js/Express with MongoDB on the backend. Deployed publicly on Vercel.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Vercel"
      ],
      liveUrl: "https://cafe-007-food-odering-system-mern.vercel.app/",
      githubUrl: "https://github.com/ajunaid05",
      isFeatured: true,
      badge: "Live Production App",
      imageTheme: "from-emerald-600/20 to-teal-900/40"
    },
    {
      id: "project-2",
      title: "Tasks Management API(FastAPI)",
      category: "Backend & AI Engineering",
      shortDescription: "High-performance asynchronous REST API designed for processing and serving AI chatbot interactions with Pydantic request validation with integration of Sqlite3 Database.",
      longDescription: "Designed and implemented a lightweight, asynchronous backend service using FastAPI. Handles conversational state, structured JSON data validation, and clean controller-service separation for downstream LLM integration.",
      technologies: [
        "Python",
        "FastAPI",
        "Pydantic",
        "Uvicorn",
        "AsyncIO",
        "REST API"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/ajunaid05/Backend-AI-Engineering/tree/main/FastAPI(CRUD_Sqlite3)",
      isFeatured: true,
      badge: "Backend API",
      imageTheme: "from-indigo-600/20 to-slate-900/40"
    },
    {
      id: "project-3",
      title: "Python Code Smell Detector",
      category: "Developer Tooling",
      shortDescription: "Static analysis utility built in Python to automatically inspect codebase syntax trees for architectural smells and code quality anti-patterns.",
      longDescription: "Built a developer utility leveraging Python's AST (Abstract Syntax Tree) module to identify complex methods, long parameter lists, duplicated patterns, and software metrics to aid code refactoring.",
      technologies: [
        "Python",
        "AST Parsing",
        "Static Analysis",
        "CLI Tools",
        "Clean Code"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/ajunaid05/Code-Smells",
      isFeatured: true,
      badge: "Software Engineering",
      imageTheme: "from-purple-600/20 to-slate-900/40"
    }
  ],
  skillCategories: [
    {
      id: "sc-1",
      name: "Backend Engineering",
      skills: [
        "FastAPI",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Microservices Concepts"
      ]
    },
    {
      id: "sc-2",
      name: "AI & GenAI Systems",
      skills: [
        "LLM Workflows",
        "AI Agents",
        "Model Context Protocol (MCP)",
        "Prompt Engineering",
        "AI-Assisted Dev"
      ]
    },
    {
      id: "sc-3",
      name: "Frontend Development",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "Vite",
        "Tailwind CSS",
        "HTML5 & Semantic UI",
        "Responsive Design"
      ]
    },
    {
      id: "sc-4",
      name: "Databases & Storage",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Sqlite3"
      ]
    },
    {
      id: "sc-5",
      name: "Tools & Deployment",
      skills: [
        "Git & GitHub",
        "Docker",
        "VS Code",
        "Vercel",
        "Claude",
        "ChatGPT",
        "Gemini",
        "Perplexity"
      ]
    }
  ],
  certificationOrgs: [
    {
      id: "org-anthropic",
      name: "Anthropic-Al Fluency Track",
      badgeCount: "10 Courses",
      description: "Advanced LLM Integration, Model Context Protocol, and Claude API Architecture",
      courses: [
        {
          id: "c-1787100215799",
          title: "Claude 101",
          date: "2026",
          description: "An introductory course covering the fundamentals of Anthropic’s Claude, including effective prompting, Claude’s capabilities, working with projects and documents, using Claude for research and analysis, and applying AI responsibly to real-world tasks.",
          url: "https://drive.google.com/file/d/1IcNsH7sYB7H_ymn0L0GKICKPz3P4Hchs/view?usp=sharing"
        },
        {
          id: "c-1787102192471",
          title: "AI Fluency: Framework & Foundations",
          date: "2026",
          description: "An introductory course that builds a practical understanding of AI fluency through the core skills of Description, Delegation, Discernment, and Diligence (the 4Ds). It focuses on communicating effectively with AI, choosing appropriate tasks for AI assistance, evaluating AI-generated outputs, and using AI responsibly and thoughtfully in real-world work.",
          url: "https://drive.google.com/file/d/1_D3oj5c3nPfqR-2P088b6fowhrZBXkC8/view?usp=sharing"
        },
        {
          id: "c-1787102323279",
          title: "Introduction to Claude Cowork",
          date: "2026",
          description: "An introductory course on using Claude Cowork to work with files, documents, and real-world tasks through AI-assisted workflows. It covers how to set up and use Cowork, delegate tasks to Claude, manage context and files, and build practical workflows that improve productivity and task execution.",
          url: "https://drive.google.com/file/d/1rq-5x7b8McuecXJIV78zzxj1ixCn5B2u/view?usp=sharing"
        },
        {
          id: "c-1787102383633",
          title: "AI Capabilities and Limitations",
          date: "2026",
          description: "A foundational course exploring what modern AI can and cannot do, including its strengths in reasoning, generation, analysis, automation, and problem-solving, alongside limitations such as hallucinations, bias, context constraints, and reliability. It emphasizes using AI with appropriate judgment, verification, and realistic expectations.",
          url: "https://drive.google.com/file/d/10Q6sZ5V9s5QxknxkgrDsdlqengcjwiU1/view?usp=sharing"
        },
        {
          id: "c-1787102473605",
          title: "AI Fluency for students",
          date: "2026",
          description: "A practical course designed to help students use AI effectively and responsibly in learning, research, problem-solving, and academic work. It focuses on developing strong prompting, critical evaluation, collaboration with AI, and responsible decision-making while maintaining academic integrity and human judgment.",
          url: "https://drive.google.com/file/d/1zsm6LKFrUVJUKtbY7qB70Rp08Ll_L20E/view?usp=sharing"
        },
        {
          id: "c-1787102531343",
          title: "AI Fluency for Small Businesses",
          date: "2026",
          description: "AI Fluency for Small Businesses — A practical course focused on applying AI to small-business workflows such as research, content creation, customer support, analysis, and process automation. It emphasizes identifying high-value AI use cases, delegating tasks effectively, evaluating outputs, and adopting AI responsibly to improve productivity and decision-making.",
          url: "https://drive.google.com/file/d/17GHcotY7T784SVkpWR30jOZMA_97aRyj/view?usp=sharing"
        },
        {
          id: "c-1787102571803",
          title: "AI Fluency for educators",
          date: "2026",
          description: "A practical course focused on helping educators integrate AI effectively and responsibly into teaching, lesson planning, assessment, research, and academic workflows. It emphasizes thoughtful AI collaboration, evaluating AI outputs, maintaining educational integrity, and using AI to enhance—not replace—human expertise and judgment.",
          url: "https://drive.google.com/file/d/1Dat_N9iJKi35dRpzuD9qTqw2MfaprcxN/view?usp=sharing"
        },
        {
          id: "c-1787102668625",
          title: "Teaching AI Fluency",
          date: "2026",
          description: "A practical course focused on helping educators and facilitators teach others how to use AI effectively, critically, and responsibly. It covers approaches for explaining AI concepts, developing practical AI skills, designing learning activities, and guiding learners in applying AI with sound judgment and human oversight.",
          url: "https://drive.google.com/file/d/1HM15gN4RxsvREx6ro2Vg93-lzYvyNjPn/view?usp=sharing"
        },
        {
          id: "c-1787102742898",
          title: "AI Fluency for nonprofits",
          date: "2026",
          description: "A practical course focused on helping nonprofit organizations use AI effectively and responsibly for tasks such as research, communication, fundraising, program planning, and operational efficiency. It emphasizes identifying meaningful AI use cases, evaluating outputs, protecting sensitive information, and applying AI with human judgment and organizational purpose.",
          url: "https://drive.google.com/file/d/17WrWSt8BZe-tLD9LUO0zVO4Dh_GsvUAU/view?usp=sharing"
        },
        {
          id: "c-1787102803337",
          title: "AI Fluency for Builders",
          date: "2026",
          description: "A practical course focused on helping developers and technical practitioners use AI effectively throughout the software development lifecycle. It covers AI-assisted coding, problem-solving, debugging, research, workflow automation, and evaluating AI-generated technical outputs while maintaining strong engineering judgment and oversight.",
          url: "https://drive.google.com/file/d/1wjaqegr4GUjhcdgf1pVx6_x_P4sv313_/view?usp=sharing"
        }
      ]
    },
    {
      id: "org-1787102922193",
      name: "Anthropic AI Engineerinng Track",
      badgeCount: "10 Courses",
      description: "Advanced LLM Integration, Model Context Protocol, and Claude API Architecture",
      courses: [
        {
          id: "c-1787102922193",
          title: "Claude Code 101",
          date: "2026",
          description: "Claude Code 101 — An introductory course on using Claude Code as an AI-powered coding assistant for software development. It covers working with codebases, giving effective coding instructions, navigating and modifying projects, debugging, running development tasks, and integrating AI into practical engineering workflows.",
          url: "https://drive.google.com/file/d/1xeLP5PXmWa5AcVX2ebFwx_Sf9MqZtb9m/view?usp=sharing"
        },
        {
          id: "c-1787103054488",
          title: "Claude Code in Action",
          date: "2026",
          description: "A practical, hands-on course focused on using Claude Code for real-world software development workflows. It explores how to collaborate with Claude on codebases, implement features, debug issues, refactor code, use development tools, and manage larger engineering tasks through effective AI-assisted workflows.",
          url: "https://drive.google.com/file/d/1IvPGP-nJFXkc4gfm84aBhYWR3I5ToIgG/view?usp=sharing"
        },
        {
          id: "c-1787103105840",
          title: "Claude Platform 101",
          date: "2026",
          description: "An introductory course to Anthropic’s Claude platform and its developer ecosystem. It covers the fundamentals of working with Claude through APIs and tools, understanding models and capabilities, building AI-powered applications, managing prompts and context, and applying Claude effectively in software development workflows.",
          url: "https://drive.google.com/file/d/1R7avTLJOC73yu-lUIbTTpO-CFrsWm9bS/view?usp=sharing"
        },
        {
          id: "c-1787103155803",
          title: "Building with the Claude API",
          date: "2026",
          description: "A practical course focused on developing AI-powered applications using Anthropic’s Claude API. It covers API fundamentals, authentication, requests and responses, prompt design, model interaction, structured outputs, tool use, and integrating Claude into real-world software applications.",
          url: "https://drive.google.com/file/d/1dcShFt3VqNHXcs100nk2G3ZQyQ07e1l2/view?usp=sharing"
        },
        {
          id: "c-1787103359196",
          title: "Introduction to Model Context Protocol",
          date: "2026",
          description: "An introductory course explaining how MCP enables AI models to securely connect with external tools, data sources, and services through a standardized interface. It covers core MCP concepts, architecture, servers, tools, resources, and practical use cases for building more capable AI applications and agents.",
          url: "https://drive.google.com/file/d/1Esos5LMiZF35OhUWfWugM0CpF8SCF-12/view?usp=sharing"
        },
        {
          id: "c-1787103422139",
          title: "Model Context Protocol: Advanced Topics",
          date: "2026",
          description: "An advanced course covering deeper MCP concepts for building robust AI integrations. It explores advanced server and tool design, resource handling, authentication and security considerations, context management, and patterns for connecting AI models with external systems reliably and at scale.",
          url: "https://drive.google.com/file/d/1VQy8dwlwEZP7kokeTCd81BDTHRqH9-03/view?usp=sharing"
        },
        {
          id: "c-1787103471544",
          title: "Introduction to agent skills",
          date: "2026",
          description: "An introductory course on designing and using reusable skills that extend AI agents with specialized capabilities, workflows, and domain knowledge. It covers how agent skills are structured, how agents discover and apply them, and how to create practical, reliable skill-based workflows for real-world tasks.",
          url: "https://drive.google.com/file/d/1Z8f4pFBIsionMq4c6sUmNQAYyhV3ls00/view?usp=sharing"
        },
        {
          id: "c-1787103539234",
          title: "Introduction to subagents",
          date: "2026",
          description: "An introductory course on using specialized subagents to divide complex tasks into smaller, focused workflows. It covers how subagents operate, when to delegate tasks to them, how they collaborate with a primary agent, and how subagent-based architectures can improve efficiency, reliability, and task management.",
          url: "https://drive.google.com/file/d/1dhJpivhJLRWomLEobWZm8HCSi7MxL3Sb/view?usp=sharing"
        },
        {
          id: "c-1787103597858",
          title: "Claude with Amazon Bedrock",
          date: "2026",
          description: "A practical course on accessing and integrating Anthropic’s Claude models through Amazon Bedrock. It covers the fundamentals of using Claude within AWS, API-based model interaction, application development, and key considerations for deploying Claude-powered solutions in cloud environments.",
          url: "https://drive.google.com/file/d/1V3UDf3k0kIXxZQr--fNQb__Binlr8P_s/view?usp=sharing"
        },
        {
          id: "c-1787103666101",
          title: "Claude with Google Cloud's Vertex AI",
          date: "2026",
          description: "A practical course on accessing and integrating Anthropic’s Claude models through Google Cloud’s Vertex AI platform. It covers model access, API usage, authentication, application development, and deploying Claude-powered solutions within Google Cloud environments.",
          url: "https://drive.google.com/file/d/1AT-obJChw--LkLjqgdsAXxseY8AwyAPk/view?usp=sharing"
        }
      ]
    }
  ],
  certificates: [],
  currentFocus: {
    fypTitle: "NiHA — Conversational AI with Episodic Memory",
    fypDescription: "NiHA is a conversational AI capstone project that explores how an AI system can move beyond stateless question-answering by maintaining, retrieving, and utilizing meaningful experiences from previous interactions. The primary focus is episodic memory, enabling NiHA to recognize relevant past experiences and use them to provide more context-aware responses.\n\nThe system follows a modular, layered architecture. User interactions pass through the frontend and security gateway, followed by a textual perception layer that interprets and prepares incoming information. An orchestration layer coordinates reasoning, memory retrieval, and tool usage. Working memory manages short-term conversational context, while the Experience Vault stores long-term episodic memories using embeddings and vector search. The architecture can also connect to external tools and APIs when additional information or actions are required.\n\nThis separation of responsibilities makes NiHA easier to develop, test, extend, and maintain, while providing a practical foundation for experimenting with memory-driven and agentic AI behavior.",
    learningGoals: [
      "Understand AI Memory: Explore how episodic memory, working memory, embeddings, and retrieval can give NiHA persistent contextual awareness.",
      "Build Modular AI Architecture: Develop NiHA as independent components for perception, security, orchestration, memory, and external tools.",
      "Master Modern AI Engineering: Gain practical experience with FastAPI, ASP.NET Core, React, Redis, vector databases, Docker, and LLM orchestration.",
      "Experiment & Evaluate: Continuously test NiHA’s retrieval, reasoning, and agentic behavior to understand what works and improve it iteratively.",
      "Engineer for Real-World Use: Focus on secure APIs, scalability, maintainability, observability, and clean service boundaries throughout development."
    ]
  }
};

export function getPortfolioData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : initialPortfolioData;
  } catch (e) {
    return initialPortfolioData;
  }
}

export async function fetchPortfolioDataAsync() {
  try {
    const res = await fetch(API_URL);
    if (res.ok) {
      const json = await res.json();
      if (json.data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(json.data));
        return json.data;
      }
    }
  } catch (err) {
    console.warn('[Public App] Backend API offline, using local cache');
  }
  return getPortfolioData();
}
