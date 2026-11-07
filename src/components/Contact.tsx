// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Send, Check, Loader2 } from 'lucide-react';
// import { Reveal, SectionHeader } from '../lib/animation';

// interface FormData {
//   name: string;
//   whatsapp: string;
//   message: string;
// }

// interface Errors {
//   name?: string;
//   whatsapp?: string;
//   message?: string;
// }

// type Status = 'idle' | 'loading' | 'success';

// export default function Contact() {
//   const [form, setForm] = useState<FormData>({ name: '', whatsapp: '', message: '' });
//   const [errors, setErrors] = useState<Errors>({});
//   const [status, setStatus] = useState<Status>('idle');

//   const validate = (): boolean => {
//     const e: Errors = {};
//     if (!form.name.trim()) e.name = 'Name is required';
//     if (!form.whatsapp.trim()) e.whatsapp = 'WhatsApp number is required';
//     else if (!/^[0-9+\-\s()]{7,}$/.test(form.whatsapp.trim())) e.whatsapp = 'Enter a valid WhatsApp number';
//     if (!form.message.trim()) e.message = 'Message is required';
//     else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleChange = (field: keyof FormData, value: string) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//     if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;
//     setStatus('loading');
//     try {
//       const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
//         },
//         body: JSON.stringify({
//           name: form.name.trim(),
//           whatsapp: form.whatsapp.trim(),
//           message: form.message.trim(),
//         }),
//       });
//       if (!response.ok) throw new Error('Request failed');
//       setStatus('success');
//       setForm({ name: '', whatsapp: '', message: '' });
//       window.setTimeout(() => setStatus('idle'), 4000);
//     } catch {
//       setStatus('idle');
//       setErrors({ message: 'Something went wrong. Please try again.' });
//     }
//   };

//   const inputClass = (field: keyof FormData) =>
//     `w-full px-4 py-3.5 rounded-xl bg-ink-950/60 border text-sm text-ink-100 placeholder-ink-600 transition-all focus:outline-none focus:ring-2 focus:ring-lime-400/20 ${
//       errors[field] ? 'border-red-500/40 focus:border-red-500/60' : 'border-ink-800 focus:border-lime-400/40'
//     }`;

//   return (
//     <section id="contact" className="relative py-24 lg:py-32 bg-ink-900/30 border-t border-ink-800">
//       <div className="absolute inset-0 dot-bg opacity-30" />
//       <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//           {/* Left: CTA */}
//           <div>
//             <Reveal>
//               <SectionHeader
//                 eyebrow="Contact"
//                 title="Have a project in mind?"
//                 subtitle="Share a few details and I'll get back to you on WhatsApp."
//               />
//             </Reveal>

//           </div>

//           {/* Right: Contact form */}
//           <Reveal delay={0.15}>
//             <form
//               onSubmit={handleSubmit}
//               className="relative p-5 sm:p-7 lg:p-9 rounded-3xl bg-ink-900/80 backdrop-blur-xl border border-ink-800 shadow-2xl shadow-black/30"
//             >
//               <div className="space-y-5">
//                 <div>
//                   <label className="block text-xs font-semibold text-ink-300 mb-2 uppercase tracking-[0.15em]">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     value={form.name}
//                     onChange={(e) => handleChange('name', e.target.value)}
//                     className={inputClass('name')}
//                     placeholder="Your full name"
//                   />
//                   {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-xs font-semibold text-ink-300 mb-2 uppercase tracking-[0.15em]">
//                     WhatsApp
//                   </label>
//                   <input
//                     type="tel"
//                     value={form.whatsapp}
//                     onChange={(e) => handleChange('whatsapp', e.target.value)}
//                     className={inputClass('whatsapp')}
//                     placeholder="Your WhatsApp number"
//                   />
//                   {errors.whatsapp && <p className="text-xs text-red-400 mt-1.5">{errors.whatsapp}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-xs font-semibold text-ink-300 mb-2 uppercase tracking-[0.15em]">
//                     Message
//                   </label>
//                   <textarea
//                     value={form.message}
//                     onChange={(e) => handleChange('message', e.target.value)}
//                     rows={5}
//                     className={`${inputClass('message')} resize-none`}
//                     placeholder="Tell me about your project..."
//                   />
//                   {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
//                 </div>

//                 <motion.button
//                   type="submit"
//                   disabled={status !== 'idle'}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-lime-400 text-ink-950 text-sm font-semibold shadow-lg shadow-lime-400/20 hover:bg-lime-300 disabled:opacity-60 transition-colors"
//                 >
//                   <AnimatePresence mode="wait">
//                     {status === 'idle' && (
//                       <motion.span
//                         key="idle"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="flex items-center gap-2"
//                       >
//                         Send Message
//                         <Send className="w-4 h-4" />
//                       </motion.span>
//                     )}
//                     {status === 'loading' && (
//                       <motion.span
//                         key="loading"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="flex items-center gap-2"
//                       >
//                         Sending...
//                         <Loader2 className="w-4 h-4 animate-spin" />
//                       </motion.span>
//                     )}
//                     {status === 'success' && (
//                       <motion.span
//                         key="success"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="flex items-center gap-2"
//                       >
//                         Message Sent!
//                         <Check className="w-4 h-4" />
//                       </motion.span>
//                     )}
//                   </AnimatePresence>
//                 </motion.button>
//               </div>
//             </form>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, Loader2, Mail, MessageCircle } from 'lucide-react';
import { Reveal, SectionHeader } from '../lib/animation';

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  whatsapp?: string;
  message?: string;
}

