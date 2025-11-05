import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import emblem from "@/assets/national-emblem.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { OfficialProfileDropdown } from "@/components/OfficialProfileDropdown";

const OfficialProfile = () => {
  // Mock data - in real app, this would come from auth context
  const officialData = {
    name: "Inspector Rajesh Kumar",
    email: "rajesh.kumar@gov.in",
    phone: "+91 98765 43210",
    badgeNumber: "OFF12345",
    designation: "Cyber Crime Inspector",
    post: "Station House Officer",
    station: "Mumbai Cyber Crime Cell",
    department: "Maharashtra Police",
    joinDate: "2020-03-15",
    yearsOfService: "15 years",
    specialization: "Digital Forensics, Cyber Law",
    casesHandled: 127,
    casesSolved: 98,
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background with National Emblem */}
      <div 
        className="absolute inset-0 opacity-[var(--emblem-opacity)]"
        style={{
          backgroundImage: `url(${emblem})`,
          backgroundPosition: 'center',
          backgroundSize: '50%',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(66,133,244,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,133,244,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Top Navbar */}
        <header className="border-b border-border/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/police-dashboard" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Shakti</span>
            </Link>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <OfficialProfileDropdown userName={officialData.name} userEmail={officialData.email} />
            </div>
          </div>
        </header>

        {/* Profile Content */}
        <main className="flex-1 px-4 py-8">
          <div className="container mx-auto max-w-4xl space-y-6">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-2">Official Profile</h1>
              <p className="text-muted-foreground">Complete profile information</p>
            </div>

            {/* Personal Information */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                    <p className="text-foreground font-medium">{officialData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Badge Number</p>
                    <Badge variant="secondary">{officialData.badgeNumber}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="text-foreground">{officialData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="text-foreground">{officialData.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Official Details */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Official Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Designation</p>
                    <p className="text-foreground font-medium">{officialData.designation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Post</p>
                    <p className="text-foreground font-medium">{officialData.post}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Station/Office</p>
                    <p className="text-foreground">{officialData.station}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Department</p>
                    <p className="text-foreground">{officialData.department}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Years of Service</p>
                    <p className="text-foreground">{officialData.yearsOfService}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Join Date</p>
                    <p className="text-foreground">{new Date(officialData.joinDate).toLocaleDateString('en-IN')}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground mb-1">Specialization</p>
                    <p className="text-foreground">{officialData.specialization}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Stats */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Performance Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">{officialData.casesHandled}</p>
                    <p className="text-sm text-muted-foreground mt-1">Cases Handled</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">{officialData.casesSolved}</p>
                    <p className="text-sm text-muted-foreground mt-1">Cases Resolved</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">
                      {Math.round((officialData.casesSolved / officialData.casesHandled) * 100)}%
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Success Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OfficialProfile;
