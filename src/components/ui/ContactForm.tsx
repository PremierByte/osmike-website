"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all shadow-sm focus:shadow-[0_0_15px_rgba(220,53,69,0.15)] focus:bg-white";

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_40px_rgb(0,0,0,0.08)] border border-slate-100">
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
            ✓
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">Message Sent</h3>
          <p className="text-slate-600">Thank you for reaching out. Our team will contact you shortly.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-8 text-secondary font-medium hover:underline"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="service" className="text-sm font-semibold text-slate-700">Service of Interest</label>
            <select 
              id="service" 
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer`}
            >
              <option value="" disabled>Select a service</option>
              <option value="residential">Residential Property Management</option>
              <option value="commercial">Commercial Brokerage & Leasing</option>
              <option value="investment">Real Estate Investment Advisory</option>
              <option value="valuation">Luxury Property Valuation</option>
              <option value="relocation">Relocation & Concierge</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-slate-700">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`${inputClasses} resize-none`}
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors shadow-[0_4px_20px_rgba(220,53,69,0.3)] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      )}
    </div>
  );
}
