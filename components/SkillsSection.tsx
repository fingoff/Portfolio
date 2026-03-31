'use client'

import SectionLabel from '@/components/SectionLabel'

const coreSkills = [
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', color: '#3178C6' },
  { name: 'C# / .NET', icon: 'https://cdn.simpleicons.org/dotnet/512BD4', color: '#512BD4' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff', color: '#ffffff' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', color: '#339933' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', color: '#3776AB' },
  { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C', color: '#00599C' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', color: '#4169E1' },
]

const toolSkills = [
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
  { name: 'Contentful', icon: 'https://cdn.simpleicons.org/contentful/2478CC' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'AWS', icon: 'https://img.icons8.com/color/96/amazon-web-services.png' },
  { name: 'Azure', icon: 'https://img.icons8.com/color/96/azure-1.png' },
  { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/FF4438' },
  { name: 'Swagger', icon: 'https://cdn.simpleicons.org/swagger/85EA2D' },
  { name: 'Playwright', icon: 'https://playwright.dev/img/playwright-logo.svg' },
  { name: 'Jira', icon: 'https://cdn.simpleicons.org/jira/0052CC' },
  { name: 'Apidog', icon: '/icons/apidog.svg' },
]

function CoreSkillCard({ name, icon, color }: { name: string; icon: string; color: string }) {
  return (
    <div
      className="flex flex-col items-center gap-3 px-4 py-5 bg-surface/50 border border-border rounded-md hover:border-accent/40 transition-all duration-300 cursor-default group relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${color}15 0%, transparent 70%)` }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt="" aria-hidden="true" width={28} height={28} className="w-7 h-7 object-contain relative z-10" />
      <span className="font-mono text-xs text-text relative z-10 whitespace-nowrap">{name}</span>
    </div>
  )
}

function ToolBadge({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-surface/40 border border-border rounded-md mx-2 shrink-0 cursor-default">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt="" aria-hidden="true" width={14} height={14} className="w-3.5 h-3.5 object-contain opacity-70" />
      <span className="font-mono text-xs text-muted whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="mb-24">
      <SectionLabel index="04">Tech Stack</SectionLabel>

      {/* Core */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {coreSkills.map((skill) => (
          <CoreSkillCard key={skill.name} {...skill} />
        ))}
      </div>

      {/* Tools marquee */}
      <p className="font-mono text-xs text-muted mt-8 mb-4 uppercase tracking-widest">Tools &amp; Platforms</p>
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{ animation: 'marquee-left 40s linear infinite', width: 'max-content' }}
        >
          {[...toolSkills, ...toolSkills].map((skill, i) => (
            <ToolBadge key={`${skill.name}-${i}`} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
