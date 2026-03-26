import { useState } from "react";
import avatar from "../assets/images/new-avatar.png";
import resume from "../assets/resume/Nguyen-Van-Hau_Frontend-Developer.pdf";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  //Funtion dùng để mở rộng hoặc thu gọn description trong Hero
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const description = `I am a Fullstack Developer with hands-on experience building modern, high-performance web applications across both frontend and backend. I specialize in React, Next.js, and Svelte, with strong foundations in JavaScript (ES6+), TypeScript, HTML5, and CSS3.
On the frontend, I work with technologies such as Tailwind CSS, Material UI, Ant Design, and Shadcn/ui, combined with state management solutions like Redux and Zustand to build scalable and maintainable user interfaces.
On the backend, I develop APIs using Node.js and Express.js, and work with databases including MongoDB, PostgreSQL, SQL Server, and Supabase, focusing on performance, scalability, and data consistency.
I also have experience with Docker, along with tools like Git, GitHub, GitLab, Postman, Swagger, Vercel, and Render for development, testing, and deployment workflows.
I’m passionate about crafting applications with excellent user experience, optimized performance, and scalable architecture. My work emphasizes clean UI/UX, smooth interactions, and responsive design across devices.
With a growth mindset and strong teamwork skills, I continuously learn, explore new technologies, and improve best practices to become a better engineer.`;

  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center px-16 py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        {/* Avatar với animation */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <img
            src={avatar}
            alt="Avatar of Nguyen Van Hau"
            className="aspect-square w-[220px] cursor-pointer rounded-full object-cover opacity-80 duration-300 ease-in-out hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[320px]"
          />
        </motion.div>

        {/* Nội dung với animation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          {/* Tên */}
          <h1 className="h-12 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-4xl font-light whitespace-nowrap text-transparent md:h-14 md:text-5xl">
            Nguyen Van Hau
          </h1>

          {/* Vị trí */}
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-2xl text-transparent md:text-3xl">
            Fullstack Developer
          </h3>

          {/* Mô tả - description*/}
          <p
            className={`mt-2 text-sm text-pretty text-gray-400 md:text-base ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {description}
          </p>
          <button
            onClick={handleToggle}
            className="mt-1 text-sm text-blue-400 hover:underline"
          >
            {isExpanded ? (
              <span className="flex items-center gap-1">
                See Less <MdExpandLess />
              </span>
            ) : (
              <span className="flex items-center gap-1">
                See More <MdExpandMore />
              </span>
            )}
          </button>

          {/* Nút download CV */}
          <a
            href={resume}
            rel="noopener noreferrer"
            download
            aria-label
            className="mt-5 flex items-center gap-2 rounded-4xl bg-gradient-to-r from-pink-500 to-blue-500 px-5 py-4 text-white shadow-lg transition-all duration-300 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-600 md:px-5 md:py-4"
          >
            Download Resume <FaArrowDown size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
