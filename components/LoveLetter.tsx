'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Heart {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
}

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [hearts, setHearts] = useState<Heart[]>([]);

  // Generar corazones solo en el cliente
  useEffect(() => {
    const newHearts: Heart[] = [];
    for (let i = 0; i < 15; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 4 + Math.random() * 3
      });
    }
    setHearts(newHearts);
  }, []);

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-black flex items-center justify-center">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
      </div>

      {/* Partículas flotantes de corazones pequeños */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-2xl"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))'
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 360]
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl">💌</span>
            <h2 
              className="text-6xl md:text-7xl font-bold text-white" 
              style={{ 
                fontFamily: 'Georgia, serif',
                textShadow: '3px 3px 10px rgba(0,0,0,1), 0 0 30px rgba(255,215,0,0.5)'
              }}
            >
              Carta de Amor
            </h2>
            <span className="text-6xl">💌</span>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto" />
        </motion.div>

        {/* Sobre/Carta */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Contenedor del sobre */}
          <div className="relative max-w-3xl mx-auto">
            {/* Sobre cerrado */}
            {!isOpen && (
              <motion.div
                className="relative cursor-pointer group"
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Sobre principal */}
                <div className="card-glass-black rounded-2xl p-8 md:p-12 relative overflow-hidden">
                  {/* Sello decorativo */}
                  <div className="absolute top-8 right-8 w-20 h-20 rounded-full card-gold-border flex items-center justify-center text-4xl">
                    ❤️
                  </div>

                  {/* Contenido del sobre */}
                  <div className="text-center py-12">
                    <motion.div
                      animate={{
                        rotate: [0, -5, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }}
                      className="text-8xl mb-6"
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))'
                      }}
                    >
                      💌
                    </motion.div>
                    <h3 
                      className="text-3xl md:text-4xl font-bold text-white mb-4" 
                      style={{ 
                        fontFamily: 'Georgia, serif',
                        textShadow: '3px 3px 8px rgba(0,0,0,1), 0 0 25px rgba(255,215,0,0.5)'
                      }}
                    >
                      Para el amor de mi vida
                    </h3>
                    <p 
                      className="text-xl text-white font-bold mb-8" 
                      style={{
                        textShadow: '2px 2px 6px rgba(0,0,0,1), 0 0 15px rgba(255,215,0,0.3)'
                      }}
                    >
                      Haz click para abrir la carta
                    </p>
                    
                    <motion.div
                      animate={{
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}
                      className="text-yellow-300 text-2xl"
                    >
                      ↓
                    </motion.div>
                  </div>

                  {/* Borde dorado animado */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-yellow-300/40 group-hover:border-yellow-300/70 transition-all duration-500 glow-gold" />
                </div>
              </motion.div>
            )}

            {/* Carta abierta */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="card-glass-black rounded-2xl p-8 md:p-16 relative overflow-hidden">
                  {/* Decoración de esquinas */}
                  <div className="absolute top-0 left-0 w-32 h-32">
                    <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-yellow-300/60 rounded-tl-3xl" />
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32">
                    <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-yellow-300/60 rounded-tr-3xl" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-32 h-32">
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-yellow-300/60 rounded-bl-3xl" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32">
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-yellow-300/60 rounded-br-3xl" />
                  </div>

                  {/* Contenido de la carta */}
                  <div className="relative z-10 max-w-2xl mx-auto">
                    {/* Encabezado */}
                    <div className="text-center mb-12">
                      <p 
                        className="text-white text-lg mb-3 font-bold" 
                        style={{ 
                          fontFamily: 'Georgia, serif',
                          textShadow: '2px 2px 6px rgba(0,0,0,1), 0 0 15px rgba(255,215,0,0.3)'
                        }}
                      >
                        Con todo mi amor
                      </p>
                      <h3 
                        className="text-4xl md:text-5xl font-bold text-white mb-4" 
                        style={{ 
                          fontFamily: 'Georgia, serif',
                          textShadow: '3px 3px 10px rgba(0,0,0,1), 0 0 30px rgba(255,215,0,0.5)'
                        }}
                      >
                        Mi Amor Eterno
                      </h3>
                      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto" />
                    </div>

                    {/* Cuerpo de la carta TODO BLANCO */}
                    <div 
                      className="space-y-6 text-white text-lg md:text-xl leading-relaxed" 
                      style={{ 
                        fontFamily: 'Georgia, serif',
                        textShadow: '2px 2px 6px rgba(0,0,0,1), 0 0 15px rgba(0,0,0,0.8), 0 0 20px rgba(255,215,0,0.2)'
                      }}
                    >
                      <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-white first-letter:mr-2 first-letter:float-left font-bold">
                        Mi amor, cada día que pasa a tu lado es un regalo del cielo. No existen palabras suficientes 
                        para expresar lo que siento cuando estoy contigo. Eres la luz que ilumina mis días más oscuros, 
                        la razón por la que sonrío cada mañana.
                      </p>

                      <p className="font-bold">
                        En tus ojos encuentro el reflejo de un futuro lleno de esperanza y felicidad. Contigo he aprendido 
                        que el amor verdadero no es solo una emoción, sino una decisión diaria de elegirte una y otra vez, 
                        de estar ahí en los buenos y malos momentos.
                      </p>

                      <p className="font-bold">
                        Gracias por ser mi compañera, mi mejor amiga, mi confidente y mi todo. Gracias por llenar mi vida 
                        de color, alegría y amor incondicional. Cada momento contigo es un tesoro que guardo en lo más 
                        profundo de mi corazón.
                      </p>

                      <p 
                        className="text-center italic text-2xl md:text-3xl text-white py-6 font-extrabold" 
                        style={{
                          textShadow: '3px 3px 10px rgba(0,0,0,1), 0 0 30px rgba(255,215,0,0.6), 0 0 50px rgba(255,255,255,0.3)'
                        }}
                      >
                        “Te amo hoy, te amaré mañana y te amaré por siempre”
                      </p>

                      <p className="font-bold">
                        Quiero que sepas que mi amor por ti crece cada día. No importa cuántos obstáculos encontremos en 
                        el camino, siempre estaré a tu lado, tomándote de la mano y caminando juntos hacia nuestros sueños.
                      </p>

                      <p className="font-extrabold text-xl">
                        Eres y siempre serás el amor de mi vida. ❤️
                      </p>
                    </div>

                    {/* Firma */}
                    <div className="mt-12 text-right">
                      <p 
                        className="text-2xl md:text-3xl text-white font-extrabold mb-2" 
                        style={{ 
                          fontFamily: 'Brush Script MT, cursive',
                          textShadow: '3px 3px 8px rgba(0,0,0,1), 0 0 20px rgba(255,215,0,0.5)'
                        }}
                      >
                        Con todo mi amor,
                      </p>
                      <p 
                        className="text-3xl md:text-4xl text-white font-extrabold" 
                        style={{ 
                          fontFamily: 'Brush Script MT, cursive',
                          textShadow: '3px 3px 10px rgba(0,0,0,1), 0 0 25px rgba(255,215,0,0.6)'
                        }}
                      >
                        Tu amor eterno 💕
                      </p>
                    </div>

                    {/* Corazones decorativos */}
                    <div className="flex justify-center gap-4 mt-8">
                      {['❤️', '💕', '💖', '💗', '💓'].map((heart, i) => (
                        <motion.span
                          key={i}
                          className="text-3xl"
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 10, -10, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                          style={{
                            filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))'
                          }}
                        >
                          {heart}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Borde dorado con brillo */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-yellow-300/60 glow-gold" />
                </div>

                {/* Botón para cerrar */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 mx-auto block px-8 py-4 rounded-full card-glass-black border-2 border-yellow-300/70 text-white font-bold text-lg hover:glow-gold transition-all duration-300"
                  style={{ 
                    fontFamily: 'Georgia, serif',
                    textShadow: '2px 2px 6px rgba(0,0,0,1), 0 0 15px rgba(255,215,0,0.3)'
                  }}
                >
                  Cerrar Carta
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
