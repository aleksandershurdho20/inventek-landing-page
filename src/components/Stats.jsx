import { CheckCircle, Star, Users } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Stats() {
  const [counts, setCounts] = useState({
    users: 0,
    projects: 0,
    satisfaction: 0,
  });
  useEffect(() => {
    // Animated counter effect
    const targetCounts = { users: 5000, projects: 200, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const counters = {};
    Object.keys(targetCounts).forEach((key) => {
      let current = 0;
      const target = targetCounts[key];
      const step = target / steps;

      counters[key] = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(counters[key]);
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, interval);
    });

    return () =>
      Object.values(counters).forEach((counter) => clearInterval(counter));
  }, []);
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
          <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <div className="text-4xl font-bold mb-2">{counts.users}+</div>
          <div className="text-gray-400">Klientë Aktivë</div>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
          <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-400" />
          <div className="text-4xl font-bold mb-2">{counts.projects}+</div>
          <div className="text-gray-400">Projekte të Realizuara</div>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
          <Star className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <div className="text-4xl font-bold mb-2">{counts.satisfaction}%</div>
          <div className="text-gray-400">Kënaqësi Klientësh</div>
        </div>
      </div>
    </section>
  );
}
