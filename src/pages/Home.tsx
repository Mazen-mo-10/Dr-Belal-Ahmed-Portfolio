import { AnimateIn, PageTransition } from "@/components/AnimateIn";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import belalPhoto from "@assets/drBelalImage.jpeg";
import { ArrowRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <Layout>
      <PageTransition className="flex-1 flex flex-col justify-center items-center py-20 px-4 relative min-h-[90vh]">
        {/* Animated subtle background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
          <AnimateIn direction="right" delay={0.2} className="flex justify-center lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl blur-2xl -z-10 transform scale-[1.05] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
              <div className="p-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl relative">
                <img
                  src={belalPhoto}
                  alt="Dr. Belal Ahmed Mohammed Hamed"
                  className="w-72 h-72 md:w-[24rem] md:h-[24rem] object-cover rounded-xl border-4 border-background"
                />
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="left" delay={0.1} className="space-y-8 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="px-4 py-1.5 text-sm rounded-full border-primary/30 text-primary bg-primary/5 backdrop-blur-sm"
              >
                Academic Portfolio
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold font-serif text-foreground leading-[1.1] tracking-tight">
                Dr. Belal Ahmed <br />
                <span className="gradient-text">Mohammed Hamed</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Lecturer, Researcher, and PhD Candidate in AI and Bioinformatics at Minya University, Egypt. 
              Dedicated to enhancing disease diagnosis through AI-powered genomic analysis.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <div className="glass site-chip px-5 py-2 rounded-full text-sm font-medium text-foreground/90 shadow-sm">
                5+ Publications
              </div>
              <div className="glass site-chip px-5 py-2 rounded-full text-sm font-medium text-foreground/90 shadow-sm">
                7+ Years Teaching
              </div>
              <div className="glass site-chip px-5 py-2 rounded-full text-sm font-medium text-foreground/90 shadow-sm">
                PhD Candidate in AI
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6">
              <Link href="/about" className="inline-flex">
                <Button
                  size="lg"
                  className="hero-cta-breathe group rounded-full gap-2.5 text-base h-14 px-8 btn-glow shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/15"
                >
                  Read Biography
                  <span className="inline-flex hero-cta-arrow-invite" aria-hidden>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Button>
              </Link>
              <Link href="/publications" className="inline-flex">
                <Button
                  size="lg"
                  variant="outline"
                  className="group rounded-full gap-2 text-base h-14 px-8 border-border hover:bg-secondary/50"
                >
                  <BookOpen className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-px" />
                  Publications
                </Button>
              </Link>
            </div>
          </AnimateIn>
        </div>
        
      </PageTransition>
    </Layout>
  );
}