import { Button } from "@/components/ui/button";
import { Shield, Lock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import emblem from "@/assets/national-emblem.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
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
      
      {/* Cyber Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,128,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header className="border-b border-border/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Shakti</span>
            </div>
            <nav className="flex gap-4 items-center">
            <Link to="/about">
              <Button variant="ghost" className="text-foreground hover:text-primary">About</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" className="text-foreground hover:text-primary">Contact Us</Button>
            </Link>
              <ThemeToggle />
              <Link to="/auth">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Login</Button>
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="container mx-auto text-center space-y-8 py-20">
            <div 
              className="absolute inset-0 -z-10 bg-gradient-to-b from-[hsl(var(--accent))] to-transparent opacity-30"
              style={{ 
                background: 'linear-gradient(135deg, hsl(270 60% 75%) 0%, hsl(327 73% 97%) 100%)'
              }}
            />
            
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-mono">
                SECURE • ANONYMOUS • EMPOWERING
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Empowering Women in the
              <span className="block text-primary mt-2 animate-pulse">Digital Age</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Report cybercrime securely, track your cases in real-time, and access support resources—all in one protected platform
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/auth">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold">
                  Get Started
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 pt-16 max-w-5xl mx-auto">
              <div className="p-6 bg-[hsl(var(--report))] border border-border rounded-lg backdrop-blur-sm hover:border-primary/50 transition-colors">
                <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Secure Reporting</h3>
                <p className="text-muted-foreground">Anonymous and encrypted case reporting with end-to-end protection</p>
              </div>
              
              <div className="p-6 bg-[hsl(var(--secondary))] border border-border rounded-lg backdrop-blur-sm hover:border-primary/50 transition-colors">
                <Lock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Police Linkage</h3>
                <p className="text-muted-foreground">Direct connection with cybercrime units for faster response</p>
              </div>
              
              <div className="p-6 bg-[hsl(var(--support))] border border-border rounded-lg backdrop-blur-sm hover:border-primary/50 transition-colors">
                <AlertTriangle className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-foreground mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Access to emotional support and legal resources anytime</p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <Chatbot />
      </div>
    </div>
  );
};

export default Index;
