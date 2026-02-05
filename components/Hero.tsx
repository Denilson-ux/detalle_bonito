'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

interface HeroProps {
  onEnter: () => void;
}

export default function Hero({ onEnter }: HeroProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      // Crear corazones con animación
      for (let i = 0; i < 50; i++) {
        setTimeout(() => createHeart(), i * 30);
      }
      
      setClicked(true);
      setTimeout(() => onEnter(), 2000);
    }
  };

  const createHeart = () => {
    const heart = document.createElement('div');
    heart.innerHTML = ['❤️', '💕', '💖', '💗'][Math.floor(Math.random() * 4)];
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '50%';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.zIndex = '9999';
    heart.style.pointerEvents = 'none';
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 300 + 200;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;
    
    heart.animate([
      { transform: 'translate(0, 0) scale(0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${tx}px, ${ty}px) scale(1) rotate(360deg)`, opacity: 0 }
    ], {
      duration: 2000,
      easing: 'ease-out'
    });
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-red-900">
      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 1.5 
          }}
        >
          <motion.div
            className="text-9xl mb-8 cursor-pointer inline-block drop-shadow-2xl"
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            animate={clicked ? {
              scale: [1, 1.5, 1],
              rotate: [0, 360, 720],
            } : {}}
            transition={{ duration: 1 }}
          >
            ❤️
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-7xl md:text-9xl font-bold text-white mb-6 drop-shadow-[0_5px_15px_rgba(255,255,255,0.5)]"
        >
          Para Ti
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-3xl md:text-5xl text-white font-bold mb-12 h-24 drop-shadow-[0_3px_10px_rgba(255,255,255,0.7)]"
        >
          <TypeAnimation
            sequence={[
              'Mi amor... 💕',
              2000,
              'Mi vida... 🌟',
              2000,
              'Mi todo... 💖',
              2000,
              'Mi razón de ser... ✨',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {!clicked && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-2xl text-white font-bold animate-pulse drop-shadow-lg bg-pink-600/30 backdrop-blur-sm px-8 py-4 rounded-full inline-block"
          >
            💖 Haz click en el corazón 💖
          </motion.p>
        )}

        {clicked && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl text-white font-bold bg-purple-600/40 backdrop-blur-md px-8 py-4 rounded-2xl inline-block"
          >
            Preparando algo especial para ti... ✨
          </motion.div>
        )}
      </div>
    </section>
  );
}
