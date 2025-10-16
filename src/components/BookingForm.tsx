import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { WhatsAppButton } from "./WhatsAppButton";

export function BookingForm() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    event_date: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) newErrors.name = t.form.error.required;
    if (!formState.email.trim()) {
      newErrors.email = t.form.error.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = t.form.error.email;
    }
    if (!formState.phone.trim()) newErrors.phone = t.form.error.required;
    if (!formState.event_date) {
      newErrors.event_date = t.form.error.required;
    } else if (new Date(formState.event_date) < new Date()) {
      newErrors.event_date = t.form.error.date_past;
    }
    if (!formState.message.trim()) {
      newErrors.message = t.form.error.required;
    } else if (formState.message.trim().length < 20) {
      newErrors.message = t.form.error.message_short;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: t.form.state.error,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('access_key', '6ad29dbd-172a-4353-8d02-f1396d69dfe7');
      formDataToSubmit.append('subject', `New booking request from ${formState.name}`);
      formDataToSubmit.append('from_name', 'Crazy Jack Website');
      formDataToSubmit.append('email', formState.email);
      formDataToSubmit.append('name', formState.name);
      formDataToSubmit.append('phone', formState.phone);
      formDataToSubmit.append('event_date', formState.event_date);
      formDataToSubmit.append('message', formState.message);
      formDataToSubmit.append('botcheck', '');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSubmit
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setIsSuccess(true);
        toast({
          title: t.form.state.success,
        });
        
        // Trigger confetti on successful submission
        confetti({
          particleCount: 200,
          spread: 120,
          origin: { x: 0, y: 1 }, // Bottom left corner
          angle: 45,
          startVelocity: 55,
          gravity: 0.8,
          colors: ['#ff2d7a', '#9b87f5', '#ffffff', '#1a1f2e'],
        });
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormState({
            name: "",
            email: "",
            phone: "",
            event_date: "",
            message: "",
          });
          setIsSuccess(false);
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      toast({
        title: t.form.state.error,
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="booking" ref={ref} className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{t.form.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t.form.subtitle}</p>
            
            <WhatsAppButton variant="gradient" />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 border border-border space-y-6"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t.form.label.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder={t.form.placeholder.name}
                className={`w-full px-4 py-3 bg-input rounded-lg border ${
                  errors.name ? "border-destructive" : "border-border"
                } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
              />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t.form.label.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder={t.form.placeholder.email}
                className={`w-full px-4 py-3 bg-input rounded-lg border ${
                  errors.email ? "border-destructive" : "border-border"
                } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                {t.form.label.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder={t.form.placeholder.phone}
                className={`w-full px-4 py-3 bg-input rounded-lg border ${
                  errors.phone ? "border-destructive" : "border-border"
                } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
              />
              {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
            </div>

            {/* Event Date */}
            <div>
              <label htmlFor="event_date" className="block text-sm font-medium mb-2">
                {t.form.label.event_date}
              </label>
              <input
                type="date"
                id="event_date"
                name="event_date"
                value={formState.event_date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className={`w-full px-4 py-3 bg-input rounded-lg border ${
                  errors.event_date ? "border-destructive" : "border-border"
                } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
              />
              {errors.event_date && <p className="text-sm text-destructive mt-1">{errors.event_date}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t.form.label.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder={t.form.placeholder.message}
                rows={5}
                className={`w-full px-4 py-3 bg-input rounded-lg border ${
                  errors.message ? "border-destructive" : "border-border"
                } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none`}
              />
              {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting || isSuccess}
              whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                isSuccess
                  ? "bg-green-600 text-white"
                  : "bg-primary text-primary-foreground neon-pink hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)]"
              }`}
            >
              {isSuccess ? (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  {t.form.state.success}
                </span>
              ) : isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-6 h-6 animate-spin" />
                  {t.form.cta.sending}
                </span>
              ) : (
                t.form.cta.submit
              )}
            </motion.button>

            {/* Privacy Note */}
            <p className="text-sm text-muted-foreground text-center">
              {t.form.privacy.note}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
