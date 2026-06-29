import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'mergebase',
    title: 'MergeBase',
    category: 'Backend / Microservices',
    shortDescription: 'Git for your database — branch, diff, merge, and rollback schema & data snapshots.',
    overview: 'MergeBase is an innovative database versioning tool designed to bring Git-like copy-on-write semantics to relational databases. It enables developers to branch production states safely, test schema migrations in isolation, and rollback instant page snapshots without downtime.',
    architecture: 'Built in Java using a Copy-on-Write page engine. It splits database states into 4KB pages where only modified pages are written to new snapshots while sharing unchanged pages across branches. All merges execute inside strict ACID transactional wrappers.',
    features: [
      'Git-like CLI commands (init, snapshot, branch, checkout, diff, merge, rollback).',
      'Copy-on-Write page engine allowing instant multi-gigabyte branching with ~200KB snapshot footprints.',
      'Detailed tabular diffs showing exact table schema alterations and modified row counts.',
      'Transactional all-or-nothing merge execution ensuring zero production corruption.'
    ],
    challenges: [
      'Implementing efficient page-level deduplication across disparate snapshot lineages.',
      'Maintaining ACID compliance and foreign-key integrity during complex multi-table branch merges.'
    ],
    techStack: ['Java', 'MySQL', 'SQLite', 'Copy-on-Write Engine', 'CLI Architecture'],
    githubUrl: 'https://github.com/chethanhrx/mergebase',
    year: '2024',
    role: 'Lead Architect & Creator',
    previewColor: 'from-blue-600 via-indigo-600 to-violet-600',
    stats: { stars: 64, forks: 12, language: 'Java' }
  },
  {
    id: 'watchtower',
    title: 'WatchTower',
    category: 'Backend / Microservices',
    shortDescription: 'AI-powered cybersecurity threat detection platform with real-time analytics.',
    overview: 'WatchTower is an enterprise-grade cybersecurity threat detection platform designed to monitor network traffic, identify anomalies using machine learning heuristics, and mitigate vulnerabilities across distributed systems.',
    architecture: 'Microservices architecture powered by Java 21 & Spring Boot. Kafka ingests high-throughput telemetry data, which is indexed in Elasticsearch for instant querying and cached in Redis for real-time alerting. The UI communicates securely via API Gateway.',
    features: [
      'Real-time anomaly & intrusion detection via distributed Kafka pipelines.',
      'Elasticsearch log aggregation with sub-second full-text querying.',
      'Active port scanning and automated threat vulnerability mapping.',
      'Role-based access control (RBAC) with JWT & Spring Security.'
    ],
    challenges: [
      'Optimizing Kafka consumer group throughput during high-volume DDoS simulation spikes.',
      'Designing low-latency Redis caching for rate-limiting and threat intelligence lookups.'
    ],
    techStack: ['Java 21', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'Elasticsearch', 'React', 'Docker'],
    githubUrl: 'https://github.com/chethanhrx/Watch-Tower',
    year: '2024',
    role: 'Lead Full Stack & System Architect',
    previewColor: 'from-indigo-600 via-purple-600 to-pink-600',
    stats: { stars: 42, forks: 12, language: 'Java' }
  },
  {
    id: 'neuramate',
    title: 'NeuraMate',
    category: 'AI / ML Integrated',
    shortDescription: 'Calibrated neural network chess bot simulating human playstyles.',
    overview: 'NeuraMate is an advanced AI chess engine specifically calibrated to ~250 Elo using dual neural networks: a deep position evaluator and an opponent move predictor trained on 600-900 Elo games.',
    architecture: 'PyTorch deep learning models served via a Flask REST backend. Incorporates randomized evaluation noise, believable blunder selection, and opponent-move-probability weighted minimax search.',
    features: [
      'Dual neural network architecture evaluating positions and predicting opponent moves.',
      'Opponent-move-probability weighted minimax search tree.',
      'Interactive Flask-based local web chessboard GUI.',
      'Believable human-like blunder simulation to match calibrated rating tiers.'
    ],
    challenges: [
      'Tuning evaluation noise parameters to prevent artificial randomness while maintaining accurate rating targets.',
      'Optimizing PyTorch inference speed within Flask for real-time GUI responsiveness.'
    ],
    techStack: ['Python', 'PyTorch', 'Flask', 'Neural Networks', 'JavaScript'],
    githubUrl: 'https://github.com/chethanhrx/Neura-Mate',
    year: '2024',
    role: 'AI Researcher & Engineer',
    previewColor: 'from-rose-600 via-red-600 to-orange-600',
    stats: { stars: 54, forks: 14, language: 'Python' }
  },
  {
    id: 'cardx',
    title: 'CardX Validation Engine',
    category: 'Tools & Automation',
    shortDescription: 'High-performance multi-gate verification platform with automated crypto payments.',
    overview: 'CardX is a robust, production-ready platform engineered for algorithmic card validation and dataset processing. It features a multi-gate checking architecture, real-time AJAX verification, and seamless cryptocurrency payment integration.',
    architecture: 'Vanilla PHP 7.4+ backend paired with secure PDO MySQL database interactions. Integrates HMAC-SHA256 signed Bybit Merchant webhooks for automated user tier upgrades and sliding window rate limiters.',
    features: [
      '5 distinct API validation gates ranging from basic Luhn checksums to deep network verification.',
      'Automated cryptocurrency payment processing via Bybit API with webhook tier activation.',
      'Interactive AJAX dashboard displaying live progress bars, filtering, and instant notifications.',
      'Admin Command Center controlling users, gateway weights, global settings, and security audit logs.'
    ],
    challenges: [
      'Implementing strict 60-second sliding rate limits to prevent brute-force API abuse.',
      'Securing payment webhook listeners against replay and spoofing attacks.'
    ],
    techStack: ['PHP', 'MySQL', 'AJAX', 'REST API', 'Bybit Webhooks', 'HTML5/CSS3'],
    githubUrl: 'https://github.com/chethanhrx/CardX',
    year: '2024',
    role: 'Lead Developer',
    previewColor: 'from-amber-600 via-orange-600 to-yellow-500',
    stats: { stars: 38, forks: 9, language: 'PHP' }
  },
  {
    id: 'itc-bot',
    title: 'SMC Algorithmic Trading Engine',
    category: 'AI / ML Integrated',
    shortDescription: 'Smart Money Concepts (SMC/ICT) automated trading bot for Sensex & Bank Nifty.',
    overview: 'An algorithmic trading system executing high-conviction trades based on Smart Money Concepts, Fair Value Gaps (FVG), and liquidity sweeps, deployed autonomously on Groww Cloud.',
    architecture: 'Python trading daemon utilizing Pandas and technical indicators (ATR, RSI, EMA alignment) to evaluate market structure shifts. Integrates directly with Groww Trading API for low-latency live execution.',
    features: [
      'Multi-timeframe trend analysis confirming swing structure shifts before entry.',
      'Automated Fair Value Gap (FVG) boundary detection with dynamic risk-to-reward (1:1.5+) targets.',
      'Real-time trailing stop management maintaining strict drawdown protection.',
      'Interactive Plotly trade journaling and visual HTML backtest reporting.'
    ],
    challenges: [
      'Filtering false breakouts during high-volatility Indian market opening hours.',
      'Ensuring reliable state persistence across unexpected container restarts.'
    ],
    techStack: ['Python', 'Groww API', 'Pandas', 'Plotly', 'Docker', 'Algorithmic Trading'],
    githubUrl: 'https://github.com/Harxshz7/ITC-bot',
    year: '2024',
    role: 'Quantitative Engineer',
    previewColor: 'from-emerald-600 via-teal-600 to-cyan-600',
    stats: { stars: 29, forks: 7, language: 'Python' }
  },
  {
    id: 'eventbridge',
    title: 'Event-Bridge Marketplace',
    category: 'Full Stack Apps',
    shortDescription: 'Modern event-planning platform connecting event organizers with verified vendors.',
    overview: 'Event-Bridge is a modern marketplace engineered to streamline event coordination by enabling planners to discover, evaluate, and collaborate with verified local service vendors.',
    architecture: 'React 19 and Vite frontend styled with Tailwind CSS v4, delivering snappy single-page navigation and modular vendor catalog filters.',
    features: [
      'Responsive vendor catalog with real-time category filtering and search.',
      'Clean frosted glass UI design with fluid layout transitions.',
      'Modular inquiry booking system and availability calendaring.',
      'Optimized asset loading and high-contrast accessibility.'
    ],
    challenges: [
      'Structuring state management across complex multi-step vendor booking workflows.',
      'Maintaining 60 FPS scrolling performance across mobile viewport widths.'
    ],
    techStack: ['React 19', 'Vite', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/OrtexDevs/Event-Bridge',
    year: '2024',
    role: 'Frontend Architect',
    previewColor: 'from-sky-600 via-blue-600 to-indigo-600',
    stats: { stars: 18, forks: 4, language: 'TypeScript' }
  }
];
