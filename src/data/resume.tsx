import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Mahtab",
  initials: "MM",
  url: "https://www.mohammadmahtab.dev",
  location: "Dehradun, Uttarakhand, India",
  locationLink:
    "https://www.google.com/maps/place/Dehradun,+Uttarakhand,+India",
  description:
    "Software Engineer and Freelancer. I love building things and turning ideas into reality.",
  summary:
    "In 2023, I started my journey in **Computer Science and Engineering** and began exploring software development beyond the classroom. Over the past 3 years, I have participated in **50+ coding contests, competed in 10+ hackathons, built 30+ projects,** and **solved 700+ coding problems** across various platforms.\n\n In 2025, I took my first step into the professional world as a **Full Stack Developer Intern at Go2X**, where I collaborated with senior engineers and gained hands-on experience with technologies like MERN and Next.js.\n\n**Currently, I’m building [Adowise](https://adowise.com)** — a platform designed to help creators and professionals turn their expertise into a digital business while helping businesses discover and sponsor the right talent.",

  avatarUrl: "/prof-pic.png",

  skills: [
    // Languages
    { name: "C", icon: "/skills/c.webp" },
    { name: "C++", icon: "/skills/c++.webp" },
    { name: "Java", icon: "/skills/java.jpg" },
    { name: "Python", icon: "/skills/python.webp" },
    { name: "JavaScript", icon: "/skills/javascript.webp" },
    { name: "TypeScript", icon: Typescript },
    { name: "HTML", icon: "/skills/html.png" },
    { name: "CSS", icon: "/skills/css.svg" },

    // Frontend
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Tailwind CSS", icon: "/skills/tailwindcss.png" },
    { name: "Shadcn UI", icon: "/skills/shadcn.png" },
    { name: "Redux Toolkit", icon: "/skills/redux.svg" },
    { name: "TanStack Query", icon: "/skills/tanstack.png" },
    { name: "Framer Motion", icon: "/skills/framermotion.png" },

    // Backend
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: "/skills/express.png" },
    { name: "REST APIs", icon: "/skills/restapi.png" },
    { name: "GraphQL", icon: "/skills/graphql.png" },
    { name: "WebSockets", icon: "/skills/websocket.png" },
    { name: "Zod", icon: "/skills/zod.png" },

    // Databases & Cloud
    { name: "MongoDB", icon: "/skills/mongo.png" },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Prisma", icon: "/skills/prisma.png" },
    { name: "Cloudinary", icon: "/skills/cloudinary.png" },

    // DevOps & Tools
    { name: "Git", icon: "/skills/git.webp" },
    { name: "GitHub", icon: "/skills/github.webp" },
    { name: "Postman", icon: "/skills/postman.png" },
    { name: "VS Code", icon: "/skills/vscode.webp" },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "mahtabmohd2005@gmail.com",
    tel: "+91 8580906264",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/codewithmahtab",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammadmahtab27/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/codewithmahtab",
        icon: Icons.x,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/codewithmahtab/",
        icon: Icons.instagram,
        navbar: false,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1PPblwH1R2inNHOT67ZaQIFJIJuSVqsVA/view?usp=sharing",
        icon: Icons.resume,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Adowise",
      href: "https://www.adowise.com",
      badges: [],
      location: "Onsite",
      title: "Founder & CEO",
      logoUrl: "/companies/adowise.jpg",
      start: "Aug. 2026",
      end: "Present",
      description:
        "Adowise is an all-in-one platform designed to help creators & professionals turn their expertise into a digital business, while helping businesses find and sponsor the right talent.",
    },
    {
      company: "Go2X",
      badges: [],
      href: "https://explorin.in",
      location: "Onsite",
      title: "Full Stack Developer Intern",
      logoUrl: "/companies/go2x.png",
      start: "July 2025",
      end: "Sep. 2025",
      description:
        "Collaborated with senior engineers on full-stack projects, improving performance, scalability, and responsivenes.",
    },
  ],

  education: [
    {
      school: "Shivalik College Dehradun",
      href: "https://shivalikcollege.edu.in/",
      degree: "B.Tech. in Computer Science & Engineering",
      logoUrl: "/companies/shivalik.jpg",
      start: "2023",
      end: "Present",
    },
    {
      school: "The Scholars' Home",
      href: "https://tsh.edu.in/",
      degree: "Primary & Secondary Education",
      logoUrl: "/companies/tsh-school.png",
      start: "2008",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "Adowise",
      href: "http://adowise.com/",
      dates: "2026",
      active: true,
      image: "/projects/adowise-thumb.jpg",
      video: "/videos/adowise-video.mp4",
      description:
        "Adowise is a platform that helps creators and professionals turn their expertise into a digital business.\n\nCreators can offer 1:1 services, sell digital products and courses, host webinars, and earn through brand sponsorships.\n\nBusinesses use Adowise to run campaigns, discover creators, and manage brand sponsorships.",
      technologies: [
        "Next.js",
        "Redux",
        "Tanstack Query",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "http://adowise.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "NextShop",
      href: "https://nextshop-app-pi.vercel.app/",
      dates: "2026",
      active: true,
      image: "/projects/nextshop-thumb.jpg",
      video: "/videos/nextshop-video.mp4",
      description:
        "NextShop is a multi-vendor e-commerce marketplace, featuring three role-separated portals — Customer storefront, Seller dashboard, and Admin panel.\n\nShoppers can browse products by category, search, manage wishlists and carts, place orders, track shipments, and leave reviews.\n\nSellers get a dedicated dashboard to manage products, inventory, orders, and payments.",
      technologies: ["Next.js", "Shadcn UI", "Prisma", "PostgreSQL"],
      links: [],
    },
    {
      title: "Briefly.ai",
      href: "https://briefly-kappa.vercel.app/",
      dates: "2025",
      active: true,
      image: "/projects/briefly.gif",
      video: "",
      description:
        "Briefly.ai is an intelligent document processing platform that leverages the OpenAI API to instantly turn long, complex PDFs into concise, highly useful summaries.\n\nIt supports multi-document analysis, custom formatting preferences, and secure file handling, making it an essential tool for researchers and professionals dealing with heavy reading loads.",
      technologies: [
        "React.js",
        "OpenAI API",
        "Tailwind",
        "Shadcn",
        "React Hook Form",
      ],
      links: [],
    },
    {
      title: "Invoicen",
      href: "https://invoicen.vercel.app/",
      dates: "2025",
      active: true,
      image: "/projects/invozo.gif",
      video: "",
      description:
        "Invozo is a professional invoice generator built with a clean, lightning-fast UI that allows freelancers and small businesses to create, manage, and send invoices in minutes.\n\nIt supports multiple currencies, customizable tax rates, PDF exports, and client management, drastically simplifying the billing process and helping users get paid faster.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Shadcn", "Prisma"],
      links: [
        {
          type: "Website",
          href: "https://invozo-pges.vercel.app/generate",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Forest Department Portal",
      href: "https://up-gov.vercel.app/",
      dates: "2025",
      active: true,
      image: "/projects/up-gov-thumb.jpg",
      video: "/videos/up-gov.mp4",
      description:
        "A specialized Forest Crime Management Portal built for the UP Government to track, manage, and report forest-related offences like illegal felling and wildlife crimes.\n\nIt features role-based access control, secure evidence uploads, automated case assignment workflows, and comprehensive reporting dashboards for forest officers.",
      technologies: ["React.js", "MongoDB", "TanStack Query", "Prisma"],
      links: [
        {
          type: "Website",
          href: "https://up-gov.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Applyoo",
      href: "https://applyoo.vercel.app/",
      dates: "2026",
      active: true,
      image: "/projects/applyoo-thumb.jpg",
      video: "/videos/applyoo.mp4",
      description:
        "Applyoo is a modern job search and recruitment platform designed to connect candidates with their dream roles and streamline the hiring process for companies.\n\nCandidates can discover opportunities through advanced search, save favorite jobs, submit applications, and leave reviews.\n\nEmployers can create company profiles, post job openings, track application statuses.",
      technologies: [
        "React.js",
        "Redux Toolkit",
        "Zod",
        "Prisma",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://applyoo.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Carelytics",
      href: "https://carelytics-three.vercel.app/",
      dates: "2025",
      active: true,
      image: "/projects/carelytics.gif",
      video: "",
      description:
        "Carelytics is a smart clinic performance dashboard designed to give healthcare providers instant visibility into their patient insights, visit trends, and overall revenue analytics.\n\nBy aggregating data into beautiful, interactive charts using Recharts, it helps clinic managers identify operational bottlenecks and optimize their daily scheduling workflows.",
      technologies: [
        "Next.js",
        "React",
        "MongoDB",
        "Tailwind",
        "Shadcn",
        "Recharts",
      ],
      links: [
        {
          type: "Website",
          href: "https://carelytics-three.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Foxtale",
      href: "https://foxtale-eta.vercel.app/",
      dates: "2026",
      active: true,
      image: "/projects/foxtale-thumb.jpg",
      video: "/videos/foxtale.mp4",
      description:
        "A brand website built for Foxtale, a premium organic skincare brand focused on everyday sun protection.\n\nThe site showcases their hero product — Water Gel Sunscreen SPF 50 PA++ — with rich product storytelling and customer testimonials. \n\nDesigned to reflect the brand's clean, minimal identity with fluid animations and a mobile-first layout.",
      technologies: ["React", "Tailwind", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://foxtale-eta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
  hackathons: [] as any[],
} as const;
