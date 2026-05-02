import { AnimateIn, PageTransition } from "@/components/AnimateIn";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Lecturer",
      institution: "Minya University",
      period: "Jan 2026–Present",
      details: "Teaching undergraduates, supervising graduation and postgraduate projects.",
      type: "Academic",
    },
    {
      role: "Microsoft Data Engineer Instructor",
      institution: "DEPI-Egypt",
      period: "Apr 2024–Oct 2024",
      details: "Lab sessions, data engineering, cloud, ML.",
      type: "Industry & Teaching",
    },
    {
      role: "Assistant Lecturer",
      institution: "Minya University",
      period: "Jul 2023–Present",
      details: "Lab sessions for undergraduates.",
      type: "Academic",
    },
    {
      role: "Teaching Assistant",
      institution: "Minya University",
      period: "Oct 2019–Jun 2023",
      details: "Lab sessions for undergraduates.",
      type: "Academic",
    },
    {
      role: "Open Source Developing Trainee",
      institution: "ITI, Minya",
      period: "Jun 2019–Oct 2019",
      details: "Intensive training program in open source technologies.",
      type: "Training",
    },
    {
      role: "Android Development Trainee",
      institution: "Udacity Online",
      period: "Apr 2018–Jul 2018",
      details: "Android application development training.",
      type: "Training",
    },
  ];

  const skillsDeveloped = [
    "C#", ".NET", "Entity Framework", "SQL Server", "Data Engineering", 
    "Cloud Technologies", "Machine Learning", "Python", "Research", "Academic Writing"
  ];

  return (
    <Layout>
      <PageTransition className="flex-1 max-w-5xl mx-auto w-full px-4 py-16">
        <AnimateIn direction="up">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-12 text-foreground">Professional Experience</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
            <div className="space-y-8">
              <h2 className="text-2xl font-serif border-b border-border pb-2 text-primary">Roles & Positions</h2>
              <div className="relative border-l-2 border-border pl-6 space-y-10">
                {experiences.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[31px] top-2 shadow-[0_0_0_4px_hsl(var(--background))]"></div>
                    <div className="space-y-2">
                      <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
                      <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-primary font-medium">{item.institution}</p>
                        <Badge variant="outline" className="text-xs">{item.type}</Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-2xl font-serif border-b border-border pb-2 text-primary">Teaching Impact</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-card/40 backdrop-blur-sm border-border/50 shadow-sm flex flex-col justify-center p-6 text-center">
                    <span className="text-4xl font-bold text-primary mb-2">500+</span>
                    <span className="text-sm font-medium text-muted-foreground">Students Taught</span>
                  </Card>
                  <Card className="bg-card/40 backdrop-blur-sm border-border/50 shadow-sm flex flex-col justify-center p-6 text-center">
                    <span className="text-4xl font-bold text-primary mb-2">10+</span>
                    <span className="text-sm font-medium text-muted-foreground">Courses Delivered</span>
                  </Card>
                  <Card className="bg-card/40 backdrop-blur-sm border-border/50 shadow-sm flex flex-col justify-center p-6 text-center">
                    <span className="text-4xl font-bold text-primary mb-2">7+</span>
                    <span className="text-sm font-medium text-muted-foreground">Years Experience</span>
                  </Card>
                  <Card className="bg-card/40 backdrop-blur-sm border-border/50 shadow-sm flex flex-col justify-center p-6 text-center">
                    <span className="text-4xl font-bold text-primary mb-2">3</span>
                    <span className="text-sm font-medium text-muted-foreground">Academic Levels</span>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-serif border-b border-border pb-2 text-primary">Key Achievements</h2>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-primary bg-card/40 backdrop-blur-sm shadow-sm">
                    <CardContent className="p-4 flex gap-3 items-start">
                      <Trophy className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-foreground">Full Tuition Scholarship (PhD & MSc)</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary bg-card/40 backdrop-blur-sm shadow-sm">
                    <CardContent className="p-4 flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-foreground">Peer Reviewer for Springer Nature journals</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary bg-card/40 backdrop-blur-sm shadow-sm">
                    <CardContent className="p-4 flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-foreground">Microsoft DEPI Instructor (Data Engineering)</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-serif border-b border-border pb-2 text-primary">Core Competencies</h2>
                <div className="flex flex-wrap gap-2">
                  {skillsDeveloped.map((skill) => (
                    <span key={skill} className="site-chip-solid px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </PageTransition>
    </Layout>
  );
}
