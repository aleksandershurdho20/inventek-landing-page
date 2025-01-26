import React, { useState, useEffect, useRef } from "react";
import {
  CloudIcon,
  AlertTriangleIcon,
  BarChart2Icon,
  DatabaseIcon,
  ShieldIcon,
  SendIcon,
  UserIcon,
  MailIcon,
  BuildingIcon,
  ChevronDownIcon,
  RadarIcon,
  LayoutGridIcon,
  TruckIcon,
  BotIcon,
  SatelliteIcon,
  FingerprintIcon,
  StarIcon,
  MenuIcon,
  XIcon,
  SquareMenu,
  WandSparkles,
  Sparkle
} from "lucide-react";
import {
  Menu,
  X,
  Server,
  Bell,
  BarChart2,
  Shield,
  Clock,
  ChevronDown,
} from "lucide-react";
import emailjs from "emailjs-com";

const AIMSAlbanianLandingPage = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [animateFeatures, setAnimateFeatures] = useState(false);
  const featuresRef = useRef(null);
  const [formErrors, setFormErrors] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (featuresRef.current) {
        const rect = featuresRef.current.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setAnimateFeatures(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Server className="w-10 h-10 text-teal-400" />,
      title: "Monitorim i Inventarit në Kohë Reale",
      description:
        "Përditësime të drejtpërdrejta dhe dukshmëri e plotë e stokut përmes teknologjisë së avancuar. Monitoroni dhe analizoni inventarin tuaj në kohë reale për të parandaluar mungesat, tepricat, dhe për të siguruar një menaxhim më të mirë të burimeve.",
    },
    {
      icon: <Bell className="w-10 h-10 text-teal-400" />,
      title: "Njoftimet dhe Alarmet e Automatizuara",
      description:
        "Sistemi ju njofton menjëherë për stok të ulët, data skadimi, ose çdo anomali që kërkon vëmendjen tuaj. Automatizimi i njoftimeve ju ndihmon të qëndroni një hap përpara dhe të minimizoni rreziqet që mund të ndikojnë në operacionet tuaja.",
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-teal-400" />,
      title: "Analiza Parashikuese",
      description:
        "Parashikoni kërkesën për produkte dhe optimizoni nivelet e inventarit me analiza të fuqizuara nga të dhënat. Ky funksionalitet ndihmon në reduktimin e kostove, rritjen e efikasitetit dhe përmirësimin e përvojës së klientit.",
    },
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const errors = {};
    if (!contactForm.name) errors.name = "Ju lutem plotësoni emrin tuaj.";
    if (!contactForm.email) errors.email = "Ju lutem plotësoni email adresën.";
    if (!contactForm.message)
      errors.message = "Ju lutem shkruani mesazhin tuaj.";
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    // Clear errors
    setFormErrors({});

    // Set loading to true
    setLoading(true);

    // Send email via EmailJS
    emailjs
      .send(
        "service_oa5qx0t", // Replace with your EmailJS Service ID
        "template_paa4kxa", // Replace with your EmailJS Template ID
        {
          name: contactForm.name,
          to_name: "Inventek",
          from_name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
          company: contactForm.company || "",
        },
        "eiFq3iUjImPJQmXj5" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert(
            "Mesazhi juaj u dërgua me sukses! Faleminderit që na kontaktuat."
          );
          setContactForm({ name: "", email: "", company: "", message: "" }); // Reset form
        },
        (error) => {
          alert(
            "Ndodhi një gabim gjatë dërgimit të mesazhit. Ju lutem provoni përsëri."
          );
          console.error("EmailJS error:", error);
        }
      )
      .finally(() => {
        // Set loading to false after 2 seconds
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  };

  const testimonials = [
    {
      quote:
        "InvenTek transformoi plotësisht menaxhimin tonë të inventarit. Saktësi dhe eficiencë absolute!",
      name: "Artan Hoxha",
      company: "Global Trade Solutions",
    },
    {
      quote:
        "Platforma më e avancuar për menaxhimin e inventarit që kam parë ndonjëherë.",
      name: "Ermira Gjinaj",
      company: "Tech Innovations Albania",
    },
  ];

  return (
    <div
      className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white min-h-screen overflow-x-hidden"
      id="home"
    >
      {/* Navigation with Glassmorphism */}
      {/* <nav className={`
        fixed top-0 left-0 right-0 z-50
        ${scrolled ? 'bg-gray-900/50 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}
        transition-all duration-300
      `}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-3">
            <CloudIcon className="w-10 h-10 text-cyan-400" />
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">AIMS</span>
          </div>
          <div className="space-x-6 flex items-center">
            <a href="#features" className="hover:text-cyan-300 transition text-gray-200 font-medium">Veçoritë</a>
            <a href="#solutions" className="hover:text-cyan-300 transition text-gray-200 font-medium">Zgjidhjet</a>
            <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-5 py-2 rounded-full text-white font-bold transition transform hover:scale-105">
              Kontakto
            </a>
          </div>
        </div>
      </nav> */}
      <div
        className={`
        fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-xl
        ${mobileMenuOpen ? "block" : "hidden"}
      `}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
          {/* <XIcon
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 text-cyan-400 cursor-pointer hover:rotate-90 transition"
          /> */}
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-bold hover:text-cyan-400 transition"
          >
Kryefaqja          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-bold hover:text-cyan-400 transition"
          >
            Veçoritë
          </a>
          <a
            href="#clients"
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-bold hover:text-cyan-400 transition"
          >
            Cfare thone klientet
          </a>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full text-white font-bold text-3xl hover:scale-105 transition"
          >
            Kontakto
          </a>
        </div>
      </div>

      {/* Navigation with Glassmorphism */}
      <nav
        className={`
        fixed top-0 left-0 right-0 z-50
        ${
          scrolled
            ? "bg-gray-900/50 backdrop-blur-xl shadow-2xl"
            : "bg-transparent"
        }
        transition-all duration-300
      `}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-3">
            <Sparkle className="w-10 h-10 text-cyan-400" />
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              InvenTek
            </span>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#home"
              className="hover:text-cyan-300 transition text-gray-200 font-medium"
            >
              Kryefaqja
            </a>
            <a
              href="#features"
              className="hover:text-cyan-300 transition text-gray-200 font-medium"
            >
              Veçoritë
            </a>
            <a
              href="#clients"
              className="hover:text-cyan-300 transition text-gray-200 font-medium"
            >
              Cfare thone klientet
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-5 py-2 rounded-full text-white font-bold transition transform hover:scale-105"
            >
              Kontakto
            </a>
          </div>
          
          <div className="md:hidden">
            {mobileMenuOpen ? <XIcon
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 text-cyan-400 cursor-pointer hover:rotate-90 transition"
          />
            :
            <MenuIcon
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 text-cyan-400 cursor-pointer"
            />
          }
          </div>
        </div>
      </nav>

      {/* Futuristic Hero Section */}
      <header className="container mx-auto pt-24 px-4 min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-50 blur-3xl"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Revolucion në <br />
              Menaxhimin e Inventarit
            </h1>
            <p className="text-gray-300 text-xl mb-8">
              Zgjidhje IoT me bazë AI për gjurmimin dhe optimizimin inteligjent
              të inventarit.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 px-7 py-4 rounded-full text-white font-bold transition transform hover:scale-105 shadow-2xl">
                Eksploro Zgjidhjet
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-7 py-4 rounded-full font-bold transition transform hover:scale-105">
                Shiko Demonstrimin
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-cyan-500/10 rounded-full absolute inset-0 blur-3xl animate-pulse"></div>
            <img
              src="https://cdn.dribbble.com/userupload/16987259/file/original-5717a8709eaa864b330006278a628a19.png?resize=752x564&vertical=center"
              alt="Inventory Dashboard"
              className="relative z-10 rounded-2xl shadow-2xl transform transition hover:scale-105"
            />
          </div>
        </div>
      </header>

      {/* Advanced Features Section */}
      <section
        ref={featuresRef}
        id="features"
        className="container mx-auto py-24 px-4"
      >
        <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Veçoritë Kryesore
        </h2>
        <div
          className={`
          grid md:grid-cols-3 gap-8 transition-all duration-1000
          ${
            animateFeatures
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }
        `}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              className={`
                bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl transition-all duration-300
                ${
                  activeFeature === index
                    ? "scale-105 shadow-2xl border-2 border-cyan-400"
                    : ""
                }
                hover:shadow-2xl hover:scale-105
              `}
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold mt-6 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto py-24 px-4" id="clients">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Çfarë Thonë Klientët
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl hover:scale-105 transition-all"
            >
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <div className="font-bold">- {testimonial.name}</div>
              <div className="text-gray-400">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="container mx-auto py-24 px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Investoni në Automatizimin që Kursen Kohë dhe Rrit Efikasitetin
        </h2>
        {/* Description */}
        <p className="text-lg text-center text-gray-300 mb-12">
          Zgjidhja jonë IoT inovative është krijuar për t'ju ndihmuar të
          optimizoni proceset dhe të monitoroni pajisjet tuaja në mënyrë të
          zgjuar dhe të sigurt. Plotësoni formularin më poshtë për të rezervuar
          vendin tuaj dhe për të marrë më shumë informacione mbi zgjidhjen tonë
          premium.
        </p>
        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-xl rounded-3xl p-12">
          {/* Title */}

          {/* Contact Form */}
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-gray-400"
                >
                  Emri
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400" />
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    className={`
                w-full pl-10 pr-4 py-3 bg-gray-700/50 rounded-xl
                focus:outline-none focus:ring-2 focus:ring-cyan-400
                ${formErrors.name ? "border-2 border-red-500" : ""}
              `}
                    placeholder="Emri juaj"
                  />
                </div>
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-400"
                >
                  Email
                </label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400" />
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    className={`
                w-full pl-10 pr-4 py-3 bg-gray-700/50 rounded-xl
                focus:outline-none focus:ring-2 focus:ring-cyan-400
                ${formErrors.email ? "border-2 border-red-500" : ""}
              `}
                    placeholder="Email adresa"
                  />
                </div>
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>
            </div>
            {/* Company Field */}
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm text-gray-400"
              >
                Kompania (Opsionale)
              </label>
              <div className="relative">
                <BuildingIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400" />
                <input
                  type="text"
                  id="company"
                  value={contactForm.company}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, company: e.target.value })
                  }
                  className="
              w-full pl-10 pr-4 py-3 bg-gray-700/50 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-cyan-400
            "
                  placeholder="Emri i kompanisë"
                />
              </div>
            </div>
            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm text-gray-400"
              >
                Mesazhi
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  className={`
              w-full pl-10 pr-4 py-3 bg-gray-700/50 rounded-xl h-36
              focus:outline-none focus:ring-2 focus:ring-cyan-400
              ${formErrors.message ? "border-2 border-red-500" : ""}
            `}
                  placeholder="Shkruani mesazhin tuaj..."
                ></textarea>
                <SendIcon className="absolute left-3 top-4 text-cyan-400" />
              </div>
              {formErrors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.message}
                </p>
              )}
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="
          w-full bg-gradient-to-r from-cyan-600 to-blue-700
          hover:from-cyan-700 hover:to-blue-800
          px-7 py-4 rounded-full text-white font-bold
          transition transform hover:scale-105 shadow-2xl
          flex items-center justify-center space-x-3
        "
              disabled={loading}
            >
              <SendIcon className="w-5 h-5" />
              {loading ? "Duke u dërguar..." : "Dërgo Mesazhin"}
            </button>
          </form>
        </div>
      </section>
      {/* Rest of the component remains the same as previous implementation */}
      {/* [Contact and Footer sections would follow the same ultra-modern style] */}
    </div>
  );
};

export default AIMSAlbanianLandingPage;
