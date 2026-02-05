'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  startDate: string;
}

interface TimeLeft {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Counter({ startDate }: CounterProps) {
  const [timeElapsed, setTimeElapsed] = useState<TimeLeft>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDate).getTime();
      const now = new Date().getTime();
      const difference = now - start;

      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      
      // Cálculo aproximado de meses y años
      const years = Math.floor(days / 365);
      const remainingDays = days % 365;
      const months = Math.floor(remainingDays / 30);
      const finalDays = remainingDays % 30;

      setTimeElapsed({
        years,
        months,
        days: finalDays,
        hours,
        minutes,
        seconds,
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  const timeUnits = [
    { label: 'Años', value: timeElapsed.years, icon: '📅', color: 'from-yellow-300 to-yellow-500' },
    { label: 'Meses', value: timeElapsed.months, icon: '🌙', color: 'from-yellow-200 to-yellow-400' },
    { label: 'Días', value: timeElapsed.days, icon: '☀️', color: 'from-yellow-300 to-amber-400' },
    { label: 'Horas', value: timeElapsed.hours, icon: '⏰', color: 'from-amber-300 to-yellow-400' },
    { label: 'Minutos', value: timeElapsed.minutes, icon: '⏱️', color: 'from-yellow-400 to-amber-300' },
    { label: 'Segundos', value: timeElapsed.seconds, icon: '⚡', color: 'from-yellow-300 to-yellow-500' },
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-black flex items-center justify-center">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
      </div>

      {/* Estrellas decorativas animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.8))'
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            className="text-7xl mb-6 inline-block"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))'
            }}
          >
            💕
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-gold" style={{ fontFamily: 'Georgia, serif' }}>
            Nuestro Tiempo Juntos
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
            Cada segundo a tu lado es un tesoro invaluable
          </p>
        </motion.div>

        {/* Contador */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 200
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Tarjeta del contador */}
              <div className="card-glass-black rounded-2xl p-6 md:p-8 relative overflow-hidden">
                {/* Efecto de brillo al hacer hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    backgroundImage: `linear-gradient(135deg, transparent, var(--tw-gradient-from), transparent)`
                  }}
                />

                {/* Icono */}
                <motion.div
                  className="text-5xl md:text-6xl mb-4"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.6))'
                  }}
                >
                  {unit.icon}
                </motion.div>

                {/* Valor numérico */}
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br ${unit.color} bg-clip-text text-transparent`}
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))'
                  }}
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>

                {/* Label */}
                <p className="text-white/90 text-lg md:text-xl font-semibold" style={{ fontFamily: 'Georgia, serif' }}>
                  {unit.label}
                </p>

                {/* Borde dorado con hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-yellow-300/0 group-hover:border-yellow-300/50 transition-all duration-500" />
                
                {/* Brillo en esquinas */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-300/0 group-hover:bg-yellow-300/80 rounded-full transition-all duration-500" />
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-yellow-300/0 group-hover:bg-yellow-300/80 rounded-full transition-all duration-500" />
              </div>

              {/* Sombra dorada al hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-gold -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Mensaje romántico inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
            className="text-2xl md:text-3xl text-gradient-white italic mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            “Y seguiremos contando cada segundo juntos hasta la eternidad”
          </motion.p>
          <div className="flex justify-center gap-3 text-4xl">
            {['❤️', '💕', '✨'].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.6))'
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
