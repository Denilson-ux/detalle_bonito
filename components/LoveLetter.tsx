'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import confetti from 'canvas-confetti';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    
    // Super explosión de amor
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff0000', '#ff69b4', '#ff1493', '#db7093', '#ffc0cb']
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff0000', '#ff69b4', '#ff1493', '#db7093', '#ffc0cb']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section className="py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 className="text-5xl md:text-7xl font-bold text-white mb-12">
              Tengo algo especial para ti...
            </motion.h2>

            <motion.div
              whileHover={{ scale: 1.1, rotateY: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleOpen}
              className="inline-block cursor-pointer"
            >
              <div className="relative">
                {/* Sobre */}
                <div className="w-80 h-56 bg-gradient-to-br from-red-400 to-pink-600 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white">
                  <div className="text-center">
                    <div className="text-8xl mb-4">💌</div>
                    <p className="text-white text-2xl font-bold">
                      Haz click para abrir
                    </p>
                  </div>
                </div>
                
                {/* Brillo animado */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-yellow-300 rounded-2xl blur-xl -z-10"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ type: 'spring', duration: 1 }}
            className="card-gradient rounded-3xl p-12 shadow-2xl border-2 border-pink-300/50"
          >
            <h2 className="text-5xl font-bold text-center text-white mb-8">
              Para el amor de mi vida ❤️
            </h2>

            <div className="text-white text-xl leading-relaxed space-y-6">
              <TypeAnimation
                sequence={[
                  'Mi amor,\n\nCada día a tu lado es un regalo que atesoro en mi corazón. Desde el momento en que entraste en mi vida, todo cambió para mejor.\n\nEres la razón por la que sonrío cada mañana, la inspiración detrás de cada uno de mis sueños, y la paz que encuentro al final de cada día.\n\nGracias por ser tú, por amarme como lo haces, y por construir conmigo esta hermosa historia que apenas comienza.\n\nEste sitio web es solo una pequeña muestra de todo lo que significas para mí. Lo programé con todo mi amor, poniendo en cada línea de código un pedacito de mi corazón.\n\nTe amo hoy, te amaré mañana, y te amaré por todos los días que me queden de vida.\n\nTuyo para siempre,\nTu enamorado developer ❤️👨‍💻',
                  1000,
                ]}
                wrapper="pre"
                speed={80}
                className="whitespace-pre-wrap text-lg md:text-xl"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 15 }}
              className="mt-12 text-center"
            >
              <div className="text-6xl mb-6">💕✨💖</div>
              <p className="text-pink-200 text-2xl italic">
                Te amo infinitamente
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
