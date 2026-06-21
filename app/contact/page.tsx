"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSuccess(true);
    setIsSubmitting(false);
    reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* LEFT: Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-4">
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Say Hello
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-md">
              I read every message. If you have an internship, a project idea, or just want to talk about software and ERP systems — write to me.
            </motion.p>
          </div>

          <div className="flex flex-col gap-6">
            <motion.a
              variants={fadeInUp}
              href="mailto:hady230102560@sut.edu.eg"
              className="flex items-center gap-4 p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary hover:bg-white transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Email</span>
                <span className="text-lg font-bold text-foreground">hady230102560@sut.edu.eg</span>
              </div>
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href="https://github.com/hadiNossair"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-secondary/50 border border-border hover:border-foreground hover:bg-white transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">GitHub</span>
                <span className="text-lg font-bold text-foreground">github.com/hadiNossair</span>
              </div>
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href="https://www.linkedin.com/in/hady-hassan-376694418"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-secondary/50 border border-border hover:border-[#0A66C2] hover:bg-white transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">LinkedIn</span>
                <span className="text-lg font-bold text-foreground">linkedin.com/in/hady-hassan-376694418</span>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          
          <div className="glass-card glow-primary p-8 md:p-10 relative z-10">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-foreground">Full Name</label>
                <input
                  {...register("name")}
                  id="name"
                  placeholder="John Doe"
                  className={`w-full px-5 py-4 rounded-xl border bg-white/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${errors.name ? 'border-destructive focus:border-destructive focus:ring-destructive/30' : 'border-input focus:border-primary'}`}
                />
                {errors.name && <span className="text-xs font-semibold text-destructive mt-1">{errors.name.message}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-foreground">Email Address</label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full px-5 py-4 rounded-xl border bg-white/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${errors.email ? 'border-destructive focus:border-destructive focus:ring-destructive/30' : 'border-input focus:border-primary'}`}
                />
                {errors.email && <span className="text-xs font-semibold text-destructive mt-1">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-bold text-foreground">Subject</label>
                <input
                  {...register("subject")}
                  id="subject"
                  placeholder="What is this about?"
                  className={`w-full px-5 py-4 rounded-xl border bg-white/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${errors.subject ? 'border-destructive focus:border-destructive focus:ring-destructive/30' : 'border-input focus:border-primary'}`}
                />
                {errors.subject && <span className="text-xs font-semibold text-destructive mt-1">{errors.subject.message}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-foreground">Message</label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  placeholder="Tell me what you are working on or what you need help with..."
                  className={`w-full px-5 py-4 rounded-xl border bg-white/50 backdrop-blur-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${errors.message ? 'border-destructive focus:border-destructive focus:ring-destructive/30' : 'border-input focus:border-primary'}`}
                />
                {errors.message && <span className="text-xs font-semibold text-destructive mt-1">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full py-5 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-green-50 text-green-800 border border-green-200 text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
