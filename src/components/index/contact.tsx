"use client";

import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Terminal as TerminalIcon, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { sendMessage } from "@/actions/contact";

export default function Contact() {
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error', message: string }>({ type: 'idle', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Executing transmission...' });
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      date: new Date().toString(),
    };

    try {
      const result = await sendMessage(data);
      if (result.success) {
        setStatus({ type: 'success', message: result.message });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: 'error', message: result.message });
      }
    } catch {
      setStatus({ type: 'error', message: 'System fault. Uplink aborted.' });
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-900 bg-zinc-950 relative overflow-hidden">
        {/* Background Noise/Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-zinc-800 flex-grow max-w-[100px]" />
          <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase">05 // Terminal Uplink</span>
          <div className="h-px bg-zinc-800 flex-grow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-zinc-100">Initialize <br /> <span className="text-orange-500">Connectivity</span></h2>
              <p className="text-zinc-400 font-mono text-sm max-w-md leading-relaxed">
                Available for strategic collaborations and high-impact engineering roles. Use the secure channel below or reach out via direct protocols.
              </p>
            </div>

            <div className="flex flex-col gap-6">
                <ContactItem 
                    icon={<Mail size={20} className="text-orange-500" />} 
                    label="Email" 
                    value="ogayanfe.me@gmail.com" 
                    href="mailto:ogayanfe.me@gmail.com" 
                />
                <ContactItem 
                    icon={<Phone size={20} className="text-orange-500" />} 
                    label="Signal" 
                    value="+234 811 963 8025" 
                    href="tel:+2348119638025" 
                />
                <ContactItem 
                    icon={<MapPin size={20} className="text-orange-500" />} 
                    label="Geolocation" 
                    value="Nigeria // Remote" 
                />
            </div>

            {/* Micro Socials */}
            <div className="flex items-center gap-6 pt-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                <Link href="https://github.com/ogayanfe" target="_blank" className="text-zinc-400 hover:text-orange-500 transition-colors"><Github size={20} /></Link>
                <Link href="https://linkedin.com/in/ogayanfe" target="_blank" className="text-zinc-400 hover:text-orange-500 transition-colors"><Linkedin size={20} /></Link>
                <Link href="https://x.com/ogayanfe" target="_blank" className="text-zinc-400 hover:text-orange-500 transition-colors"><Twitter size={20} /></Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-sm relative shadow-2xl backdrop-blur-sm">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/50 via-zinc-800 to-transparent" />
             
             <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Protocol.Name" id="name" type="text" placeholder="Your Name" name='name' />
                    <Field label="Protocol.Email" id="email" type="email" placeholder="email@address.com" name='email' />
                </div>
                <Field label="Subject" id="subject" type="text" placeholder="Strategic Inquiry" name='subject' />
                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono text-zinc-600 tracking-widest pl-1" htmlFor="message">Uplink.Message</label>
                    <textarea 
                        id="message" 
                        name="message"
                        rows={4}
                        required
                        className="w-full bg-zinc-950/80 border border-zinc-800 rounded-sm px-4 py-3 text-zinc-100 font-mono text-sm focus:outline-none focus:border-orange-500/50 transition-colors placeholder:text-zinc-800"
                        placeholder="Define project scope or collaboration details..."
                    />
                </div>

                <div className="space-y-4">
                    <button 
                        type="submit" 
                        disabled={status.type === 'loading'}
                        className="w-full bg-orange-500 text-zinc-950 font-mono font-bold py-4 rounded-sm flex items-center justify-center gap-3 hover:bg-orange-400 transition-all uppercase tracking-tighter disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                        {status.type === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />}
                        {status.type === 'loading' ? 'Encrypting...' : 'Execute Transmission'}
                    </button>

                    {/* Feedback Status */}
                    {status.type !== 'idle' && (
                        <div className={`flex items-center gap-3 p-4 rounded-sm font-mono text-xs border ${
                            status.type === 'success' ? 'bg-green-500/5 border-green-500/20 text-green-400' : 
                            status.type === 'error' ? 'bg-red-500/5 border-red-500/20 text-red-400' : 
                            'bg-zinc-900 border-zinc-800 text-zinc-400'
                        }`}>
                            {status.type === 'success' && <CheckCircle2 size={16} />}
                            {status.type === 'error' && <AlertTriangle size={16} />}
                            {status.type === 'loading' && <TerminalIcon size={16} className="animate-pulse" />}
                            <span>{status.message}</span>
                        </div>
                    )}
                </div>
             </form>

             <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-zinc-700">
                <div className="flex items-center gap-2">
                    <TerminalIcon size={12} />
                    <span>ENCRYPTION: AES-256 (MOCK)</span>
                </div>
                <span>UPLINK STATUS: READY</span>
             </div>
          </div>
        </div>

        {/* Minimal Footer */}
        <footer className="mt-32 pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
                <span className="text-sm font-bold font-heading text-zinc-100 uppercase tracking-tighter">Odule Ayanfeoluwa Grandeur</span>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">© 2025 // All Processing Logs Reserved.</span>
            </div>
            
            <div className="flex gap-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-orange-500 transition-colors cursor-pointer">Return to Root</button>
                <Link href="https://github.com/ogayanfe/portfoliov2" target="_blank" className="hover:text-orange-500 transition-colors">Source Code</Link>
            </div>
        </footer>
      </div>
    </section>
  );
}

function Field({ label, id, type, placeholder, value, onChange }: { label?: string, id?: string, type?: string, placeholder?: string; name?: string; value?:string; onChange?: () => unknown  }) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] uppercase font-mono text-zinc-600 tracking-widest pl-1" htmlFor={id}>{label}</label>
            <input 
                id={id} 
                type={type} 
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-sm px-4 py-3 text-zinc-100 font-mono text-sm focus:outline-none focus:border-orange-500/50 transition-colors placeholder:text-zinc-800"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
    const content = (
        <div className="group flex items-center gap-6 p-4 border border-zinc-800 bg-zinc-900/10 rounded-sm hover:border-orange-500/30 transition-all">
            <div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800 group-hover:bg-orange-500 group-hover:border-orange-400 group-hover:text-zinc-950 transition-all duration-500">
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{label}</span>
                <span className="text-sm text-zinc-200 font-mono tracking-tight">{value}</span>
            </div>
        </div>
    )

    if (href) return <Link href={href} className="block">{content}</Link>
    return content
}
