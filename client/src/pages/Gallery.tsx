import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

// Import all images for gallery
import img1 from "@assets/5ff9880da2c9316b28fdf80b0bc2f2fc_1770552707016.jpg";
import img2 from "@assets/6d50432598546b796ce5056d9416ddc1_1770552707017.jpg";
import img3 from "@assets/62fd3c30d6385820a8cf8ce0e3499fbe_1770552707018.jpg";
import img4 from "@assets/80c9d0ad6aeae4e94b00e86eb380805e_1770552707019.jpg";
import img5 from "@assets/985cc3f8cbe43e60f0c7f5ea915f6588_1770552707021.jpg";
import img6 from "@assets/5506b168b69aa80b6c18dcde425532d3_1770552707021.jpg";
import img7 from "@assets/22510d0fe22b4a75d4e384c9c6e9078a_1770552707022.jpg";
import img8 from "@assets/723657ab1a4b0b5f2c995403c3fc3b47_1770552707022.jpg";
import img9 from "@assets/d28b8f4a61e09bacc215a63012c8f11c_1770552707023.jpg";
import img10 from "@assets/d72aa995e84cc7794329e9b14fdc5ff2_1770552707023.jpg";
import img11 from "@assets/ff59a35d3a66209f0f9759864fbc9a9d_1770552707024.jpg";
import img12 from "@assets/WhatsApp_Image_2026-02-08_at_11.10.06_AM_1770552707024.jpeg";
import img13 from "@assets/WhatsApp_Image_2026-02-08_at_11.10.07_AM_(1)_1770552707025.jpeg";
import img14 from "@assets/WhatsApp_Image_2026-02-08_at_11.10.07_AM_(2)_1770552707025.jpeg";
import img15 from "@assets/WhatsApp_Image_2026-02-08_at_11.10.07_AM_1770552707026.jpeg";

const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, 
  img9, img10, img11, img12, img13, img14, img15
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <Navigation />
      
      <section className="bg-secondary/30 py-20 text-center">
        <div className="container mx-auto px-4">
          <span className="font-handwriting text-primary text-3xl mb-2 block">Our Portfolio</span>
          <h1 className="font-display text-5xl font-bold text-foreground mb-6">Style Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our collection of stunning transformations and hairstyles. 
            Find inspiration for your next appointment.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="break-inside-avoid">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                    <img 
                      src={src} 
                      alt={`Gallery item ${index + 1}`} 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0 flex items-center justify-center h-[90vh]">
                  <img 
                    src={src} 
                    alt={`Enlarged view ${index + 1}`}
                    className="max-w-full max-h-full rounded-md shadow-2xl object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
