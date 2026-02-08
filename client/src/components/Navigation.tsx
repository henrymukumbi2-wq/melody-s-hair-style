import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/prices", label: "Services & Prices" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book Appointment" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4 lg:py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
              <Scissors className="h-6 w-6 text-primary" />
            </div>
            <span className={cn(
              "font-display text-2xl font-bold tracking-tight",
              scrolled ? "text-foreground" : "text-white text-shadow lg:text-foreground"
            )}>
              Melody's Style
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.filter(l => l.href !== "/book").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary relative group py-2",
                  location === link.href 
                    ? "text-primary font-bold" 
                    : scrolled ? "text-foreground/80" : "text-white lg:text-foreground/80 font-semibold"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform group-hover:scale-x-100",
                  location === link.href && "scale-x-100"
                )} />
              </Link>
            ))}
            <Link href="/book">
              <Button 
                variant={scrolled ? "default" : "secondary"}
                className="font-semibold"
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t absolute w-full left-0 top-full shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-md text-base font-medium transition-colors hover:bg-muted",
                  location === link.href && "bg-primary/10 text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
