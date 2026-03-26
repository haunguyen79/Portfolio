import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoGit,
  BiLogoGithub,
  BiLogoGitlab,
} from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiMui,
  SiSvelte,
  SiSupabase,
  SiDocker,
  SiSwagger,
} from "react-icons/si";

import { useState } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const categories = [
  {
    label: "Frontend",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    accent: "bg-cyan-400",
    glow: "shadow-cyan-500/20",
    icons: [
      { Icon: BiLogoHtml5, color: "text-orange-500", name: "HTML5", level: 95 },
      { Icon: BiLogoCss3, color: "text-blue-400", name: "CSS3", level: 90 },
      {
        Icon: BiLogoJavascript,
        color: "text-yellow-400",
        name: "JavaScript",
        level: 92,
      },
      {
        Icon: BiLogoTypescript,
        color: "text-blue-500",
        name: "TypeScript",
        level: 85,
      },
      {
        Icon: BiLogoTailwindCss,
        color: "text-sky-400",
        name: "Tailwind CSS",
        level: 90,
      },
      { Icon: SiMui, color: "text-blue-600", name: "Material UI", level: 80 },
      { Icon: BiLogoReact, color: "text-cyan-400", name: "React", level: 90 },
      { Icon: BiLogoRedux, color: "text-purple-500", name: "Redux", level: 80 },
      { Icon: SiNextdotjs, color: "text-white", name: "Next.js", level: 82 },
      { Icon: SiSvelte, color: "text-orange-500", name: "Svelte", level: 65 },
    ],
  },
  {
    label: "Backend",
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
    accent: "bg-green-400",
    glow: "shadow-green-500/20",
    icons: [
      {
        Icon: BiLogoNodejs,
        color: "text-green-500",
        name: "Node.js",
        level: 85,
      },
      { Icon: SiExpress, color: "text-gray-300", name: "Express", level: 83 },
      { Icon: SiMongodb, color: "text-green-500", name: "MongoDB", level: 80 },
      {
        Icon: SiSupabase,
        color: "text-emerald-400",
        name: "Supabase",
        level: 70,
      },
      { Icon: SiSwagger, color: "text-green-400", name: "Swagger", level: 75 },
    ],
  },
  {
    label: "Tools",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    accent: "bg-purple-400",
    glow: "shadow-purple-500/20",
    icons: [
      { Icon: BiLogoGit, color: "text-orange-600", name: "Git", level: 88 },
      { Icon: BiLogoGithub, color: "text-white", name: "GitHub", level: 88 },
      {
        Icon: BiLogoGitlab,
        color: "text-orange-400",
        name: "GitLab",
        level: 75,
      },
      { Icon: SiDocker, color: "text-blue-400", name: "Docker", level: 68 },
    ],
  },
];

const TechCard = ({ Icon, color, name, level, accent }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <motion.div
        animate={hovered ? { y: -8, scale: 1.15 } : { y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative"
      >
        <Icon
          className={`cursor-pointer text-[72px] sm:text-[88px] md:text-[100px] ${color} transition-all duration-300 ${
            hovered ? "drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]" : ""
          }`}
        />
      </motion.div>

      {/* Name */}
      <span
        className={`mt-2 text-xs font-medium transition-all duration-200 sm:text-sm ${
          hovered ? "text-white" : "text-gray-400"
        }`}
      >
        {name}
      </span>
    </div>
  );
};

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredCategories =
    activeCategory === null
      ? categories
      : categories.filter((c) => c.label === activeCategory);

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 px-4 py-20 md:gap-24"
    >
      {/* Title */}
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4"
      >
        <h1 className="text-4xl font-light tracking-widest text-white md:text-6xl">
          Technologies
        </h1>
        {/* <p className="text-sm tracking-wider text-gray-500 uppercase">
          Hover over icons to see skills
        </p> */}
      </motion.div>

      {/* Category filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex gap-3"
      >
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-full border px-5 py-2 text-sm font-medium tracking-wide transition-all duration-200 ${
            activeCategory === null
              ? "border-white/40 bg-white/10 text-white"
              : "border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-200"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() =>
              setActiveCategory(activeCategory === cat.label ? null : cat.label)
            }
            className={`rounded-full border px-5 py-2 text-sm font-medium tracking-wide transition-all duration-200 ${
              activeCategory === cat.label
                ? `border-white/40 bg-white/10 text-white`
                : "border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Category sections */}
      <div className="flex w-full max-w-5xl flex-col gap-12">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((cat) => (
            <motion.div
              key={cat.label}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`rounded-2xl border bg-gradient-to-br p-6 shadow-xl sm:p-8 ${cat.color} ${cat.border} ${cat.glow}`}
            >
              {/* Category Label */}
              <div className="mb-6 flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full ${cat.accent}`} />
                <h2 className="text-sm font-semibold tracking-widest text-gray-300 uppercase">
                  {cat.label}
                </h2>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Icons grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-row flex-wrap justify-center gap-8 sm:gap-10"
              >
                {cat.icons.map(({ Icon, color, name, level }) => (
                  <motion.div key={name} variants={itemVariants}>
                    <TechCard
                      Icon={Icon}
                      color={color}
                      name={name}
                      level={level}
                      accent={cat.accent}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tech;
