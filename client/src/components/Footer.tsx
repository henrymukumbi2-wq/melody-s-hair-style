import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Scissors } from "lucide-react";
import { salonContact } from "@shared/schema";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scissors className="h-6 w-6 text-primary" />
              <span className="font-display text-2xl font-bold">Melody's Style</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Enhancing your natural beauty with premium styling services. Where elegance meets expertise.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact', 'Book'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl mb-6 text-primary">Services</h3>
            <ul className="space-y-3 text-white/70">
              <li>Braiding</li>
              <li>Hair Coloring</li>
              <li>Precision Cuts</li>
              <li>Wig Installation</li>
              <li>Treatments</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl mb-6 text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 mt-1 shrink-0 text-primary" />
                <span>Available Online &<br />By Appointment</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>{salonContact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span className="break-all">{salonContact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Melody's Online Hair Style. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
