import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertMessageSchema, type InsertMessage, salonContact } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-messages";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useCreateMessage();

  function onSubmit(data: InsertMessage) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <Navigation />
      
      <section className="bg-secondary/30 py-20 text-center">
        <div className="container mx-auto px-4">
          <span className="font-handwriting text-primary text-3xl mb-2 block">Get In Touch</span>
          <h1 className="font-display text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Book an appointment or ask us any questions about our services.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm">Online Appointments &<br/>Local Mobile Services</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <Phone className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-2">Call Us</h3>
              <p className="text-muted-foreground">{salonContact.phone}<br/>Mon-Sat, 8am - 6pm</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <Mail className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-2">Email Us</h3>
              <p className="text-muted-foreground break-all">{salonContact.email}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-border shadow-lg">
            <div className="mb-8">
              <h2 className="font-display text-3xl font-bold mb-4">Send us a Message</h2>
              <p className="text-muted-foreground">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12 rounded-lg bg-secondary/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="h-12 rounded-lg bg-secondary/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you today?" 
                          className="min-h-[150px] rounded-lg bg-secondary/20 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full md:w-auto px-8 py-6 rounded-lg text-lg bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/25"
                >
                  {mutation.isPending ? "Sending..." : (
                    <span className="flex items-center gap-2">Send Message <Send className="w-4 h-4" /></span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
