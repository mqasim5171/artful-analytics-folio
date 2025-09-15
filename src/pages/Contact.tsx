import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sarah.developer@email.com",
      link: "mailto:sarah.developer@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/sarah-dev",
      username: "@sarah-dev"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/sarah-developer",
      username: "Sarah Developer"
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/sarah.designs",
      username: "@sarah.designs"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in">
            <div className="card-soft">
              <h2 className="text-2xl font-serif font-semibold mb-6">Send me a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-2" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project inquiry" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="mt-2 resize-none"
                  />
                </div>
                
                <Button className="w-full btn-hero">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="animate-scale-in space-y-8">
            {/* Contact Information */}
            <div className="card-soft">
              <h2 className="text-2xl font-serif font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-soft">
              <h2 className="text-2xl font-serif font-semibold mb-6">Follow Me</h2>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted group-hover:hero-gradient flex items-center justify-center transition-all">
                      <social.icon className="h-5 w-5 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium">{social.label}</p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card-soft">
              <h2 className="text-2xl font-serif font-semibold mb-4">Availability</h2>
              <p className="text-muted-foreground mb-4">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center animate-fade-up">
          <h2 className="text-3xl font-serif font-semibold mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What's your typical project timeline?",
                a: "Project timelines vary based on complexity, but most projects take 2-8 weeks from start to finish."
              },
              {
                q: "Do you work with international clients?",
                a: "Absolutely! I work with clients worldwide and am comfortable with different time zones."
              },
              {
                q: "What's included in your design service?",
                a: "Design services include research, wireframing, UI/UX design, prototyping, and design handoff."
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes, I offer maintenance packages and ongoing support for all completed projects."
              }
            ].map((faq, index) => (
              <div key={index} className="card-soft text-left">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;