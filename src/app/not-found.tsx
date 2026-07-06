import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(37,99,235,0.12),transparent)]" />
      <Container className="relative z-10 text-center">
        <p className="text-accent-blue font-bold text-sm uppercase tracking-widest mb-4">Error 404</p>
        <h1 className="text-[140px] leading-none font-bold text-blue-gradient opacity-20 select-none">404</h1>
        <h2 className="text-4xl font-bold text-white -mt-6 mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto">
          The page you are looking for might have been removed, renamed, or is temporarily unavailable.
        </p>
        <Link href="/"><Button size="lg">Return Home</Button></Link>
      </Container>
    </div>
  );
}
