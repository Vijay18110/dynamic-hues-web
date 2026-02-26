import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type ProjectCategory } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "official", label: "Official" },
  { value: "personal", label: "My Projects" },
];

const Projects = () => {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="page-container">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-primary font-mono text-sm mb-2"
      >
        {"// My Work"}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-heading"
      >
        Featured <span className="text-gradient">Projects</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="section-subheading"
      >
        A collection of projects I've built
      </motion.p>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex gap-2 mb-8"
      >
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              active === cat.value
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            tech={project.tech}
            url={project.url}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
