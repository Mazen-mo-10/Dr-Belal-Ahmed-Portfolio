import { AnimateIn, PageTransition } from "@/components/AnimateIn";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const quickFacts = [
    {
      icon: <GraduationCap className="w-5 h-5 text-blue-500" />,
      label: "PhD Candidate — AI & Bioinformatics",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-purple-500" />,
      label: "Lecturer at Minya University",
    },
    {
      icon: <Award className="w-5 h-5 text-pink-500" />,
      label: "Peer Reviewer, Springer Nature",
    },
  ];

  return (
    <Layout>
      <PageTransition className="flex-1 max-w-4xl mx-auto w-full px-4 py-20">
        <AnimateIn direction="up">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground">
              Biography & Journey
            </h1>
            <Button
              size="lg"
              className="rounded-full gap-2 text-base h-12 px-6 btn-glow shadow-lg"
              asChild
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1RamanE_IEnj6CSKFDFe-_-8BFUimUxZR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="glass p-4 flex items-center gap-4 card-hover"
              >
                <div className="p-2 bg-background/50 rounded-full border border-border/50">
                  {fact.icon}
                </div>
                <span className="font-medium text-sm text-foreground/90">
                  {fact.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="prose prose-lg dark:prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-serif max-w-none space-y-8">
            <p className="lead text-xl font-medium text-foreground">
              I am Dr. Belal Ahmed Mohammed Hamed, a dedicated Computer Science
              researcher and educator at Minya University, Egypt, specializing
              in AI-powered genomic analysis and bioinformatics.
            </p>

            <p>
              My academic journey has been driven by a passion for understanding
              complex biological sequences and leveraging computational power to
              derive meaningful insights. From graduating 1st out of 70 students
              in my undergraduate class to pursuing a PhD focused on enhancing
              disease diagnosis with AI, my path has been characterized by
              rigorous inquiry and consistent excellence.
            </p>

            <h2 className="mt-16 text-2xl font-semibold border-b border-border pb-2">
              Academic Philosophy
            </h2>
            <p>
              As a lecturer at Minya University, I view teaching not merely as
              the transmission of knowledge, but as the cultivation of
              analytical thinking. Having taught and assisted in numerous
              undergraduate courses—from basic programming to advanced AI and
              natural language processing—I strive to bridge the gap between
              theoretical computer science and practical, real-world
              applications.
            </p>

            <h2 className="mt-16 text-2xl font-semibold border-b border-border pb-2">
              Research Focus
            </h2>
            <p>
              My research lies at the intersection of machine learning and
              bioinformatics. Currently, my PhD research explores the
              integration of Graph Convolutional Networks (GCN) and deep
              learning frameworks for identifying key genetic variants in
              Alzheimer's disease progression. Previously, my Master's work
              focused on improving pattern matching algorithms for biological
              sequences, achieving significant optimizations in classification
              efficiency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 glass-dark p-8">
              <div>
                <h3 className="text-xl font-serif mb-4 text-foreground">
                  Personal Details
                </h3>
                <ul className="space-y-3 list-none pl-0">
                  <li>
                    <strong className="text-foreground">Location:</strong>{" "}
                    Minia, Egypt
                  </li>
                  <li>
                    <strong className="text-foreground">Date of Birth:</strong>{" "}
                    September 25, 1997
                  </li>
                  <li>
                    <strong className="text-foreground">Languages:</strong>{" "}
                    Arabic (Native), English (Professional)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4 text-foreground">
                  Scientific Roles
                </h3>
                <ul className="space-y-3 list-none pl-0">
                  <li>
                    <strong className="text-foreground">
                      Journal Reviewer:
                    </strong>{" "}
                    Springer Nature (Nov 2024–Present)
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Young Scientist Member:
                    </strong>{" "}
                    Medical Data Mining Journal (June 2025–Present)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimateIn>
      </PageTransition>
    </Layout>
  );
}
