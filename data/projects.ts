export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  category: "ERP" | "Full Stack" | "Systems" | "Networking" | "UI/UX";
  technologies: string[];
  overview: string;
  problem: string;
  businessNeed: string;
  solution: string;
  features: string[];
  technicalDecisions: string[];
  databaseDesign?: string;
  challenges: string[];
  lessonsLearned: string[];
  outcomes: string[];
  futureImprovements: string[];
  githubLink?: string;
  liveDemo?: string;
  gallery?: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "carshow-erp",
    title: "CarShow ERP",
    shortDescription: "Full-stack ERP system for luxury car rental & dealership management",
    category: "ERP",
    technologies: ["Next.js", "TypeScript", "Python", "MySQL"],
    overview: "Put together a complete ERP system so auto businesses could finally manage their fleets, CRM, and accounting all in one place.",
    problem: "Car rental and dealership businesses often rely on scattered tools, leading to accounting errors and poor fleet visibility.",
    businessNeed: "To centralize operations in a unified ERP tying together fleet, CRM, and a strict accounting ledger.",
    solution: "Created a clean Next.js dashboard that tied together 4 major business operations, supported by a bulletproof MySQL database, making the daily workflow way smoother.",
    features: [
      "Fleet Management: Vehicle inventory and tracking.",
      "CRM: Customer management and relations.",
      "Double-Entry Ledger: Strict financial accounting.",
      "Unified Dashboard: 4 major business operations in one place."
    ],
    technicalDecisions: [
      "Designed a bulletproof MySQL database (over 20 tables) with a strict double-entry ledger so the money tracking is always 100% spot on.",
      "Created a clean Next.js dashboard that tied together 4 major business operations."
    ],
    databaseDesign: "Over 20 tables forming a bulletproof MySQL database with a strict double-entry ledger.",
    challenges: [
      "Designing an accurate double-entry accounting system within the ERP.",
      "Tying together multiple distinct business operations into a single seamless dashboard."
    ],
    lessonsLearned: [
      "Mastered designing robust relational databases for financial accuracy.",
      "Improved ability to build cohesive full-stack solutions."
    ],
    outcomes: [
      "Delivered a complete ERP system that unifies fleets, CRM, and accounting.",
      "Achieved 100% spot-on money tracking with the double-entry ledger."
    ],
    futureImprovements: [
      "Add advanced predictive analytics for fleet maintenance.",
      "Expand the CRM module with automated marketing campaigns."
    ],
    githubLink: "https://github.com/Hadi-Nossair"
  },
  {
    slug: "lumos-library-erp",
    title: "Lumos Library",
    shortDescription: "Full-stack digital library with JWT auth, e-book reader, and desktop EXE.",
    category: "Full Stack",
    technologies: ["React", "Vite", "Tailwind CSS", "Flask", "SQLite", "JWT", "PyInstaller"],
    overview: "Built the core system for Lumos Library, a full-stack digital library ERP with role-based access, book borrowing with fine calculation, an in-browser PDF e-reader, and a PyInstaller desktop EXE packaging.",
    problem: "Libraries require complex handling of physical book lending, fine tracking, digital asset management (PDFs), and strict role-based access control.",
    businessNeed: "A production-ready ERP system handling physical and digital assets, accessible both via the web and as a bundled desktop application.",
    solution: "Developed a full-stack application using a Flask/SQLite REST API and a React/Vite SPA. Packaged the entire platform into a single desktop executable using PyInstaller.",
    features: [
      "Role-Based Access Control (Admin, Librarian, Member)",
      "Book borrowing system with fine calculation and status tracking",
      "In-browser PDF e-reader and cover image uploads",
      "Real-time Admin Dashboard with usage stats",
      "Desktop Distribution (Bundled PyInstaller EXE)"
    ],
    technicalDecisions: [
      "Utilized Flask and SQLAlchemy for a robust, organized REST API.",
      "Implemented strict JWT middleware and bcrypt hashing for RBAC security.",
      "Packaged the frontend React app and backend Flask API into a single click PyInstaller EXE."
    ],
    challenges: [
      "Bundling a modern SPA and a Python backend into a seamless desktop executable.",
      "Designing state management across Admin, Librarian, and Member protected routes."
    ],
    lessonsLearned: [
      "Mastered PyInstaller distribution for complex web-stack apps.",
      "Deepened expertise in JWT token lifecycles and role-based middleware."
    ],
    outcomes: [
      "Successfully deployed a fully functional library ERP with over 30 API endpoints.",
      "Created an animated technical documentation portal (GSAP) and smooth desktop distribution."
    ],
    futureImprovements: [
      "Integrate automated email notifications for overdue books.",
      "Migrate to PostgreSQL for larger-scale enterprise deployments."
    ],
    gallery: [
      { src: "/images/projects/lumos-library/lumos_dashboard_overview.png", alt: "Lumos Dashboard Overview", title: "Admin Dashboard", description: "Real-time statistics for books, users, borrowings, and overdue fines." },
      { src: "/images/projects/lumos-library/lumos_ebook_reader.png", alt: "Lumos PDF Reader", title: "In-Browser PDF Reader", description: "Read digital books directly within the Lumos Library platform." },
      { src: "/images/projects/lumos-library/lumos_borrowings_page.png", alt: "Borrowings Page", title: "Borrowing System", description: "Track physical book checkouts, returns, and overdue fines." },
      { src: "/images/projects/lumos-library/lumos_book_detail_universe.png", alt: "Book Detail Universe", title: "Cinematic Book Detail", description: "Magical-themed React UI for discovering books." }
    ]
  },
  {
    slug: "lumina-mixed-reality",
    title: "LUMINA — Mixed Reality Platform",
    shortDescription: "Cinematic UI/UX design system for an immersive digital library & e-reading app.",
    category: "UI/UX",
    technologies: ["Figma-to-HTML", "HTML/CSS", "Design Systems", "Glassmorphism", "CSS Animations"],
    overview: "Designed the product vision for LUMINA: a 63-screen mixed-reality digital reading platform. It reimagines how people discover and experience books by blending Netflix-style UX with immersive, genre-based environments.",
    problem: "Traditional e-readers and digital libraries often feel sterile and purely functional, lacking the immersive emotion of reading a great story.",
    businessNeed: "To conceptualize a next-generation reading platform that treats books like cinematic universes (Fantasy, Sci-Fi, Horror).",
    solution: "Designed an expansive UI/UX prototype spanning 63 standalone HTML screens, featuring a cinematic dark theme, glassmorphism, particle animations, and split-reality genre transitions.",
    features: [
      "Mixed Reality Hub linking Fantasy, Sci-Fi, Horror, and Romance worlds.",
      "Immersive Genre Portals acting as fully themed Netflix-style categories.",
      "Reading Modes: Custom psychology, horror, and magical immersive readers.",
      "Social & AI: Book Club, Lore Wiki, Character Maps, and AI Recommendations.",
      "Multiverse E-Commerce Checkout Flow."
    ],
    technicalDecisions: [
      "Used a cinematic dark theme (Void #020205) with Gold, Cyan, and Purple neon glows.",
      "Employed the Cinzel display font for fantasy elements, and Plus Jakarta Sans for crisp UI legibility.",
      "Built the concept using a desktop-first (1440px) approach with Figma-to-HTML translation."
    ],
    challenges: [
      "Scaling the design system across 63 unique but cohesive screens.",
      "Translating complex mixed-reality and immersive concepts into structured 2D HTML/CSS UI components."
    ],
    lessonsLearned: [
      "Perfected advanced UI techniques like Glassmorphism and CSS particle effects.",
      "Gained deep insight into complex Information Architecture for multi-layered platforms."
    ],
    outcomes: [
      "Produced a complete, AAA-quality UI/UX concept that serves as the visionary blueprint for the Lumos Library implementation."
    ],
    futureImprovements: [
      "Fully implement the Mixed Reality and WebXR transitions in React/Three.js.",
      "Hook up the UI concept to the live Lumos Library REST API."
    ],
    liveDemo: "/lumina/index.html",
    gallery: [
      { src: "/images/projects/lumina/hero_mixed_reality.png", alt: "LUMINA Hero", title: "Mixed Reality Hub", description: "The central hub blending different genre universes." },
      { src: "/images/projects/lumina/multiverse_map.png", alt: "Multiverse Map", title: "Immersive Navigation", description: "Discovering books through a cinematic multiverse map." },
      { src: "/images/projects/lumina/horror_hero_bg.png", alt: "Horror World", title: "Horror Portal", description: "A dedicated immersive environment for horror literature." },
      { src: "/images/projects/lumina/media2.png", alt: "App Interface", title: "Platform UI", description: "Dark mode cinematic design system in action." }
    ]
  },
  {
    slug: "shakos-os",
    title: "Shakos — Smart Restaurant OS",
    shortDescription: "Offline-first restaurant operating system unifying POS, inventory, and kitchen display.",
    category: "Full Stack",
    technologies: ["React", "Zustand", "Vite", "IndexedDB", "Recharts", "PWA"],
    overview: "Built a complete restaurant management OS featuring six domain-driven modules: POS Checkout, Dashboard BI, Inventory & BOM, Kitchen Display (KDS), Shift Management, and Menu Maker.",
    problem: "Restaurants suffer from disjointed systems (separate POS, inventory, and accounting apps) and internet instability causing checkout downtime.",
    businessNeed: "A unified, offline-first system where a frontend sale immediately triggers a backend inventory deduction, while maintaining strict cash drawer reconciliation and tax compliance.",
    solution: "Developed an offline-first React PWA powered by IndexedDB and a domain-driven Zustand state architecture. Implemented an event-driven orchestrator handling complex checkouts, BOM auto-deductions, and background sync queues.",
    features: [
      "Offline-first POS checkout with Command Palette (⌘K) shortcuts.",
      "Dual-currency support (USD/EGP), split payments, and dynamic tax/service charge calculations.",
      "Inventory Bill of Materials (BOM) with automatic stock deduction on sale.",
      "Kitchen Display System (KDS) for real-time order tracking.",
      "Strict Shift Management (opening floats, cash drops, expected cash calculations).",
      "Dashboard BI with visual analytics using Recharts.",
      "Egyptian tax-compliance invoice generation."
    ],
    technicalDecisions: [
      "Adopted a domain-driven Zustand architecture (isolated auth, cart, shift, inventory slices) inspired by enterprise patterns.",
      "Engineered an offline-first persistence layer using IndexedDB and a background sync queue to handle internet outages.",
      "Built a complex Checkout Orchestrator that atomically processes financial math, loyalty points, ledger updates, and invoice generation."
    ],
    challenges: [
      "Managing complex, intersecting state across multiple domains without race conditions.",
      "Designing an accurate double-entry style shift ledger running entirely on the client side before syncing."
    ],
    lessonsLearned: [
      "Mastered complex global state management and domain-driven design in React.",
      "Gained deep expertise in client-side persistence and offline-first PWA architectures."
    ],
    outcomes: [
      "Delivered a robust, production-ready OS capable of running a restaurant end-to-end without constant internet access."
    ],
    futureImprovements: [
      "Implement real-time cloud syncing via WebSockets when online.",
      "Add multi-branch support and centralized cloud reporting."
    ],
    githubLink: "https://github.com/Hadi-Nossair"
  }
];
