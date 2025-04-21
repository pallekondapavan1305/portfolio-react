import todo from "../assets/projects/todolist.jpg";
import foodMunch from "../assets/projects/foodmunch.jpg";
import project3 from "../assets/projects/image.png";
import project4 from "../assets/weather.jpg";
import HRMS from "../assets/projects/HRMS.jpeg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1.5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = ` A dedicated Software Developer with a strong foundation in building scalable, 
user-centric applications using Java for backend development and React for 
dynamic front-end interfaces. Proven experience in developing HR management 
systems and educational platforms, enhancing both operational workflows and 
user engagement. Passionate about leveraging full-stack technologies to create 
impactful solutions that solve real-world problems. Proficient in designing clean, 
maintainable code and following best practices across the development 
lifecycle. Continuously learning and adapting to new technologies, with a deep 
commitment to contributing to innovative and forward-thinking engineering 
teams.`;

export const EXPERIENCES = [
  {
    year: "Nov 2024 - Present",
    role: "Software Engineer",
    company: "Talvox Pvt Ltd",
    description: `Talvox is a dynamic IT services and consulting company specializing in software 
development, IT consulting, talent acquisition, HR operations, and digital 
marketing.`,
    technologies: [
      "Javascript",
      "React.js",
      "Next.js",
      "mongoDB ",
      "PostgreSQL",
      "SpringBoot",
      "Java",
      "React Native",
    ],
  },
  {
    year: "Aug 2023 - Aug 2024",
    role: "Wed Development Training",
    company: "Deep Thought",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "HRMS Application",
    image: HRMS,
    description:
      "Developed a comprehensive HRMS platform to streamline HR operations, employee management, payroll processing, and recruitment workflowsEnhanced automation, compliance, and workforce management for businesses by integrating with a robust Java backend and PostgreSQL database",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "PostgreSQL",
      "Spring Boot",
      "Java",
    ],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Todos Application",
    image: todo,
    description:
      "A comprehensive todo management tool designed to enhance productivity./n User- friendly interface with HTML, CSS, and Bootstrap for ease of use./n Effortless task management through JavaScript - based CRUD operations with dynamic UI updates./n  Your tasks are always safe with local storage methods to ensure taskpersistence.A fully functional e - commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    title: "Food Munch",
    image: foodMunch,
    description:
      "A fully responsive website that offers a comprehensive list of food items and detailed information about each item./nTechnologies used: HTML, CSS, Bootstrap application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Bootstrap", "javascript"],
  },

  {
    title: "Fingerprint Sensor project",
    image: project4,
    description:
      "I built a weather app using React.js and the Weather API to display real-time data. This project strengthened my skills in API integration, state management, and creating responsive interfaces, while enhancing my understanding of efficient data handling and performance optimization.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL", "ReactJs"],
  },
];

export const CONTACT = {
  address: "Gowthami Nagar 1st Line Koritipadu",
  phoneNo: "8096213950",
  email: "pallekondapavan1305@gmail.com",
};
