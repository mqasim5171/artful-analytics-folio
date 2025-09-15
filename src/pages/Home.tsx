import { ArrowRight, Code, Palette, BarChart3, Globe, Star, Users, Award, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/90"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6">
              Hi, I'm <span className="text-gradient">Esham</span>
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

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Star, number: "50+", label: "Projects Completed", color: "text-yellow-500" },
              { icon: Users, number: "25+", label: "Happy Clients", color: "text-blue-500" },
              { icon: Award, number: "5", label: "Awards Won", color: "text-purple-500" },
              { icon: Coffee, number: "∞", label: "Cups of Coffee", color: "text-amber-500" },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-3xl font-serif font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
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

      {/* Featured Projects Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A glimpse of my recent projects across different disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "E-commerce Dashboard",
                category: "Web Development",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              {
                title: "Brand Identity Design",
                category: "Graphic Design", 
                image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop",
                gradient: "from-pink-500/20 to-rose-500/20"
              },
              {
                title: "Data Visualization Tool",
                category: "Data Analytics",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                gradient: "from-green-500/20 to-teal-500/20"
              }
            ].map((project, index) => (
              <div 
                key={project.title}
                className="card-soft group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold mt-3">{project.title}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects" className="btn-hero group">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it - here's what my clients have to say
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Emily Johnson",
                role: "CEO, TechStart Inc.",
                content: "Esham's attention to detail and creative vision transformed our brand completely. The website she designed exceeded all our expectations.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Marketing Director",
                content: "The data analytics dashboard Esham built has revolutionized how we track our campaigns. Incredible work and seamless collaboration.",
                rating: 5
              },
              {
                name: "Lisa Rodriguez",
                role: "Founder, Creative Studio",
                content: "Working with Esham was a dream. She understood our vision perfectly and delivered a stunning design that our customers absolutely love.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="card-soft animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Deep Dive */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              My Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Years of experience across multiple disciplines
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-serif font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {[
                  { skill: "Frontend Development", percentage: 95 },
                  { skill: "UI/UX Design", percentage: 90 },
                  { skill: "Data Analytics", percentage: 85 },
                  { skill: "Graphic Design", percentage: 88 }
                ].map((item, index) => (
                  <div key={item.skill} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-muted-foreground">{item.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full hero-gradient rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${item.percentage}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="card-soft">
                <h3 className="text-2xl font-serif font-semibold mb-6">Tools I Love</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "React", "TypeScript", "Figma", "Python",
                    "Tailwind CSS", "Adobe Suite", "D3.js", "SQL",
                    "Next.js", "Tableau", "Git", "Node.js"
                  ].map((tool) => (
                    <div 
                      key={tool}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full hero-gradient"></div>
                      <span className="text-sm font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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