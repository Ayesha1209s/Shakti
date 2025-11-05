import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, User, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import emblem from "@/assets/national-emblem.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProfileDropdown } from "@/components/ProfileDropdown";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const TrackCase = () => {
  const [officerDialogOpen, setOfficerDialogOpen] = useState(false);

  const caseDetails = {
    id: "CS001",
    title: "Online Harassment",
    status: "under_investigation",
    priority: "high",
    reportedDate: "2025-10-25",
    lastUpdated: "2025-10-30",
    assignedOfficer: "Official Kumar",
    description: "Received threatening messages and harassment through social media platforms.",
  };

  const officerProfile = {
    name: "Official Kumar",
    designation: "Cyber Crime Inspector",
    post: "Inspector",
    workplace: "Delhi Cyber Crime Cell",
    badgeNumber: "DCC/2024/1234",
    email: "kumar@cyberpolice.gov.in",
    phone: "+91 98765 43210",
    experience: "8 years",
    specialization: "Online Harassment & Cyberstalking"
  };

  const timeline = [
    { date: "2025-10-25 10:30 AM", event: "Case Reported", description: "Initial report filed by user" },
    { date: "2025-10-25 02:15 PM", event: "Case Assigned", description: "Assigned to Official Kumar for investigation" },
    { date: "2025-10-27 11:00 AM", event: "Evidence Collected", description: "Digital evidence collected and preserved" },
    { date: "2025-10-29 03:30 PM", event: "Investigation In Progress", description: "Tracking suspect's digital footprint" },
    { date: "2025-10-30 09:00 AM", event: "Update", description: "Suspect identified, preparing for action" },
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
        {/* Top Navbar */}
        <header className="border-b border-border/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Shakti</span>
            </Link>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <ProfileDropdown />
            </div>
          </div>
        </header>

        {/* Case Details */}
        <main className="flex-1 px-4 py-8">
          <div className="container mx-auto max-w-4xl space-y-6">
            {/* Case Header */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl font-bold text-foreground">{caseDetails.title}</CardTitle>
                      <Badge className="bg-primary/20 text-primary">Under Investigation</Badge>
                      {caseDetails.priority === "high" && (
                        <Badge variant="destructive" className="bg-destructive/20 text-destructive border-destructive/30">
                          High Priority
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-muted-foreground">
                      Case ID: {caseDetails.id}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Reported Date</p>
                      <p className="font-semibold text-foreground">{caseDetails.reportedDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Assigned Official</p>
                      <p className="font-semibold text-foreground">{caseDetails.assignedOfficer}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Last Updated</p>
                      <p className="font-semibold text-foreground">{caseDetails.lastUpdated}</p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Description</h4>
                  <p className="text-muted-foreground">{caseDetails.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Case Timeline</CardTitle>
                <CardDescription className="text-muted-foreground">Track the progress of your case</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                        {index < timeline.length - 1 && (
                          <div className="w-0.5 h-full bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <p className="text-sm text-muted-foreground mb-1">{item.date}</p>
                        <h4 className="font-semibold text-foreground mb-1">{item.event}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1" onClick={() => setOfficerDialogOpen(true)}>
                Contact Officer
              </Button>
              <Button variant="outline">
                Download Case Report
              </Button>
            </div>
          </div>
        </main>
      </div>

      {/* Officer Profile Dialog */}
      <Dialog open={officerDialogOpen} onOpenChange={setOfficerDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Investigating Officer Profile</DialogTitle>
            <DialogDescription>
              Complete profile of the official handling your case
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">{officerProfile.name}</h3>
                <p className="text-sm text-muted-foreground">{officerProfile.designation}</p>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Post/Rank:</span>
                <span className="font-medium text-foreground">{officerProfile.post}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Workplace:</span>
                <span className="font-medium text-foreground">{officerProfile.workplace}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Badge Number:</span>
                <span className="font-medium text-foreground">{officerProfile.badgeNumber}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Experience:</span>
                <span className="font-medium text-foreground">{officerProfile.experience}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Specialization:</span>
                <span className="font-medium text-foreground">{officerProfile.specialization}</span>
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <h4 className="font-semibold text-foreground mb-3">Contact Information</h4>
              <div className="space-y-2">
                <a href={`mailto:${officerProfile.email}`} className="flex items-center gap-2 text-primary hover:underline">
                  <span className="text-sm">Email: {officerProfile.email}</span>
                </a>
                <a href={`tel:${officerProfile.phone}`} className="flex items-center gap-2 text-primary hover:underline">
                  <span className="text-sm">Phone: {officerProfile.phone}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setOfficerDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={() => window.location.href = `mailto:${officerProfile.email}`}>
              Send Email
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TrackCase;
