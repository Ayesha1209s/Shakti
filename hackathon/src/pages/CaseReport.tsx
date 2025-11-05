import { Shield, ArrowLeft, Calendar, MapPin, AlertCircle, User, Phone, Mail } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import emblem from "@/assets/national-emblem.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { OfficialProfileDropdown } from "@/components/OfficialProfileDropdown";

const CaseReport = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const caseId = searchParams.get('id') || 'CS001';
  
  // Mock case data - in real app would fetch from API
  const caseData = {
    id: caseId,
    title: "Online Harassment via Social Media",
    status: "under_investigation",
    priority: "high",
    reportedDate: "2025-10-25",
    incidentDate: "2025-10-20",
    incidentTime: "14:30",
    location: "Mumbai, Maharashtra",
    description: "Continuous harassment through fake social media profiles. Threatening messages and defamatory posts being shared publicly. Multiple accounts involved in coordinated attack.",
    incidentType: "Cyber Harassment",
    evidenceFiles: ["screenshot1.jpg", "screenshot2.jpg", "chat_logs.pdf"],
    anonymous: false,
    reporterDetails: {
      name: "Priya Sharma",
      phone: "+91 98765 43210",
      email: "priya.sharma@example.com",
    },
    assignedOfficer: {
      name: "Inspector Rajesh Kumar",
      badgeNumber: "OFF12345",
      station: "Mumbai Cyber Crime Cell",
      phone: "+91 22 2345 6789",
      email: "rajesh.kumar@gov.in",
    },
    timeline: [
      { date: "2025-10-25 10:30", status: "Case Reported", description: "Case filed by complainant" },
      { date: "2025-10-25 14:00", status: "Case Assigned", description: "Assigned to Inspector Rajesh Kumar" },
      { date: "2025-10-26 09:15", status: "Investigation Started", description: "Initial investigation and evidence collection begun" },
      { date: "2025-10-27 16:45", status: "Under Investigation", description: "Digital forensics team analyzing evidence" },
    ],
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary" className="bg-muted text-muted-foreground">Pending</Badge>;
      case "under_investigation":
        return <Badge className="bg-primary/20 text-primary">Under Investigation</Badge>;
      case "resolved":
        return <Badge className="bg-accent/20 text-accent">Resolved</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
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
              <OfficialProfileDropdown />
            </div>
          </div>
        </header>

        {/* Report Content */}
        <main className="flex-1 px-4 py-8">
          <div className="container mx-auto max-w-5xl space-y-6">
            {/* Back Button */}
            <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            {/* Case Header */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-foreground mb-2">{caseData.title}</h1>
                    <p className="text-muted-foreground">Case ID: {caseData.id}</p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    {getStatusBadge(caseData.status)}
                    {caseData.priority === "high" && (
                      <Badge variant="destructive" className="bg-destructive/20 text-destructive">
                        High Priority
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    Incident Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Incident Type</p>
                    <p className="text-foreground font-medium">{caseData.incidentType}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Incident Date & Time</p>
                      <p className="text-foreground">{caseData.incidentDate} at {caseData.incidentTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">{caseData.location}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Reported Date</p>
                    <p className="text-foreground">{caseData.reportedDate}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Reporter Information */}
              {!caseData.anonymous && (
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      Reporter Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Name</p>
                      <p className="text-foreground font-medium">{caseData.reporterDetails.name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="text-foreground">{caseData.reporterDetails.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-foreground">{caseData.reporterDetails.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Description */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{caseData.description}</p>
              </CardContent>
            </Card>

            {/* Evidence */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Evidence Files</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {caseData.evidenceFiles.map((file, index) => (
                    <div key={index} className="p-3 border border-border rounded-lg flex items-center justify-between">
                      <p className="text-foreground">{file}</p>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Assigned Officer */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Assigned Official</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Name</p>
                    <p className="text-foreground font-medium">{caseData.assignedOfficer.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Badge Number</p>
                    <Badge variant="secondary">{caseData.assignedOfficer.badgeNumber}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Station</p>
                    <p className="text-foreground">{caseData.assignedOfficer.station}</p>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <p className="text-foreground">{caseData.assignedOfficer.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <p className="text-foreground">{caseData.assignedOfficer.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Case Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {caseData.timeline.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        {index < caseData.timeline.length - 1 && (
                          <div className="w-0.5 h-full bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                        <p className="font-semibold text-foreground">{event.status}</p>
                        <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CaseReport;
