import React from "react";
import { Badge } from "@/components/ui/badge";
import SpotlightCard from "@/components/animated/SpotlightCard";
import profileData from "@/lib/data/profile.json";

export default function AboutMe() {
  const { personal_information, summary, education, skills } = profileData;

  return (
    <section id="about" className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-700 dark:from-orange-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {summary.professional}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Education & Background */}
          <SpotlightCard className="w-full">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-700 dark:from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                Education & Background
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-gray-100/80 dark:bg-gray-800/50 rounded-lg border border-gray-300/50 dark:border-gray-700/50">
                  <h4 className="text-lg font-medium text-purple-600 dark:text-purple-300 mb-2">
                    {education.degree}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-1">
                    {education.institution}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {education.field_of_study} • Graduated{" "}
                    {education.graduation_date}
                  </p>
                </div>

                <div className="p-4 bg-gray-100/80 dark:bg-gray-800/50 rounded-lg border border-gray-300/50 dark:border-gray-700/50">
                  <h4 className="text-lg font-medium text-purple-600 dark:text-purple-300 mb-2">
                    Location
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {personal_information.address.city},{" "}
                    {personal_information.address.country}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate about creating innovative web solutions with a focus
                on user experience and performance. I enjoy working with modern
                technologies and contributing to meaningful projects that make a
                difference.
              </p>
            </div>
          </SpotlightCard>

          {/* Tech Stack Overview */}
          <SpotlightCard className="w-full">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-700 to-blue-400 dark:bg-gradient-to-r dark:from-green-400 dark:to-blue-400 text-transparent bg-clip-text">
                Tech Stack
              </h3>

              <div className="space-y-6">
                {/* Frontend */}
                <div>
                  <h4 className="text-lg font-medium text-green-600 dark:text-green-300 mb-3">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-green-100 dark:bg-green-500/20 border-green-300 dark:border-green-500/30 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-500/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="text-lg font-medium text-blue-600 dark:text-blue-300 mb-3">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-blue-100 dark:bg-blue-500/20 border-blue-300 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-500/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="text-lg font-medium text-purple-600 dark:text-purple-300 mb-3">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((lang, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-purple-100 dark:bg-purple-500/20 border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-500/30 transition-colors"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Additional Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Databases */}
          <SpotlightCard className="w-full">
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-semibold text-orange-600 dark:text-orange-300">
                Databases
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((db, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-orange-100 dark:bg-orange-500/20 border-orange-300 dark:border-orange-500/30 text-orange-700 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-500/30 transition-colors"
                  >
                    {db}
                  </Badge>
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* DevOps */}
          <SpotlightCard className="w-full">
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-semibold text-cyan-600 dark:text-cyan-300">
                DevOps & Cloud
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.devops.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-cyan-100 dark:bg-cyan-500/20 border-cyan-300 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-200 dark:hover:bg-cyan-500/30 transition-colors"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
