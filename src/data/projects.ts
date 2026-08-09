import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'careerguidencesystem',
    title: 'Career Guidance System',
    category: 'Full Stack Apps',
    shortDescription: 'Intelligence-based career guidance application helping users make informed career decisions.',
    overview: 'An intelligent career guidance system that helps users discover suitable career paths based on their interests, skills, and aptitude through data-driven recommendations.',
    architecture: 'PHP backend with MySQL database, implementing recommendation algorithms based on user profile analysis and career data.',
    features: [
      'Aptitude and interest assessment modules.',
      'Data-driven career path recommendations.',
      'Career comparison and exploration tools.',
      'User profile management with progress tracking.'
    ],
    challenges: [
      'Building an effective recommendation algorithm with limited training data.',
      'Designing comprehensive career assessments that are both accurate and user-friendly.'
    ],
    techStack: ['PHP', 'MySQL', 'HTML/CSS', 'Recommendation System'],
    githubUrl: 'https://github.com/chethanhrx/careerGuidenceSystem',
    year: '2023',
    role: 'Creator & Developer',
    previewColor: '',
    stats: { stars: 4, forks: 1, language: 'PHP' }
  },
  {
    id: 'fake-review-detection',
    title: 'ReviewGuard',
    category: 'AI / ML Integrated',
    shortDescription: 'Full-stack Django app that detects fake product reviews using machine learning.',
    overview: 'ReviewGuard is a full-stack Django web application that detects whether a product review is genuine or fake using natural language processing and machine learning classification.',
    architecture: 'Django backend with trained ML model for text classification. Processes review text through NLP pipeline to extract features and classify authenticity.',
    features: [
      'ML-powered fake review detection.',
      'Web interface for submitting and analyzing reviews.',
      'Batch processing of review datasets.',
      'Detailed analysis reports with confidence scores.'
    ],
    challenges: [
      'Achieving high accuracy with limited labeled training data.',
      'Handling diverse writing styles and review formats across different platforms.'
    ],
    techStack: ['Python', 'Django', 'Machine Learning', 'NLP'],
    githubUrl: 'https://github.com/chethanhrx/Fake-Review-Detection-System',
    year: '2024',
    role: 'Creator & Developer',
    previewColor: '',
    stats: { stars: 3, forks: 0, language: 'Python' }
  },
  {
    id: 'traffic-monitoring',
    title: 'Intelligent Traffic Monitor',
    category: 'AI / ML Integrated',
    shortDescription: 'Object Detection for Traffic Monitoring using Computer Vision & Deep Learning (MCA Research Project).',
    overview: 'An intelligent traffic monitoring system that detects, classifies, and analyzes vehicles in real-time using state-of-the-art object detection. Developed as an MCA Research Project.',
    architecture: 'Python-based computer vision application utilizing deep learning models for real-time video stream processing and object recognition.',
    features: [
      'Real-time vehicle detection and classification.',
      'Traffic flow analysis and counting.',
      'Integration with video streams for continuous monitoring.',
      'Data logging for historical analysis.'
    ],
    challenges: [
      'Optimizing deep learning models for real-time inference speed without losing accuracy.',
      'Handling variable lighting conditions and occlusions in video feeds.'
    ],
    techStack: ['Python', 'Computer Vision', 'Deep Learning', 'OpenCV'],
    githubUrl: 'https://github.com/chethanhrx/Object-Detection-for-Traffic-Monitoring-',
    year: '2024',
    role: 'Researcher & Developer',
    previewColor: '',
    stats: { stars: 3, forks: 0, language: 'Python' }
  },
  {
    id: 'cricketpro',
    title: 'CricketPro',
    category: 'Full Stack Apps',
    shortDescription: 'The Ultimate IPL-Style Real-Time Live Auction Platform for local cricket tournaments.',
    overview: 'CricketPro is a comprehensive real-time live auction platform designed to replicate the IPL auction experience for local and regional cricket tournaments.',
    architecture: 'Java backend providing robust auction logic and real-time bidding processing, ensuring fair and synchronous updates across all connected clients.',
    features: [
      'Real-time live bidding and player auctioning.',
      'Team purse management and squad building.',
      'Live leaderboards and team statistics.',
      'Admin dashboard for auctioneers to control bidding flow.'
    ],
    challenges: [
      'Ensuring sub-second latency for concurrent real-time bids.',
      'Maintaining consistent state across all clients during high-intensity bidding wars.'
    ],
    techStack: ['Java', 'WebSockets', 'Real-time Systems'],
    githubUrl: 'https://github.com/chethanhrx/CricketPro',
    year: '2024',
    role: 'Creator & Developer',
    previewColor: '',
    stats: { stars: 2, forks: 0, language: 'Java' }
  },
  {
    id: 'coderise',
    title: 'CodeRise',
    category: 'Full Stack Apps',
    shortDescription: 'Beginner-focused coding practice platform built with PHP MVC and Docker sandboxing.',
    overview: 'CodeRise is a coding practice platform designed for beginners. It provides a secure, sandboxed environment to write, run, and test code directly in the browser.',
    architecture: 'Built from scratch using a custom PHP 8.2 MVC architecture (no external frameworks). Uses Monaco Editor on the frontend and Docker containers on the backend for secure code execution.',
    features: [
      'In-browser code editor powered by Monaco Editor.',
      'Secure code execution in isolated Docker sandboxes.',
      'Clean custom PHP MVC architecture.',
      'Real-time output and error reporting.'
    ],
    challenges: [
      'Building a secure, scalable code execution engine using Docker to prevent malicious scripts.',
      'Implementing a custom MVC framework from scratch in PHP 8.2.'
    ],
    techStack: ['PHP', 'MySQL', 'Docker', 'JavaScript', 'HTML/CSS'],
    githubUrl: 'https://github.com/chethanhrx/CodeRise',
    year: '2024',
    role: 'Creator & Developer',
    previewColor: '',
    stats: { stars: 2, forks: 0, language: 'PHP' }
  },
  {
    id: 'pocketverse',
    title: 'PocketVerse',
    category: 'AI / ML Integrated',
    shortDescription: 'AI Creator Copilot that builds a Story Memory Graph and validates episodes for narrative consistency.',
    overview: 'PocketVerse is an AI-powered tool that builds a Story Memory Graph from serialized episodes and validates new episodes for continuity, character evolution, and world consistency — with evidence, not guesses.',
    architecture: 'JavaScript/React frontend that processes serialized story episodes, building a graph of characters, locations, events, and relationships to ensure narrative consistency across episodes.',
    features: [
      'Automated Story Memory Graph construction from serialized episodes.',
      'Continuity validation for new episodes against established story canon.',
      'Character evolution tracking across multiple episodes.',
      'World consistency checks with evidence-based feedback.'
    ],
    challenges: [
      'Designing a flexible graph structure that captures complex narrative relationships.',
      'Building validation logic that understands narrative context beyond simple keyword matching.'
    ],
    techStack: ['JavaScript', 'React', 'TypeScript', 'AI Graphing'],
    githubUrl: 'https://github.com/chethanhrx/pocketverse',
    year: '2026',
    role: 'Creator & Developer',
    previewColor: '',
    stats: { stars: 2, forks: 2, language: 'JavaScript' }
  },
  {
    id: 'watchtower',
    title: 'WatchTower',
    category: 'Backend / Microservices',
    shortDescription: 'Next-Gen AI-Powered Cybersecurity Threat Detection Platform.',
    overview: 'WatchTower is an enterprise-grade cybersecurity threat detection platform designed to monitor network traffic, identify anomalies using machine learning heuristics, and mitigate vulnerabilities across distributed systems.',
    architecture: 'Microservices architecture powered by Java 21 & Spring Boot. Kafka ingests high-throughput telemetry data, indexed in Elasticsearch and cached in Redis. Utilizes Python for network scanning and monitoring capabilities.',
    features: [
      'Real-time anomaly & intrusion detection via distributed pipelines.',
      'Active port scanning and automated threat vulnerability mapping.',
      'Log aggregation with full-text querying.',
      'Role-based access control (RBAC) with JWT & Spring Security.'
    ],
    challenges: [
      'Handling high-volume network packet analysis efficiently.',
      'Reducing false positives in automated threat detection models.'
    ],
    techStack: ['Python', 'Java 21', 'Spring Boot', 'Kafka', 'Elasticsearch'],
    githubUrl: 'https://github.com/chethanhrx/Watch-Tower',
    year: '2024',
    role: 'Creator & Developer',
    previewColor: '',
    stats: { stars: 1, forks: 0, language: 'Python' }
  },
  {
    id: 'unichat',
    title: 'UniChat',
    category: 'Full Stack Apps',
    shortDescription: 'Multi-provider AI chat application supporting diverse backend language models.',
    overview: 'UniChat is a versatile AI chat application that integrates with various AI providers, allowing users to interact with different AI models through a unified, clean interface.',
    architecture: 'Java-based backend with abstracted provider interfaces, enabling easy integration of new AI APIs while maintaining a consistent and responsive user experience.',
    features: [
      'Multi-provider AI integration through a unified interface.',
      'Chat history management and conversation threading.',
      'Provider switching without losing conversation context.',
      'Clean, responsive chat UI.'
    ],
    challenges: [
      'Abstracting different AI provider APIs behind a common scalable interface.',
      'Handling varying response formats and streaming capabilities across different language models.'
    ],
    techStack: ['Java', 'REST APIs', 'AI Integration', 'Frontend UI'],
    githubUrl: 'https://github.com/chethanhrx/UniChat',
    year: '2024',
    role: 'Creator & Developer',
    previewColor: '',
    stats: { stars: 1, forks: 0, language: 'Java' }
  }
];
