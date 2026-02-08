import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import aboutImg from "@assets/80c9d0ad6aeae4e94b00e86eb380805e_1770552707019.jpg";
import storyImg from "@assets/5506b168b69aa80b6c18dcde425532d3_1770552707021.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <Navigation />
      
      {/* Header */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">About Melody's</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the passion and artistry behind our salon. We are dedicated to making every client feel beautiful, confident, and unique.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">Our Story</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Founded with a vision to create a sanctuary of beauty, Melody's Online Hair Style began as a small passion project and has grown into a premier destination for hair styling. Melody, our founder, believed that hair styling is more than just a service—it's an art form that expresses individuality.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Over the years, we have refined our techniques, embraced modern trends, and built a team of stylists who share a commitment to excellence. Every braid, cut, and color is executed with precision and care, ensuring our clients leave feeling empowered.
            </p>
            <div className="pt-4">
              <Link href="/gallery">
                <Button variant="outline" className="group">
                  See Our Work <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            <img 
              src={storyImg} 
              alt="Melody working" 
              className="rounded-2xl shadow-xl w-full object-cover aspect-square" 
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="relative">
               <img 
                 src={aboutImg} 
                 alt="Salon interior" 
                 className="rounded-none md:rounded-r-2xl shadow-2xl w-full h-[500px] object-cover" 
               />
               <div className="absolute inset-0 bg-primary/20 mix-blend-overlay rounded-none md:rounded-r-2xl" />
             </div>
             <div className="space-y-8 pr-4 md:pr-0">
               <h2 className="font-display text-3xl md:text-4xl font-bold">Our Philosophy</h2>
               <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/50 text-primary font-bold text-xl">1</div>
                   <div>
                     <h3 className="text-xl font-bold mb-2">Client-Centered Care</h3>
                     <p className="text-white/70">We listen to your needs and customize every service to suit your lifestyle and preferences.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/50 text-primary font-bold text-xl">2</div>
                   <div>
                     <h3 className="text-xl font-bold mb-2">Quality Over Quantity</h3>
                     <p className="text-white/70">We use only premium products and take the time needed to ensure perfection in every detail.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/50 text-primary font-bold text-xl">3</div>
                   <div>
                     <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
                     <p className="text-white/70">Our team constantly trains in new techniques to bring you the latest and greatest in hair fashion.</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
