'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface CounterProps {
  startDate: string;
}

export default function Counter({ startDate }: CounterProps) {
  const [timeData, setTimeData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDate).getTime();
      const now = new Date().getTime();
      const difference = now - start;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeData({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-4">
          Nuestro Tiempo Juntos
        </h2>
        <p className="text-center text-pink-200 text-xl mb-12">
          Cada segundo contigo es un regalo
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Días', value: timeData.days, icon: '📅' },
            { label: 'Horas', value: timeData.hours, icon: '⏰' },
            { label: 'Minutos', value: timeData.minutes, icon: '⏱️' },
            { label: 'Segundos', value: timeData.seconds, icon: '⚡' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="card-gradient rounded-2xl p-8 text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {item.value}
              </div>
              <div className="text-pink-200 text-lg">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
