import { ArrowRight } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-3xl" />
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/30 to-transparent rounded-full animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-600/30 to-transparent rounded-full animate-pulse" />
      </div>
      <header className="relative container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-bounce-slow mb-8 px-6 py-2 rounded-full bg-white/10 backdrop-blur-lg">
            🚀 E ardhmja e teknologjisë është këtu
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Të Ardhmen e IoT
            <br />E Sjellim Sot
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Transformojmë bizneset dhe shtëpitë tuaja me zgjidhjet më inovative
            të internetit të gjërave
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center gap-2 group transform hover:scale-105">
              Filloni Tani
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-lg px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 transform hover:scale-105">
              Mësoni Më Shumë
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
