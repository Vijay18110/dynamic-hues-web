import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vijay. Built with React & ❤️
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Vijay18110" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/vijay-raj18110" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:vijayraj.mfs@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
