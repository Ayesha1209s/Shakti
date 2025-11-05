import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ArrowLeft, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import emblem from "@/assets/national-emblem.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProfileDropdown } from "@/components/ProfileDropdown";

const Support = () => {
  const helplineNumbers = [
    {
      station: "National Cybercrime Helpline",
      number: "1930",
      location: "All India",
      availability: "24/7"
    },
    {
      station: "Delhi Cyber Crime Cell",
      number: "+91-11-2436-5042",
      location: "New Delhi",
      availability: "9 AM - 6 PM"
    },
    {
      station: "Mumbai Cyber Crime Cell",
      number: "+91-22-2264-3200",
      location: "Mumbai, Maharashtra",
      availability: "24/7"
    },
    {
      station: "Bangalore Cyber Crime Cell",
      number: "+91-80-2294-2555",
      location: "Bangalore, Karnataka",
      availability: "24/7"
    },
    {
      station: "Chennai Cyber Crime Cell",
      number: "+91-44-2345-0157",
      location: "Chennai, Tamil Nadu",
      availability: "9 AM - 6 PM"
    },
    {
      station: "Kolkata Cyber Crime Cell",
      number: "+91-33-2214-5000",
      location: "Kolkata, West Bengal",
      availability: "9 AM - 6 PM"
    },
    {
      station: "Hyderabad Cyber Crime Cell",
      number: "+91-40-2785-6439",
      location: "Hyderabad, Telangana",
      availability: "24/7"
    },
    {
      station: "Pune Cyber Crime Cell",
      number: "+91-20-2612-8191",
      location: "Pune, Maharashtra",
      availability: "9 AM - 6 PM"
    },
    {
      station: "Ahmedabad Cyber Crime Cell",
      number: "+91-79-2657-6801",
      location: "Ahmedabad, Gujarat",
      availability: "9 AM - 6 PM"
    },
    {
      station: "Jaipur Cyber Crime Cell",
      number: "+91-141-222-8333",
      location: "Jaipur, Rajasthan",
      availability: "9 AM - 6 PM"
    }
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background with National Emblem */}
      <div 
        className="absolute inset-0 dark:opacity-[0.02] opacity-[0.05]"
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
              <ProfileDropdown />
              <Link to="/user-dashboard">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Support Content */}
        <main className="flex-1 px-4 py-12">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Phone className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-5xl font-bold text-foreground mb-4">Cyber Crime Helplines</h1>
              <p className="text-xl text-muted-foreground">
                Direct contact numbers for cyber crime branches across India
              </p>
            </div>

            {/* Emergency Notice */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 mb-8">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  National Emergency Helpline
                </h3>
                <p className="text-3xl font-bold text-primary mb-2">1930</p>
                <p className="text-muted-foreground">
                  Available 24/7 for immediate cybercrime assistance across India
                </p>
              </CardContent>
            </Card>

            {/* Helpline Numbers Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {helplineNumbers.map((helpline, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      {helpline.station}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {helpline.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Contact Number:</span>
                      <a href={`tel:${helpline.number}`} className="text-primary font-semibold hover:underline">
                        {helpline.number}
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Availability:</span>
                      <span className="text-foreground font-medium">{helpline.availability}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="bg-card/50 backdrop-blur-sm border-border mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Need More Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you don't see your city listed or need additional support, you can:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Call the National Cybercrime Helpline at 1930</li>
                  <li>Report your case through our secure platform</li>
                  <li>Visit your nearest police station's cyber crime cell</li>
                  <li>Email us at support@shakti.gov.in</li>
                </ul>
                <div className="flex gap-4 mt-6">
                  <Link to="/report-case">
                    <Button>Report a Case</Button>
                  </Link>
                  <Link to="/safety-resources">
                    <Button variant="outline">Safety Resources</Button>
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

export default Support;