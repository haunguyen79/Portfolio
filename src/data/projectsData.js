import images from "../assets/images";

const projectsData = [
  {
    image: images.project1,
    title: "Movie App",
    description:
      "Developed a movie website with a visually appealing and responsive design for both desktop and mobile users.",
    technologies: ["Tailwind CSS", "React"],
    demoUrl: "https://movie-app-test3.vercel.app/",
    githubUrl: "https://github.com/haunguyen79/Movie-App",
  },
  {
    image: images.project2,
    title: "TodoX MERN",
    description:
      "A task management app built with the MERN Stack, styled with Tailwind CSS and shadcn/ui for a modern, responsive UI. Features include CRUD operations, task filtering (by status/date), pagination and statistics.",
    technologies: ["Tailwind CSS", "React", "NodeJS", "Express", "MongoDB"],
    demoUrl: "https://todox-mern.onrender.com/",
    githubUrl: "https://github.com/haunguyen79/TodoX-MERN",
  },
  {
    image: images.project5,
    title: "Todo App Redux",
    description:
      "A simple Todo application built with React and Redux Toolkit, designed to help users manage daily tasks efficiently. Features include adding, editing, deleting, and searching, filtering tasks by status, by priority.",
    technologies: ["React", "Redux"],
    demoUrl: "https://todo-app-redux-brown.vercel.app/",
    githubUrl: "https://github.com/haunguyen79/TodoApp-Redux",
  },
  {
    image: images.project3,
    title: "Weather App",
    description:
      "A simple, responsive app that shows real-time weather by location or search, built with modern web technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    demoUrl: "https://weather-app-demo-flax.vercel.app/",
    githubUrl: "https://github.com/haunguyen79/Weather-App",
  },
  {
    image: images.project4,
    title: "Calculator App",
    description:
      "A simple web-based calculator provides basic arithmetic operations such as addition, subtraction, multiplication, and division, with a clean and user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    demoUrl: "https://calculator-app-eight-swart.vercel.app/",
    githubUrl: "https://github.com/haunguyen79/Calculator-App",
  },

];

export default projectsData;
