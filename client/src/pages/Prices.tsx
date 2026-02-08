import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

const services = [
  {
    category: "Styling & Cuts",
    items: [
      { name: "Wash & Blowdry", price: "$45", desc: "Includes scalp massage and premium products" },
      { name: "Women's Haircut", price: "$65", desc: "Consultation, wash, cut, and style" },
      { name: "Trim", price: "$35", desc: "Keep your ends healthy" },
      { name: "Silk Press", price: "$85", desc: "Smooth, shiny finish for natural hair" },
    ]
  },
  {
    category: "Braids & Weaves",
    items: [
      { name: "Box Braids", price: "$180+", desc: "Price varies by length and size" },
      { name: "Cornrows", price: "$80+", desc: "Clean, precise straight back or designs" },
      { name: "Sew-in Weave", price: "$150", desc: "Traditional sew-in with leave out" },
      { name: "Crochet Braids", price: "$120", desc: "Quick and protective style" },
    ]
  },
  {
    category: "Color & Treatments",
    items: [
      { name: "Root Touch Up", price: "$75", desc: "Cover greys or regrowth" },
      { name: "Full Color", price: "$110+", desc: "Single process all-over color" },
      { name: "Balayage / Ombre", price: "$180+", desc: "Hand-painted dimensional color" },
      { name: "Deep Conditioning", price: "$30", desc: "Add-on for hydration and repair" },
    ]
  }
];

export default function Prices() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <Navigation />
      
      <section className="bg-secondary/30 py-20 text-center">
        <div className="container mx-auto px-4">
          <span className="font-handwriting text-primary text-3xl mb-2 block">Transparency & Value</span>
          <h1 className="font-display text-5xl font-bold text-foreground mb-6">Service Menu</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our pricing reflects the expertise of our stylists and the premium products we use. 
            Prices may vary based on hair length, thickness, and style complexity.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-5xl">
        <div className="space-y-16">
          {services.map((section, idx) => (
            <div key={idx} className="animate-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
              <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-4">
                <span className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary text-lg font-bold">
                  {idx + 1}
                </span>
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{item.name}</h3>
                      <span className="font-display font-bold text-xl text-primary">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
          <h3 className="font-display text-3xl font-bold mb-4">Not sure what you need?</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We offer complimentary 15-minute consultations to discuss your hair goals and recommend the perfect service for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full">Book Consultation</Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="rounded-full bg-white">View Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
