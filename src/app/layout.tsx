import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chethanhrx.netlify.app"),
  title: "Chethan Kumar H R | Java Full Stack Developer & System Architect",
  description: "Official portfolio of Chethan Kumar H R (chethanhrx) — Java Full Stack Developer & AI System Architect specializing in Spring Boot, Microservices, React, and high-concurrency systems.",
  keywords: [
    // --- CORE NAME ---
    "chethan kumar hr", "chethan hr", "chethanhrx", "chetanhr github", "chethanhrx github",
    "chethan kumar", "chethan h r", "chethan kumar hr github", "chethan hr developer",
    "chethanhrx portfolio", "Java Full Stack Developer", "Spring Boot", "React",
    "Microservices", "System Architecture", "Bangalore Developer", "pactviz owner",
    "pactviz founder", "chethan hr pactviz", "chethan kumar h r", "chethan hr pactviz studio",
    "chethan kumar hr pactviz", "chethan hr portfolio", "chethan hr jspiders",
    "chethan kumar hr software engineer", "chethan hrx portfolio", "chethan kumar hr resume",
    // --- NAME SPELLING VARIANTS / COMMON TYPOS ---
    "chetan hr", "chethn hr", "chethan kr", "chethan kumarhr", "chethankumarhr",
    "chetan kumar hr", "chethan kumaar hr", "chetan kumar h r", "chethan kummar hr",
    "chetan hr developer", "chethan h.r", "chethan h r developer", "chethan kumar h.r",
    "chethan.kumar.hr", "chethan_kumar_hr", "chethan kumar hr official", "chethan kumar hr india",
    "chethan hr india", "chethan kumar hr bangalore", "chethan hr bengaluru",
    // --- GITHUB / SOCIAL / PLATFORM VARIANTS ---
    "chethanhrx linkedin", "chethan hr linkedin", "chethanhrx twitter", "chethanhrx x",
    "chethan hr stackoverflow", "chethanhrx codepen", "chethan hr leetcode",
    "chethanhrx leetcode", "chethan hr hackerrank", "github chethanhrx", "github chethan hr",
    "github chethan kumar hr",
    // --- LOCATION-BASED ---
    "chethan hr thirthahalli", "chethan kumar hr thirthahalli", "chethn hr thirthahalli",
    "chetan hr thirthahalli", "chethan thirthahalli", "chethan hr bidrahalli", "chethan bidrahalli",
    "chethan hr bidarahalli", "chethan bidarahalli", "chethan hr huttalli", "chethan huttalli",
    "chethan hr huthahalli", "chethan huthahalli", "chethan hr huttahalli", "chethan huttahalli",
    "chethan hr shimoga", "chethan hr shivamogga", "chethan kumar hr shivamogga",
    "chethan hr karnataka", "chethan kumar hr karnataka", "chethan hr bengaluru developer",
    "chethan hr bangalore developer", "chethan kumar hr bengaluru",
    // --- FAMILY / RELATION-STYLE SEARCHES ---
    "chethan ramachandra", "chethan s/o ramachandra", "chethan ramachandra thirthahalli",
    "chethan vijaya", "chethan vijaya thirthahalli", "chethan manjunatha", 
    "chethan manjunatha thirthahalli", "chethan kumar ramachandra", "chethan kumar vijaya",
    "chethan kumar manjunatha", "chethan hr ramachandra", "chethan hr vijaya",
    "chethan hr manjunatha",
    // --- ROLE / SKILL COMBINATION KEYWORDS ---
    "chethan kumar hr java developer", "chethan hr java developer", "chethan hr spring boot developer",
    "chethan hr react developer", "chethan kumar hr full stack developer", "chethan hr backend developer",
    "chethan hr software engineer", "chethan kumar hr software engineer bangalore", 
    "chethan hr mysql developer", "chethan hr microservices developer", "chethan hr system design",
    "pactviz chethan kumar hr", "chethan hr startup founder", "chethan hr india developer portfolio",
    // --- "WHO IS" / DISCOVERY-STYLE QUERIES ---
    "who is chethan hr", "who is chethan kumar hr", "chethan hr developer profile",
    "chethan kumar hr profile", "chethan hr resume download", "chethan kumar hr cv",
    "chethan hr about me", "chethan hr contact", "chethan hr email", "chethan hr portfolio website",
    "chethan kumar hr portfolio website",
    // --- PACTVIZ / FACTVIZ ADDITIONS ---
    "pactviz", "factviz", "pactviz startup", "factviz startup", "chethan hr factviz",
    "chethan kumar hr factviz", "factviz founder", "factviz owner"
  ],
  authors: [{ name: "Chethan Kumar H R", url: "https://github.com/chethanhrx" }],
  creator: "Chethan Kumar H R",
  applicationName: "Chethan Kumar H R — Portfolio",
  openGraph: {
    title: "Chethan Kumar H R | Java Full Stack Developer & PactViz Founder",
    description: "Official portfolio of Chethan Kumar H R (chethanhrx). Explore live projects, system architecture diagrams, and enterprise microservices.",
    url: "https://chethanhrx.netlify.app",
    siteName: "Chethan Kumar H R — Portfolio",
    type: "website",
    images: [
      {
        url: "/chethanimage.jpg",
        width: 800,
        height: 800,
        alt: "Chethan Kumar H R — Java Full Stack Developer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chethan Kumar H R | Java Full Stack Developer & PactViz Founder",
    description: "Official portfolio of Chethan Kumar H R (chethanhrx). Explore live projects, system architecture diagrams, and enterprise microservices.",
    images: ["/chethanimage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://chethanhrx.netlify.app",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://chethanhrx.netlify.app/#website",
      "url": "https://chethanhrx.netlify.app",
      "name": "Chethan Kumar H R — Portfolio",
      "alternateName": ["PactViz", "Chethan HR", "Chethan Kumar H R Portfolio"],
      "publisher": {
        "@id": "https://chethanhrx.netlify.app/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://chethanhrx.netlify.app/#profile",
      "url": "https://chethanhrx.netlify.app",
      "name": "Chethan Kumar H R | Java Full Stack Developer",
      "mainEntity": {
        "@id": "https://chethanhrx.netlify.app/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://chethanhrx.netlify.app/#person",
      "name": "Chethan Kumar H R",
      "alternateName": [
        "Chethan HR",
        "Chethan Kumar",
        "chethanhrx"
      ],
      "jobTitle": "Java Full Stack Developer",
      "worksFor": [
        {
          "@type": "Organization",
          "name": "PactViz",
          "roleName": "Founder"
        }
      ],
      "knowsAbout": [
        "Java",
        "Spring Boot",
        "React",
        "Microservices",
        "System Architecture",
        "PostgreSQL",
        "MySQL"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      },
      "url": "https://chethanhrx.netlify.app",
      "image": "https://chethanhrx.netlify.app/chethanimage.jpg",
      "sameAs": [
        "https://github.com/chethanhrx",
        "https://leetcode.com/u/chethank_hr/",
        "https://www.linkedin.com/in/chethan-kumar-h-r-648bab33a"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://chethanhrx.netlify.app/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://chethanhrx.netlify.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": "https://chethanhrx.netlify.app/#projects"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://chethanhrx.netlify.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Chethan Kumar HR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chethan Kumar HR is a Java Full Stack Developer based in Bengaluru, India. He specializes in building high-concurrency backends with Spring Boot and reactive frontends with React."
          }
        },
        {
          "@type": "Question",
          "name": "What does Chethan HR work on?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chethan HR works on distributed systems, microservices architecture, and scalable full-stack applications. His core stack includes Java 21, Spring Boot, React, Kafka, Redis, and PostgreSQL."
          }
        },
        {
          "@type": "Question",
          "name": "What is Chethan HR's GitHub?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chethan HR's official GitHub handle is chethanhrx, which can be found at https://github.com/chethanhrx."
          }
        },
        {
          "@type": "Question",
          "name": "What is PactViz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PactViz is a software agency founded by Chethan Kumar HR. Through this organization, he delivers highly scalable web applications and enterprise-grade backend solutions for clients."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} min-h-screen bg-[#FAFAFA] text-gray-900 font-sans antialiased relative overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
