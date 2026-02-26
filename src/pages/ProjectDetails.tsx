import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="page-container flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <Link to="/projects" className="btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <FaArrowLeft size={14} /> Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="h-2 bg-gradient-primary" />
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h1 className="text-3xl font-bold text-foreground">
                {project.name}
              </h1>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-sm"
                >
                  Live Demo <FaExternalLinkAlt size={12} />
                </a>
              )}
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-mono text-primary mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.split(",").map((t) => (
                  <span
                    key={t.trim()}
                    className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground"
                  >
                    {t.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-primary mb-3">
                Key Features
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
