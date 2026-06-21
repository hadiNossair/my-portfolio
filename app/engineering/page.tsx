import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Philosophy | Hadi Nossair",
  description: "An exploration of architecture decisions, trade-offs, and product engineering principles by Hadi Nossair.",
};

export default function EngineeringPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFC] selection:bg-indigo-500/30 font-serif text-neutral-800">
      {/* Header Section */}
      <header className="w-full py-24 px-6 border-b border-neutral-200 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-6">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-sans font-semibold text-sm tracking-widest uppercase flex items-center gap-2 mb-4 w-fit transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Portfolio
          </Link>
          <h1 className="text-5xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.1]">
            Engineering Philosophy & <br className="hidden md:block"/>
            <span className="text-indigo-700">Architecture Decisions.</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl leading-relaxed mt-4 font-sans">
            A reflective notebook on building business systems, managing technical trade-offs, and prioritizing product thinking over premature abstraction.
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16 relative">
        
        {/* Sticky Sidebar (Table of Contents) */}
        <aside className="hidden lg:block w-1/4 shrink-0 font-sans">
          <div className="sticky top-32 flex flex-col gap-4 text-sm font-medium text-neutral-500 border-l border-neutral-200 pl-4">
            <a href="#principles" className="hover:text-indigo-600 transition-colors">Engineering Principles</a>
            <a href="#decisions" className="hover:text-indigo-600 transition-colors">Architecture Decisions</a>
            <a href="#trade-offs" className="hover:text-indigo-600 transition-colors">Trade-Offs</a>
            <a href="#research-notes" className="hover:text-indigo-600 transition-colors">Research Notes</a>
            <a href="#product-ux" className="hover:text-indigo-600 transition-colors">Product Thinking & UX</a>
            <a href="#case-studies" className="hover:text-indigo-600 transition-colors">Case Studies</a>
            <a href="#timeline" className="hover:text-indigo-600 transition-colors">Engineering Timeline</a>
            <a href="#mistakes" className="hover:text-red-600 transition-colors text-red-500/80">Mistakes I Made</a>
            <a href="#future" className="hover:text-indigo-600 transition-colors">Future Directions</a>
            <a href="#references" className="hover:text-indigo-600 transition-colors">Books & Publications</a>
          </div>
        </aside>

        {/* Article Content */}
        <article className="w-full lg:w-3/4 max-w-3xl flex flex-col gap-24 leading-relaxed text-lg">
          
          {/* SECTION: Principles */}
          <section id="principles" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-8">Engineering Principles</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans">
              {[
                "Simplicity", "Maintainability", "Explicitness", "Reliability", 
                "Separation of Concerns", "Business-First Thinking", "Long-Term Scalability", "Operational Clarity"
              ].map((principle) => (
                <div key={principle} className="bg-neutral-50 border border-neutral-200 text-neutral-700 text-sm font-medium p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                  {principle}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: Decisions */}
          <section id="decisions" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-8">Architecture Decisions</h2>
            
            <div className="space-y-12">
              {/* Why SQL */}
              <div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Why Relational Databases (SQL)?</h3>
                <p className="mb-4">
                  Most enterprise and business systems deal inherently with structured data and strict relationships. Whether it's a double-entry accounting ledger in an ERP or an inventory BOM (Bill of Materials), the data must remain consistent.
                </p>
                <p className="mb-4">
                  I prioritize relational databases because they enforce constraints at the lowest level. A well-designed schema using primary/foreign keys prevents orphaned records and maintains transactional integrity (ACID properties), which is non-negotiable for systems tracking finances or physical inventory.
                </p>
                <div className="pl-6 border-l-4 border-indigo-200 mt-6 bg-indigo-50/30 py-2 pr-4 rounded-r-lg">
                  <h4 className="text-neutral-900 font-semibold mb-2">Why Database Normalization?</h4>
                  <p className="text-base text-neutral-700">
                    I rely heavily on 3NF (Third Normal Form) to eliminate update, insertion, and deletion anomalies. By ensuring each piece of data is stored in exactly one place, the system becomes significantly easier to maintain, dramatically reducing the surface area for bugs when business rules change.
                  </p>
                </div>
              </div>

              {/* Why Flask */}
              <div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Why Explicitness Matters (Flask & REST APIs)</h3>
                <p className="mb-4">
                  There is immense value in understanding exactly what happens under the hood. While large frameworks abstract away the complexities of HTTP requests, they often obscure the request lifecycle. I prefer Flask because of its explicit nature.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-neutral-700">
                  <li><strong className="text-neutral-900">Explicitness:</strong> Flask forces me to explicitly wire routing, database connections, and middleware. There is no "magic."</li>
                  <li><strong className="text-neutral-900">Dependency Injection:</strong> It allows me to build custom decorators for strict Role-Based Access Control (RBAC) and cleanly inject dependencies where needed.</li>
                  <li><strong className="text-neutral-900">Request Lifecycle:</strong> Managing the exact flow from `before_request` to `after_request` is critical for auditing and logging in business systems.</li>
                </ul>
                <p>
                  REST APIs enforce a clean separation of concerns. The frontend becomes a stateless consumer, and the backend becomes a pure data and logic provider. This contract ensures the application can scale and evolve independently.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: Trade-Offs */}
          <section id="trade-offs" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-8">Trade-Offs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
              
              <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold text-neutral-900 mb-4 border-b border-neutral-100 pb-4">JWT vs Session Auth</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Decision</span>
                    <p className="text-neutral-900 font-semibold mt-1">JWT (JSON Web Tokens)</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Reasoning</span>
                    <p className="text-sm text-neutral-600 mt-1">
                      Strict frontend and backend separation. By using stateless JWTs, the backend REST API remains completely stateless. This makes it trivial to serve multiple clients without managing server-side session state.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold text-neutral-900 mb-4 border-b border-neutral-100 pb-4">SSR vs CSR</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Decision</span>
                    <p className="text-neutral-900 font-semibold mt-1">CSR-first with API Backend</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Reasoning</span>
                    <p className="text-sm text-neutral-600 mt-1">
                      While SSR is excellent for SEO, ERP systems and business dashboards are highly interactive applications hidden behind authentication. CSR using React provides a snappier, app-like experience for daily operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold text-neutral-900 mb-4 border-b border-neutral-100 pb-4">SQLite vs MySQL</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Decision</span>
                    <p className="text-neutral-900 font-semibold mt-1">MySQL</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Reasoning</span>
                    <p className="text-sm text-neutral-600 mt-1">
                      Enterprise systems demand high concurrency, row-level locking, and strict relational consistency under heavy read/write loads. MySQL handles concurrent financial transactions flawlessly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold text-neutral-900 mb-4 border-b border-neutral-100 pb-4">Monolith vs Microservices</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Decision</span>
                    <p className="text-neutral-900 font-semibold mt-1">Modular Monolith First</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Reasoning</span>
                    <p className="text-sm text-neutral-600 mt-1">
                      Avoiding the "Microservice Premium". For early-stage products and internal ERPs, a well-structured monolith with clean internal boundaries provides 90% of the benefits with 10% of the overhead.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION: Research Notes */}
          <section id="research-notes" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-8">Research Notes</h2>
            <div className="space-y-12">
              
              <div className="relative pl-8 border-l-2 border-neutral-300 before:absolute before:-left-2 before:top-1 before:w-4 before:h-4 before:bg-white before:border-2 before:border-indigo-500 before:rounded-full">
                <h3 className="text-xl font-bold text-neutral-900">Transaction Integrity in Enterprise Systems</h3>
                <div className="mt-4 space-y-3 font-sans text-sm">
                  <p><strong className="text-neutral-900">Reference:</strong> Oracle Database Concepts</p>
                  <p><strong className="text-neutral-900">Key Idea:</strong> ACID transactions ensure consistency and prevent partial updates.</p>
                  <p><strong className="text-neutral-900">Applied In:</strong> CarShow ERP.</p>
                  <p><strong className="text-neutral-900">My Interpretation:</strong> Financial systems cannot tolerate inconsistent records. An orphaned invoice is an operational failure.</p>
                  <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                    <strong className="text-indigo-700">What I Changed:</strong> I preferred strict relational schemas and actively avoided eventual consistency models for financial ledgers.
                  </div>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-neutral-300 before:absolute before:-left-2 before:top-1 before:w-4 before:h-4 before:bg-white before:border-2 before:border-indigo-500 before:rounded-full">
                <h3 className="text-xl font-bold text-neutral-900">REST Resource Naming</h3>
                <div className="mt-4 space-y-3 font-sans text-sm">
                  <p><strong className="text-neutral-900">Reference:</strong> Microsoft REST API Guidelines</p>
                  <p><strong className="text-neutral-900">Key Idea:</strong> URIs should represent resources using nouns rather than verbs.</p>
                  <p><strong className="text-neutral-900">Applied In:</strong> Lumos Library API.</p>
                  <p><strong className="text-neutral-900">My Interpretation:</strong> Predictable, noun-based APIs drastically reduce frontend complexity and cognitive load for the team.</p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-neutral-300 before:absolute before:-left-2 before:top-1 before:w-4 before:h-4 before:bg-white before:border-2 before:border-indigo-500 before:rounded-full">
                <h3 className="text-xl font-bold text-neutral-900">Domain Modeling</h3>
                <div className="mt-4 space-y-3 font-sans text-sm">
                  <p><strong className="text-neutral-900">Reference:</strong> Domain-Driven Design — Eric Evans</p>
                  <p><strong className="text-neutral-900">Key Idea:</strong> Align code structures with actual business terminology (Ubiquitous Language).</p>
                  <p><strong className="text-neutral-900">Applied In:</strong> Shakos OS.</p>
                  <p><strong className="text-neutral-900">My Interpretation:</strong> Business terminology should shape code structure. The inventory module should speak the language of a chef, not a database administrator.</p>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION: Product Thinking & UX */}
          <section id="product-ux" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-8">Product Thinking & UX</h2>
            <div className="space-y-6">
              <p>
                I believe software should provide tangible value, not just functionality. Engineering is half the equation; the other half is understanding the human executing the task.
              </p>
              
              <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-2xl mt-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">User Needs vs Business Needs (The Shakos OS Example)</h3>
                <p className="text-neutral-700 mb-4">
                  When building <strong className="text-neutral-900">Shakos OS</strong> (a POS and restaurant management system), I learned a critical lesson about UX in enterprise environments. In consumer apps, animations and beautiful colors drive engagement. In a high-traffic restaurant, those things are distractions.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700 font-sans">
                  <li><strong className="text-neutral-900">Cashier Speed:</strong> The primary metric for a POS is the seconds it takes to clear an order. A ⌘K command palette is infinitely more valuable than a beautiful dropdown menu.</li>
                  <li><strong className="text-neutral-900">Training Ease:</strong> High turnover in operations means the UI must be immediately intuitive. Complexity costs money in training hours.</li>
                  <li><strong className="text-neutral-900">Error Reduction:</strong> Large hit targets, high contrast, and clear state confirmations prevent costly billing mistakes. Function dictates form.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION: Timeline */}
          <section id="timeline" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-8">Engineering Timeline</h2>
            <div className="relative border-l border-neutral-300 ml-4 py-4 space-y-12 font-sans">
              
              {[
                { year: "2020", title: "Java + OOP", desc: "The foundation of strict, object-oriented principles." },
                { year: "2021", title: "Oracle Database Foundations", desc: "Learning the critical importance of ACID and data integrity." },
                { year: "2023", title: "3NF Database Design", desc: "Deep dive into enterprise data normalization." },
                { year: "2024", title: "Python + Flask & REST APIs", desc: "Moving to explicit web backend architectures." },
                { year: "2025", title: "University & Product Thinking", desc: "Entered University. Focus shifted to UI/UX and Offline-First Architectures (Shakos OS)." },
                { year: "Future", title: "System Design & Distributed Systems", desc: "Advanced ERPs, Event-Driven workflows, and Cloud Infrastructure." },
              ].map((item, index) => (
                <div key={index} className="relative pl-8">
                  <span className="absolute -left-2 top-1.5 w-4 h-4 bg-white border-2 border-indigo-500 rounded-full shadow-sm" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-1">{item.year}</span>
                    <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                    <p className="text-sm text-neutral-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}

            </div>
          </section>

          {/* SECTION: Mistakes I Made */}
          <section id="mistakes" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-red-700 tracking-tight mb-8">Mistakes I Made</h2>
            <p className="mb-8 text-neutral-700">
              This is perhaps the most important section on this page. Engineering maturity comes from analyzing failures and recalibrating.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
              <div className="bg-red-50/50 border border-red-100 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-red-900 mb-2">Overengineering</h3>
                <p className="text-sm text-red-800/80">
                  In early projects, I focused too much on technical perfection before validating the workflow. Building a perfectly abstracted, infinitely scalable service is a waste of time if the business operation doesn't need it.
                </p>
              </div>
              
              <div className="bg-red-50/50 border border-red-100 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-red-900 mb-2">UI First Thinking</h3>
                <p className="text-sm text-red-800/80">
                  Jumping straight into CSS before understanding the database relations leads to massive refactoring. Understanding operations must absolutely come before designing screens.
                </p>
              </div>

              <div className="bg-red-50/50 border border-red-100 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-red-900 mb-2">State Synchronization Complexity</h3>
                <p className="text-sm text-red-800/80">
                  Offline-first systems (Shakos OS) are harder than they appear. Reconciling a local IndexedDB ledger with a remote database after an outage involves handling race conditions that I initially underestimated.
                </p>
              </div>

              <div className="bg-red-50/50 border border-red-100 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-red-900 mb-2">Premature Abstraction</h3>
                <p className="text-sm text-red-800/80">
                  Not every project needs complex architecture. Writing procedural, straightforward code is often better than burying logic under layers of generic classes that confuse the next developer.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: Future */}
          <section id="future" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-8">Future Directions</h2>
            <div className="flex flex-wrap gap-3 font-sans">
              {[
                "Advanced ERP Systems", "Distributed Workflows", "Real-Time Synchronization", 
                "Cloud Infrastructure", "System Design", "Rule Engines", 
                "Observability", "Performance Optimization"
              ].map((topic) => (
                <span key={topic} className="px-4 py-2 bg-white border border-neutral-200 text-neutral-800 rounded-full text-sm font-medium shadow-sm">
                  {topic}
                </span>
              ))}
            </div>
          </section>

          {/* SECTION: References & Papers */}
          <section id="references" className="scroll-mt-32 border-t border-neutral-200 pt-16">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-8">Books, Publications & Papers</h2>
            <p className="mb-12 text-neutral-700">
              My engineering philosophy is heavily influenced by the technical literature, academic publications, and engineering cultures of industry leaders.
            </p>

            <div className="space-y-12">
              
              {/* Category: Papers */}
              <div>
                <h3 className="text-xl font-bold text-indigo-700 mb-6 uppercase tracking-widest text-sm font-sans border-b border-neutral-200 pb-2">Research Papers</h3>
                
                <div className="bg-white border border-neutral-200 p-6 rounded-2xl mb-4 font-sans shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-neutral-900 font-bold text-lg">The Future of ERP Systems</h4>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded">IEEE</span>
                  </div>
                  <p className="text-neutral-800 text-sm mb-3"><strong className="text-neutral-900">Key Idea:</strong> Workflow-driven architectures improve maintainability.</p>
                  <p className="text-neutral-600 text-sm mb-4"><strong className="text-neutral-900">Applied In:</strong> CarShow ERP.</p>
                  <div className="bg-neutral-50 p-4 rounded-lg text-sm border border-neutral-100">
                    <strong className="text-indigo-700 block mb-1">My Notes:</strong>
                    I agreed with the emphasis on modularity but preferred simpler boundaries to avoid architectural bloat in mid-sized businesses.
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 p-6 rounded-2xl mb-4 font-sans shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-neutral-900 font-bold text-lg">Database Design Principles for Enterprise Systems</h4>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded">ACM</span>
                  </div>
                  <p className="text-neutral-600 text-sm mb-4"><strong className="text-neutral-900">Applied In:</strong> Shakos OS.</p>
                  <div className="bg-neutral-50 p-4 rounded-lg text-sm border border-neutral-100">
                    <strong className="text-indigo-700 block mb-1">My Notes:</strong>
                    Applied normalization techniques to reduce duplicated inventory records across multiple domain modules.
                  </div>
                </div>
              </div>

              {/* Category: Books */}
              <div>
                <h3 className="text-xl font-bold text-indigo-700 mb-6 uppercase tracking-widest text-sm font-sans border-b border-neutral-200 pb-2">Books & Engineering Blogs</h3>
                
                <ul className="space-y-4 font-sans text-neutral-700">
                  <li className="flex flex-col">
                    <strong className="text-neutral-900 text-lg">Patterns of Enterprise Application Architecture</strong>
                    <span className="text-sm text-neutral-500">Martin Fowler</span>
                  </li>
                  <li className="flex flex-col">
                    <strong className="text-neutral-900 text-lg">Domain-Driven Design</strong>
                    <span className="text-sm text-neutral-500">Eric Evans</span>
                  </li>
                  <li className="flex flex-col">
                    <strong className="text-neutral-900 text-lg">Clean Architecture</strong>
                    <span className="text-sm text-neutral-500">Robert C. Martin</span>
                  </li>
                  <li className="flex flex-col">
                    <strong className="text-neutral-900 text-lg">Stripe & Vercel Engineering Blogs</strong>
                    <span className="text-sm text-neutral-500">For product & UX insights</span>
                  </li>
                </ul>
              </div>

            </div>
          </section>

        </article>
      </div>
    </div>
  );
}
