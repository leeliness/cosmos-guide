import { Mail, MapPin, Send, Globe } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
      e.target.reset();
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Send a <span className="text-primary">Signal</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Questions about the universe? Want to collaborate or just talk about
          space? We're listening from somewhere in the Milky Way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8 text-left">
            <h3 className="text-xl font-semibold">Get in Touch</h3>

            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-0.5">Email</h4>
                  <a
                    href="mailto:hello@cosmos.guide"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    hello@cosmos.guide
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-0.5">Location</h4>
                  <span className="text-muted-foreground text-sm">
                    Orion Arm, Milky Way Galaxy
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium text-sm mb-4">Follow the Stars</h4>
              <div className="flex space-x-3">
                <a href="#" target="_blank" className="p-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  <Globe size={18} />
                </a>
                <a href="#" target="_blank" className="p-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 space-y-5 text-left"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-semibold">Send a Message</h3>

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                placeholder="Neil Armstrong"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                placeholder="astronaut@space.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-sm"
                placeholder="I have a question about black holes..."
              />
            </div>

            {sent && (
              <div className="px-4 py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary text-sm text-center">
                ✦ Message sent! We'll get back to you soon.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="cosmic-button w-full flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};