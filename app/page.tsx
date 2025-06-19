"use client";

import { useState } from "react";
import {
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Download,
  Menu,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function ResumePage() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = {
    technical: [
      {
        name: "Python",
        level: 90,
        note: "(incl. NumPy, Pandas, Scikit-learn)",
      },
      {
        name: "Machine Learning",
        level: 85,
        note: "(TensorFlow, PyTorch, forecasting models)",
      },
      {
        name: "Golang",
        level: 80,
        note: "(Ebitengine, concurrency patterns)",
      },
      {
        name: "Flutter",
        level: 75,
        note: "(Dart, cross-platform mobile dev)",
      },
      {
        name: "Node.js",
        level: 70,
        note: "(Express, backend APIs)",
      },
      {
        name: "Git/GitHub",
        level: 85,
        note: "(CI/CD workflows, team collaboration)",
      },
    ],
    soft: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Team Leadership", level: 85 },
      { name: "Project Management", level: 80 },
      { name: "Critical Thinking", level: 90 },
      { name: "Adaptability", level: 85 },
    ],
  };

  const projects = [
    {
      title: "DeepApp - Offline LLM Mobile Application",
      description:
        "Developed a privacy-focused mobile application using Flutter that runs large language models (LLMs) locally on device without requiring internet connectivity. Implemented model quantization for efficient resource usage and achieved near-native performance on mid-range smartphones.",
      technologies: [
        "Flutter",
        "Dart",
        "LLM Runtime",
        "ONNX",
        "TensorFlow Lite",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Cheong Wa Dae Tour Reservation Checker",
      description:
        "Built an automated system to monitor and notify users about available tour slots at South Korea's presidential palace. Utilizes edge computing for low-latency checks and integrates with messaging platforms for instant alerts when reservations open.",
      technologies: [
        "HTML",
        "JavaScript",
        "Cloudflare Workers",
        "Web Scraping",
        "Telegram API",
      ],
      liveUrl: "https://cheongwadaechecker.maicarons.cc/",
      githubUrl: "https://github.com/Maicarons/CheongWaDaeChecker",
    },
    {
      title: "EbitenPot - ECS Framework for Ebitengine",
      description:
        "Designed an Entity-Component-System architecture specifically optimized for Ebitengine game development. Provides memory-efficient entity management and systems for rendering, physics, and AI that outperform generic ECS implementations by 30% in benchmarks.",
      technologies: [
        "Go",
        "Ebitengine",
        "ECS Pattern",
        "Performance Optimization",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "ImageTextAdder - Batch Image Processing Tool",
      description:
        "Created a Python utility that automates adding customizable text watermarks to images in bulk. Supports dynamic positioning, font styling, and opacity control with parallel processing for handling thousands of images efficiently.",
      technologies: ["Python", "Pillow", "Multiprocessing", "EXIF Metadata"],
      liveUrl: "https://github.com/Maicarons/ImageTextAdder",
      githubUrl: "https://github.com/Maicarons/ImageTextAdder",
    },
    {
      title: "PDFJoker - Streamlit Password Recovery Tool",
      description:
        "Developed a web-based PDF password recovery solution featuring dictionary attacks and brute-force with configurable rules. Uses streamlit for the interactive interface and implements secure processing with no file storage on server.",
      technologies: ["Python", "Streamlit", "PyPDF2", "Security", "Hashcat"],
      liveUrl: "https://github.com/Maicarons/pdfjoker",
      githubUrl: "https://github.com/Maicarons/pdfjoker",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const NavItems = () => (
    <>
      <button
        onClick={() => scrollToSection("about")}
        className="hover:text-primary transition-colors"
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("experience")}
        className="hover:text-primary transition-colors"
      >
        Experience
      </button>
      <button
        onClick={() => scrollToSection("education")}
        className="hover:text-primary transition-colors"
      >
        Education
      </button>
      <button
        onClick={() => scrollToSection("skills")}
        className="hover:text-primary transition-colors"
      >
        Skills
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className="hover:text-primary transition-colors"
      >
        Projects
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="hover:text-primary transition-colors"
      >
        Contact
      </button>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="font-bold text-xl"> Maicarons </div>
          <p>
            <img
              src="https://readme-typing-svg.demolab.com?font=SimSun&weight=100&size=16&pause=1000&vCenter=true&random=true&width=500&lines=Of+the+people%2C+by+the+people%2C+for+the+people.;Del+pueblo%2C+por+el+pueblo%2C+para+el+pueblo.;Du+peuple%2C+par+le+peuple%2C+pour+le+people.;Von+den+Menschen%2C+durch+die+Menschen%2C+f%C3%BCr+die+Menschen.;Del+popolo%2C+dal+popolo%2C+per+il+Popolo.;Do+povo%2C+pelo+povo%2C+para+o+povo.;%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D0%B5%2C+%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BE%D0%BC%2C+%D0%B4%D0%BB%D1%8F+%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%B0.+;%E4%BA%BA%E6%B0%91%E3%81%AE%E3%80%81%E4%BA%BA%E6%B0%91%E3%81%AB%E3%82%88%E3%82%8B%E3%80%81%E4%BA%BA%E6%B0%91%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%80%82;%EB%AF%BC%EC%A4%91%EC%9D%98%2C+%EB%AF%BC%EC%A4%91%EC%97%90+%EC%9D%98%ED%95%9C%2C+%EB%AF%BC%EC%A4%91%EC%9D%84+%EC%9C%84%ED%95%9C%E3%80%82;%D9%85%D9%86+%D8%A7%D9%84%D8%B4%D8%B9%D8%A8%D8%8C+%D8%A8%D9%88%D8%A7%D8%B3%D8%B7%D8%A9+%D8%A7%D9%84%D8%B4%D8%B9%D8%A8%D8%8C+%D9%85%D9%86+%D8%A3%D8%AC%D9%84+%D8%A7%D9%84%D8%B4%D8%B9%D8%A8.+;%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B%E0%A4%82+%E0%A4%95%E0%A4%BE%2C+%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B%E0%A4%82+%E0%A4%95%E0%A5%87+%E0%A4%A6%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A4%BE%2C+%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B%E0%A4%82+%E0%A4%95%E0%A5%87+%E0%A4%B2%E0%A4%BF%E0%A4%8F%E0%A5%A4;Halk%C4%B1n%2C+halk+taraf%C4%B1ndan%2C+halk+i%C3%A7in.;%E6%B0%91%E6%9C%89%E3%80%81%E6%B0%91%E6%B2%BB%E3%80%81%E6%B0%91%E4%BA%AB%E3%80%82"
              alt="Typing SVG"
            />
          </p>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavItems />
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  <NavItems />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold">
            MD
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Maicarons</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Economics Graduate & Full-Stack Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Passionate about leveraging economic insights and cutting-edge
            technology to solve complex problems. Experienced in data analysis,
            web development, and creating innovative solutions that bridge the
            gap between economic theory and practical applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection("contact")}>
              Get In Touch
            </Button>
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle>
                      Quantitative Engineer - Hong Kong Equities
                    </CardTitle>
                    <CardDescription>
                      XIAMEN *** Quantitative Investment • 202* - Present
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Full-time</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Developed high-frequency trading systems for HKEX, achieving
                    40% increase in daily trading volume
                  </li>
                  <li>
                    Built multi-factor quant models with 15% risk-adjusted
                    annual alpha
                  </li>
                  <li>
                    Optimized order execution using ML algorithms, reducing
                    market impact costs by 23%
                  </li>
                  <li>
                    Designed real-time risk monitoring system with sub-second
                    anomaly detection
                  </li>
                  <li>
                    Led 3-member team in developing automated arbitrage systems
                    for Stock Connect securities
                  </li>
                  <li>
                    Implemented market-making strategies for Hang Seng Index
                    constituents with 98% uptime
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle>Localization Engineer</CardTitle>
                    <CardDescription>Online • 20** - Present</CardDescription>
                  </div>
                  <Badge variant="secondary">Part-time</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Developed automated localization pipelines supporting 30+
                    languages, reducing turnaround time by 45%
                  </li>
                  <li>
                    Implemented CI/CD workflows for multilingual software
                    releases using Jenkins and GitLocalize
                  </li>
                  <li>
                    Designed regex-based content extraction tools that improved
                    string translation accuracy to 99.2%
                  </li>
                  <li>
                    Integrated AI-powered translation memory systems that
                    reduced localization costs by 35%
                  </li>
                  <li>
                    Led the localization of 15+ products for Asian markets
                    (Chinese, Japanese, Korean)
                  </li>
                  <li>
                    Built QA automation tools detecting locale-specific
                    formatting issues in UI/UX elements
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle>Junior Developer</CardTitle>
                    <CardDescription>XIAN *** • 202* - 202*</CardDescription>
                  </div>
                  <Badge variant="secondary">Part-time</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Developed and maintained web applications using Vue and
                    Node.js
                  </li>
                  <li>
                    Implemented responsive designs and optimized application
                    performance
                  </li>
                  <li>
                    Participated in agile development processes and code reviews
                  </li>
                  <li>
                    Contributed to the development of the company's main product
                    platform
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle>
                      Agricultural Commodity Price Forecasting Researcher
                    </CardTitle>
                    <CardDescription>
                      University Agricultural Economics Research Center • 20** -
                      202*
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Full-time</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Developed time-series forecasting models for key
                    agricultural commodities (corn, wheat, soybeans) using ARIMA
                    and Prophet
                  </li>
                  <li>
                    Analyzed the impact of climate patterns and USDA reports on
                    price volatility using Python (Pandas, Statsmodels)
                  </li>
                  <li>
                    Created interactive dashboards visualizing price trends and
                    seasonal patterns with Plotly and Tableau
                  </li>
                  <li>
                    Published research on the correlation between El Niño
                    weather cycles and palm oil futures prices
                  </li>
                  <li>
                    Collected and processed global agricultural market data from
                    FAO, USDA, and Bloomberg terminals
                  </li>
                  <li>
                    Assisted in developing machine learning models to predict
                    crop yield impacts on commodity prices
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle>Bachelor of Science in Economics</CardTitle>
                    <CardDescription>
                      University of **** • 20** - 20**
                    </CardDescription>
                  </div>
                  <Badge>GPA: 3.6/4.0</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Specialized in Econometrics and Data Analysis with a minor in
                  Computer Science
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Advanced Econometrics</li>
                      <li>• Statistical Analysis</li>
                      <li>• Macroeconomic Theory</li>
                      <li>• Financial Economics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Computer Science Courses:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Data Structures & Algorithms</li>
                      <li>• Database Systems</li>
                      <li>• Web Development</li>
                      <li>• Machine Learning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Certifications & Professional Memberships</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge
                      variant="outline"
                      className="bg-red-50 border-red-200 text-red-800"
                    >
                      Google/Meta/Microsoft Open Source Developer Certification
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-50 border-blue-200 text-blue-800"
                    >
                      National Computer Rank Examination Level 4 Network
                      Engineer
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-orange-50 border-orange-200 text-orange-800"
                    >
                      Huawei HarmonyOS Advanced App Developer Certification
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-pink-50 border-pink-200 text-pink-800"
                    >
                      Huawei Cloud Student Developer (HCSD)
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-indigo-50 border-indigo-200 text-indigo-800"
                    >
                      ACM Professional Member
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <Badge
                      variant="outline"
                      className="bg-yellow-50 border-yellow-200 text-yellow-800"
                    >
                      Alibaba Cloud Enterprise Clouder Certification
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-teal-50 border-teal-200 text-teal-800"
                    >
                      JetBrains Student Developer
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-lime-50 border-lime-200 text-lime-800"
                    >
                      Gopher Open Source Community Active Developer
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-cyan-50 border-cyan-200 text-cyan-800"
                    >
                      Early HarmonyOS & OpenHarmony App Developer
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-50 border-purple-200 text-purple-800"
                    >
                      IEEE Student Member
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-emerald-50 border-emerald-200 text-emerald-800"
                    >
                      CCF Associate Member
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.technical.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.soft.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Tech</CardTitle>
            </CardHeader>
            <CardContent className="mb-15">
              <img src="https://skillicons.dev/icons?i=all"></img>
              <p className="mt-4">
                * Statement: I do not engage in any political content or
                activities, nor do I endorse the political views of any software
                or project developers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>maicarons2023#outlook.com (# to @)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-primary" />
                  <span>All Platforms: Maicarons</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Saturn, Mimas</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <Button size="icon" variant="outline" asChild>
                    <a
                      href="https://github.com/Maicarons"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  {/* <Button size="icon" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button> */}
                </div>
              </div>
            </div>

            {/* <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Let's work together" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell me about your project or just say hello!" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container max-w-4xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Maicarons. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
