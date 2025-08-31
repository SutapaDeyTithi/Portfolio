
const data = {
  landingData: {
    firstName: "Sutapa Dey Tithi",
    email: "stithi@ncsu.edu",
    fb: "https://www.facebook.com/sutapadey.tithi.73",
    linkedIn: "https://linkedin.com/in/sutapa-dey-tithi-995399157",
    github: "https://github.com/SutapaDeyTithi",
    scholar: "https://scholar.google.com/citations?user=FC3AM-wAAAAJ&hl=en",
    cv: "https://drive.google.com/file/d/1_Zu4OHwDRWmjtJqZGqyFQ2dRWhQDASa4/view?usp=sharing"
  },
  education: [
    {
      university2: "North Carolina State University",
      degree2: "PhD in Computer Science",
      fromDate2: "Aug 2022",
      toDate2: "Present",
      university: "Bangladesh University of Engineering and Technology (BUET)",
      degree: "BSc in Computer Science and Engineering",
      gpa: "3.92",
      fromDate: "2017",
      toDate: "2022",
      research_area: "Educational Data Mining, Generative AI, HCI"
    }
  ],
  research: [
  {
    title: 'DeepThought: Enhancing Student Learning in Logic with Intelligent Tutoring Systems',
    supervisorName: 'Dr. Tiffany Barnes',
    supervisorLink: 'https://scholar.google.com/citations?user=7rSs25YAAAAJ&hl=en',
    department: 'Department of Computer Science',
    institution: 'North Carolina State University (NCSU)',
    blurb: 'Developing AI-driven scaffolding techniques to enhance student learning in propositional logic using DeepThought tutor.',
    fullDescription:
      'My current PhD research under Dr. Tiffany Barnes focuses on understanding and guiding students\' learning trajectories within DeepThought, a propositional logic tutor. I use interaction logs to model student proficiency, detect misconceptions, and deliver adaptive, conceptual, and metacognitive support using machine learning and reinforcement learning techniques.',
    papers: [
      {
        title: 'Guided Parsons Problems for Learning Logic with Subgoals',
        link: 'https://arxiv.org/abs/2505.04712'
      },
      {
        title: 'The Promise and Limits of LLMs in Constructing Proofs and Hints for Logic Problems',
        link: 'https://ui.adsabs.harvard.edu/abs/2025arXiv250504736D/abstract'
      },
      {
        title: 'Strategic Interface Design Can Improve Learning Efficiency',
        link: 'https://educationaldatamining.org/edm2024/proceedings/2024.EDM-posters.78/'
      },
      {
        title: 'Learning Problem Decomposition-Recomposition with Data-Driven Chunky Parsons Problems',
        link: 'https://eric.ed.gov/?id=ED630863'
      },
      {
        title: 'Reducing Training Time using Deep Reinforcement Learning',
        link: 'https://educationaldatamining.org/edm2024/proceedings/2024.EDM-long-papers.21/'
      },
      
    ],
    thesis: null,
  },
    {
    title: 'Automated Analysis of Parkinson’s Disease (PD)',
    supervisorName: 'Dr. Mohammad Saifur Rahman',
    supervisorLink: 'https://scholar.google.com/citations?user=9d52x-cAAAAJ&hl=en',
    department: 'CSE',
    institution: 'BUET',
    blurb: 'We investigate how a web-based system using video and audio can help detect and monitor Parkinson’s disease (PD) in Bangladesh. By collecting data from local participants and applying machine learning models, our research extends the PARK framework and contributes region-specific insights to global PD studies.',
    fullDescription: 'Over 10 million people in the world are living with Parkinson’s disease (PD). But, a large problem, specially in Bangladesh, is that many individuals, living with PD, have not been diagnosed. Even when diagnosed, PD requires a continuous process of trying and adjusting medications. We aim to explore the potential of a web-based application which is able to capture audio and video data from the participants, to identify PD in thousands of undiagnosed people in Bangladesh, and also provide the patients with an opportunity of frequent assessment/monitoring without the constraints of scheduling neurologists or requiring screened individuals to travel into a healthcare facility. Dr. Ehsan Hoque (Collaborator) and his research group have developed the PARK framework for the remote assessment of PD. The data obtained by the PARK system identifies significant differences between the group with PD and the control group. These findings demonstrate that PARK is a viable system for remotely gathering data useful for detecting PD. However the framework lacks data from the subcontinent. We extract the relevant features from the collected videos and using our deep learning based models, we study the status of people with PD in Bangladesh. Our datasets and findings from Bangladeshi population can contribute to the existing study and thus can be useful for the 10 million people worldwide with Parkinson’s disease at present. We have collected video and demographic data from 172 healthy and Parkinson\'s patients.',
    thesis: 'https://drive.google.com/file/d/17Dv0XoBlxEt4JNi3PY7yzWNmgSHxDHhn/view?usp=sharing',
    papers: [{ title: 'AI-Enabled Parkinson’s Disease Screening Using Smile Videos', link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=FC3AM-wAAAAJ&citation_for_view=FC3AM-wAAAAJ:ZeXyd9-uunAC' }],
  },
  {
    title: 'Actionable Analytics of Cancer',
    supervisorName: 'Dr. Mohammad Saifur Rahman',
    supervisorLink: 'https://scholar.google.com/citations?user=9d52x-cAAAAJ&hl=en',
    department: 'Department of Computer Science and Engineering',
    institution: 'Bangladesh University of Engineering and Technology (BUET)',
    blurb: 'Developed health informatics models to analyze cancer incidence and survival using demographic and clinical data.',
    fullDescription:
      'This project aimed to analyze cancer outcomes using clinical, demographic, and genomic data. We developed machine learning models to identify risk factors, predict survival, and construct scoring systems over 5/10/20-year periods. Collaborated with Dr. Abu Zafer (Health Data Research UK).',
    papers: [],
    thesis: null,
  },
  {
    title: 'Exploring Impacts of Environmental Exposure on Human Beings',
    supervisorName: 'A. B. M. Alim Al Islam',
    supervisorLink: 'https://scholar.google.de/citations?user=DS2xTKMAAAAJ&hl=de',
    department: 'Department of Computer Science and Engineering',
    institution: 'Bangladesh University of Engineering and Technology (BUET)',
    blurb: 'Studied the physiological and psychological impacts of environmental exposure in low-resource settings.',
    fullDescription:
      'This interdisciplinary research studied the effects of environmental exposure on health outcomes in underserved populations. By integrating diverse sensor and environmental data, the goal was to create passive yet informative health assessments. Collaborated with UMass Amherst and Arizona State University researchers.',
    papers: [
      {
        title: '"It’s Too Hot Under the Sun": Unveiling the Impact of Prolonged Heat Exposure on Rickshaw Pullers’ Brainwaves',
        link: 'https://dl.acm.org/doi/full/10.1145/3704522.3704556'
      },
    ],
    thesis: null,
  }
],
  projects: [
    {
      title: "Project One",
      details: "A machine learning project focused on XYZ.",
      repo: "https://github.com/yourusername/project-one",
      visit: "https://project-one-demo.com",
      link: "https://youtu.be/project-one-demo"
    },
    {
      title: "Project Two",
      details: "A web application for ABC.",
      repo: "",
      visit: "https://project-two-demo.com",
      link: ""
    }
  ],
  skills: {
    Lang: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "C++" },
      { name: "Java" },
    ],
    Frameworks: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "TensorFlow" },
      { name: "Django" },
    ],
    Developer_Tools: [
      { name: "Git/GitHub" },
      { name: "Docker" },
      { name: "VS Code" },
      { name: "Linux" },
    ]
  },
  sidebarData: {}
};

export default data;
