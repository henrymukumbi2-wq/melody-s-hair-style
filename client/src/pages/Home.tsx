import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Star, Clock, UserCheck } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

// Import images
import heroImg1 from "@assets/5ff9880da2c9316b28fdf80b0bc2f2fc_1770552707016.jpg";
import heroImg2 from "@assets/6d50432598546b796ce5056d9416ddc1_1770552707017.jpg";
import serviceImg1 from "@assets/WhatsApp_Image_2026-02-08_at_11.10.06_AM_1770552707024.jpeg";
import serviceImg2 from "@assets/WhatsApp_Image_2026-02-08_at_11.10.07_AM_(1)_1770552707025.jpeg";
import serviceImg3 from "@assets/WhatsApp_Image_2026-02-08_at_11.10.07_AM_(2)_1770552707025.jpeg";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="embla absolute inset-0" ref={emblaRef}>
          <div className="flex h-full">
            {[heroImg1, heroImg2].map((img, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                <img src={img} className="block w-full h-full object-cover" alt="Hairstyle showcase" />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
          <div className="max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <span className="font-handwriting text-4xl md:text-5xl text-primary-foreground drop-shadow-lg">
              Welcome to
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-shadow">
              Melody's Online<br/>Hair Style
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 font-light">
              Experience the art of beauty with our premium styling services. 
              Transform your look, transform your confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prices">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-white border-2 border-transparent shadow-lg hover:shadow-primary/50 transition-all">
                  View Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-transparent text-white border-2 border-white hover:bg-white hover:text-foreground backdrop-blur-sm shadow-lg transition-all">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-105" />
              <img 
                src={serviceImg1} 
                alt="Stylist at work" 
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-border hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Star className="w-8 h-8 text-primary fill-current" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-display">10+</p>
                    <p className="text-muted-foreground text-sm uppercase tracking-wide">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider">
                About Our Salon
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
                Where Style Meets <span className="text-primary italic">Perfection</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Melody's, we believe that your hair is your crown. Our dedicated team of professional stylists is committed to helping you look and feel your absolute best. Whether you're looking for a fresh cut, a bold new color, or styling for a special occasion, we bring artistry and precision to every appointment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="bg-secondary p-3 rounded-lg h-fit">
                    <UserCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Expert Stylists</h4>
                    <p className="text-sm text-muted-foreground">Trained in the latest techniques and trends.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-secondary p-3 rounded-lg h-fit">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Timely Service</h4>
                    <p className="text-sm text-muted-foreground">We respect your time with efficient appointments.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/about">
                  <Button variant="link" className="text-lg text-primary p-0 h-auto hover:no-underline group">
                    Read More About Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-handwriting text-3xl text-primary block mb-2">Our Offerings</span>
            <h2 className="font-display text-4xl font-bold mb-4">Featured Services</h2>
            <p className="text-muted-foreground">
              Discover our most popular styling services tailored to bring out your natural radiance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Braiding & Styling"
              description="Intricate braiding styles and protective hairstyles that last long and look fabulous."
              price="From $80"
              image={serviceImg1}
            />
            <ServiceCard 
              title="Cut & Color"
              description="Transformative cuts and custom color treatments to refresh your signature look."
              price="From $120"
              image={serviceImg2}
            />
            <ServiceCard 
              title="Special Occasions"
              description="Bridal and event styling to make your special moments even more memorable."
              price="From $150"
              image={serviceImg3}
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/prices">
              <Button size="lg" className="rounded-full px-8">View All Services & Prices</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg1} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80 backdrop-blur-[2px]" />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready for a Transformation?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Book your appointment today and let our expert stylists work their magic.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-foreground hover:bg-white/90 text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              Book Your Appointment Now
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
