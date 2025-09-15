import { ArrowRight, Code, Palette, BarChart3, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const skills = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, modern web applications with clean, efficient code.",
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "Creating beautiful, user-friendly interfaces that engage and delight users.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transforming complex data into actionable insights and visualizations.",
    },
    {
      icon: Globe,
      title: "Graphic Design",
      description: "Crafting visual identities and marketing materials that tell your story.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6">
              Hi, I'm <span className="text-gradient">Sarah</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A passionate developer & designer creating beautiful digital experiences 
              through code, design, and data-driven insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/projects" className="btn-hero group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-ghost">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              What I Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I combine creativity with technical expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.title} 
                className="card-soft animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl hero-gradient flex items-center justify-center">
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              Ready to bring your ideas to life?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's collaborate and create something amazing together
            </p>
            <Link to="/contact" className="btn-hero group">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;