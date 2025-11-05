import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ArrowLeft, Mail, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import emblem from "@/assets/national-emblem.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background with National Emblem */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${emblem})`,
          backgroundPosition: 'center',
          backgroundSize: '50%',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,128,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header className="border-b border-border/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Shakti</span>
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link to="/">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Contact Content */}
        <main className="flex-1 px-4 py-12">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">
                We're here to help. Reach out to us for support or inquiries.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Contact Info Cards */}
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <Mail className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-foreground">Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">support@shakti.gov.in</p>
                  <p className="text-muted-foreground">help@shakti.gov.in</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <Phone className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-foreground">Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Emergency: 1091</p>
                  <p className="text-muted-foreground">Support: +91-11-1234-5678</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <Clock className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-foreground">Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">24/7 Emergency Support</p>
                  <p className="text-muted-foreground">Mon-Fri: 9 AM - 6 PM</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send Us a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24-48 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Privacy Notice */}
            <Collapsible open={privacyOpen} onOpenChange={setPrivacyOpen} className="mt-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-foreground">Privacy Notice</CardTitle>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${privacyOpen ? 'rotate-180' : ''}`} />
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="text-muted-foreground space-y-3">
                    <p>
                      Your privacy is important to us. When you contact us through this form, we collect 
                      your name, email, subject, and message to respond to your inquiry.
                    </p>
                    <p>
                      We will never share your personal information with third parties without your consent, 
                      except as required by law. All communications are encrypted and stored securely.
                    </p>
                    <p>
                      For more details, please read our complete privacy policy or contact our data protection 
                      officer at privacy@shakti.gov.in
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
