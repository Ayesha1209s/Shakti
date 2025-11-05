import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ArrowLeft, Target, Users, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import emblem from "@/assets/national-emblem.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProfileDropdown } from "@/components/ProfileDropdown";

const About = () => {
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

        {/* About Content */}
        <main className="flex-1 px-4 py-12">
          <div className="container mx-auto max-w-4xl space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-foreground mb-4">About Shakti</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Empowering women with secure digital tools to report and combat cybercrime
              </p>
            </div>

            {/* Mission Section */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Shakti is dedicated to creating a safe digital environment for women across India. We provide 
                  a secure, anonymous platform for reporting cybercrimes and connecting victims directly with 
                  law enforcement agencies.
                </p>
                <p>
                  In today's digital age, women face increasing threats including online harassment, cyberstalking, 
                  identity theft, and non-consensual image sharing. Our mission is to break down barriers in 
                  reporting these crimes and ensure swift, effective action.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <Lock className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-foreground">Secure & Anonymous</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    All reports are encrypted end-to-end. Your identity is protected and only shared with 
                    authorized officers when necessary.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-foreground">Direct Police Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Cases are directly routed to specialized cybercrime units, ensuring faster response 
                    and investigation.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-foreground">Real-time Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Track your case status in real-time and receive updates from investigating officers 
                    through secure channels.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Vision Section */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  We envision a digital India where women can participate freely and safely in online spaces 
                  without fear of harassment or exploitation. Through Shakti, we aim to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Reduce the reporting time for cybercrimes from days to minutes</li>
                  <li>Increase the conviction rate of cyber criminals targeting women</li>
                  <li>Provide comprehensive support resources and legal guidance</li>
                  <li>Build awareness about digital safety and cybercrime prevention</li>
                  <li>Create a national database to track and prevent repeat offenders</li>
                </ul>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
              <CardContent className="pt-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Join Us in Making Digital India Safer</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Whether you need to report a case or want to support our mission, we're here to help.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link to="/auth">
                    <Button size="lg">Get Started</Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline">Contact Us</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
