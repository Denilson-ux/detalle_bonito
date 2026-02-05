'use client';
import { motion } from 'framer-motion';

export default function FloatingHearts() {
  // Posiciones fijas para evitar errores de hidratación
  const hearts = [
    { x: 10, delay: 0 },
    { x: 25, delay: 1 },
    { x: 40, delay: 2 },
    { x: 55, delay: 3 },
    { x: 70, delay: 4 },
    { x: 85, delay: 5 },
    { x: 15, delay: 1.5 },
    { x: 50, delay: 2.5 },
    { x: 80, delay: 3.5 },
    { x: 30, delay: 4.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-4xl"
          initial={{
            x: `${heart.x}vw`,
            y: '110vh',
            opacity: 0.6,
            scale: 0.7
          }}
          animate={{
            y: '-10vh',
            rotate: 360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear'
          }}
        >
          {['❤️', '💕', '💖', '💗', '💝', '💘'][i % 6]}
        </motion.div>
      ))}
    </div>
  );
}
