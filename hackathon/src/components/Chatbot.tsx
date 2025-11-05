import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const premadeQuestions = [
  {
    question: "How do I report a case?",
    answer: "Click on the 'Report Case' or 'Get Started' button, fill out the incident form with all relevant details, and submit. You can include evidence and choose to remain anonymous."
  },
  {
    question: "Is my information secure?",
    answer: "Yes, absolutely. We use industry-standard encryption to protect your data. You also have the option to report anonymously if you prefer."
  },
  {
    question: "How can I track my case?",
    answer: "After submitting a report, log into your dashboard where you can view all your cases and their current status in real-time."
  },
  {
    question: "What happens after I report?",
    answer: "Your case is reviewed within 24 hours. Based on severity, it's assigned to the appropriate authorities. You'll receive updates throughout the investigation process."
  },
  {
    question: "Can I get support?",
    answer: "Yes! We offer 24/7 support through our Support page. You can also access safety resources and connect with counseling services."
  }
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ type: 'bot' | 'user'; text: string }>>([
    { type: 'bot', text: 'Hello! How can I help you today? Choose a question below or ask me anything.' }
  ]);

  const handleQuestionClick = (qa: { question: string; answer: string }) => {
    setMessages(prev => [
      ...prev,
      { type: 'user', text: qa.question },
      { type: 'bot', text: qa.answer }
    ]);
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 z-50"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-semibold">Shakti Support</h3>
            <p className="text-xs opacity-90">We're here to help</p>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
            <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
            <div className="space-y-2">
              {premadeQuestions.slice(0, 3).map((qa, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-left h-auto py-2 px-3"
                  onClick={() => handleQuestionClick(qa)}
                >
                  <span className="text-xs line-clamp-1">{qa.question}</span>
                </Button>
              ))}
            </div>
          </div>
        </Card>
      )}
    </>
  );
};
