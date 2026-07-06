"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About",        href: "/about"        },
  { name: "Products",     href: "/products"     },
  { name: "Services",     href: "/services"     },
  { name: "Industries",   href: "/industries"   },
  { name: "Technologies", href: "/technologies" },
  { name: "Careers",      href: "/careers"      },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "glass-dark py-3" : "bg-transparent py-5"
    )}>
      <Container>
        <div className="flex items-center justify-between">

          {/* Logo — real PNG */}
          <Link href="/" className="flex items-center group">
            <div
              className="relative h-11 w-auto"
              style={{
                filter: "drop-shadow(0 0 10px rgba(37,99,235,0.35))",
                transition: "filter 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.filter =
                  "drop-shadow(0 0 18px rgba(37,99,235,0.65))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.filter =
                  "drop-shadow(0 0 10px rgba(37,99,235,0.35))";
              }}
            >
              <Image
                src="/nyrogen-logo.png"
                alt="Nyrogen Technologies"
                width={160}
                height={44}
                className="h-11 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.name} href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors py-1.5",
                    active ? "text-accent-blue" : "text-gray-400 hover:text-white"
                  )}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-royal-blue to-accent-blue" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact">
              <Button variant="primary" size="sm">Book Consultation</Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-accent-blue transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full inset-x-0 glass-dark border-t border-charcoal-border py-6 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}
                className="text-base font-medium text-gray-400 hover:text-accent-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="primary" className="w-full">Book Consultation</Button>
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
}
