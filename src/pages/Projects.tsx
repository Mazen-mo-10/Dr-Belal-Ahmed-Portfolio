import { AnimateIn, PageTransition } from "@/components/AnimateIn";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Expenses Manager Application",
      year: "2022",
      description: "Manages monthly expenses and revenues for multiple currencies and users.",
      tags: ["Desktop", "Finance", "Management"],
    },
    {
      title: "Mondabet Application",
      year: "2019",
      description: "Supervises supervisory tours of clients in Saudi Arabia.",
      tags: ["Mobile", "Management"],
    },
    {
      title: "W3eny Project",
      year: "2019",
      description: "Mobile app reducing nutritional awareness issues and helping type 2 diabetics manage healthy food.",
      tags: ["Mobile", "Health", "Awareness"],
    },
  ];

  return (
    <Layout>
      <PageTransition className="flex-1 max-w-5xl mx-auto w-full px-4 py-16 space-y-16">
        <AnimateIn direction="up">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-foreground">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-12">
            Software and application development projects focused on solving real-world problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimateIn key={index} direction="up" delay={index * 0.1}>
                <Card className="h-full flex flex-col border-border/50 shadow-sm group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold text-foreground leading-tight">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="shrink-0">{project.year}</Badge>
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-background">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-border/50 gap-3">
                    <Button variant="default" size="sm" className="flex-1 rounded-full" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 rounded-full" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-4 h-4 mr-2" /> GitHub
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimateIn>
            ))}

            {/* Coming Soon Cards */}
            {/* <AnimateIn direction="up" delay={0.3}>
              <Card className="h-full flex flex-col border-dashed border-2 border-border/40 bg-muted/20 opacity-80">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-foreground leading-tight">
                      Research Tool
                    </CardTitle>
                    <Badge variant="outline" className="shrink-0 animate-pulse border-primary text-primary">In Dev</Badge>
                  </div>
                  <CardDescription className="text-base">
                    Currently in development. Stay tuned for updates on this specialized data analysis tool.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-6">
                  <div className="h-2 w-full bg-border/50 rounded-full overflow-hidden">
                    <div className="h-full bg-primary/40 w-2/3 rounded-full animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            </AnimateIn> */}

            {/* <AnimateIn direction="up" delay={0.4}>
              <Card className="h-full flex flex-col border-dashed border-2 border-border/40 bg-muted/20 opacity-80">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-foreground leading-tight">
                      Next Project
                    </CardTitle>
                    <Badge variant="outline" className="shrink-0 animate-pulse border-primary text-primary">Planning</Badge>
                  </div>
                  <CardDescription className="text-base">
                    Currently in development. Stay tuned for updates.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-6">
                  <div className="h-2 w-full bg-border/50 rounded-full overflow-hidden">
                    <div className="h-full bg-primary/40 w-1/3 rounded-full animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            </AnimateIn> */}
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.5}>
          <div className="group bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-safe:hover:border-primary/25">
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0 transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-safe:group-hover:scale-105 group-hover:bg-primary/18">
                <FaGithub className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Open Source Contributions</h3>
                <p className="text-muted-foreground mt-1">View my open source work and contributions</p>
              </div>
            </div>
            <Button asChild size="lg" className="rounded-full btn-glow shadow-[0_0_14px_hsl(var(--primary)/0.25)] motion-safe:hover:shadow-[0_0_22px_hsl(var(--primary)/0.35)]">
              <a href="https://github.com/belalahmedhamed" target="_blank" rel="noopener noreferrer">
                GitHub Profile <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </AnimateIn>
      </PageTransition>
    </Layout>
  );
}