type Status = 'idle' | 'loading' | 'success';

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  // Validate form fields
  const validate = (): boolean => {
    const e: Errors = {};

    if (!form.name.trim()) {
      e.name = 'Name is required';
    }

    if (!form.email.trim()) {
      e.email = 'Email address is required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      e.email = 'Enter a valid email address';
    }

    if (!form.whatsapp.trim()) {
      e.whatsapp = 'WhatsApp number is required';
    } else if (
      !/^[0-9+\-\s()]{7,20}$/.test(form.whatsapp.trim())
    ) {
      e.whatsapp = 'Enter a valid WhatsApp number';
    }

    if (!form.message.trim()) {
      e.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message must be at least 10 characters';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Handle input changes
  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  // Send email using EmailJS
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('loading');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          whatsapp: form.whatsapp.trim(),
          message: form.message.trim(),
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus('success');

      setForm({
        name: '',
        email: '',
        whatsapp: '',
        message: '',
      });

      setErrors({});

      window.setTimeout(() => {
        setStatus('idle');
      }, 4000);

    } catch (error) {
      console.error('EmailJS Error:', error);

      setStatus('idle');

      setErrors({
        message: 'Unable to send your message. Please try again.',
      });
    }
  };

  // Input styling
  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3.5 rounded-xl bg-ink-950/60 border text-sm text-ink-100 placeholder-ink-600 transition-all focus:outline-none focus:ring-2 focus:ring-lime-400/20 ${errors[field]
      ? 'border-red-500/40 focus:border-red-500/60'
      : 'border-ink-800 focus:border-lime-400/40'
    }`;

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-ink-900/30 border-t border-ink-800"
    >
      <div className="absolute inset-0 dot-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: CTA */}
          <div>
            <Reveal>
              <SectionHeader
                eyebrow="LET'S CONNECT"
                title="Let's Discuss Your Next Opportunity"
                subtitle="Looking for a Full Stack Developer? I'd love to hear about your team, project, or job opportunity."
              />
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-3 text-sm text-ink-300">
                  <Mail className="w-5 h-5 text-lime-400" />
                  Open to Full Stack Developer opportunities
                </div>

                <div className="flex items-center gap-3 text-sm text-ink-300">
                  <MessageCircle className="w-5 h-5 text-lime-400" />
                  Available for recruiter discussions
                </div>

              </div>
            </Reveal>
          </div>

          {/* Right: Contact Form */}
          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="relative p-5 sm:p-7 lg:p-9 rounded-3xl bg-ink-900/80 backdrop-blur-xl border border-ink-800 shadow-2xl shadow-black/30"
            >
              <div className="space-y-5">

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-ink-300 mb-2 uppercase tracking-[0.15em]">
                    Your Name
                  </label>

                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      handleChange('name', e.target.value)
                    }
                    className={inputClass('name')}
                    placeholder="Recruiter / HR name"
                    maxLength={100}
                    autoComplete="name"
                  />

                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1.5">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-ink-300 mb-2 uppercase tracking-[0.15em]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      handleChange('email', e.target.value)
                    }
                    className={inputClass('email')}
                    placeholder="recruiter@company.com"
                    maxLength={254}
                    autoComplete="email"
                  />

                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-ink-300 mb-2 uppercase tracking-[0.15em]">
                    WhatsApp / Phone
                  </label>

                  <input
                    type="tel"
                    value={form.whatsapp}
                    onChange={(e) =>
                      handleChange('whatsapp', e.target.value)
                    }
                    className={inputClass('whatsapp')}
                    placeholder="+91 9876543210"
                    maxLength={20}
                    autoComplete="tel"
                  />

                  {errors.whatsapp && (
                    <p className="text-xs text-red-400 mt-1.5">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-ink-300 mb-2 uppercase tracking-[0.15em]">
                    Job Opportunity / Message
                  </label>

                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      handleChange('message', e.target.value)
                    }
                    rows={5}
                    maxLength={3000}
                    className={`${inputClass('message')} resize-none`}
                    placeholder="Share job role, company name, experience requirements, salary range or any other details..."
                  />

                  <div className="flex justify-between items-center mt-1.5">
                    {errors.message ? (
                      <p className="text-xs text-red-400">
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}

                    <span className="text-xs text-ink-600">
                      {form.message.length}/3000
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status !== 'idle'}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-lime-400 text-ink-950 text-sm font-semibold shadow-lg shadow-lime-400/20 hover:bg-lime-300 disabled:opacity-60 transition-colors"
                >
                  <AnimatePresence mode="wait">

                    {status === 'idle' && (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        Send Inquiry
                        <Send className="w-4 h-4" />
                      </motion.span>
                    )}

                    {status === 'loading' && (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        Sending...
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </motion.span>
                    )}

                    {status === 'success' && (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        Inquiry Sent Successfully!
                        <Check className="w-4 h-4" />
                      </motion.span>
                    )}

                  </AnimatePresence>
                </motion.button>

                <p className="text-xs text-ink-500 text-center">
                  Thank you for considering my profile. I'll get back to you soon.
                </p>

              </div>
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
