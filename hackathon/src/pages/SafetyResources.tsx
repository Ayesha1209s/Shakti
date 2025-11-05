import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ArrowLeft, Lock, Eye, Smartphone, Globe, AlertTriangle, CheckCircle, FileText, Scale, Book } from "lucide-react";
import { Link } from "react-router-dom";
import emblem from "@/assets/national-emblem.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProfileDropdown } from "@/components/ProfileDropdown";

const SafetyResources = () => {
  const safetyGuides = [
    {
      icon: Lock,
      title: "Strong Passwords",
      tips: [
        "Use at least 12 characters with uppercase, lowercase, numbers, and symbols",
        "Never reuse passwords across different accounts",
        "Use a password manager to store credentials securely",
        "Enable two-factor authentication (2FA) wherever possible"
      ]
    },
    {
      icon: Eye,
      title: "Privacy Settings",
      tips: [
        "Review and update privacy settings on all social media platforms",
        "Limit who can see your posts and personal information",
        "Be cautious about location sharing features",
        "Regularly audit app permissions on your devices"
      ]
    },
    {
      icon: Smartphone,
      title: "Device Security",
      tips: [
        "Keep your operating system and apps up to date",
        "Install reputable antivirus software",
        "Enable device encryption and screen locks",
        "Be cautious when connecting to public Wi-Fi networks"
      ]
    },
    {
      icon: Globe,
      title: "Online Behavior",
      tips: [
        "Think before you share personal information online",
        "Verify the authenticity of websites before entering data",
        "Be skeptical of unsolicited emails, messages, or friend requests",
        "Never share intimate photos or videos with anyone"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Recognizing Threats",
      tips: [
        "Watch out for phishing emails with suspicious links or attachments",
        "Be wary of too-good-to-be-true offers or investment schemes",
        "Recognize signs of online harassment or stalking early",
        "Trust your instincts if something feels wrong"
      ]
    },
    {
      icon: CheckCircle,
      title: "If You're Targeted",
      tips: [
        "Document everything - save screenshots, messages, and emails",
        "Block and report the perpetrator on all platforms",
        "Change your passwords immediately",
        "Report the incident to Shakti or local cybercrime unit"
      ]
    }
  ];

  const legalRights = [
    "Right to file FIR online for cybercrimes",
    "Right to anonymity during investigation",
    "Right to receive updates on case progress",
    "Right to legal representation",
    "Right to compensation for damages"
  ];

  const articles = [
    {
      title: "Understanding Cyberstalking Laws in India",
      description: "Section 354D IPC addresses stalking, including online stalking"
    },
    {
      title: "IT Act 2000 and Your Digital Rights",
      description: "Comprehensive guide to digital privacy and security laws"
    },
    {
      title: "Reporting Cybercrime: A Step-by-Step Guide",
      description: "Complete walkthrough of the cybercrime reporting process"
    },
    {
      title: "Prevention Tips for Online Harassment",
      description: "Practical strategies to protect yourself from digital threats"
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

        {/* Safety Resources Content */}
        <main className="flex-1 px-4 py-12">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-5xl font-bold text-foreground mb-4">Safety Resources</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cybercrime guides, legal rights, articles, and essential tips to stay safe online
              </p>
            </div>

            {/* Important Notice */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 mb-12">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  Your Safety is Our Priority
                </h3>
                <p className="text-muted-foreground mb-4">
                  These safety measures are designed to help you protect yourself online. However, if you're experiencing 
                  immediate danger or harassment, please report it immediately using our platform or contact emergency services.
                </p>
                <div className="flex gap-4">
                  <Link to="/report-case">
                    <Button>Report Now</Button>
                  </Link>
                  <Link to="/support">
                    <Button variant="outline">Get Support</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Cybercrime Guides */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Book className="w-8 h-8 text-primary" />
                Cybercrime Prevention Guides
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {safetyGuides.map((category, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <category.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-foreground">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex gap-3 text-muted-foreground">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Legal Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Scale className="w-8 h-8 text-primary" />
                Your Legal Rights
              </h2>
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    As a victim of cybercrime, you are protected under Indian law with the following rights:
                  </p>
                  <ul className="space-y-3">
                    {legalRights.map((right, index) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{right}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Articles & Resources */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                <FileText className="w-8 h-8 text-primary" />
                Articles & Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-foreground">{article.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full">Read More</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tips Summary */}
            <Card className="bg-card/50 backdrop-blur-sm border-border mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Quick Safety Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2 text-foreground">Think Before You Click</h4>
                    <p className="text-sm text-muted-foreground">
                      Verify links and attachments before opening them
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2 text-foreground">Protect Your Privacy</h4>
                    <p className="text-sm text-muted-foreground">
                      Limit sharing of personal information online
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2 text-foreground">Report Immediately</h4>
                    <p className="text-sm text-muted-foreground">
                      Don't wait - report suspicious activities right away
                    </p>
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

export default SafetyResources;