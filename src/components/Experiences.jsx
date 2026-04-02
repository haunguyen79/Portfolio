import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdWork, MdOpenInNew } from "react-icons/md";
import { FaCircle } from "react-icons/fa";

/* ─── Data ─────────────────────────────────────────────────── */
const experiences = [
  {
    id: 1,
    company: "FPT Information System",
    shortName: "FPT-IS",
    role: "Fullstack Developer",
    period: "Sep 2025 – Mar 2026",
    // duration: "5 months",
    // type: "Full-time",
    location: "Ho Chi Minh City, Viet Nam",
    logo: "🏢",
    color: "from-violet-500/25 to-indigo-500/25",
    border: "border-violet-500/30",
    accent: "bg-violet-400",
    glow: "shadow-violet-500/10",
    dotColor: "bg-violet-400",
    badgeColor:
      "bg-violet-500/20 text-violet-300 border border-violet-500/30 hover:bg-violet-500/30",
    description:
      "Collaborated on enterprise-level software solutions within an agile team environment. Contributed to both frontend and backend development across multiple internal systems.",
    responsibilities: [
      "Built and maintained web & mobile features using React.js, React Native, Svelte, Encore.ts and Supabase, with a focus on performance and scalability.",
      "Reduced application load time by ~60% (from 800ms to 300ms) by implementing lazy loading, code splitting, and optimizing Supabase queries.",
      "Integrated Supabase Realtime subscriptions to enable live data sync, eliminating polling overhead and improving responsiveness.",
      "Delivered features end-to-end independently within Agile sprints — from planning and implementation through code review and production release.",
    ],
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "Svelte",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Docker",
    ],
    link: "https://www.fpt-is.com",
  },
  {
    id: 2,
    company: "HAHAHO Company",
    shortName: "HAHAHO",
    role: "Frontend Developer",
    period: "Mar 2024 – Sep 2025",
    // duration: "1 year",
    // type: "Full-time",
    location: "Ho Chi Minh City, Viet Nam",
    logo: "🚀",
    color: "from-cyan-500/25 to-blue-500/25",
    border: "border-cyan-500/30",
    accent: "bg-cyan-400",
    glow: "shadow-cyan-500/10",
    dotColor: "bg-cyan-400",
    badgeColor:
      "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30",
    description:
      "Developed modern, responsive user interfaces and contributed to the company's flagship web products. Worked closely with designers and backend engineers to deliver pixel-perfect user experiences.",
    responsibilities: [
      "Developed a task management web application end-to-end using React.js, Node.js, and MongoDB — covering UI, API, and database layers.",
      "Designed and implemented RESTful APIs with an average response time of <200ms, handling task CRUD operations, advanced filtering, and user authentication flows.",
      "Collaborated in an Agile environment with daily standups and sprint reviews, iterating rapidly based on stakeholder feedback.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Next.js",
      "Redux",
      "REST API",
      "Figma",
    ],
    link: "#",
  },
];

/* ─── Variants ──────────────────────────────────────────────── */
const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.2, ease: "easeOut" },
  }),
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

/* ─── ExperienceCard ────────────────────────────────────────── */
const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="relative flex gap-6 md:gap-10"
    >
      {/* ── Timeline dot & line ── */}
      <div className="relative flex flex-col items-center">
        {/* Glowing dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.2 + 0.1,
            type: "spring",
            stiffness: 300,
          }}
          className={`relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${exp.color} border ${exp.border} shadow-lg ${exp.glow}`}
        >
          <MdWork className="text-base text-white" />
          {/* Pulse ring */}
          <span
            className={`absolute h-full w-full animate-ping rounded-full opacity-20 ${exp.dotColor}`}
          />
        </motion.div>
        {/* Vertical line (hidden for last item) */}
        {index < experiences.length - 1 && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-white/20 to-transparent" />
        )}
      </div>

      {/* ── Card ── */}
      <div
        className={`mb-12 flex-1 cursor-pointer rounded-2xl border bg-gradient-to-br p-5 shadow-xl backdrop-blur-md transition-all duration-300 sm:p-7 ${exp.color} ${exp.border} ${exp.glow} hover:scale-[1.01] hover:shadow-2xl`}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{exp.logo}</span>
            <div>
              <h3 className="text-lg leading-tight font-semibold text-white">
                {exp.company}
              </h3>
              <p className="text-sm text-gray-400">{exp.role}</p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-gray-300">
              {exp.period}
            </span>
            <span className="text-xs text-gray-500">
              {exp.duration} · {exp.type}
            </span>
          </div>
        </div>

        {/* Location */}
        <p className="mt-3 text-xs tracking-wide text-gray-500">
          📍 {exp.location}
        </p>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-gray-300">
          {exp.description}
        </p>

        {/* Tech badges */}
        <div className="mt-5 flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors duration-200 ${exp.badgeColor}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand / Collapse */}
        <button
          className="mt-4 flex items-center gap-1 text-xs text-gray-500 transition-colors duration-200 select-none hover:text-gray-300"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
        >
          <FaCircle
            className={`text-[6px] transition-transform duration-300 ${expanded ? "rotate-180" : ""} ${exp.accent.replace("bg-", "text-")}`}
          />
          {expanded ? "Show less" : "Show responsibilities"}
        </button>

        {/* Expandable: Responsibilities */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="mt-5 space-y-2 border-t border-white/10 pt-4"
              >
                {exp.responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={listItemVariants}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${exp.accent}`}
                    />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              {/* External link */}
              {exp.link !== "#" && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-gray-400 transition-colors duration-200 hover:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MdOpenInNew className="text-sm" />
                  Visit company website
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/* ─── Experiences Section ───────────────────────────────────── */
const Experiences = () => (
  <section
    id="experiences"
    className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-20 md:px-12 md:py-28"
  >
    {/* Title */}
    <motion.div
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16 flex flex-col items-center gap-4 text-center"
    >
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-gray-400 uppercase">
        Career Journey
      </span>
      <h1 className="text-4xl font-light tracking-widest text-white md:text-6xl">
        Experience
      </h1>
      <p className="max-w-md text-sm text-gray-500">
        A timeline of my professional journey — the companies I've had the
        privilege of working with and the impact I've made.
      </p>
    </motion.div>

    {/* Timeline */}
    <div className="w-full max-w-3xl">
      {experiences.map((exp, i) => (
        <ExperienceCard key={exp.id} exp={exp} index={i} />
      ))}
    </div>

    {/* Footer CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-4 flex items-center gap-3 text-sm text-gray-600"
    >
      <div className="h-px w-12 bg-white/10" />
      <span>More experiences on the way...</span>
      <div className="h-px w-12 bg-white/10" />
    </motion.div>
  </section>
);

export default Experiences;
