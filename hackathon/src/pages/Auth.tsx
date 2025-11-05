import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import emblem from "@/assets/national-emblem.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Auth = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"user" | "official">("user");
  
  // Login states
  const [loginContact, setLoginContact] = useState("");
  const [loginContactType, setLoginContactType] = useState<"email" | "phone">("email");
  const [loginAuthMethod, setLoginAuthMethod] = useState<"password" | "otp">("password");
  const [loginPassword, setLoginPassword] = useState("");
  
  // Signup states - User
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  
  // Signup states - Official
  const [officialName, setOfficialName] = useState("");
  const [officialEmail, setOfficialEmail] = useState("");
  const [officialPhone, setOfficialPhone] = useState("");
  const [officialPassword, setOfficialPassword] = useState("");
  const [officialDesignation, setOfficialDesignation] = useState("");
  const [officialPost, setOfficialPost] = useState("");
  const [officialWorkplace, setOfficialWorkplace] = useState("");
  const [officialBadgeNumber, setOfficialBadgeNumber] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAuthMethod === "otp") {
      toast.success("OTP sent to your contact!");
    } else {
      toast.success("Login successful!");
      navigate(userType === "official" ? "/police-dashboard" : "/user-dashboard");
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account created successfully!");
    navigate(userType === "official" ? "/police-dashboard" : "/user-dashboard");
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
      <div className="relative z-10 min-h-screen flex flex-col">
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

        {/* Auth Form */}
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <Card className="w-full max-w-md bg-card/50 backdrop-blur-sm border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground">Welcome to Shakti</CardTitle>
              <CardDescription className="text-muted-foreground">
                Secure platform for cybercrime reporting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label>I am a</Label>
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant={userType === "user" ? "default" : "outline"}
                          className="flex-1"
                          onClick={() => setUserType("user")}
                        >
                          User
                        </Button>
                        <Button
                          type="button"
                          variant={userType === "official" ? "default" : "outline"}
                          className="flex-1"
                          onClick={() => setUserType("official")}
                        >
                          Official
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Contact Type</Label>
                      <RadioGroup value={loginContactType} onValueChange={(value: any) => setLoginContactType(value)} className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email" />
                          <Label htmlFor="email" className="cursor-pointer">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone" />
                          <Label htmlFor="phone" className="cursor-pointer">Phone</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-contact">{loginContactType === "email" ? "Email" : "Phone Number"}</Label>
                      <Input
                        id="login-contact"
                        type={loginContactType === "email" ? "email" : "tel"}
                        placeholder={loginContactType === "email" ? "your@email.com" : "+91 XXXXX XXXXX"}
                        value={loginContact}
                        onChange={(e) => setLoginContact(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Authentication Method</Label>
                      <RadioGroup value={loginAuthMethod} onValueChange={(value: any) => setLoginAuthMethod(value)} className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="password" id="password-login" />
                          <Label htmlFor="password-login" className="cursor-pointer">Password</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="otp" id="otp-login" />
                          <Label htmlFor="otp-login" className="cursor-pointer">OTP</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {loginAuthMethod === "password" && (
                      <div className="space-y-2">
                        <Label htmlFor="login-password">Password</Label>
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="••••••••"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                        />
                      </div>
                    )}

                    <Button type="submit" className="w-full">
                      {loginAuthMethod === "otp" ? "Send OTP" : "Login"}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label>I am a</Label>
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant={userType === "user" ? "default" : "outline"}
                          className="flex-1"
                          onClick={() => setUserType("user")}
                        >
                          User
                        </Button>
                        <Button
                          type="button"
                          variant={userType === "official" ? "default" : "outline"}
                          className="flex-1"
                          onClick={() => setUserType("official")}
                        >
                          Official
                        </Button>
                      </div>
                    </div>

                    {userType === "user" ? (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="signup-name">Full Name *</Label>
                          <Input
                            id="signup-name"
                            placeholder="Your name"
                            value={signupName}
                            onChange={(e) => setSignupName(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="signup-email">Email *</Label>
                          <Input
                            id="signup-email"
                            type="email"
                            placeholder="your@email.com"
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="signup-phone">Phone Number *</Label>
                          <Input
                            id="signup-phone"
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={signupPhone}
                            onChange={(e) => setSignupPhone(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="signup-password">Password *</Label>
                          <Input
                            id="signup-password"
                            type="password"
                            placeholder="••••••••"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                            required
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="official-name">Full Name *</Label>
                          <Input
                            id="official-name"
                            placeholder="Your name"
                            value={officialName}
                            onChange={(e) => setOfficialName(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="official-designation">Designation *</Label>
                          <Input
                            id="official-designation"
                            placeholder="e.g., Cyber Crime Inspector"
                            value={officialDesignation}
                            onChange={(e) => setOfficialDesignation(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="official-post">Post/Rank *</Label>
                          <Input
                            id="official-post"
                            placeholder="e.g., Inspector"
                            value={officialPost}
                            onChange={(e) => setOfficialPost(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="official-workplace">Workplace *</Label>
                          <Input
                            id="official-workplace"
                            placeholder="e.g., Delhi Cyber Crime Cell"
                            value={officialWorkplace}
                            onChange={(e) => setOfficialWorkplace(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="official-badge">Badge/ID Number *</Label>
                          <Input
                            id="official-badge"
                            placeholder="Official ID Number"
                            value={officialBadgeNumber}
                            onChange={(e) => setOfficialBadgeNumber(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="official-email">Official Email *</Label>
                          <Input
                            id="official-email"
                            type="email"
                            placeholder="official@police.gov.in"
                            value={officialEmail}
                            onChange={(e) => setOfficialEmail(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="official-phone">Phone Number *</Label>
                          <Input
                            id="official-phone"
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={officialPhone}
                            onChange={(e) => setOfficialPhone(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="official-password">Password *</Label>
                          <Input
                            id="official-password"
                            type="password"
                            placeholder="••••••••"
                            value={officialPassword}
                            onChange={(e) => setOfficialPassword(e.target.value)}
                            required
                          />
                        </div>
                      </>
                    )}

                    <Button type="submit" className="w-full">
                      Create Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Auth;