import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  memories,
  Ecomerce,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  worktual,
  vectone,
  express,
  socket,
  redis,
  antd,
  bootstrap,
  elred,
  elredadmin
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Conversation AI developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "socket",
    icon: socket
  },
  {
    name: "redis",
    icon: redis
  },
  {
    name: "antd",
    icon: antd
  },
  {
    name: "Bootstrap",
    icon: bootstrap
  }

];

const ExperiencePoint = [
  "Developing and maintaining web applications like  UCAAS, conversational AI, Marketing Automation and CCAAS application using React.js and node.js and other related technologies.",
  " Successfully managed both frontend backend in conversational AI Project, and CCAAS project demonstrating versatility and full-stack proficiency.",
  " Experienced in using popular React UI frameworks such as Ant design , Material UI and React bootstrap.",
  "Strong Problem solving skills and Demonstrated ability to lead and motivate team to deliver a high quality work.",
  "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  "Implementing responsive design and ensuring cross-browser compatibility.",
  "Participating in code reviews and providing constructive feedback to other developers."
]


const experiences = [







  {
    title: "UCAAS - Worktual",
    company_name: "Trainee Full stack developer",
    description: "Worktual is a UCAAS product  offers a tailored AI-powered and cloud-based communications platforms for for all business communications, including voice, video, chat, and email in single cloud-based platform.",
    icon: worktual,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed a UCAAS platform using React and Redux for the fornt-end",
      "Utilised Socket IO for real-time communication between client and servers.",
      "Implemented Xmpp protocols using ejabberd to handle instant messaging and presence.",
      "Knowledge of UI frameworks like Ant design and React Bootstrap.",
      "Performed unit testing after every deployment and documented Unit Test Results.",
      "Implemented responsive design and ensuring cross-browser compatibility."],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "Antd",
        color: "pink-text-gradient",
      },
    ]
  },


  {
    title: "Intelligent Virtual Assistant",
    company_name: "Full stack developer",
    icon: worktual,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - oct 2022",
    points: [
      "Created Virtual Meeting Assistant which can able to Schedule meeting, Reschedule meeting, Cancel meeting, Read real-time whether report, and it can entertain by jokes and more using a third party AI platform named Avaamo",
      "Integrated Speech-matics and Voice-gain for STT to convert voice input to text output",
      "Integrated Speech-matics and Voice-gain for STT to convert voice input to text output"
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "Avaamo",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    title: "Conversational AI Bot - Contact Center",
    company_name: "Lead - Full stack Developer",
    icon: vectone,
    iconBg: "#383E56",
    date: "Jun 2022 - oct 2022",
    points: [
      "I have led the team of 4 members and successfully implemented 17 Vectone sim flows to resolve customers queries by contact center conversational AI using Avaamo third party software.",
      "Implemented a socket and redisDB communication server using node Js For communicating designed flows in Avaamo software through calls and chat.",
      "Created a Chat widget using React, MobX-React and socket using node js to connect AI bot for vectone website for live customers to interact with contact center AI.",
      "This project Helped the company to replace Acquire chat which is a third-party chat bot and It Saved the company $25,000 Per annum by implementing this chat bot.",
      "Connecting with a live agent if Bot failed to handle the customer by itself through worktual - contact center."

    ],
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MobX",
        color: "blue-text-gradient",
      },
      {
        name: "Socket",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      }
    ]
  },
  {
    title: "Worktual AI",
    company_name: "Lead -  full stack Developer",
    description: "Worktual AI's platform uses machine learning and natural language processing to create virtual assistants that can understand and respond to customer queries in a natural way. Companies can create their own conversation flows using our AI application and can integrate in call and chat channels.",
    icon: worktual,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Jan 2022",
    points: [
      "Developed 50+ REST APIs in Node JS using Express and mongo DB.",
      "Used mongo DB for persistent storage and Redis DB for in-memory data storing and caching.",
      "Used Redis DB to store key-values using Node JS.",
      "Created a Redis DB worker Server for voice bot flow execution.",
      "Experienced in socket Programming. I Have developed socket-backed applications in Node JS for real-time communication which connect Redis worker service from client.",
      "Developed and maintained socket real time client chat widget for debugging the conversation flow using React, Redux and socket client. ",
      "Helped to replace third party conversational AI with our own Worktual AI as third party software takes more than 3 seconds to respond.",
      " To overcome this delay and to be as real time communication I have reduced response time from 3 seconds to 0.5 seconds using Redis server using node.",
      "I have led the team of 4 members and completed the phase 1 delivery within 3 months."

    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-Toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "Antd",
        color: "pink-text-gradient",
      },
      {
        name: "socket",
        color: "pink-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      }
    ]
  },
  {
    title: "Worktual CCAAS",
    company_name: "Lead -  full stack Developer",
    description: "CCAAS is a cloud-based software solution that provides businesses with the tools they need to manage customer interactions across multiple channels, including Call, email, chat, social media, and more.",
    icon: worktual,
    iconBg: "#E6DEDD",
    date: "feb 2023 - Jun 2023",
    points: [
      	"Developed a CCAAS product using React, Redux toolkit, Nodejs, Mongo Db, Mysql, and Redis DB Utilized MongoDB for Persistent data storage and Redis DB for in memory data storing and caching.",
"Collaborated with the team to provide stable and functional CCAAS which replace five9 for in-house customer care Successfully.",
	"Implemented the Major important call channel in front-end using React, Redux, SDK to communicate sip server.", 
	"Developed the communication mechanism using socket and Redis to ACD and PBX server to ensure efficient data transfer and processing and handled backend logics for transfer call, merge call, leave call, and end calls.",
	"Developed the Admin settings module using react and created over all Redux tool kit structure.",
	"Worked in agent work space where agent can send and receive message from live customers in react and socket Worked in live streaming STT text displaying in agent workspace while agent is in live call worked in session managing for various omni channels using react and redux I have leaded Call module and Agent workspace module."


    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-Toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "socket",
        color: "pink-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      }
    ]
  },  {
    title: "elRed-Admin-portal",
    company_name: "React Developer",
    description: "Application to manage the user accounts of the elred application",
    icon: elredadmin,
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Developed a responsive admin portal using React and bootstrap for the fornt-end",
      "Knowledge of UI frameworks like Bootstrap.",
      "Recorded Bugs and fixed it by unit testing after every deployment and documented Unit Test Results.",
      "Performed UAT for every release"],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      }
    ]
  },
  {
    title: "elRed",
    company_name: "React Developer",
    description: "elRed is a Social media product which help us collaborate beyond our network.",
    icon: elred,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Developed a social media platform using React and bootstrap for the fornt-end",
      "Knowledge of UI frameworks like Bootstrap.",
      "Recorded Bugs and fixed it by unit testing after every deployment and documented Unit Test Results.",
      "Performed UAT for every release"
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      }
    ]
  }
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Memories",
    description:"Social media application where we can login and create post, view a post and delete a post",
        tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: memories,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ecomerce",
    description:"Ecomerce website where a user can add item to cart, view a product, make order a product and make payment and more",
        tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Ecomerce,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, experiences, testimonials, projects, ExperiencePoint };
