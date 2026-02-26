import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });
      if (error) throw error;
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast({ title: "Failed to send", description: err.message || "Please try again later.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page-container">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-primary font-mono text-sm mb-2"
      >
        {"// Get in Touch"}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-heading"
      >
        Contact <span className="text-gradient">Me</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="section-subheading"
      >
        Feel free to reach out for collaborations or opportunities
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          {[
            { icon: <FaEnvelope size={20} />, label: "Email", value: "vijay@example.com" },
            { icon: <FaPhone size={20} />, label: "Phone", value: "+91 XXXXX XXXXX" },
            { icon: <FaLocationDot size={20} />, label: "Location", value: "India" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 bg-card border border-border rounded-xl p-5">
              <span className="text-primary">{item.icon}</span>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-foreground font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-xl p-8 space-y-5"
        >
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Write your message..."
            />
          </div>
          <button type="submit" disabled={sending} className="btn-primary w-full justify-center disabled:opacity-50">
            {sending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
