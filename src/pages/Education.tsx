import { AnimateIn, PageTransition } from "@/components/AnimateIn";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "PhD in Computer Science",
      institution: "Minya University",
      period: "2023–2026",
      details: "Research: Enhancing Disease Diagnosis with AI-Powered Genomic Analysis",
    },
    {
      degree: "Master's in Computer Science",
      institution: "Minya University",
      period: "2020–2023",
      details: "Research: Improving Pattern Matching Algorithms for Biological Sequences",
    },
    {
      degree: "Bachelor in Computer Science",
      institution: "Minya University",
      period: "2015–2019",
      details: "GPA 3.45/4.0 — 1st place out of 70 students",
    },
    {
      degree: "High School",
      institution: "Tell Bani Omran Secondary School",
      period: "2012–2015",
      details: "Score: 91.7%",
    },
  ];

  const awards = [
    {
      title: "Full Tuition PhD Scholarship for Outstanding Students",
      institution: "Faculty of Science, Minya University",
      period: "2023–2026",
    },
    {
      title: "Full Tuition MSc Scholarship for Outstanding Students",
      institution: "Faculty of Science, Minya University",
      period: "2020–2023",
    },
    {
      title: "1st Place Rank",
      institution: "Minya University",
      period: "June 2019",
      details: "Graduated Very Good with Degree of Honor (GPA 3.45) out of 70 students",
    },
    {
      title: "Excellence Students Award",
      institution: "Faculty of Science, Minya University",
      period: "2017–2019",
    },
  ];

  const testimonials = [
    {
      text: "Dr. Bilal is one of the best professors and one of the best people I've met in the field of programming. He makes you love every lecture he gives, and he uses new and modern techniques, including AI. He's always open to his students' opinions.",
      author: "Mazen Mohamed"
    },
    {
      text: "Dr belal is a lecturer at Minia National University He 's been known for his modern way of teaching , using ai the right way , cares about applying science rather that just memorizing .",
      author: "Anas Desoky"
    },
    {
      text: `Honestly, this isn’t just a professor at college — he’s actually my friend and one of the guys.
The saying ‘the more knowledgeable someone is, the more humble they are’ truly applies to Dr. Bilal. He used to teach me in section sessions when he was a teaching assistant, and now he teaches me in lectures after becoming a professor.
He’s a very well-educated person, explains things extremely well, and has a great amount of valuable knowledge.
He’s genuinely one of the best people I’ve ever dealt with in the technical field overall.`,
      author: "Shady Ibrahim"
    },
    {
      text: "Dr. Belal Mohamed Hamed is one of the most outstanding instructors in Computer Science and Artificial Intelligence. He is known for his clear and engaging teaching style, with a remarkable ability to simplify complex concepts in an enjoyable way. He consistently integrates modern technologies into his teaching, making the learning experience more interactive and effective. Beyond his academic excellence, he is approachable and connects with students on a personal level, creating a supportive and motivating learning environment that encourages true understanding rather than memorization.",
      author: "Hady Rady"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <Layout>
      <PageTransition className="flex-1 max-w-5xl mx-auto w-full px-4 py-16 space-y-24">
        <AnimateIn direction="up">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-12 text-foreground">Education & Awards</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-2xl font-serif border-b border-border pb-2 text-primary">Academic Background</h2>
              <div className="relative border-l-2 border-border pl-6 space-y-10">
                {education.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[31px] top-2 shadow-[0_0_0_4px_hsl(var(--background))]"></div>
                    <div className="space-y-2">
                      <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
                      <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                      <p className="text-primary font-medium">{item.institution}</p>
                      <p className="text-muted-foreground leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-serif border-b border-border pb-2 text-primary">Scholarships & Honors</h2>
              <div className="grid gap-6">
                {awards.map((award, index) => (
                  <Card key={index} className="border-border/50 shadow-sm">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start gap-4">
                        <CardTitle className="text-lg font-bold leading-tight">{award.title}</CardTitle>
                        <Badge variant="secondary" className="shrink-0">{award.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-primary text-sm font-medium">{award.institution}</p>
                      {award.details && (
                        <p className="text-muted-foreground text-sm mt-2">{award.details}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.2}>
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-2">What Students Say</h2>
              <p className="text-muted-foreground">Voices from the classroom</p>
            </div>

            {/* Carousel wrapper — fixed height so content is never clipped */}
            <div className="relative" style={{ minHeight: 240 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* First visible card */}
                  <Card className="bg-card/40 backdrop-blur-sm border-border/50 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-5 text-primary">
                      <Quote size={120} />
                    </div>
                    <CardContent className="p-8 flex flex-col gap-4 relative z-10">
                      <Quote className="h-7 w-7 text-primary shrink-0" />
                      <p className="text-foreground text-base leading-relaxed italic">
                        "{testimonials[currentSlide].text}"
                      </p>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-sm mt-auto transition-[color,transform] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-safe:hover:underline motion-safe:hover:-translate-y-px">
                        — {testimonials[currentSlide].author}
                      </a>
                    </CardContent>
                  </Card>

                  {/* Second visible card — hidden on mobile */}
                  <Card className="bg-card/40 backdrop-blur-sm border-border/50 shadow-sm relative overflow-hidden hidden md:flex md:flex-col">
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-5 text-primary">
                      <Quote size={120} />
                    </div>
                    <CardContent className="p-8 flex flex-col gap-4 relative z-10">
                      <Quote className="h-7 w-7 text-primary shrink-0" />
                      <p className="text-foreground text-base leading-relaxed italic">
                        "{testimonials[(currentSlide + 1) % testimonials.length].text}"
                      </p>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-sm mt-auto transition-[color,transform] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-safe:hover:underline motion-safe:hover:-translate-y-px">
                        — {testimonials[(currentSlide + 1) % testimonials.length].author}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-[width,background-color,transform] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-safe:hover:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${currentSlide === index ? 'w-8 bg-primary' : 'w-2 bg-primary/30'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimateIn>
      </PageTransition>
    </Layout>
  );
}
