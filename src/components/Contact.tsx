
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./ui/AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically integrate with a backend service
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss quality assurance strategies? Let's connect.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <AnimatedSection className="lg:col-span-2" delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="What are you reaching out about?"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="glassmorphism rounded-2xl p-8 space-y-8">
              <h3 className="text-xl font-display font-semibold">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:contact@example.com" className="text-foreground hover:text-primary transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-foreground hover:text-primary transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-foreground">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">Connect with me on social media</p>
                <div className="flex gap-4">
                  {["LinkedIn", "GitHub", "Twitter", "Medium"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                      aria-label={platform}
                    >
                      {platform[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
