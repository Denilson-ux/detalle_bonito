'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  poem: string;
  image: string;
}

const memories: Memory[] = [
  {
    id: 1,
    title: 'El Día que nos Conocimos',
    date: '14 de Febrero, 2024',
    description: 'Ese día el universo conspiró para que nuestros caminos se cruzaran. Tu sonrisa iluminó mi mundo y supe que algo mágico estaba comenzando.',
    poem: 'En tus ojos encontré un universo,\nen tu risa, la melodía más bella,\ny en tu corazón, mi hogar eterno.',
    image: '/photos/foto1.jpg',
  },
  {
    id: 2,
    title: 'Nuestra Primera Cita',
    date: '20 de Marzo, 2024',
    description: 'Nervios, risas y una conexión que no podíamos negar. Cada minuto a tu lado se convirtió en horas que pasaron volando.',
    poem: 'Con cada palabra compartida,\ncon cada mirada robada,\nme enamoraba más de ti.',
    image: '/photos/foto2.jpg',
  },
  {
    id: 3,
    title: 'El Día que Dijimos "Te Amo"',
    date: '15 de Mayo, 2024',
    description: 'Tres palabras que cambiaron todo. En ese momento supe que quería pasar el resto de mi vida haciéndote feliz.',
    poem: 'Te amo en los amaneceres,\nte amo en las noches estrelladas,\nte amo hoy y siempre.',
    image: '/photos/foto3.jpg',
  },
];

