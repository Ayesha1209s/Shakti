import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I report a cybercrime incident?",
    answer: "Click on 'Get Started' or 'Report Case' button. Fill out the incident form with details about what happened, when it occurred, and any evidence you have. You can also choose to report anonymously."
  },
  {
    question: "Is my report anonymous?",
    answer: "Yes, you have the option to report anonymously. When filling out the incident report, toggle the 'Report Anonymously' switch. Your identity will be protected while we investigate your case."
  },
  {
    question: "How long does it take to process a report?",
    answer: "Initial acknowledgment is usually within 24 hours. Investigation timelines vary based on case complexity and severity. High-priority cases are expedited and you'll receive regular updates on your case status."
  },
  {
    question: "What kind of evidence should I provide?",
    answer: "Include screenshots, URLs, email headers, transaction records, chat logs, or any digital evidence related to the incident. The more information you provide, the better we can assist you."
  },
  {
    question: "Can I track my case status?",
    answer: "Yes! After reporting, you can log into your dashboard to track your case status in real-time. You'll see updates as your case moves through investigation stages."
  }
];

export const Footer = () => {
  return (
    <footer className="w-full bg-[hsl(var(--footer))] text-[hsl(var(--footer-foreground))] py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-[hsl(var(--footer-foreground)/0.2)]">
                <AccordionTrigger className="text-left hover:text-[hsl(var(--accent))]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--footer-foreground)/0.8)]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="border-t border-[hsl(var(--footer-foreground)/0.2)] pt-8 text-center">
          <p className="text-sm text-[hsl(var(--footer-foreground)/0.7)]">
            © 2024 Shakti. All rights reserved. Empowering women in the digital age.
          </p>
        </div>
      </div>
    </footer>
  );
};
