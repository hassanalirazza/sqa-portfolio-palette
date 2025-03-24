
import { Mail, MapPin, Phone } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AnimatedSection from "./ui/AnimatedSection";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useToast } from "@/hooks/use-toast";

// Define the form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    // This would typically integrate with a backend service
    console.log("Form submitted:", values);
    toast({
      title: "Message Sent",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    form.reset();
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <FormControl>
                          <Input 
                            id="name" 
                            placeholder="Your name" 
                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormControl>
                          <Input 
                            id="email" 
                            placeholder="your.email@example.com" 
                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="subject">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          id="subject" 
                          placeholder="What are you reaching out about?" 
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          id="message" 
                          rows={5}
                          placeholder="Tell me about your project or inquiry..." 
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </form>
            </Form>
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
