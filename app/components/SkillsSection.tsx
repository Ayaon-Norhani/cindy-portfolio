'use client';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'Go', level: 80 },
  { name: 'JavaScript', level: 70 },
  { name: 'HTML', level: 85 },
  { name: 'CSS', level: 90 },
  { name: 'Postman', level: 88 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'MySQL', level: 88 },
  { name: 'Network troubleshooting', level: 85 },
  { name: 'System management', level: 90 },
  { name: 'Project management', level: 95 },
  { name: 'Office software', level: 90 },
  { name: 'Adobe Photoshop', level: 90 },
  { name: 'Data Entry & Database Management', level: 95 },
  { name: 'Time & Task Management Tools', level: 95 },
];

const SkillsSection = () => {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center">Technical Expertise</h2>
        <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Specialized in modern technologies and frameworks, with a background in software development, IT administration, and administrative support.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Core Technologies */}
          <div className="space-y-4 sm:space-y-6 px-2">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
              </svg>
              Core Technologies
            </h3>
            {skills.slice(0, 7).map((skill) => (
              <div key={skill.name} className="group relative">
                <div className="flex flex-wrap sm:flex-nowrap justify-between mb-2 gap-2">
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
                    <span className="font-medium">{skill.name}</span>
                    {/* Skill-specific badges */}
                    <div className="flex flex-wrap sm:flex-nowrap gap-1">
                      {skill.name === 'Go' && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Cross-Platform</span>
                      )}
                      {skill.name === 'JavaScript' && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">Cross-platform, Web (Frontend & Backend)</span>
                      )}
                      {skill.name === 'HTML' && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Web (Frontend)</span>
                      )}
                      {skill.name === 'CSS' && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">Web (Frontend)</span>
                      )}
                      {skill.name === 'Postman' && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"> Cross-platform</span>
                      )}
                      {skill.name === 'PostgreSQL' && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20"> Cross-platform (Linux, macOS, Windows)</span>
                      )}
                      {skill.name === 'MySQL' && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"> Cross-platform (Linux, macOS, Windows)</span>
                      )}
                    </div>
                  </div>
                  <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-1000 ease-out scale-x-0 group-hover:scale-x-100"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left animate-expand"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                {/* Hover Card with Details */}
                <div className="hidden lg:block absolute left-full top-0 ml-4 w-48 p-3 rounded-lg bg-gray-800/90 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-700/50">
                  <div className="text-sm space-y-2">
                    <p className="font-medium">{skill.name}</p>
                    <div className="space-y-1 text-xs text-gray-400">
                      <p>• {skill.level}% Proficiency</p>
                      <p>• {skill.level > 90 ? 'Expert' : skill.level > 80 ? 'Advanced' : 'Intermediate'} Level</p>
                      <p>• {Math.round(skill.level / 40)} Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="space-y-4 sm:space-y-6 px-2">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,0L3,7L4.63,8.27L12,14L19.36,8.27L21,7L12,0M19.37,10.73L12,16.47L4.62,10.73L3,12L12,19L21,12L19.37,10.73M19.37,15.73L12,21.47L4.62,15.73L3,17L12,24L21,17L19.37,15.73" />
              </svg>
              Specialized Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.slice(7).map((skill) => (
                <div
                  key={skill.name}
                  className="group bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <h4 className="font-medium mb-2 break-words">{skill.name}</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex-grow h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left animate-expand"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-purple-400 whitespace-nowrap">{skill.level}%</span>
                    </div>
                  </div>
                  {/* Decorative Background Icon */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    {(() => {
                      switch (skill.name) {
                        case 'Network troubleshooting':
                          return (
                            <svg className="absolute -right-4 -bottom-4 w-24 h-24 text-red-500 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                            </svg>
                          );
                        case 'Project management':
                          return (
                            <svg className="absolute -right-4 -bottom-4 w-24 h-24 text-green-500 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3 13h2v-2H3v2zm4 0h14v-2H7v2zm-4 4h2v-2H3v2zm4 0h14v-2H7v2zM3 9h2V7H3v2zm4 0h14V7H7v2z"/>
                            </svg>
                          );
                        case 'Office software':
                          return (
                            <svg className="absolute -right-4 -bottom-4 w-24 h-24 text-blue-400 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3 3v18h18V3H3zm2 2h14v14H5V5zm2 2v10h10V7H7z"/>
                            </svg>
                          );
                        case 'Adobe Photoshop':
                          return (
                            <svg className="absolute -right-4 -bottom-4 w-24 h-24 text-yellow-500 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
                            </svg>
                          );
                        case 'System management':
                          return (
                            <svg className="absolute -right-4 -bottom-4 w-24 h-24 text-orange-500 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                            </svg>
                          );
                        case 'Data Entry & Database Management':
                          return (
                            <svg className="absolute -right-4 -bottom-4 w-24 h-24 text-indigo-500 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/>
                            </svg>
                          );
                        case 'Time & Task Management Tools':
                          return (
                            <svg className="absolute -right-4 -bottom-4 w-24 h-24 text-teal-500 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                            </svg>
                          );
                        default:
                          return (
                            <svg className="absolute -right-4 -bottom-4 w-24 h-24 text-gray-500 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
                            </svg>
                          );
                      }
                    })()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;