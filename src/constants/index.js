import todo from "../assets/projects/todolist.jpg";
import foodMunch from "../assets/projects/foodmunch.jpg";
import project3 from "../assets/projects/image.png";
import project4 from "../assets/weather.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Wed Development Training",
    company: "Deep Thought",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
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
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
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
