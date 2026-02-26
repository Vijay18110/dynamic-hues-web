import { motion } from "framer-motion";
import { GrDownload } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [text] = useState("a Software Engineer".split(" "));

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="page-container flex flex-col justify-center min-h-screen">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary font-mono text-sm mb-4"
      >
        Welcome to My Portfolio
      </motion.p>

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
        {/* Left */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2">
            Hello,
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 flex flex-wrap gap-2">
            I'm{" "}
            <motion.strong
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-gradient flex gap-2"
            >
              {text.map((w, index) => (
                <motion.span key={index} variants={child}>
                  {w}
                </motion.span>
              ))}
            </motion.strong>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-8">
            A web developer with expertise in React.js, Redux, Next.js, Node.js,
            and Express. Passionate about building fast, responsive web apps
            with clean UI and optimized backend logic. I love transforming ideas
            into digital reality while constantly learning new technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn-outline">
              <GrDownload size={18} />
              Download CV
            </Link>
          </div>
        </motion.div>

        {/* Right - Abstract visual */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex flex-1 justify-center items-center"
        >
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-hero animate-float" />
            <div className="absolute inset-4 rounded-full border-2 border-primary/20 animate-float" style={{ animationDelay: "0.5s" }} />
            <div className="absolute inset-8 rounded-full border border-primary/10 animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-gradient">VN</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="grid grid-cols-3 gap-8 mt-20 max-w-lg"
      >
        {[
          { num: "15+", label: "Projects" },
          { num: "16+", label: "Skills" },
          { num: "2+", label: "Years Exp." },
        ].map((s) => (
          <div key={s.label}>
            <p className="text-3xl font-bold text-gradient">{s.num}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
