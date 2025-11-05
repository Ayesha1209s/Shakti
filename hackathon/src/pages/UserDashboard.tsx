import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Clock, CheckCircle, AlertCircle, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import emblem from "@/assets/national-emblem.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProfileDropdown } from "@/components/ProfileDropdown";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const userName = "Sarah";

  const cases = [
    { id: "CS001", title: "Online Harassment", status: "under_investigation", date: "2025-10-25", priority: "high" },
    { id: "CS002", title: "Identity Theft", status: "resolved", date: "2025-10-20", priority: "medium" },
    { id: "CS003", title: "Cyberstalking", status: "pending", date: "2025-10-28", priority: "high" },
  ];

  const filteredCases = cases.filter(caseItem => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return caseItem.id.toLowerCase().includes(query) || 
           caseItem.date.includes(searchQuery) ||
           caseItem.title.toLowerCase().includes(query);
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary" className="bg-muted text-muted-foreground"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case "under_investigation":
        return <Badge className="bg-primary/20 text-primary"><AlertCircle className="w-3 h-3 mr-1" />Investigating</Badge>;
      case "resolved":
        return <Badge className="bg-accent/20 text-accent"><CheckCircle className="w-3 h-3 mr-1" />Resolved</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

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
        {/* Top Navbar - Logo, Theme, Profile */}
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

        {/* Second Navbar - Main Navigation */}
        <nav className="border-b border-border/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-6">
              <Link to="/report-case">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Report New Case
                </Button>
              </Link>
              <Link to="/support">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  Support
                </Button>
              </Link>
              <Link to="/safety-resources">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  Safety Resources
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <main className="flex-1 px-4 py-8">
          <div className="container mx-auto space-y-8">
            {/* Welcome Section */}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Welcome Back, {userName}</h1>
              <p className="text-muted-foreground">Manage your cases and access support resources</p>
            </div>

            {/* Track Cases - Moved to Top */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Track Your Cases</CardTitle>
                <CardDescription className="text-muted-foreground">Monitor the progress of your reported cases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search by Case ID, date, or title..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  {filteredCases.map((caseItem) => (
                    <div
                      key={caseItem.id}
                      className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
                      onClick={() => navigate("/track-case")}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-foreground">{caseItem.title}</h3>
                            {getStatusBadge(caseItem.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">Case ID: {caseItem.id}</p>
                          <p className="text-sm text-muted-foreground">Reported: {caseItem.date}</p>
                        </div>
                        {caseItem.priority === "high" && (
                          <Badge variant="destructive" className="bg-destructive/20 text-destructive border-destructive/30">
                            High Priority
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Total Cases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">3</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    Active Cases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">1</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    Resolved Cases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-accent">1</p>
                </CardContent>
              </Card>
            </div>

          </div>
        </main>
        
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
};

export default UserDashboard;