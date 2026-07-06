import { Container } from "@/components/ui/Container";
export const metadata = { title: "Terms & Conditions | Nyrogen Technologies" };
export default function TermsPage() {
  const sections = [
    { title: "1. Agreement to Terms", body: "By accessing our website and using our enterprise software services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part, you may not access the service." },
    { title: "2. Intellectual Property", body: "All source code, software, website designs, graphics, and content on our platforms are owned or licensed by Nyrogen Technologies and protected by intellectual property laws worldwide." },
    { title: "3. Service Agreements", body: "All software development and consulting engagements are governed by separate Master Service Agreements (MSA) and Statements of Work (SOW) executed between Nyrogen Technologies and the client." },
    { title: "4. Limitation of Liability", body: "To the maximum extent permitted by law, Nyrogen Technologies will not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services." },
    { title: "5. Contact", body: "For legal inquiries, please contact legal@nyrogen.com." },
  ];
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <Container>
        <div className="max-w-3xl mx-auto">
          <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-3">Terms &amp; Conditions</h1>
          <p className="text-sm text-gray-400 mb-12 pb-8 border-b border-charcoal-border">Last Updated: {new Date().toLocaleDateString()}</p>
          <div className="space-y-10 text-gray-400 leading-relaxed">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-2xl font-bold text-accent-blue mb-4">{s.title}</h2>
                <p>{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
