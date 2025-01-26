import {
    Mail,
    MapPin,
    Phone,
    Send
} from 'lucide-react';
import React, { useState } from 'react';
import Select from '../common/Select';
import toast from 'react-hot-toast';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mesazhi juaj u dërgua me sukses! Ne do t'ju kontaktojmë shpejti.")

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: ''
      });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = ( value) => {
    setFormData({
        ...formData,
        service:value
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Na Kontaktoni</h3>
          <p className="text-gray-400">
            Na kontaktoni për çdo pyetje ose për të diskutuar projektin tuaj. Jemi këtu për t'ju ndihmuar.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-lg font-medium">Email</h4>
              <p className="text-gray-400">info@iotalb.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-green-500/10 p-3 rounded-lg">
              <Phone className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h4 className="text-lg font-medium">Telefon</h4>
              <p className="text-gray-400">+355 69 123 4567</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-purple-500/10 p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="text-lg font-medium">Adresa</h4>
              <p className="text-gray-400">Rruga e Durrësit, Tiranë, Shqipëri</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Emri i Plotë
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors text-white"
              placeholder="Emri juaj"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors text-white"
              placeholder="email@juaj.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Telefon
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors text-white"
              placeholder="+355 69 123 4567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Kompania
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors text-white"
              placeholder="Emri i kompanisë"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Shërbimi që ju Intereson
          </label>
          <Select onChange={handleSelectChange} value={formData.service}/>
          {/* <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors text-white"
          >
            <option value="">Zgjidhni një shërbim</option>
            <option value="inventory">Menaxhimi i Inventarit</option>
            <option value="farming">Bujqësi e Mençur</option>
            <option value="vehicles">Mirëmbajtja e Automjeteve</option>
            <option value="security">Siguria e Shtëpisë</option>
            <option value="elderly">Kujdesi për të Moshuarit</option>
            <option value="energy">Menaxhimi i Energjisë</option>
            <option value="web-app">Dizajn dhe Zhvillim i Aplikacioneve Web</option>
            <option value="mobile-app">Zhvillimi i Aplikacioneve Mobile</option>
            <option value="ai">Zgjidhje me Inteligjencë Artificiale</option>

          </select> */}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Mesazhi juaj
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors text-white resize-none"
            placeholder="Shkruani mesazhin tuaj këtu..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
          ) : (
            <>
              Dërgo Mesazhin
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm