// src/pages/ContactPage.tsx

import React, { useState } from 'react';
import type { ContactFormState, ContactFormErrors } from '../types/contact';

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const initialFormErrors: ContactFormErrors = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<ContactFormErrors>(initialFormErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (data: ContactFormState): ContactFormErrors => {
    let newErrors: ContactFormErrors = { name: '', email: '', subject: '', message: '' };
    
    if (!data.name) newErrors.name = 'Nama harus diisi.';
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email tidak valid.';
    }
    if (!data.subject) newErrors.subject = 'Subjek harus diisi.';
    if (!data.message || data.message.length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter.';
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Hapus error saat user mulai mengetik
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.values(validationErrors).some(error => error !== '')) {
      setStatus('idle');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    // --- LOGIC KIRIM DATA DI SINI (Ganti dengan API Call Anda) ---
    try {
      // Simulasi API call yang sukses
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      setStatus('success');
      setFormData(initialFormState); // Reset form
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (fieldError: string) => 
    `w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 transition duration-150 ${
      fieldError ? 'border-red-500 focus:ring-red-500' : 'border-input focus:ring-accent focus:border-accent'
    }`;
    
  return (
    <section className="py-24 md:py-32"> {/* Padding atas lebih besar karena header fixed */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-foreground">
          Hubungi Kami
        </h1>
        <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Kami siap berdiskusi tentang proyek Anda. Sampaikan kebutuhan Anda melalui formulir di bawah ini.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Bagian Detail Kontak */}
          <div className="lg:col-span-1 space-y-8 p-6 bg-card rounded-xl shadow-lg border border-border">
            <h3 className="text-2xl font-bold border-b pb-2 text-primary">Informasi Kontak</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.8 5L21 8M3 8V16a2 2 0 002 2h14a2 2 0 002-2V8M3 8V6a2 2 0 012-2h14a2 2 0 012 2v2"></path></svg>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">halo@teknomedia.com</p>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.14c-.933.473-.24 1.764.646 2.541.767.676 1.968 1.558 2.768 2.372 1.487 1.487 2.14 2.502 2.14 2.502.484.243 1.05.15 1.48-.282l1.928-1.928c.36-.36.81-.512 1.244-.416l3.35 1.117a1 1 0 01.76.974V21a1 1 0 01-1 1h-7a20.027 20.027 0 01-10-10V4a1 1 0 011-1h3.76"></path></svg>
                <div>
                  <p className="font-semibold text-foreground">Telepon</p>
                  <p className="text-muted-foreground">+62 812-3456-7890</p>
                </div>
              </div>

              {/* Alamat */}
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657A8 8 0 1117.657 16.657z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <div>
                  <p className="font-semibold text-foreground">Alamat Kantor</p>
                  <p className="text-muted-foreground">
                    Jl. Proyek Digital No. 10, <br/>
                    Jakarta Selatan, 12345
                  </p>
                </div>
              </div>
            </div>
            
            {/* Peta (Opsional) */}
            <div className="pt-4">
                <h4 className="font-semibold mb-2 text-foreground">Lokasi Kami:</h4>
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden border border-border">
                    {/* Ganti dengan Iframe Google Maps Anda */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.300539130726!2d106.820230614769!3d-6.223870895493922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d9d7e00001%3A0x6b4f74e0d3c01c7d!2sJakarta!5e0!3m2!1sen!2sid!4v1634538000000!5m2!1sen!2sid" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

          </div>

          {/* Bagian Formulir Kontak */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-xl shadow-2xl border border-border">
              <h3 className="text-3xl font-bold mb-4 text-center text-primary">Kirim Pesan</h3>

              {/* Status Message */}
              {status === 'success' && (
                <div className="p-4 text-sm text-green-700 bg-green-100 rounded-lg border border-green-300" role="alert">
                  ✅ Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg border border-red-300" role="alert">
                  ❌ Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.
                </div>
              )}

              {/* Input Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass(errors.name)}
                  placeholder="Nama Anda"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Input Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass(errors.email)}
                  placeholder="email@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Input Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1 text-foreground">Subjek</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass(errors.subject)}
                  placeholder="Topik Pembicaraan"
                />
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
              </div>

              {/* Input Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass(errors.message)} resize-none`}
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg shadow-md hover:bg-accent/90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-accent-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Mengirim...
                    </>
                ) : (
                    'Kirim Pesan'
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;