import BlurText from "@/components/animated/BlurText";
import ClickSpark from "@/components/animated/ClickSpark";
import Dock from "@/components/animated/Dock";
import RotatingText from "@/components/animated/RotatingText";
import SpotlightCard from "@/components/animated/SpotlightCard";
import Squares from "@/components/animated/SquareBg";
import Socials from "@/components/Socials";
import { Archive, Home, Settings, User } from "lucide-react";
import { useMemo } from "react";

export default function Page() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <main className="bg-black relative min-h-screen z-10">
        <div className="absolute opacity-10 z-[0] inset-0">
          {useMemo(
            () => (
              <Squares
                speed={0.005}
                squareSize={40}
                direction="down"
                borderColor="#fff"
                hoverFillColor="#222"
              />
            ),
            []
          )}
        </div>
        <nav className="bg-white py-1 text-center font-bold absolute inset-x-0">
          ...Under Construction...
        </nav>
        <section className="max-b-w min-h-screen pt-20 pb-12 relative z-20 flex items-center justify-center">
          <div className="flex flex-col gap-6 items-center  rounded-3xl">
            <div className="flex flex-col sm:flex-row gap-4 px-8 sm:px-0 sm:gap-14">
              <div className="w-full">
                <BlurText
                  text="Obisike Treasure"
                  delay={150}
                  animateBy="words"
                  onAnimationComplete={() => {
                    console.log("Animation completed!");
                  }}
                  direction="top"
                  className="text-[5rem] leading-[4.2rem] uppercase font-medium text-gray-100"
                />
                <article className="flex  text-3xl font-extrabold gap-2 my-5">
                  <RotatingText
                    texts={["Frontend", "Backend", "Fullstack"]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-orange-400 to-purple-500 text-black pt-0.5 overflow-hidden justify-center "
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.05}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                  <div className=" text-gray-300 flex items-center">
                    Developer
                  </div>
                </article>
                <Socials />
              </div>
              <div className=" ">
                <p className="text-gray-400 text-2xl mt-10">
                  With 5 years of experience crafting robust web applications
                  and scalable solutions. Passionate about building end-to-end
                  solutions that make a difference.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Me Section */}
        <section className="max-b-w pb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text mb-6">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                I&apos;m a passionate full-stack developer with over 5 years of experience in creating 
                innovative web solutions. My journey began with a curiosity for how things work 
                on the web, which evolved into a deep love for crafting efficient, scalable, and 
                user-friendly applications.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                I thrive in collaborative environments where I can contribute to meaningful projects 
                that solve real-world problems. My approach combines technical expertise with 
                creative problem-solving, always keeping the end-user experience at the forefront 
                of development decisions.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying updated with the latest trends in web development.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="max-b-w pb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of some projects I&apos;ve worked on, demonstrating my skills across 
              different technologies and domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpotlightCard className="w-full">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">E-Commerce Platform</h3>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">Full Stack</span>
                </div>
                <p className="text-gray-300 flex-grow">
                  A comprehensive e-commerce solution built with React, Node.js, and PostgreSQL. 
                  Features include real-time inventory management, payment processing, and 
                  advanced analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">PostgreSQL</span>
                </div>
              </div>
            </SpotlightCard>
            
            <SpotlightCard className="w-full">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">Task Management App</h3>
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">Frontend</span>
                </div>
                <p className="text-gray-300 flex-grow">
                  A modern task management application with real-time collaboration features. 
                  Built with Vue.js and integrates with multiple third-party APIs for enhanced 
                  productivity workflows.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Vue.js</span>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">TypeScript</span>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Firebase</span>
                </div>
              </div>
            </SpotlightCard>
            
            <SpotlightCard className="w-full">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">API Gateway Service</h3>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Backend</span>
                </div>
                <p className="text-gray-300 flex-grow">
                  A scalable microservices API gateway built with Laravel and Docker. 
                  Handles authentication, rate limiting, and request routing for multiple 
                  client applications with high availability.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Laravel</span>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Docker</span>
                  <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Redis</span>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        <section className="max-b-w pb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My journey through various roles and organizations, building expertise 
              in modern web development.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-purple-500"></div>
              
              {/* Experience items */}
              <div className="space-y-12">
                <div className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full flex items-center justify-center text-black font-bold">
                    Sr
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">Senior Full Stack Developer</h3>
                      <span className="text-orange-400 font-medium">2022 - Present</span>
                    </div>
                    <p className="text-purple-400 mb-3">Tech Solutions Inc.</p>
                    <p className="text-gray-300 leading-relaxed">
                      Led the development of enterprise-level web applications, mentored junior developers, 
                      and architected scalable solutions serving 100K+ users. Implemented CI/CD pipelines 
                      and improved system performance by 40%.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-black font-bold">
                    FS
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">Full Stack Developer</h3>
                      <span className="text-orange-400 font-medium">2020 - 2022</span>
                    </div>
                    <p className="text-purple-400 mb-3">Digital Innovations Ltd.</p>
                    <p className="text-gray-300 leading-relaxed">
                      Developed and maintained multiple client projects using React, Vue.js, Laravel, and Node.js. 
                      Collaborated with design teams to implement pixel-perfect UI/UX and optimized applications 
                      for maximum speed and scalability.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-black font-bold">
                    Jr
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">Junior Developer</h3>
                      <span className="text-orange-400 font-medium">2019 - 2020</span>
                    </div>
                    <p className="text-purple-400 mb-3">StartUp Hub</p>
                    <p className="text-gray-300 leading-relaxed">
                      Started my professional journey building responsive web applications and learning 
                      best practices in software development. Contributed to various projects while 
                      gaining expertise in modern JavaScript frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section className="max-b-w pb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpotlightCard className="w-full">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
                  Frontend
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">React</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-blue-400"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Vue.js</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-green-400"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">TypeScript</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-blue-400"></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Next.js</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-white"></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
            
            <SpotlightCard className="w-full">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                  Backend
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Node.js</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-green-400"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Laravel</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-red-400"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Python</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Express.js</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-green-400"></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
            
            <SpotlightCard className="w-full">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  Database & Tools
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">PostgreSQL</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-blue-400"></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">MongoDB</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-green-400"></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Redis</span>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-red-400"></div>
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-gray-600"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Docker</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-blue-400"></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
            
            <SpotlightCard className="w-full">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                  DevOps & Cloud
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">AWS</span>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-orange-400"></div>
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-gray-600"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Git</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-orange-400"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">CI/CD</span>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-green-400"></div>
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-gray-600"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Linux</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* Original Skills Section - keeping the existing content but making it more comprehensive */}
        {/* Original Skills Section - Enhanced */}
        <section className="max-b-w pb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text mb-6">
              Core Competencies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My primary areas of expertise and specialization in web development.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col gap-4">
            <SpotlightCard className="w-full sm:w-1/3">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text">
                  Frontend Technologies
                </h2>

                <p className="text-lg text-gray-300">
                  Specialized in Vue.js and React development with TypeScript,
                  creating modern and responsive user interfaces with a focus on
                  performance and user experience.
                </p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-orange-400 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Vue.js</span>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">TypeScript</span>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
            <SpotlightCard className="w-full sm:w-1/3">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text">
                  Backend Technologies
                </h2>

                <p className="text-lg text-gray-300">
                  Proficient in Laravel, PHP, Python, and Node.js with
                  Express.js, building robust and scalable server-side
                  applications and APIs.
                </p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-orange-400 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Laravel</span>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Node.js</span>
                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Python</span>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
            <SpotlightCard className="w-full sm:w-1/3">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text">
                  Full Stack Expertise
                </h2>

                <p className="text-lg text-gray-300">
                  End-to-end development capabilities, combining frontend and
                  backend technologies to deliver complete web solutions with
                  modern architecture patterns.
                </p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-orange-400 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">API Design</span>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Microservices</span>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">DevOps</span>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Testing</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section className="max-b-w pb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text mb-6">
              Education & Certifications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My educational background and professional certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <SpotlightCard className="w-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">EDU</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Computer Science</h3>
                    <p className="text-purple-400">Bachelor&apos;s Degree</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  University of Technology • 2015-2019
                </p>
                <p className="text-gray-400 text-sm">
                  Focused on software engineering, data structures, algorithms, and web development. 
                  Graduated with honors and participated in multiple coding competitions.
                </p>
              </div>
            </SpotlightCard>
            
            <SpotlightCard className="w-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AWS</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AWS Certified</h3>
                    <p className="text-purple-400">Cloud Solutions</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Amazon Web Services • 2023
                </p>
                <p className="text-gray-400 text-sm">
                  Certified in AWS Cloud Solutions Architecture, demonstrating expertise 
                  in designing and deploying scalable cloud applications.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-b-w pb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I&apos;m always open to discussing new opportunities 
              and exciting projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <SpotlightCard className="w-full">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300">obisike.treasure@example.com</p>
                  <p className="text-gray-400 text-sm mt-2">Drop me a line anytime</p>
                </div>
              </div>
            </SpotlightCard>
            
            <SpotlightCard className="w-full">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+234 (xxx) xxx-xxxx</p>
                  <p className="text-gray-400 text-sm mt-2">Available for calls</p>
                </div>
              </div>
            </SpotlightCard>
            
            <SpotlightCard className="w-full">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-300">Nigeria</p>
                  <p className="text-gray-400 text-sm mt-2">Open to remote work</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Want to see more of my work? Check out my repositories and connect with me on social media.
            </p>
            <div className="flex justify-center">
              <Socials />
            </div>
          </div>
        </section>
        <div className="fixed bottom-0 left-0 z-[1000] max-w-[100vw] right-0">
          <Dock
            items={[
              {
                icon: <Home size={18} className="text-gray-200" />,
                label: "Home",
                onClick: () => alert("Home!"),
              },
              {
                icon: <Archive size={18} className="text-gray-200" />,
                label: "Archive",
                onClick: () => alert("Archive!"),
              },
              {
                icon: <User size={18} className="text-gray-200" />,
                label: "Profile",
                onClick: () => alert("Profile!"),
              },
              {
                icon: <Settings size={18} className="text-gray-200" />,
                label: "Settings",
                onClick: () => alert("Settings!"),
              },
            ]}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </div>
      </main>
    </ClickSpark>
  );
}
