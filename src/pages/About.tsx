import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase } from "react-icons/fa6";

const About = () => {
  const highlights = [
    {
      icon: <FaCode size={28} />,
      title: "Frontend Development",
      desc: "Building responsive, interactive UIs with React.js, Redux, and modern CSS frameworks.",
    },
    {
      icon: <FaServer size={28} />,
      title: "Backend Development",
      desc: "Creating robust server-side applications with Node.js, Express, and RESTful APIs.",
    },
    {
      icon: <FaDatabase size={28} />,
      title: "Database Management",
      desc: "Designing and managing databases with MongoDB, Firebase, and SQL solutions.",
    },
  ];

  return (
    <div className="page-container">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-primary font-mono text-sm mb-2"
      >
        {"// About Me"}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-heading"
      >
        Know <span className="text-gradient">Who I Am</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="section-subheading max-w-2xl"
      >
        A passionate developer focused on creating impactful digital experiences.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            I am a MERN Stack Web Developer with expertise in React.js, Redux, Next.js, Node.js,
            Express, and MongoDB. Currently working at Tantrash Technology Private Limited (TTPL),
            leading frontend development for enterprise-grade applications like PropertyATM and
            Kezan Pustkalaya, focusing on modular React components and scalable UI architecture.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I also actively contribute to backend tasks including API design, business logic
            implementation in Node.js, and contributing to .NET backend modules. Previously worked
            at Papaya Coders Private Limited on backend development and e-commerce dashboards.
            A B.Tech (IT) graduate from Dr. APJ Abdul Kalam Technical University, I thrive in
            collaborative environments and am passionate about building impactful digital solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-card border border-border rounded-xl p-8"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Info</h3>
          <ul className="space-y-3 text-sm">
            {[
              ["Name", "Vijay Raj"],
              ["Role", "MERN Stack Developer"],
              ["Experience", "1+ Years"],
              ["Location", "Lucknow, India"],
              ["Education", "B.Tech (IT), AKTU"],
            ].map(([k, v]) => (
              <li key={k} className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">{k}</span>
                <span className="text-foreground font-medium">{v}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Highlights */}
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-xl p-6 card-hover"
          >
            <div className="text-primary mb-4">{h.icon}</div>
            <h3 className="text-foreground font-semibold mb-2">{h.title}</h3>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
