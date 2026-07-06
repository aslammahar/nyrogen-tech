import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Globe2, AtSign, Rss } from "lucide-react";

const linkGroups = [
  {
    title: "Company",
    links: [
      { label: "About Us",       href: "/about"        },
      { label: "Careers",        href: "/careers"      },
      { label: "Contact",        href: "/contact"      },
      { label: "Technologies",   href: "/technologies" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Our Products",   href: "/products"     },
      { label: "Services",       href: "/services"     },
      { label: "Industries",     href: "/industries"   },
      { label: "Cloud & AI",     href: "/services"     },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy",     href: "/privacy-policy"    },
      { label: "Terms & Conditions", href: "/terms-conditions"  },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-charcoal-soft border-t border-charcoal-border py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand column with real logo */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="block w-fit">
              <Image
                src="/nyrogen-logo.png"
                alt="Nyrogen Technologies"
                width={150}
                height={42}
                className="h-10 w-auto object-contain"
                style={{ filter: "drop-shadow(0 0 8px rgba(37,99,235,0.3))" }}
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Dedicated to helping businesses grow through innovative digital solutions.
              Custom software, web &amp; mobile apps, UI/UX, cloud &amp; AI-powered automation.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Globe2, label: "Website" },
                { Icon: AtSign, label: "Email"   },
                { Icon: Rss,    label: "Blog"    },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-9 h-9 rounded-lg border border-charcoal-border flex items-center justify-center text-gray-400 hover:text-white hover:border-royal-blue hover:bg-blue-soft transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-sm tracking-wider uppercase">{group.title}</h3>
              {group.links.map((link) => (
                <Link key={link.label} href={link.href}
                  className="text-sm text-gray-400 hover:text-accent-blue transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-charcoal-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Nyrogen Technologies. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            All systems operational
          </p>
        </div>
      </Container>
    </footer>
  );
}
