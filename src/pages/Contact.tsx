import { AnimateIn, PageTransition } from "@/components/AnimateIn";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, ExternalLink, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaKaggle, FaFacebook } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";
import { motion } from "framer-motion";
import { FaResearchgate } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const contacts = [
  {
    label: "Email",
    value: "belala487@gmail.com",
    icon: <Mail className="h-6 w-6 text-primary" />,
    link: "mailto:belala487@gmail.com",
    isExternal: false,
  },
  {
    label: "University Email",
    value: "belal.ahmed@mu.edu.eg",
    icon: <Mail className="h-6 w-6 text-primary" />,
    link: "mailto:belal.ahmed@mu.edu.eg",
    isExternal: false,
  },
  {
    label: "Phone",
    value: "+201097958164",
    icon: <Phone className="h-6 w-6 text-primary" />,
    link: "tel:+201097958164",
    isExternal: false,
  },
  {
    label: "ORCID",
    value: "0000-0003-2165-7493",
    icon: <SiOrcid className="h-6 w-6 text-primary" />,
    link: "https://orcid.org/0000-0003-2165-7493",
    isExternal: true,
  },
  {
    label: "GitHub",
    value: "belalahmedhamed",
    icon: <FaGithub className="h-6 w-6 text-primary" />,
    link: "https://github.com/belalahmedhamed",
    isExternal: true,
  },
  {
    label: "LinkedIn",
    value: "belal-a-hamed",
    icon: <FaLinkedin className="h-6 w-6 text-primary" />,
    link: "https://www.linkedin.com/in/belal-a-hamed/",
    isExternal: true,
  },
  {
    label: "Location",
    value: "Minia, Egypt",
    icon: <MapPin className="h-6 w-6 text-primary" />,
    link: "https://maps.google.com/?q=Minia,Egypt",
    isExternal: true,
  },
  {
    label: "Research Gate",
    value: "Belal-Hamed",
    icon: <FaResearchgate className="h-6 w-6 text-primary" />,
    link: `
https://www.researchgate.net/profile/Belal-Hamed?ev=hdr_xprf&_sg=T4i4e-nH5x_AdnFXIgNTKjPe7UlhGOxIGW-E-np8QppUGjAbztqp-PUou-H5Ec3BVYkC25KwENvLu6YTxk_qCW73&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6ImpvYk92ZXJ2aWV3IiwicGFnZSI6ImhvbWUiLCJwcmV2aW91c1BhZ2UiOiJsb2dpbiIsInBvc2l0aW9uIjoiZ2xvYmFsSGVhZGVyIn19`,
    isExternal: true,
  },
    {
    label: "Google Scholar",
    value: "Belal Ahmed",
    icon: <MdSchool className="h-6 w-6 text-primary" />,
    link: "https://scholar.google.com.eg/citations?user=Dnwa9kYAAAAJ&hl=ar&oi=ao",
    isExternal: true,
  },
];

export default function Contact() {
  return (
    <Layout>
      <PageTransition className="flex-1 max-w-5xl mx-auto w-full px-4 py-16 space-y-24">

        {/* Contact cards — 3×3 grid */}
        <AnimateIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-foreground">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Feel free to reach out for academic collaborations, speaking engagements, or professional inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <AnimateIn key={index} direction="up" delay={index * 0.07}>
                <a
                  href={contact.link}
                  target={contact.isExternal ? "_blank" : undefined}
                  rel={contact.isExternal ? "noopener noreferrer" : undefined}
                  className="block h-full group"
                >
                  <Card className="h-full bg-card/40 backdrop-blur-sm border-border/50 motion-safe:hover:border-primary/35">
                    <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center motion-safe:group-hover:scale-105 group-hover:bg-primary/20 transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]">
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">{contact.label}</h3>
                        <p className="text-primary font-medium flex items-center justify-center gap-2 break-all">
                          {contact.value}
                          {contact.isExternal && <ExternalLink className="h-3 w-3 shrink-0" />}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>

        {/* Quote / Philosophy section */}
        <AnimateIn direction="up" delay={0.2}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-3xl overflow-hidden py-20 px-8 text-center"
          >
            {/* Gradient background layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/5 to-purple-600/10 backdrop-blur-sm border border-primary/10 rounded-3xl" />

            {/* Decorative oversized quote marks */}
            <span className="absolute top-4 left-8 text-[8rem] leading-none text-primary/10 font-serif select-none">
              "
            </span>
            <span className="absolute bottom-4 right-8 text-[8rem] leading-none text-primary/10 font-serif select-none rotate-180">
              "
            </span>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <p className="text-2xl md:text-4xl font-serif font-medium text-foreground leading-snug">
                Education is not the filling of a pail,
                <br />
                <span className="gradient-text">but the lighting of a fire.</span>
              </p>
              <p className="text-muted-foreground text-lg tracking-wide">— W. B. Yeats</p>
              <div className="pt-4 text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
                A philosophy that guides every lecture, every lab session, and every student interaction —
                igniting curiosity rather than transferring information.
              </div>
            </div>
          </motion.div>
        </AnimateIn>

      </PageTransition>
    </Layout>
  );
}
