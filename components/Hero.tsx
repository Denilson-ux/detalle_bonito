'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';

interface HeroProps {
  onEnter: () => void;
}

interface Particle {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
}

export default function Hero({ onEnter }: HeroProps) {
  const [clicked, setClicked] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generar partículas solo en el cliente
  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2
      });
    }
    setParticles(newParticles);
  }, []);

  const handleClick = () => {
    if (!clicked) {
      // Crear corazones y estrellas doradas con animación
      for (let i = 0; i < 60; i++) {
        setTimeout(() => createHeart(), i * 25);
      }
      
      setClicked(true);
      setTimeout(() => onEnter(), 2500);
    }
  };

  const createHeart = () => {
    const symbols = ['❤️', '💕', '💖', '💗', '⭐', '✨', '💫'];
    const heart = document.createElement('div');
    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '50%';
    heart.style.fontSize = Math.random() * 40 + 25 + 'px';
    heart.style.zIndex = '9999';
    heart.style.pointerEvents = 'none';
    heart.style.filter = 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))';
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 400 + 250;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;
    
    heart.animate([
      { transform: 'translate(0, 0) scale(0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${tx}px, ${ty}px) scale(1.5) rotate(720deg)`, opacity: 0 }
    ], {
      duration: 2500,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    });
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Fondo con imagen de textura sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(218,165,32,0.08),transparent_40%)]" />
      </div>

      {/* Partículas doradas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              boxShadow: '0 0 10px rgba(255, 215, 0, 0.8)'
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Corazón principal con efecto de brillo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 200,
            damping: 15,
            duration: 1.8
          }}
          className="mb-8"
        >
          <motion.div
            className="text-9xl md:text-[12rem] cursor-pointer inline-block relative"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.6)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.3))'
            }}
            whileHover={{ 
              scale: 1.15, 
              rotate: 15,
              filter: 'drop-shadow(0 0 40px rgba(255, 215, 0, 0.9)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.5))'
            }}
            whileTap={{ scale: 0.85 }}
            onClick={handleClick}
            animate={clicked ? {
              scale: [1, 1.8, 0.5, 1.3, 1],
              rotate: [0, 180, 360, 540, 720],
              filter: [
                'drop-shadow(0 0 30px rgba(255, 215, 0, 0.6))',
                'drop-shadow(0 0 80px rgba(255, 215, 0, 1))',
                'drop-shadow(0 0 100px rgba(255, 255, 255, 0.8))',
                'drop-shadow(0 0 80px rgba(255, 215, 0, 1))',
                'drop-shadow(0 0 30px rgba(255, 215, 0, 0.6))'
              ]
            } : {
              scale: [1, 1.05, 1],
              rotate: [0, -5, 5, 0]
            }}
            transition={clicked ? { duration: 2 } : { 
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            <span className="relative z-10">❤️</span>
            
            {/* Anillos de brillo */}
            {!clicked && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-yellow-300/30"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-white/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5
                  }}
                />
              </>
            )}
          </motion.div>
        </motion.div>

        {/* Título principal con gradiente dorado */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="text-7xl md:text-9xl font-bold mb-8 text-gradient-gold"
          style={{
            fontFamily: 'Georgia, serif',
            letterSpacing: '0.05em'
          }}
        >
          Para Ti
        </motion.h1>

        {/* Subtexto con animación de escritura */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-12 h-32 md:h-40"
          style={{
            fontFamily: 'Georgia, serif'
          }}
        >
          <TypeAnimation
            sequence={[
              'Mi amor eterno... 💕',
              2500,
              'Mi razón de existir... 🌟',
              2500,
              'Mi universo completo... 💖',
              2500,
              'Mi todo y más... ✨',
              2500,
              'La luz de mi vida... 💫',
              2500,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-gradient-white block"
          />
        </motion.div>

        {/* Instrucción o mensaje final */}
        {!clicked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="relative inline-block"
          >
            <motion.p
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              className="text-2xl md:text-3xl font-semibold px-10 py-5 rounded-full inline-block card-glass-black glow-gold relative overflow-hidden force-white-text"
              style={{
                fontFamily: 'Georgia, serif'
              }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ['-200%', '200%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              <span className="relative z-10">💖 Haz click en el corazón 💖</span>
            </motion.p>
          </motion.div>
        )}

        {clicked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="relative inline-block"
          >
            <div className="text-3xl md:text-4xl font-bold px-12 py-6 rounded-2xl inline-block card-glass-black glow-gold">
              <motion.span
                animate={{
                  opacity: [1, 0.6, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
                className="force-white-text"
                style={{
                  fontFamily: 'Georgia, serif'
                }}
              >
                Preparando algo especial para ti... ✨
              </motion.span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Línea decorativa inferior */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
      />
    </section>
  );
}
