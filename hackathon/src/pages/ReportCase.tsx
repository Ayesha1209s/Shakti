import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Upload, AlertTriangle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import emblem from "@/assets/national-emblem.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProfileDropdown } from "@/components/ProfileDropdown";
import { Switch } from "@/components/ui/switch";
import { FeedbackModal } from "@/components/FeedbackModal";
import { Badge } from "@/components/ui/badge";

const ReportCase = () => {
  const navigate = useNavigate();
  const [incidentType, setIncidentType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  const analyzePriority = (text: string): "low" | "medium" | "high" => {
    const highPriorityKeywords = [
      'nudes leak', 'nude', 'naked', 'money taken', 'blackmail', 'extortion',
      'threat', 'suicide', 'rape', 'sexual assault', 'kidnap', 'murder',
      'life threatening', 'immediate danger', 'stalking', 'revenge porn',
      'child', 'minor', 'underage', 'bank fraud', 'identity theft'
    ];
    
    const lowerText = text.toLowerCase();
    const hasHighPriorityKeyword = highPriorityKeywords.some(keyword => 
      lowerText.includes(keyword)
    );
    
    return hasHighPriorityKeyword ? 'high' : 'medium';
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    const detectedPriority = analyzePriority(newDescription + ' ' + title);
    setPriority(detectedPriority);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    const detectedPriority = analyzePriority(newTitle + ' ' + description);
    setPriority(detectedPriority);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Case reported successfully${isAnonymous ? ' anonymously' : ''}! Priority: ${priority.toUpperCase()}`);
    setFeedbackOpen(true);
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

        {/* Report Form */}
        <main className="flex-1 px-4 py-8">
          <div className="container mx-auto max-w-3xl">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-foreground">Report a Case</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Provide detailed information about the cybercrime incident. All information is encrypted and secure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Anonymous Toggle */}
                  <div className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-lg">
                    <div className="space-y-0.5">
                      <Label htmlFor="anonymous-mode" className="text-base font-semibold">
                        Report Anonymously
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Your personal details won't be shown on the report
                      </p>
                    </div>
                    <Switch
                      id="anonymous-mode"
                      checked={isAnonymous}
                      onCheckedChange={setIsAnonymous}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="incident-type">Incident Type *</Label>
                    <Select value={incidentType} onValueChange={setIncidentType} required>
                      <SelectTrigger id="incident-type">
                        <SelectValue placeholder="Select incident type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="harassment">Online Harassment</SelectItem>
                        <SelectItem value="stalking">Cyberstalking</SelectItem>
                        <SelectItem value="identity_theft">Identity Theft</SelectItem>
                        <SelectItem value="phishing">Phishing Attack</SelectItem>
                        <SelectItem value="blackmail">Blackmail/Extortion</SelectItem>
                        <SelectItem value="data_breach">Data Breach</SelectItem>
                        <SelectItem value="revenge_porn">Non-consensual Image Sharing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Case Title *</Label>
                    <Input
                      id="title"
                      placeholder="Brief description of the incident"
                      value={title}
                      onChange={handleTitleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide as much detail as possible about the incident, including what happened, who was involved, and any relevant context..."
                      value={description}
                      onChange={handleDescriptionChange}
                      className="min-h-[200px]"
                      required
                    />
                  </div>

                  {/* Priority Indicator */}
                  {(title || description) && (
                    <div className={`p-4 rounded-lg border ${
                      priority === 'high' 
                        ? 'bg-destructive/10 border-destructive/50' 
                        : 'bg-primary/10 border-primary/50'
                    }`}>
                      <div className="flex items-center gap-2">
                        {priority === 'high' && <AlertTriangle className="w-5 h-5 text-destructive" />}
                        <Label className="font-semibold">
                          Detected Priority Level:
                        </Label>
                        <Badge variant={priority === 'high' ? 'destructive' : 'default'}>
                          {priority.toUpperCase()}
                        </Badge>
                      </div>
                      {priority === 'high' && (
                        <p className="text-sm mt-2 text-muted-foreground">
                          This case has been flagged as high priority and will be escalated for immediate attention.
                        </p>
                      )}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date-time">Date & Time of Incident *</Label>
                      <Input
                        id="date-time"
                        type="datetime-local"
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location (if applicable)</Label>
                      <Input
                        id="location"
                        placeholder="City, State"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="evidence">Evidence/Screenshots</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground">Images, PDFs, or documents (Max 10MB)</p>
                      <Input id="evidence" type="file" className="hidden" multiple />
                    </div>
                  </div>

                  {!isAnonymous && (
                    <div className="space-y-2">
                      <Label htmlFor="contact">Contact Number (Optional)</Label>
                      <Input
                        id="contact"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                      />
                      <p className="text-xs text-muted-foreground">
                        Only shared with assigned investigating officer
                      </p>
                    </div>
                  )}

                  <div className="bg-muted/30 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Privacy Notice</h4>
                    <p className="text-sm text-muted-foreground">
                      {isAnonymous 
                        ? "Your report will be filed anonymously. Only case details will be visible to investigating officers."
                        : "Your report will be encrypted and only accessible to authorized law enforcement personnel. You will receive a case ID to track the progress of your report."
                      }
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1">
                      Submit Report
                    </Button>
                    <Button type="button" variant="outline" onClick={() => navigate("/user-dashboard")}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      
      <FeedbackModal 
        open={feedbackOpen} 
        onOpenChange={(open) => {
          setFeedbackOpen(open);
          if (!open) {
            navigate("/user-dashboard");
          }
        }} 
      />
    </div>
  );
};

export default ReportCase;