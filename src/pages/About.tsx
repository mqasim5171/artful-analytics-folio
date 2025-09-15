import { Download, MapPin, Calendar, Heart } from "lucide-react";

const About = () => {
  const experiences = [
    {
      role: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading frontend development projects and mentoring junior developers.",
    },
    {
      role: "UI/UX Designer",
      company: "Creative Agency",
      period: "2021 - 2022",
      description: "Designed user interfaces for web and mobile applications.",
    },
    {
      role: "Data Analyst",
      company: "Analytics Corp",
      period: "2020 - 2021",
      description: "Created data visualizations and reports for business insights.",
    },
  ];

  const tools = [
    "React", "TypeScript", "Next.js", "Tailwind CSS",
    "Figma", "Adobe Creative Suite", "Python", "SQL",
    "Tableau", "D3.js", "Node.js", "Git"
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a multi-disciplinary developer and designer passionate about creating 
            meaningful digital experiences that make a difference.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Story */}
          <div className="animate-slide-in">
            <h2 className="text-3xl font-serif font-semibold mb-6">My Story</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                My journey into tech began with a curiosity about how beautiful websites 
                come to life. What started as a hobby quickly became a passion as I 
                discovered the perfect blend of creativity and logic in web development.
              </p>
              <p>
                Over the years, I've expanded my expertise to include data analytics 
                and graphic design, allowing me to approach problems from multiple 
                angles and deliver comprehensive solutions.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring new 
                technologies, reading design blogs, or working on personal projects 
                that challenge my skills and creativity.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-5 w-5" />
                Available for projects
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="h-5 w-5" />
                Coffee enthusiast
              </div>
            </div>

            <button className="btn-hero mt-8 group">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </button>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="animate-scale-in">
            <h2 className="text-3xl font-serif font-semibold mb-8">Experience</h2>
            <div className="space-y-6 mb-12">
              {experiences.map((exp, index) => (
                <div key={index} className="card-soft">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-medium text-primary mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-serif font-semibold mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center animate-fade-up">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "25+", label: "Happy Clients" },
            { number: "5", label: "Awards Won" },
          ].map((stat, index) => (
            <div key={index} className="card-soft">
              <div className="text-3xl font-serif font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;