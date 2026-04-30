import { useState } from "react";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export const CTA = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Info card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-12 text-primary-foreground shadow-glow flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Visit Harley Innovation Hub.
              </h2>
              <p className="mt-4 text-primary-foreground/90 leading-relaxed">
                Drop in, take a tour of our coworking space, or chat with us about a project.
                We're easy to find — opposite Eco Bank.
              </p>
            </div>
            <ul className="mt-10 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Opposite Eco Bank, Jos Road, Lafia, Nasarawa State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+2347041305874" className="hover:underline">+234 704 130 5874</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@harley.com.ng" className="hover:underline">info@harley.com.ng</a>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-elegant"
            noValidate
          >
            <h3 className="text-2xl font-bold tracking-tight">Send us a message</h3>
            <p className="mt-2 text-sm text-muted-foreground">We'll respond within one business day.</p>

            <div className="mt-6 space-y-4">
              <div>
                <Input
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-label="Your name"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-label="Email address"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Textarea
                  placeholder="How can we help?"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  aria-invalid={!!errors.message}
                  aria-label="Message"
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full group">
                Send message
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
