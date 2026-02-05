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

interface Star {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
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
  
  const [stars, setStars] = useState<Star[]>([]);

  // Generar estrellas solo en el cliente
  useEffect(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < 20; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2
      });
    }
    setStars(newStars);
  }, []);

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
    { label: 'Años', value: timeElapsed.years, icon: '📅', gradient: 'from-yellow-400 to-amber-500' },
    { label: 'Meses', value: timeElapsed.months, icon: '🌙', gradient: 'from-amber-400 to-orange-500' },
    { label: 'Días', value: timeElapsed.days, icon: '☀️', gradient: 'from-orange-400 to-red-500' },
    { label: 'Horas', value: timeElapsed.hours, icon: '⏰', gradient: 'from-red-400 to-pink-500' },
    { label: 'Minutos', value: timeElapsed.minutes, icon: '⏱️', gradient: 'from-pink-400 to-purple-500' },
    { label: 'Segundos', value: timeElapsed.seconds, icon: '⚡', gradient: 'from-purple-400 to-yellow-500' },
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
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute text-xl"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.8))'
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay
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
          
          <h2 
            className="text-5xl md:text-7xl font-bold mb-6" 
            style={{ 
              fontFamily: 'Georgia, serif',
              color: '#ffffff',
              textShadow: '3px 3px 10px rgba(0,0,0,1), 0 0 30px rgba(255,215,0,0.5)'
            }}
          >
            Nuestro Tiempo Juntos
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mb-6" />
          <p 
            className="text-xl md:text-2xl font-semibold max-w-2xl mx-auto" 
            style={{ 
              fontFamily: 'Georgia, serif',
              color: '#ffffff',
              textShadow: '2px 2px 6px rgba(0,0,0,1), 0 0 20px rgba(255,215,0,0.3)'
            }}
          >
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
              {/* Tarjeta del contador MEJORADA */}
              <div 
                className="rounded-2xl p-6 md:p-8 relative overflow-hidden backdrop-blur-md shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(20,20,20,0.9) 100%)',
                  border: '2px solid rgba(255, 215, 0, 0.3)'
                }}
              >
                {/* Efecto de brillo al hacer hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${unit.gradient.includes('from') ? 'rgba(255,215,0,0.2)' : 'rgba(255,255,255,0.1)'} 0%, transparent 100%)`
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

                {/* Valor numérico BLANCO FORZADO */}
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl md:text-6xl font-bold mb-3"
                  style={{
                    color: '#ffffff !important',
                    textShadow: '3px 3px 10px rgba(0,0,0,1), 0 0 25px rgba(255,215,0,0.5), 0 0 50px rgba(255,215,0,0.3)'
                  }}
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>

                {/* Label BLANCO FORZADO */}
                <p 
                  className="text-lg md:text-xl font-bold" 
                  style={{ 
                    fontFamily: 'Georgia, serif',
                    color: '#ffffff !important',
                    textShadow: '2px 2px 6px rgba(0,0,0,1), 0 0 15px rgba(255,215,0,0.4)'
                  }}
                >
                  {unit.label}
                </p>

                {/* Borde dorado con hover */}
                <div 
                  className="absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none"
                  style={{
                    border: '2px solid rgba(255, 215, 0, 0.3)'
                  }}
                />
                
                {/* Brillo en esquinas */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-300/50 group-hover:bg-yellow-300 rounded-full transition-all duration-500 shadow-lg shadow-yellow-300/50" />
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-yellow-300/50 group-hover:bg-yellow-300 rounded-full transition-all duration-500 shadow-lg shadow-yellow-300/50" />
              </div>

              {/* Sombra dorada al hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{ boxShadow: '0 0 40px rgba(255,215,0,0.6)' }} />
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
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
            className="text-2xl md:text-3xl font-semibold italic mb-4"
            style={{ 
              fontFamily: 'Georgia, serif',
              color: '#ffffff',
              textShadow: '3px 3px 8px rgba(0,0,0,1), 0 0 25px rgba(255,215,0,0.4)'
            }}
          >
            "Y seguiremos contando cada segundo juntos hasta la eternidad"
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
