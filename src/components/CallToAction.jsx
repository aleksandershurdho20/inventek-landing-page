import { ArrowRight } from 'lucide-react';
import React from 'react';

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-3xl" />
        <div className="relative container mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Gati për të Transformuar?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Eksploroni se si zgjidhjet tona IoT mund të revolucionarizojnë biznesin ose shtëpinë tuaj
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center gap-2 mx-auto group transform hover:scale-105">
            Na Kontaktoni
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
  )
}
