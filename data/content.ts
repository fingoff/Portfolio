export const experience = [
  {
    company: 'Two Circles',
    role: 'Full-Stack Developer',
    period: 'Nov 2024 - Present',
    location: 'London, UK',
    summary: 'Core backend developer on a major sports ticketing platform - built 3 core services, owned Contentful integration end-to-end, and shipped the team\'s shared frontend component library.',
    tech: ['C#', '.NET', 'TypeScript', 'GitHub Actions', 'Contentful', 'Azure'],
    highlights: [
      'Primary backend developer for much of the creation of a major sports ticketing platform - independently built core services end-to-end and mentored colleagues through backend development.',
      'Designed and fully owned the fixture synchronisation service end-to-end, from architecture to implementation. The service automatically populates Contentful with structured content entries, saving editors hours of manual work per fixture cycle.',
      'Became the team\'s Contentful subject matter expert: designed the content model, upskilled engineers and editors across the team, and produced documentation for the wider digital engineering organisation.',
      'Created the first iteration of the Digital Engineering team\'s shared frontend component library - applying current best practices and establishing a scalable foundation for cross-project component reuse.',
      'Built GitHub Actions pipelines enabling automated testing, content migrations, and consistent deployment workflows across environments.',
    ],
    // Drop your screenshots into /public/images/ and update these paths
    screenshots: [
      { src: '/images/web.jpg', caption: 'website' },
      { src: '/images/app.jpg', caption: 'mobile app' },
    ],
  },
  {
    company: 'C8 Technologies',
    role: 'Junior Full-Stack Developer',
    period: 'Nov 2022 - Nov 2024',
    location: 'London, UK',
    summary: 'Built C# microservices, C++ optimisation algorithms, and Vue.js interfaces - plus sole owner of a new AWS-backed data provider integration that reduced costs and vendor dependency.',
    tech: ['C#', '.NET', 'C++', 'Vue.js', 'ASP.NET', 'AWS S3'],
    highlights: [
      'Designed and developed C# microservices: addressed bugs, added features, and built RESTful APIs using ASP.NET and Swagger.',
      'Applied C++ back-end skills using the OSQP optimisation library - translated MATLAB code and optimised existing methods for improved system efficiency.',
      'Led the research, selection, and integration of a new data provider, reducing cost and dependency on the legacy provider; set up AWS S3 infrastructure for the company and established data retrieval pipelines.',
      'Implemented frontend improvements in Vue.js, improving the usability and responsiveness of the user interface.',
    ],
  },
  {
    company: 'Solidatus',
    role: 'Junior Development Specialist Intern',
    period: 'Apr 2021 - Sep 2021',
    location: 'London, UK',
    summary: 'Intern contributor to the core Solidatus web app - full-stack across C#, React/TypeScript, and Cypress alongside a team of four in an Agile Scrum environment.',
    tech: ['C#', 'React', 'TypeScript', 'Cypress'],
    highlights: [
      'Full-stack development on the Solidatus web application: C# for the back-end, React with TypeScript for the front-end, and Cypress for UI testing.',
      'Implemented features and resolved bugs for an upcoming version release, working alongside three other developers.',
      'Operated in an Agile Scrum framework with daily stand-ups and biweekly sprint planning meetings.',
    ],
  },
]

export const projects = [
  {
    title: 'Agile Electronic Guide-Stick for the Visually Impaired',
    period: 'Oct 2021 - Jun 2022',
    description:
      'Final year individual project achieving First Class Honours (74.3%). Designed and built a prototype device using microcontrollers and depth cameras to improve on the conventional white cane, paired with a companion Android app built in Kotlin that leveraged Bluetooth and mapping APIs.',
    tech: ['C++', 'Python', 'OpenCV', 'Kotlin', 'Embedded Systems'],
    color: '#0EA5E9',
  },
  {
    title: 'Pose Detection for Information-Spreading Robot',
    period: 'Jan 2022 - Apr 2022',
    description:
      'Worked in a group of 11 to evaluate the Pepper Robot as an information-spreading platform. Built a computer vision pose detection model using Python ML libraries. Delivered a live demo and co-authored a research paper analysing experimental findings.',
    tech: ['Python', 'NumPy', 'MediaPipe', 'scikit-learn', 'Pandas'],
    color: '#8B5CF6',
  },
]

export const education = [
  {
    institution: 'Imperial College London',
    degree: 'MEng Electronic and Information Engineering',
    period: 'Sep 2018 - Jul 2022',
    detail:
      'First Class Honours. President\'s Scholar - awarded to one of 112 undergraduates for demonstrating the highest academic excellence and potential. Specialised in Decentralised Finance, Deep Learning, Computer Vision, and Robotics. Also completed Imperial Business School modules in Managerial Economics and Corporate Finance.',
  },
  {
    institution: 'London Academy of Excellence',
    degree: 'A-Levels',
    period: 'Sep 2016 - Jul 2018',
    detail:
      'Mathematics (A*), Physics (A*), Economics (A), Psychology (A). Merit Scholar - awarded in 2017 for achieving top grades across all subjects in Year 12 end-of-year exams.',
  },
]

export const skills = [
  {
    category: 'Core',
    items: ['TypeScript', 'C#/.NET', 'React', 'Next.js', 'Node.js', 'Python', 'C++', 'PostgreSQL'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub Actions', 'Contentful', 'Docker', 'AWS', 'Azure', 'Redis', 'Swagger', 'Playwright', 'Jira', 'Apidog'],
  },
]
