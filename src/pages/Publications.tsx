import { AnimateIn, PageTransition } from "@/components/AnimateIn";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, GraduationCap, Mail } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      authors: "Ibrahim, O.A.S., Hamed, B.A. & El-Hafeez, T.A.",
      title: "A new fast technique for pattern matching in biological sequences.",
      journal: "J Supercomput",
      year: "2022",
      link: "https://doi.org/10.1007/s11227-022-04673-3",
    },
    {
      authors: "Hamed, Belal A., et al.",
      title: "A Survey on Improving Pattern Matching Algorithms for Biological Sequences.",
      journal: "Concurrency and Computation: Practice and Experience",
      year: "2022",
      link: "https://doi.org/10.1002/cpe.7292",
    },
    {
      authors: "Hamed, B.A., et al.",
      title: "Optimizing classification efficiency with machine learning techniques for pattern matching.",
      journal: "J Big Data 10, 124",
      year: "2023",
      link: "https://doi.org/10.1186/s40537-023-00804-6",
    },
    {
      authors: "Hamed, B.A., et al.",
      title: "Identifying key genetic variants in Alzheimer's disease progression using Graph Convolutional Networks (GCN).",
      journal: "J Big Data 12, 171",
      year: "2025",
      link: "https://doi.org/10.1186/s40537-025-01228-0",
    },
    {
      authors: "Hamed, B.A., et al.",
      title: "A Novel Deep Learning Framework for Alzheimer's Gene Prediction via SNP and Gene Network Integration.",
      journal: "SJDFS",
      year: "2025",
      link: "https://doi.org/10.21608/SJDFS.2025.444026.1273",
    },
  ];

  const references = [
    {
      name: "Prof. Tarek Abd El-Hafeez",
      title: "Professor, Computer Science Dept",
      institution: "Minya University",
      email: "tarek@mu.edu.eg",
    },
    {
      name: "Prof. Abdelmgeid Amin",
      title: "Professor, Computer Science Dept",
      institution: "Minya University",
      email: "abdelmgeid@yahoo.com",
    },
    {
      name: "Dr. Ahmed Omer Abd-Allah",
      title: "Assistant Professor, Computer Science Dept",
      institution: "Minya University",
      email: "ahmed.omar@mu.edu.eg",
    },
    {
      name: "Dr. Heba Mamdouh",
      title: "Assistant Professor, Computer Science Dept",
      institution: "Minya University",
      email: "heba.mamdouh@mu.edu.eg",
    },
  ];

  return (
    <Layout>
      <PageTransition className="flex-1 max-w-5xl mx-auto w-full px-4 py-16 space-y-24">
        <AnimateIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-foreground">Publications</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Research focused on biological sequence pattern matching, AI-powered genomic analysis, and predictive modeling for Alzheimer's disease.
              </p>
            </div>
            <a 
              href="https://orcid.org/0000-0003-2165-7493" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium transition-[color,transform] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-safe:hover:text-primary/90 motion-safe:hover:-translate-y-px"
            >
              <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" alt="ORCID" className="w-5 h-5" />
              ORCID Profile
            </a>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <AnimateIn key={index} direction="up" delay={index * 0.1}>
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-2 flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-1">
                      <CardTitle className="text-xl font-bold leading-tight font-serif text-foreground">
                        {pub.title}
                      </CardTitle>
                      <p className="text-muted-foreground">{pub.authors}</p>
                    </div>
                    <Badge variant="secondary" className="shrink-0 px-3 py-1 text-sm font-medium">
                      {pub.year}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-primary font-medium flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        {pub.journal}
                      </p>
                      {pub.link && (
                        <Button variant="outline" size="sm" asChild className="gap-2">
                          <a href={pub.link.startsWith('http') ? pub.link : `https://${pub.link}`} target="_blank" rel="noopener noreferrer">
                            View Publication <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.2}>
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-foreground">Academic References & Verification</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {references.map((ref, index) => (
                <Card key={index} className="group bg-card/40 backdrop-blur-sm border-border/50 shadow-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-safe:group-hover:scale-105 group-hover:bg-primary/15">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-foreground">{ref.name}</h3>
                      <p className="text-sm font-medium text-primary">{ref.title}</p>
                      <p className="text-sm text-muted-foreground">{ref.institution}</p>
                      <a href={`mailto:${ref.email}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground mt-2 transition-[color,transform] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-safe:hover:text-primary motion-safe:hover:-translate-y-px">
                        <Mail className="h-3 w-3" />
                        {ref.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimateIn>
      </PageTransition>
    </Layout>
  );
}
