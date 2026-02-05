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
    <section className="min-h-screen py-16 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 relative overflow-hidden">
      {/* Patrón de fondo más visible */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle, #f43f5e 1px, transparent 1px)', backgroundSize: '50px 50px'}} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header elegante */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-6xl">💝</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-4">
            Nuestra Historia de Amor
          </h1>
          <p className="text-gray-700 text-xl md:text-2xl italic max-w-2xl mx-auto font-semibold">
            Tres capítulos de una historia que apenas comienza
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-rose-400" />
            <span className="text-rose-500 text-2xl">❤</span>
            <div className="h-1 w-16 bg-rose-400" />
          </div>
        </motion.div>

        {/* Timeline horizontal con tarjetas mejoradas */}
        <div className="grid md:grid-cols-3 gap-8">
          {memories.map((memory, i) => (
            <motion.article
              key={memory.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-rose-200">
                {/* Header con número */}
                <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-4 flex items-center justify-between">
                  <span className="text-white font-bold text-base">Capítulo {memory.id}</span>
                  <span className="text-3xl">{i === 0 ? '✨' : i === 1 ? '💕' : '❤️'}</span>
                </div>

                {/* Imagen MEJORADA - 240px con fallback */}
                <div className="relative h-60 bg-gradient-to-br from-rose-100 to-pink-100 overflow-hidden">
                  {!imageErrors[memory.id] ? (
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={() => handleImageError(memory.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-rose-300">
                      <svg className="w-20 h-20 mb-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-medium">Imagen no disponible</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Contenido con mejor contraste */}
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
                    {memory.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-base text-gray-700 font-semibold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{memory.date}</span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed line-clamp-3 font-medium">
                    {memory.description}
                  </p>

                  <button
                    onClick={() => setSelected(memory)}
                    className="w-full mt-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-3 px-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 shadow-lg"
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
          <div className="inline-flex items-center gap-4 bg-white px-12 py-6 rounded-full shadow-xl border-2 border-rose-200">
            <span className="text-3xl">💕</span>
            <p className="text-gray-800 italic font-semibold text-lg">Cada momento contigo es un tesoro</p>
            <span className="text-3xl">💕</span>
          </div>
        </motion.div>
      </div>

      {/* Modal profesional mejorado */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="relative bg-gradient-to-r from-rose-500 to-pink-500 p-8 text-white">
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
            <div className="p-8 space-y-6 max-h-[calc(90vh-220px)] overflow-y-auto">
              {/* Imagen en modal */}
              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-rose-100 to-pink-100">
                {!imageErrors[selected.id] ? (
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(selected.id)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-rose-300">
                    <svg className="w-24 h-24 mb-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-base font-medium">Imagen no disponible</p>
                  </div>
                )}
              </div>

              {/* Descripción */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nuestra Historia</h3>
                <p className="text-gray-800 text-lg leading-relaxed font-medium">
                  {selected.description}
                </p>
              </div>

              {/* Separador */}
              <div className="flex items-center gap-3 py-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
                <span className="text-rose-500 text-2xl">♥</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
              </div>

              {/* Poema */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 border-2 border-rose-200">
                <div className="flex items-start gap-2 mb-3">
                  <svg className="w-6 h-6 text-rose-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <h4 className="font-bold text-gray-900 text-lg">Para ti</h4>
                </div>
                <p className="text-gray-800 italic leading-relaxed whitespace-pre-line text-center text-lg font-medium">
                  {selected.poem}
                </p>
              </div>
            </div>

            {/* Footer del modal */}
            <div className="px-8 py-5 bg-gradient-to-r from-rose-50 to-pink-50 border-t-2 border-rose-200 flex items-center justify-center gap-4 text-3xl">
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
