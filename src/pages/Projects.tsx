import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Dashboard",
      category: "Web Development",
      description: "A comprehensive admin dashboard for e-commerce management with real-time analytics and inventory tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["React", "TypeScript", "Chart.js", "Tailwind"],
      liveLink: "https://ecommerce-dashboard-demo.vercel.app",
      githubLink: "https://github.com/sarah/ecommerce-dashboard",
    },
    {
      title: "Brand Identity Design",
      category: "Graphic Design",
      description: "Complete brand identity package including logo design, color palette, and marketing materials for a tech startup.",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=400&fit=crop",
      tech: ["Figma", "Illustrator", "Photoshop"],
      liveLink: "https://behance.net/gallery/brand-identity",
      githubLink: null,
    },
    {
      title: "Data Visualization Tool",
      category: "Data Analytics",
      description: "Interactive data visualization platform for analyzing sales trends and customer behavior patterns.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["Python", "D3.js", "Tableau", "SQL"],
      liveLink: "https://data-viz-tool.herokuapp.com",
      githubLink: "https://github.com/sarah/data-viz-tool",
    },
    {
      title: "Portfolio Website",
      category: "Web Design",
      description: "Modern, responsive portfolio website with smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["React", "Framer Motion", "SCSS"],
      liveLink: "https://creative-portfolio.netlify.app",
      githubLink: "https://github.com/sarah/portfolio-site",
    },
    {
      title: "Mobile App UI Design",
      category: "UI/UX Design",
      description: "Complete UI/UX design for a fitness tracking mobile application with user-centered design principles.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tech: ["Figma", "Principle", "InVision"],
      liveLink: "https://www.figma.com/fitness-app-design",
      githubLink: null,
    },
    {
      title: "Marketing Analytics Dashboard",
      category: "Data Analytics",
      description: "Real-time marketing analytics dashboard tracking campaign performance and ROI metrics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["React", "Python", "PostgreSQL", "Chart.js"],
      liveLink: "https://marketing-dashboard.vercel.app",
      githubLink: "https://github.com/sarah/marketing-dashboard",
    },
  ];

  const categories = ["All", "Web Development", "Web Design", "Graphic Design", "Data Analytics", "UI/UX Design"];
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work across web development, design, and data analytics
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                category === "All" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="card-soft group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Eye className="h-4 w-4 text-white" />
                    </a>
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github className="h-4 w-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-fade-up">
          <h2 className="text-3xl font-serif font-semibold mb-4">
            Interested in working together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects
          </p>
          <a href="/contact" className="btn-hero">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;