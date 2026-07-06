import { Container } from "@/components/ui/Container";
export const metadata = { title: "Privacy Policy | Nyrogen Technologies" };
export default function PrivacyPolicyPage() {
  const sections = [
    { title: "1. Introduction", body: "Nyrogen Technologies (\"we\", \"our\", \"us\") is committed to protecting your personal data. This policy explains how we collect, use, and protect your information when you visit our website or use our services." },
    { title: "2. Data We Collect", body: "We collect Identity Data (name), Contact Data (email, phone), Technical Data (IP address, browser type), and Usage Data (how you interact with our website and services)." },
    { title: "3. How We Use Your Data", body: "We use your data to provide requested services, manage our client relationship, improve our website, send relevant communications (with consent), and comply with legal obligations." },
    { title: "4. Data Security", body: "We implement enterprise-grade security including encryption, access controls, and regular security audits to protect your personal data from unauthorized access or disclosure." },
    { title: "5. Contact Us", body: "For any privacy-related questions, please contact our Data Protection team at privacy@nyrogen.com." },
  ];
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <Container>
        <div className="max-w-3xl mx-auto">
          <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-3">Privacy Policy</h1>
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
