import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Mohammad Mahtab",
    template: `%s | Mohammad Mahtab`,
  },
  description:
    "Mohammad Mahtab is a prominent software engineer, freelancer, creator, and founder of Adowise. Currently pursuing a Bachelor's in Computer Science & Engineering in Dehradun, Uttarakhand.",
  authors: [{ name: "Mohammad Mahtab", url: DATA.url }],
  creator: "Mohammad Mahtab",
  publisher: "Mohammad Mahtab",
  keywords: [
    "Mohammad Mahtab",
    "Md Mahtab",
    "Mohd Mahtab",
    "Mahtab",
    "Mohammad Mahtab software engineer",
    "Mohammad Mahtab developer",
    "Mohammad Mahtab Adowise",
    "Mohammad Mahtab freelancer",
    "Mahtab software engineer",
    "Mahtab Adowise",
    "Adowise founder",
    "codewithmahtab",
    "full-stack developer India",
    "Next.js developer",
    "React developer Dehradun",
    "software engineer Dehradun",
    "software engineer Uttarakhand",
  ],
  openGraph: {
    title: "Mohammad Mahtab",
    description:
      "Mohammad Mahtab is a prominent software engineer, freelancer, creator, and founder of Adowise. Pursuing a Bachelor's in Computer Science & Engineering in Dehradun, Uttarakhand.",
    url: DATA.url,
    siteName: "Mohammad Mahtab",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: `${DATA.url}/mohammad-mahtab.jpg`,
        width: 800,
        height: 800,
        alt: "Mohammad Mahtab",
      },
    ],
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
  twitter: {
    title: "Mohammad Mahtab",
    description:
      "Mohammad Mahtab is a prominent software engineer, freelancer, creator, and founder of Adowise. Pursuing a Bachelor's in Computer Science & Engineering in Dehradun, Uttarakhand.",
    card: "summary_large_image",
    creator: "@codewithmahtab",
    images: [`${DATA.url}/mohammad-mahtab.jpg`],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${DATA.url}/#person`,
        name: "Mohammad Mahtab",
        alternateName: [
          "Md Mahtab",
          "Mohd Mahtab",
          "Mahtab",
          "Mohammad Mahtab Developer",
          "Mohammad Mahtab Software Engineer",
          "Mohammad Mahtab Adowise",
          "codewithmahtab",
        ],
        jobTitle: "Software Engineer, Freelancer & Founder of Adowise",
        description:
          "Mohammad Mahtab is a prominent software engineer, freelancer, creator, and founder of Adowise. He is currently pursuing a Bachelor's degree in Computer Science and Engineering in Dehradun, Uttarakhand. Mahtab has developed his expertise in full-stack development and gained real-world experience through multiple internships. His technical work includes frontend development, backend systems, database design, API development, and building end-to-end web applications. His technology stack includes JavaScript, TypeScript, React, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, and Prisma. As the founder of Adowise, Mahtab is working on a platform that helps creators and professionals turn their expertise into a digital business — enabling 1:1 sessions, digital product sales, and community building.",
        url: DATA.url,
        image: {
          "@type": "ImageObject",
          url: `${DATA.url}/mohammad-mahtab.jpg`,
          caption: "Mohammad Mahtab — Software Engineer & Founder of Adowise",
        },
        email: `mailto:${DATA.contact.email}`,
        telephone: DATA.contact.tel,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dehradun",
          addressRegion: "Uttarakhand",
          addressCountry: "India",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Shivalik College of Engineering, Dehradun",
          url: "https://shivalikcollege.edu.in/",
          sameAs: "https://shivalikcollege.edu.in/",
        },
        worksFor: {
          "@type": "Organization",
          name: "Adowise",
          url: "https://adowise.com",
          description:
            "Adowise is a platform that helps creators and professionals monetize their expertise through 1:1 sessions, digital products, and community building.",
        },
        founder: {
          "@type": "Organization",
          name: "Adowise",
          url: "https://adowise.com",
        },
        sameAs: [
          "https://github.com/codewithmahtab",
          "https://www.linkedin.com/in/mohammadmahtab27/",
          "https://x.com/codewithmahtab",
          "https://adowise.com",
        ],
        knowsAbout: [
          "Full Stack Web Development",
          "Software Engineering",
          "Freelancing",
          "Entrepreneurship",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "MongoDB",
          "Prisma ORM",
          "REST API Development",
          "Frontend Development",
          "Backend Systems",
          "Database Design",
          "Web Application Development",
          "Creator Economy",
          "Digital Products",
        ],
        hasOccupation: [
          {
            "@type": "Occupation",
            name: "Software Engineer",
            occupationLocation: {
              "@type": "Country",
              name: "India",
            },
            skills:
              "JavaScript, TypeScript, React, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, Prisma",
          },
          {
            "@type": "Occupation",
            name: "Freelance Developer",
            description:
              "Building custom web applications and digital products for clients as an independent freelancer.",
          },
        ],
        nationality: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${DATA.url}/#website`,
        url: DATA.url,
        name: "Mohammad Mahtab - Portfolio & Blog",
        description:
          "Official portfolio and personal website of Mohammad Mahtab.",
        publisher: {
          "@id": `${DATA.url}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${DATA.url}/#webpage`,
        url: DATA.url,
        name: "Mohammad Mahtab | Full Stack Developer & Founder of Adowise",
        isPartOf: {
          "@id": `${DATA.url}/#website`,
        },
        about: {
          "@id": `${DATA.url}/#person`,
        },
        mainEntity: {
          "@id": `${DATA.url}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
