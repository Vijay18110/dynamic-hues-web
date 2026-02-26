import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  id: string;
  name: string;
  tech: string;
  url: string;
  description: string;
}

const ProjectCard = ({ id, name, tech, url, description }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded-xl overflow-hidden card-hover"
    >
      {/* Color bar */}
      <div className="h-1 bg-gradient-primary" />

      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-foreground transition-colors"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          )}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.split(",").map((t) => (
            <span
              key={t.trim()}
              className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {t.trim()}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${id}`}
          className="text-sm text-primary font-medium hover:underline mt-auto"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
