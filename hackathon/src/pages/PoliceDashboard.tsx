import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, AlertCircle, CheckCircle, Clock, Search, Filter } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emblem from "@/assets/national-emblem.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { OfficialProfileDropdown } from "@/components/OfficialProfileDropdown";
import { toast } from "sonner";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

const PoliceDashboard = () => {
  const navigate = useNavigate();
  const userName = "Official Kumar";
  const [caseStatuses, setCaseStatuses] = useState<Record<string, string>>({
    CS001: "under_investigation",
    CS002: "resolved",
    CS003: "pending",
    CS004: "under_investigation",
    CS005: "pending",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterSeverity, setFilterSeverity] = useState("all");
  const [filterDate, setFilterDate] = useState("");

  const allCases = [
    { id: "CS001", title: "Online Harassment", status: caseStatuses.CS001, date: "2025-10-25", assignee: "Official Kumar", priority: "high", type: "harassment" },
    { id: "CS002", title: "Identity Theft", status: caseStatuses.CS002, date: "2025-10-20", assignee: "Official Singh", priority: "medium", type: "identity_theft" },
    { id: "CS003", title: "Cyberstalking", status: caseStatuses.CS003, date: "2025-10-28", assignee: "Unassigned", priority: "high", type: "stalking" },
    { id: "CS004", title: "Phishing Attack", status: caseStatuses.CS004, date: "2025-10-26", assignee: "Official Kumar", priority: "medium", type: "phishing" },
    { id: "CS005", title: "Data Breach", status: caseStatuses.CS005, date: "2025-10-29", assignee: "Unassigned", priority: "high", type: "data_breach" },
  ];

  const filteredCases = allCases.filter(caseItem => {
    const matchesSearch = !searchQuery || 
      caseItem.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.date.includes(searchQuery);
    
    const matchesType = filterType === "all" || caseItem.type === filterType;
    const matchesSeverity = filterSeverity === "all" || caseItem.priority === filterSeverity;
    const matchesDate = !filterDate || caseItem.date === filterDate;
    
    return matchesSearch && matchesType && matchesSeverity && matchesDate;
  });

  const handleStatusChange = (caseId: string, newStatus: string) => {
    setCaseStatuses(prev => ({
      ...prev,
      [caseId]: newStatus
    }));
    toast.success(`Case ${caseId} status updated to ${newStatus.replace('_', ' ')}`);
  };

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

  const pendingCases = filteredCases.filter(c => c.status === "pending");
  const activeCases = filteredCases.filter(c => c.status === "under_investigation");
  const resolvedCases = filteredCases.filter(c => c.status === "resolved");

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
              <span className="text-2xl font-bold text-primary">Shakti - Official Portal</span>
            </Link>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <OfficialProfileDropdown userName="Official Kumar" userEmail="kumar@cyberpolice.gov.in" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 px-4 py-8">
          <div className="container mx-auto space-y-8">
            {/* Welcome Section */}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Welcome Back, {userName}</h1>
              <p className="text-muted-foreground">Manage and investigate cybercrime cases</p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Total Cases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">{allCases.length}</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    Pending
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-muted-foreground">{pendingCases.length}</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    Active
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">{activeCases.length}</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    Resolved
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-accent">{resolvedCases.length}</p>
                </CardContent>
              </Card>
            </div>

            {/* Cases Management */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Case Management</CardTitle>
                <CardDescription className="text-muted-foreground">View and manage reported cases</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Filter Section */}
                <div className="mb-6 p-4 bg-muted/30 rounded-lg space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Filter className="w-4 h-4" />
                    <Label className="font-semibold">Filter Cases</Label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="search">Search</Label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="search"
                          placeholder="Case ID or Title..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="filter-type">Type</Label>
                      <Select value={filterType} onValueChange={setFilterType}>
                        <SelectTrigger id="filter-type">
                          <SelectValue placeholder="All Types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="harassment">Harassment</SelectItem>
                          <SelectItem value="stalking">Stalking</SelectItem>
                          <SelectItem value="identity_theft">Identity Theft</SelectItem>
                          <SelectItem value="phishing">Phishing</SelectItem>
                          <SelectItem value="data_breach">Data Breach</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="filter-severity">Severity</Label>
                      <Select value={filterSeverity} onValueChange={setFilterSeverity}>
                        <SelectTrigger id="filter-severity">
                          <SelectValue placeholder="All Severities" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Severities</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="filter-date">Date</Label>
                      <Input
                        id="filter-date"
                        type="date"
                        value={filterDate}
                        onChange={(e) => setFilterDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <Tabs defaultValue="all">
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">All Cases ({filteredCases.length})</TabsTrigger>
                    <TabsTrigger value="pending">Pending ({pendingCases.length})</TabsTrigger>
                    <TabsTrigger value="active">Active ({activeCases.length})</TabsTrigger>
                    <TabsTrigger value="resolved">Resolved ({resolvedCases.length})</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-4">
                    {filteredCases.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">No cases found matching your filters.</p>
                    ) : (
                      filteredCases.map((caseItem) => (
                      <div
                        key={caseItem.id}
                        className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-foreground">{caseItem.title}</h3>
                              {getStatusBadge(caseItem.status)}
                              {caseItem.priority === "high" && (
                                <Badge variant="destructive" className="bg-destructive/20 text-destructive border-destructive/30">
                                  High Priority
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">Case ID: {caseItem.id}</p>
                            <p className="text-sm text-muted-foreground">Reported: {caseItem.date}</p>
                            <p className="text-sm text-muted-foreground">Assignee: {caseItem.assignee}</p>
                          </div>
                          <div className="flex gap-2">
                            <Select value={caseItem.status} onValueChange={(value) => handleStatusChange(caseItem.id, value)}>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="under_investigation">Under Investigation</SelectItem>
                                <SelectItem value="resolved">Resolved</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => navigate(`/case-report?id=${caseItem.id}`)}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                      ))
                    )}
                  </TabsContent>

                  <TabsContent value="pending" className="space-y-4">
                    {pendingCases.map((caseItem) => (
                      <div
                        key={caseItem.id}
                        className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-foreground">{caseItem.title}</h3>
                              {getStatusBadge(caseItem.status)}
                            </div>
                            <p className="text-sm text-muted-foreground">Case ID: {caseItem.id}</p>
                            <p className="text-sm text-muted-foreground">Reported: {caseItem.date}</p>
                          </div>
                          <div className="flex gap-2">
                            <Select value={caseItem.status} onValueChange={(value) => handleStatusChange(caseItem.id, value)}>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="under_investigation">Under Investigation</SelectItem>
                                <SelectItem value="resolved">Resolved</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button size="sm">Assign Case</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="active" className="space-y-4">
                    {activeCases.map((caseItem) => (
                      <div
                        key={caseItem.id}
                        className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-foreground">{caseItem.title}</h3>
                              {getStatusBadge(caseItem.status)}
                            </div>
                            <p className="text-sm text-muted-foreground">Case ID: {caseItem.id}</p>
                            <p className="text-sm text-muted-foreground">Assignee: {caseItem.assignee}</p>
                          </div>
                          <div className="flex gap-2">
                            <Select value={caseItem.status} onValueChange={(value) => handleStatusChange(caseItem.id, value)}>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="under_investigation">Under Investigation</SelectItem>
                                <SelectItem value="resolved">Resolved</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => navigate(`/case-report?id=${caseItem.id}`)}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="resolved" className="space-y-4">
                    {resolvedCases.map((caseItem) => (
                      <div
                        key={caseItem.id}
                        className="p-4 border border-border rounded-lg"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-foreground">{caseItem.title}</h3>
                              {getStatusBadge(caseItem.status)}
                            </div>
                            <p className="text-sm text-muted-foreground">Case ID: {caseItem.id}</p>
                            <p className="text-sm text-muted-foreground">Resolved by: {caseItem.assignee}</p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => navigate(`/case-report?id=${caseItem.id}`)}
                          >
                            View Report
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
};

export default PoliceDashboard;