/*
 * YOUR WEBSITE CONTENT — edit this file whenever you earn a new achievement.
 * Save/commit the file on GitHub; GitHub Pages will publish the change.
 * You can leave links blank until you are ready to share them.
 * IMPORTANT: Only publish professional details you want on the public internet.
 */
window.PORTFOLIO = {
  person: {
    name: "Sunday Awine",
    initials: "SA",
    title: "Cloud Systems & Cybersecurity Researcher",
    affiliation: "Florida A&M University",
    location: "Tallahassee, Florida",
    headline: "Building smarter systems for a connected world.",
    introduction: "I study how distributed and edge-cloud systems can allocate resources efficiently, adapt to changing workloads, and operate reliably. My research brings together intelligent scheduling, reinforcement learning, cloud infrastructure, and cybersecurity.",
    bio: [
      "I am a graduate student in Cybersecurity at Florida A&M University, with a B.S. in Computer Science earned cum laude in 2025.",
      "My research centers on cloud and edge resource orchestration, distributed systems, and learning-based decision making. I explore practical systems questions: what to schedule, where to run it, and how to meet performance, energy, and cost constraints under changing demand.",
      "My broader interests include trustworthy computing, post-quantum cryptography education, and reproducible systems experimentation. This website documents selected research, publications, academic service, and milestones."
    ],
    education: [
      { degree: "M.S. in Cybersecurity", institution: "Florida A&M University", period: "2025 — Expected Spring 2027", detail: "Graduate study and research in distributed computing and security." },
      { degree: "B.S. in Computer Science", institution: "Florida A&M University", period: "Graduated 2025", detail: "Cum Laude · Dean's List · Honor Roll." }
    ],
    experience: [
      { title: "Graduate Research Assistant", organization: "Florida A&M University", period: "Research", description: "Research in cloud resource management and related computing topics." },
      { title: "Mathematics Tutor", organization: "Florida A&M University", period: "Academic support", description: "Supported students studying college algebra and precalculus." },
      { title: "IEEE Conference Reviewer", organization: "IEEE WF-PST 2026", period: "2026", description: "Reviewed three conference submissions." }
    ],
    email: "",           // Example: "your.email@example.com"
    github: "",          // Example: "https://github.com/your-username"
    linkedin: "",        // Example: "https://www.linkedin.com/in/your-profile/"
    scholar: "",         // Example: "https://scholar.google.com/citations?user=..."
    orcid: "",           // Example: "https://orcid.org/0000-0000-0000-0000"
    cv: "",              // Example: "assets/Sunday_Awine_CV.pdf" — upload that PDF first
    profileImage: ""     // Example: "assets/profile.jpg" — upload the photo first
  },

  researchAreas: [
    "Cloud & distributed systems",
    "Intelligent resource scheduling",
    "Edge-cloud orchestration",
    "Deep reinforcement learning",
    "Cybersecurity & post-quantum computing"
  ],

  /* The details below are based on previously shared milestones. Confirm titles,
     authorship, status, and public links before publishing the site. */
  publications: [
    { year: 2026, venue: "IEEE CLOUD", title: "Full research paper at IEEE CLOUD 2026", type: "Full paper", role: "First author", status: "Accepted", topic: "Cloud computing", link: "", featured: true },
    { year: 2026, venue: "IEEE ICPADS", title: "Full research paper at IEEE ICPADS 2026", type: "Full paper", role: "First author", status: "Accepted", topic: "Parallel and distributed systems", link: "", featured: true },
    { year: 2026, venue: "IEEE Big Data", title: "Short research paper at IEEE Big Data 2026", type: "Short paper", role: "", status: "Accepted", topic: "Big data research", link: "", featured: true },
    { year: 2026, venue: "IEEE ICC", title: "Research paper at IEEE ICC 2026", type: "Conference paper", role: "Second author", status: "Accepted", topic: "Communications and computing", link: "", featured: false },
    { year: 2026, venue: "ICAIBD", title: "Research paper at ICAIBD 2026", type: "Conference paper", role: "First author", status: "Accepted", topic: "AI and big data", link: "", featured: false },
    { year: 2026, venue: "ACMSE", title: "Research paper at ACM Southeast 2026", type: "Conference paper", role: "First author", status: "Presented", topic: "Computer science", link: "", featured: false },
    { year: 2026, venue: "ICCCBDA", title: "Research paper at ICCCBDA 2026", type: "Conference paper", role: "First author", status: "Presented virtually", topic: "Computing and big data", link: "", featured: false },
    { year: 2026, venue: "DT4HS", title: "Research poster at DT4HS 2026", type: "Poster", role: "", status: "Presented", topic: "Research poster", link: "", featured: false }
  ],

  projects: [
    { id: "hmadrl", label: "01 / CLOUD INTELLIGENCE", title: "H-MADRL", subtitle: "Adaptive resource allocation for stream processing", description: "A hierarchical deep reinforcement learning approach to deciding how Apache Flink workloads should scale and adapt in Kubernetes environments under varying stream demand.", stack: ["Python", "Kubernetes", "Apache Flink", "PPO", "CloudSim Plus"], category: "Cloud", status: "Research", link: "", featured: true, icon: "network" },
    { id: "topofusion", label: "02 / DISTRIBUTED SEARCH", title: "TopoFusion", subtitle: "Topology-aware scheduling for distributed search", description: "Research on scheduling distributed vector and hybrid search operations while accounting for network topology, query costs, and coordination overhead.", stack: ["Qdrant", "Vector search", "HNSW", "Distributed systems"], category: "Distributed", status: "Research", link: "", featured: true, icon: "nodes" },
    { id: "gdt", label: "03 / EDGE INTELLIGENCE", title: "Graph-Based Decision Transformer", subtitle: "Energy-aware task offloading for edge computing", description: "A graph-and-sequence learning framework for task placement decisions that considers DAG dependencies, device energy, and execution latency.", stack: ["PyTorch", "Graph neural networks", "Transformers", "Edge computing"], category: "Edge", status: "Research", link: "", featured: true, icon: "flow" },
    { id: "carbon", label: "04 / SUSTAINABLE COMPUTING", title: "Carbon-Aware Edge Orchestration", subtitle: "Scheduling with carbon and latency constraints", description: "An online task orchestration study combining carbon awareness, delay sensitivity, and bounded contention in edge-cloud fabrics.", stack: ["Optimization", "Lyapunov control", "DAG scheduling", "Python"], category: "Edge", status: "Research", link: "", featured: false, icon: "leaf" },
    { id: "pqc", label: "05 / CYBERSECURITY", title: "Post-Quantum Cryptography Labs", subtitle: "Hands-on experiments in modern cryptography", description: "Educational laboratories exploring key encapsulation, hybrid key exchange, and foundational quantum and post-quantum security concepts.", stack: ["PennyLane", "Python", "ML-KEM", "Cryptography"], category: "Security", status: "Research & education", link: "", featured: false, icon: "shield" },
    { id: "ocr", label: "06 / DOCUMENT INTELLIGENCE", title: "OCR Forensics", subtitle: "Text extraction from challenging thumbnail imagery", description: "Experiments with classical preprocessing and modern OCR methods to evaluate text recovery under image degradation and limited visual detail.", stack: ["Python", "Tesseract", "TrOCR", "PaddleOCR"], category: "AI", status: "Research", link: "", featured: false, icon: "scan" }
  ],

  achievements: [
    { year: 2026, date: "2026", category: "Publication", title: "IEEE Big Data 2026 — Short Paper Accepted", description: "A research contribution accepted as a short paper at IEEE Big Data 2026.", link: "", featured: true },
    { year: 2026, date: "2026", category: "Publication", title: "IEEE ICPADS 2026 — Full Paper Accepted", description: "A regular full research paper accepted at IEEE ICPADS 2026.", link: "", featured: true },
    { year: 2026, date: "2026", category: "Publication", title: "IEEE CLOUD 2026 — Full Paper Accepted", description: "A regular full paper accepted at IEEE CLOUD 2026.", link: "", featured: true },
    { year: 2026, date: "2026", category: "Service", title: "IEEE WF-PST 2026 — Peer Reviewer", description: "Served as a reviewer for three conference papers.", link: "", featured: false },
    { year: 2026, date: "2026", category: "Presentation", title: "ACM Southeast 2026 — Research Presentation", description: "Presented research in person at ACMSE 2026.", link: "", featured: false },
    { year: 2026, date: "2026", category: "Presentation", title: "DT4HS 2026 — Research Poster", description: "Research poster accepted and presented.", link: "", featured: false },
    { year: 2025, date: "2025", category: "Education", title: "B.S. in Computer Science — Cum Laude", description: "Graduated from Florida A&M University with academic honors.", link: "", featured: true },
    { year: 2024, date: "2024", category: "Research", title: "IBM HBCU Quantum Center Opportunity", description: "Accepted into the IBM HBCU Quantum Center initiative, supporting exploration of quantum computing research.", link: "", featured: false }
  ]
};
