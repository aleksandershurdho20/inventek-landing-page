import {
    ArrowRight
} from "lucide-react";
import React, { useState } from "react";
import { services } from "../constants/services";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <section className="container mx-auto px-4 py-24" id ="services">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Shërbimet Tona
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-300" />
            <div className="relative p-8 h-full">
              <div
                className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${service.color} transform group-hover:-translate-y-1 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                Mëso më shumë
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
