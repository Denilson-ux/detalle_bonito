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

  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-br from-gray-50 via-rose-50 to-pink-50 relative overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
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
            <span className="text-5xl">💝</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-3">
            Nuestra Historia de Amor
          </h1>
          <p className="text-gray-500 text-lg italic max-w-2xl mx-auto">
            Tres capítulos de una historia que apenas comienza
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-rose-300" />
            <span className="text-rose-400">❤</span>
            <div className="h-px w-16 bg-rose-300" />
          </div>
        </motion.div>

        {/* Timeline horizontal con tarjetas compactas */}
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
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                {/* Header con número */}
                <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-5 py-3 flex items-center justify-between">
                  <span className="text-white font-bold text-sm">Capítulo {memory.id}</span>
                  <span className="text-2xl">{i === 0 ? '✨' : i === 1 ? '💕' : '❤️'}</span>
                </div>

                {/* Imagen COMPACTA - 200px */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Contenido */}
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                    {memory.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{memory.date}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {memory.description}
                  </p>

                  <button
                    onClick={() => setSelected(memory)}
                    className="w-full mt-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                  >
                    <span>Leer Historia</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="inline-flex items-center gap-4 bg-white px-10 py-5 rounded-full shadow-lg border border-gray-100">
            <span className="text-2xl">💕</span>
            <p className="text-gray-600 italic">Cada momento contigo es un tesoro</p>
            <span className="text-2xl">💕</span>
          </div>
        </motion.div>
      </div>

      {/* Modal profesional */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="relative bg-gradient-to-r from-rose-500 to-pink-500 p-8 text-white">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:rotate-90"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-3xl">
                  {selected.id === 1 ? '✨' : selected.id === 2 ? '💕' : '❤️'}
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-1">Capítulo {selected.id}</p>
                  <h2 className="text-3xl font-bold">{selected.title}</h2>
                  <p className="text-white/90 mt-1">{selected.date}</p>
                </div>
              </div>
            </div>

            {/* Contenido scrolleable */}
            <div className="p-8 space-y-6 max-h-[calc(85vh-180px)] overflow-y-auto">
              {/* Imagen mediana en modal */}
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Descripción */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Nuestra Historia</h3>
                <p className="text-gray-600 leading-relaxed">
                  {selected.description}
                </p>
              </div>

              {/* Separador */}
              <div className="flex items-center gap-3 py-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
                <span className="text-rose-400">♥</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
              </div>

              {/* Poema */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-100">
                <div className="flex items-start gap-2 mb-2">
                  <svg className="w-5 h-5 text-rose-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <h4 className="font-semibold text-gray-800">Para ti</h4>
                </div>
                <p className="text-gray-700 italic leading-relaxed whitespace-pre-line text-center">
                  {selected.poem}
                </p>
              </div>
            </div>

            {/* Footer del modal */}
            <div className="px-8 py-5 bg-gray-50 border-t border-gray-100 flex items-center justify-center gap-3 text-2xl">
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
