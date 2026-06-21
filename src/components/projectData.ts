// projectData.ts — pure data, no JSX.
// Use **bold** markers in strings; FormattedText renders them as <strong>.
import type { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'project1',
    title: 'CMOVF: Computerized Mapping of Visuospatial Fields',
    logo: '🚀',
    description: 'A digital visuospatial testing platform that allows clinicians to link patient data to their dynamically captured and quantified hemispatial neglect.',
    descriptions: {
      short: 'A digital visuospatial testing platform that allows clinicians to link patient data to their dynamically captured and quantified hemispatial neglect.',
      medium: 'A digital visuospatial testing platform that allows clinicians to link patient\'s data to their dynamically captured and quantified hemispatial neglect. Visuospatial assessment, which looks at higher brain processes in spatial cognition, is in urgent need of a data-centric software platform for medical researchers and professionals to make it easier to map out visuospatial dynamics and link patient performance data to brain imaging data.',
      long: `CMOVF is a platform built to modernize visuospatial neglect assessments for stroke patients, replacing traditional paper-based exams with a digital solution.
As part of a **cross-functional team** of software engineers, UI/UX designers, and our managers collaborating directly with a **cognitive neuroscientist client** who guided requirements in biweekly meetings.
I contributed to the **full development cycle** from requirements gathering to deployment.
On the engineering side, I worked on implementing the **frontend interface** for clinician-administered assessments, built data capture and storage flows, and integrated the system with a backend designed for longitudinal patient tracking.
I also collaborated with the design team to translate clinical workflows into an accessible UI, ensuring the tool was usable for both research and clinical settings.
Through this process, we delivered a tool that allows clinicians to record, store, and analyze results quantitatively while giving researchers standardized, data-rich insights to link behavioral and imaging data.
The project strengthened my skills in **full-stack development**, **stakeholder communication**, and **teamwork** on a real-world product.`,
    },
    learned: 'This project taught me how to work across a full team — developers, designers, PMs, and stakeholders — while adapting quickly to new tools. I learned to contribute to an existing codebase, follow team conventions, and lean on others\' expertise to deliver stronger results together.',
    media: {
      videos: [
        'https://youtu.be/RGd1jgi8J6c',
        'https://youtu.be/ZniZ02EgZVk',
      ],
    },
  },
  {
    id: 'project2',
    title: 'Function Junction',
    logo: '💡',
    description: 'Function Junction is Lucy\'s math teaching website. This website houses tutor scheduling, academic resources, teaching practices, and teaching videos.',
    descriptions: {
      short: 'Function Junction is Lucy\'s math teaching website. This website houses tutor scheduling, academic resources, teaching practices, and teaching videos.',
      medium: 'Class project turned into passion, Function Junction was originally created as a final project on Google Sites for Introduction to Math Tutoring, WED ME 501, Dr. Samuel Cook, at Boston University. I\'ve since rebuilt and expanded it into a React-based platform that organizes my math teaching videos, showcases my teaching philosophy, and supports private tutoring scheduling.',
      long: `Function Junction started as a teaching website but became a personal project to strengthen my web development skills.
I rebuilt it from the ground up using a modern tech stack with **React** and **Node.js**, applying principles of component-based design, state management, and backend integration.
The platform now supports video hosting, resource sharing, and scheduling features, demonstrating full-stack development from UI to data handling.
I am also designing a cohesive front-end theme to practice consistent branding and user experience design.
This project showcases my ability to take an idea from concept to implementation while iterating on both technical features and design.`,
    },
    learned: 'This project has been an exercise in wearing multiple hats: I got to be the software engineer, the UI/UX designer, and the stakeholder. I learned that visualizing a design in my head isn\'t enough — without detailed planning, even small choices (like picking an icon out of hundreds that look similar) became time-consuming and frustrating. This showed me the value of organized, intentional design before coding. I also began exploring branding and theme development, experimenting with design cohesion through metaphors (like the train/public transit theme).',
    media: {
      videos: ['https://www.youtube.com/embed/_jPpGXu7MBo?si=4sJWYEUbvbBH7BY8'],
      files: [
        {
          name: 'GitHub Repository',
          url: 'https://github.com/LYW14/functionJunction',
          type: 'link',
        },
      ],
    },
  },
  {
    id: 'project3',
    title: 'LOOKSMAXX (Latent Observation Of Key Stimuli via Measurement of X-Features)',
    logo: '🎨',
    description: 'This project analyzed human preferences for facial attractiveness using AI-generated faces through survey-based data from a web-based rating experiment.',
    descriptions: {
      short: 'This project analyzed human preferences for facial attractiveness using AI-generated faces through survey-based data from a web-based rating experiment. It was found that dimensions correlated with attractiveness and demonstrated how facial features could be manipulated to increase/decrease perceived beauty.',
      medium: 'In an era where digital appearances increasingly mediate social and professional interactions, understanding human perceptions of facial attractiveness has become highly relevant. This project analyzed human perceptions of facial attractiveness using AI-generated faces from NVIDIA\'s StyleGAN. Through a web-based rating experiment, ridge regression, and PCA, we mapped how facial attributes relate to perceived beauty and inferred a direction of higher attractiveness. While attractiveness was not a primary source of variance in StyleGAN\'s latent space, it contributed significantly. Further research with larger, more diverse samples is needed.',
      long: `This project explored the relationship between facial features and perceived attractiveness using AI-generated imagery and human survey data.
I built a **web-based experiment in jsPsych**, integrated DataPipe for **backend data storage**, and hosted the project on the Open Science Framework.
Participants rated faces generated with NVIDIA's StyleGAN, and I performed the statistical modeling and machine learning analysis using **Ridge Regression** and **Principal Component Analysis (PCA)**.
The results showed that StyleGAN's latent space encodes a meaningful dimension for attractiveness, suggesting potential for modeling human aesthetic judgments computationally.
While limited by a sample size of 1,390 and a participant pool skewed toward university-age individuals, the study demonstrated my ability to combine **frontend experiment design**, **backend integration**, and **quantitative analysis** in a research setting.`,
    },
    learned: 'I learned the importance of cross-platform testing after launching without mobile compatibility and quickly adapting the site for all devices. I also applied technical skills to psychology — designing and analyzing an experiment — while building experience in study design and ethical considerations for human participants.',
    media: {
      files: [
        {
          name: 'GitHub Repository',
          url: 'https://github.com/LYW14/DS497_FinalProject_LOOKSMAX',
          type: 'link',
        },
        {
          name: 'Final Paper',
          url: 'https://docs.google.com/document/d/150wa4m7MpKJGuMfEewGF9fGIUnarKN9iK08zlIwIRV0/edit?usp=sharing',
          type: 'link',
        },
      ],
    },
  },
  {
    id: 'project4',
    title: 'Academic Performance vs. Study Habits in BU Students',
    logo: '📊',
    description: 'A study on academic performance and study habits with survey-based data from the population of Boston University.',
    descriptions: {
      short: 'A study on academic performance and study habits with survey-based data from the population of Boston University. We found that study habits, like what genre of music students listen to and location, are correlated with academic performance.',
      medium: 'This study on academic performance and study habits with survey-based data from the population of Boston University for an introductory statistics course group project investigates the relationship between a student\'s music consumption, preferred study space, and major and the effect that these variables have on their GPA.',
      long: 'This comprehensive research project investigated the complex relationship between study habits and academic performance within the Boston University student population. Through carefully designed surveys and statistical analysis, the study examined various factors including study duration, methodology preferences, environmental factors, and their correlation with GPA and course performance. The research provides valuable insights for both students seeking to optimize their study strategies and educators looking to understand learning patterns in higher education.',
    },
    learned: 'This project strengthened my skills in statistical research, from survey design to data cleaning and analysis with JMP and Python. I also gained experience writing a structured research paper as part of a team, learning the value of flexibility, communication, and perseverance in collaborative work.',
    media: {
      files: [
        {
          name: 'Final Paper',
          url: 'https://docs.google.com/document/d/11F-DElASg7nceoDMCuMl-ZB3aQHesUVI8TmeQ8tbnXU/edit?usp=sharing',
          type: 'link',
        },
      ],
    },
  },
  {
    id: 'project5',
    title: 'Single Cell/Goblet Cell Transcriptome Changes in Colitis',
    logo: '🧬',
    description: 'Analysis of single-cell sequencing results from a mouse colitis model to understand transcriptome changes in goblet cells.',
    descriptions: {
      short: 'In this project I analyzed the results of the single-cell sequencing of the mouse colitis model. I identified the major types/subtypes of these cells to create a mapping for the model.',
      medium: 'To profile the cells in the mouse colitis model, a study using single-cell sequencing technology had been completed. This project analyzed the raw sequencing data and identified the major types/subtypes of cells by the expressions of specific cell markers to establish a single cell atlas.',
      long: `A two-year long project analyzing and identifying the cells involved in the disease progression of colitis in the mouse model using **cell markers** and **single-cell sequencing**.
While we know these cells play a critical role in the disease progression/recovery, we do not know what cells they are.
This project had a **novel finding** in epithelial cell population: the only proliferative cells were a subtype of Goblet cells, suggesting a possibility of Goblet cells as the reservoir source for repair.
In essence, can we harness the power of Goblet cells and increase their growth to heal the colon from colitis?`,
    },
    learned: `This was my first exposure to **single-cell sequencing**, and I was struck by both the power and the limitations of this technology.
This project ended after two years of research when I reached a point where I no longer was able to advance with the needs of the project/technology.
Remembering that feeling of limitation has pushed me to keep learning new skills so that my curiosity and research won't be constrained by the lack of tools.
One day, I may even learn the skills to be able to return and complete this project in a more satisfying manner.
I also developed public speaking and science communication skills. At science fair competitions, I was able to deliver my presentation using complex language to an audience of field specialists and use simpler language with interested interviewers and peers who had no prior exposure.
I learned to balance depth and clarity, using a variety of visuals to make an academic subject engaging and accessible.`,
    media: {
      files: [
        {
          name: 'Single-cell Atlas of Mouse Colitis Tissue',
          url: 'https://isef.net/project/bmed078---single-cell-atlas-of-mouse-colitis-tissue',
          type: 'link',
        },
      ],
    },
  },
];