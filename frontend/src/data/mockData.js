// Portfolio data for Pankaj Kshetri | baje

export const personalInfo = {
  name: "Pankaj Kshetri",
  handle: "baje",
  tagline: "Breaking things to understand them.",
  email: "kshetripankaj73@gmail.com",
  github: "https://github.com/baje555",
  ctftime: "https://ctftime.org/user/placeholder",
  hackthebox: "https://app.hackthebox.com/profile/placeholder",
  tryhackme: "https://tryhackme.com/p/placeholder",
  linkedin: "https://linkedin.com/in/pankaj55",
};

export const roles = [
  "CTF Player",
  "Web Hacker",
  "OSINT Analyst",
  "Recon Specialist",
  "Cybersecurity Student",
];

export const skills = [
  { name: "Web Exploitation", category: "offense" },
  { name: "OSINT", category: "intel" },
  { name: "Reconnaissance", category: "intel" },
  { name: "Network Analysis", category: "defense" },
  { name: "Linux", category: "core" },
  { name: "Python", category: "core" },
  { name: "Burp Suite", category: "tool" },
  { name: "Nmap", category: "tool" },
  { name: "Shodan", category: "tool" },
  { name: "Google Dorking", category: "intel" },
  { name: "SQL Injection", category: "offense" },
  { name: "XSS", category: "offense" },
];

export const ctfEvents = [
  {
    id: 1,
    name: "PicoCTF 2024",
    organizer: "Carnegie Mellon University",
    date: "March 2024",
    rank: "Top 15%",
    points: 4200,
    category: "General",
    writeupUrl: "#",
    tags: ["Web", "Forensics", "Crypto"],
  },
  {
    id: 2,
    name: "HackTheBox CTF",
    organizer: "HackTheBox",
    date: "Jan 2024",
    rank: "Top 20%",
    points: 3100,
    category: "Attack/Defense",
    writeupUrl: "#",
    tags: ["Web", "OSINT", "Pwn"],
  },
  {
    id: 3,
    name: "TryHackMe Advent of Cyber",
    organizer: "TryHackMe",
    date: "Dec 2023",
    rank: "Completed",
    points: 2400,
    category: "Learning",
    writeupUrl: "#",
    tags: ["Web", "Network", "Linux"],
  },
  {
    id: 4,
    name: "CTFlearn Open CTF",
    organizer: "CTFlearn",
    date: "Oct 2023",
    rank: "Top 25%",
    points: 1850,
    category: "General",
    writeupUrl: "#",
    tags: ["Web", "OSINT", "Forensics"],
  },
];

export const projects = [
  {
    id: 1,
    title: "OSINT Recon Toolkit",
    description:
      "Automated Python tool for passive reconnaissance — aggregates data from Shodan, WHOIS, DNS records, and social media footprints into a structured report.",
    category: "OSINT",
    tags: ["Python", "Shodan API", "DNS", "WHOIS"],
    github: "https://github.com/baje555",
    status: "active",
  },
  {
    id: 2,
    title: "Web Vuln Scanner",
    description:
      "Lightweight Python script that automates detection of common web vulnerabilities — SQLi, XSS, open redirects, and misconfigured headers.",
    category: "Web",
    tags: ["Python", "Requests", "BeautifulSoup", "Regex"],
    github: "https://github.com/baje555",
    status: "active",
  },
  {
    id: 3,
    title: "CTF Writeup Repository",
    description:
      "Documented solutions and methodologies for CTF challenges across web exploitation, OSINT, and forensics categories.",
    category: "Tool",
    tags: ["Markdown", "Web", "OSINT", "Forensics"],
    github: "https://github.com/baje555",
    status: "ongoing",
  },
  {
    id: 4,
    title: "Dorking Automation Script",
    description:
      "Python utility that generates and executes targeted Google dork queries for OSINT investigations, with result parsing and export.",
    category: "OSINT",
    tags: ["Python", "Google Dorking", "Automation"],
    github: "https://github.com/baje555",
    status: "active",
  },
];

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "CTF", href: "#ctf" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
