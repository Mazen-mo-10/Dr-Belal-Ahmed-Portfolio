import { AnimateIn, PageTransition } from "@/components/AnimateIn";
import { Layout } from "@/components/Layout";
import { Code, Server, Brain, Wrench, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["MATLAB", "Python", "C++", "C#", "Java", "Assembly"],
    },
    {
      category: "Backend & Data Engineering",
      icon: <Server className="w-5 h-5" />,
      skills: ["C#", ".NET", "Entity Framework", "SQL Server", "MySQL", "Oracle", "ADO.NET"],
    },
    {
      category: "Data Science & AI",
      icon: <Brain className="w-5 h-5" />,
      skills: ["Machine Learning", "Deep Learning", "Bioinformatics", "Pattern Matching", "NLP", "Genetic Algorithms"],
    },
    {
      category: "Tools & IDEs",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Visual Studio", "VS Code", "PyCharm", "Android Studio", "MATLAB", "Anaconda", "NetBeans"],
    },
    {
      category: "Mobile & OS",
      icon: <Smartphone className="w-5 h-5" />,
      skills: ["Android SDK", "Windows", "Linux"],
    },
  ];

  return (
    <Layout>
      <PageTransition className="flex-1 max-w-5xl mx-auto w-full px-4 py-16">
        <AnimateIn direction="up">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-foreground">Skills & Tools</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-16">
            Technical proficiencies acquired through academic research, teaching, and software development.
          </p>

          <div className="space-y-16">
            {skillCategories.map((group, groupIndex) => (
              <div key={group.category} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-border/50 pb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-safe:hover:-translate-y-px motion-safe:hover:shadow-md motion-safe:hover:shadow-primary/12">
                    {group.icon}
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-foreground">
                    {group.category}
                  </h2>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {group.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="site-chip inline-block px-5 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </PageTransition>
    </Layout>
  );
}