export default function Timeline() {
  const [selected, setSelected] = useState<Memory | null>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-black relative overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-300 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-7xl">💝</span>
          </div>
          <h1 
            className="text-6xl md:text-7xl font-serif font-bold text-white mb-4"
            style={{
              textShadow: '3px 3px 10px rgba(0,0,0,1), 0 0 30px rgba(255,215,0,0.5)'
            }}
          >
            Nuestra Historia de Amor
          </h1>
          <p 
            className="text-white text-xl md:text-2xl italic max-w-2xl mx-auto font-bold"
            style={{
              textShadow: '2px 2px 6px rgba(0,0,0,1), 0 0 20px rgba(255,215,0,0.3)'
            }}
          >
            Tres capítulos de una historia que apenas comienza
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-yellow-300" />
            <span className="text-yellow-300 text-2xl">❤</span>
            <div className="h-1 w-16 bg-yellow-300" />
          </div>
        </motion.div>

        {/* Grid horizontal responsive: Mobile 1 col, Tablet 2 col, Desktop 3 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, i) => (
            <motion.article
              key={memory.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              {/* Caja/Div de la memoria */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-yellow-300/30 hover:border-yellow-300/60">
                {/* Header con número */}
                <div className="bg-gradient-to-r from-yellow-500 to-amber-500 px-6 py-4 flex items-center justify-between">
                  <span className="text-white font-bold text-base">Capítulo {memory.id}</span>
                  <span className="text-3xl">{i === 0 ? '✨' : i === 1 ? '💕' : '❤️'}</span>
                </div>

                {/* Imagen responsive REDUCIDA: Mobile 192px, Desktop 224px */}
                <div className="relative h-48 md:h-56 bg-gradient-to-br from-rose-900/30 to-pink-900/30 overflow-hidden">
                  {!imageErrors[memory.id] ? (
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={() => handleImageError(memory.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-yellow-300/60">
                      <svg className="w-20 h-20 mb-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-semibold">Imagen no disponible</p>
                      <p className="text-xs mt-1">Agrega foto{memory.id}.jpg</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                </div>

                {/* Contenido con textos BLANCOS */}
                <div className="p-6 space-y-3">
                  <h3 
                    className="text-2xl md:text-3xl font-bold text-white group-hover:text-yellow-300 transition-colors"
                    style={{
                      textShadow: '2px 2px 6px rgba(0,0,0,1), 0 0 20px rgba(255,215,0,0.3)'
                    }}
                  >
                    {memory.title}
                  </h3>
                  
                  <div 
                    className="flex items-center gap-2 text-base text-white font-bold"
                    style={{
                      textShadow: '1px 1px 3px rgba(0,0,0,1)'
                    }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{memory.date}</span>
                  </div>

                  <p 
                    className="text-white text-base leading-relaxed line-clamp-3 font-semibold"
                    style={{
                      textShadow: '1px 1px 4px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,0.5)'
                    }}
                  >
                    {memory.description}
                  </p>

                  <button
                    onClick={() => setSelected(memory)}
                    className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white py-3 px-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 shadow-lg"
                  >
                    <span>Leer Historia</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Decoración inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-md px-12 py-6 rounded-full shadow-xl border-2 border-yellow-300/40">
            <span className="text-3xl">💕</span>
            <p 
              className="text-white italic font-bold text-lg"
              style={{
                textShadow: '2px 2px 6px rgba(0,0,0,1), 0 0 15px rgba(255,215,0,0.3)'
              }}
            >
              Cada momento contigo es un tesoro
            </p>
            <span className="text-3xl">💕</span>
          </div>
        </motion.div>
      </div>

      {/* Modal mejorado */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border-2 border-yellow-300/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="relative bg-gradient-to-r from-yellow-500 to-amber-500 p-8 text-white">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:rotate-90"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-4xl">
                  {selected.id === 1 ? '✨' : selected.id === 2 ? '💕' : '❤️'}
                </div>
                <div>
                  <p className="text-white/90 text-base mb-1 font-semibold">Capítulo {selected.id}</p>
                  <h2 className="text-3xl md:text-4xl font-bold">{selected.title}</h2>
                  <p className="text-white text-lg mt-1">{selected.date}</p>
                </div>
              </div>
            </div>

            {/* Contenido scrolleable */}
            <div className="p-8 space-y-6 max-h-[calc(90vh-220px)] overflow-y-auto bg-black/50">
              {/* Imagen en modal */}
              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-rose-900/30 to-pink-900/30">
                {!imageErrors[selected.id] ? (
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(selected.id)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-yellow-300/60">
                    <svg className="w-24 h-24 mb-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-base font-medium">Imagen no disponible</p>
                  </div>
                )}
              </div>

              {/* Descripción */}
              <div>
                <h3 
                  className="text-xl font-bold text-white mb-3"
                  style={{
                    textShadow: '2px 2px 6px rgba(0,0,0,1), 0 0 15px rgba(255,215,0,0.3)'
                  }}
                >
                  Nuestra Historia
                </h3>
                <p 
                  className="text-white text-lg leading-relaxed font-semibold"
                  style={{
                    textShadow: '1px 1px 4px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,0.5)'
                  }}
                >
                  {selected.description}
                </p>
              </div>

              {/* Separador */}
              <div className="flex items-center gap-3 py-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />
                <span className="text-yellow-300 text-2xl">♥</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />
              </div>

              {/* Poema */}
              <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 rounded-xl p-8 border-2 border-yellow-300/40">
                <div className="flex items-start gap-2 mb-3">
                  <svg className="w-6 h-6 text-yellow-300 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <h4 
                    className="font-bold text-white text-lg"
                    style={{
                      textShadow: '2px 2px 4px rgba(0,0,0,1)'
                    }}
                  >
                    Para ti
                  </h4>
                </div>
                <p 
                  className="text-white italic leading-relaxed whitespace-pre-line text-center text-lg font-semibold"
                  style={{
                    textShadow: '1px 1px 4px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,0.5)'
                  }}
                >
                  {selected.poem}
                </p>
              </div>
            </div>

            {/* Footer del modal */}
            <div className="px-8 py-5 bg-gradient-to-r from-yellow-900/50 to-amber-900/50 border-t-2 border-yellow-300/40 flex items-center justify-center gap-4 text-3xl">
              <span>💖</span>
              <span>✨</span>
              <span>💕</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
