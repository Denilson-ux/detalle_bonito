'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const photos = [
  { 
    src: '/photos/foto1.jpg', 
    title: 'Nuestro Momento Especial',
    description: 'Cada instante contigo es único' 
  },
  { 
    src: '/photos/foto2.jpg', 
    title: 'Juntos Por Siempre',
    description: 'Tu sonrisa ilumina mi mundo'
  },
  { 
    src: '/photos/foto3.jpg', 
    title: 'Amor Eterno',
    description: 'Contigo, todo tiene sentido'
  },
];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-black">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-300 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-white rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-gradient-gold" style={{ fontFamily: 'Georgia, serif' }}>
            Nuestros Recuerdos
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
            Cada foto cuenta una historia, cada momento es único e irrepetible
          </p>
        </motion.div>

        {/* Galería de fotos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedPhoto(index)}
            >
              {/* Contenedor de la foto */}
              <div className="relative overflow-hidden rounded-2xl card-glass-black p-3 flex flex-col items-stretch h-full">
                {/* Imagen */}
                <div className="relative w-full h-72 md:h-64 lg:h-72 overflow-hidden rounded-xl">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Efecto de brillo al hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Información de la foto */}
                <div className="relative pt-5 pb-3 px-2 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 text-gradient-gold" style={{ fontFamily: 'Georgia, serif' }}>
                    {photo.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base">
                    {photo.description}
                  </p>
                </div>

                {/* Borde dorado animado */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-yellow-300/0 group-hover:border-yellow-300/50 transition-all duration-500" />
                
                {/* Esquinas decorativas */}
                <div className="pointer-events-none absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-yellow-300/0 group-hover:border-yellow-300/60 rounded-tl-xl transition-all duration-500" />
                <div className="pointer-events-none absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-yellow-300/0 group-hover:border-yellow-300/60 rounded-tr-xl transition-all duration-500" />
                <div className="pointer-events-none absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-yellow-300/0 group-hover:border-yellow-300/60 rounded-bl-xl transition-all duration-500" />
                <div className="pointer-events-none absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-yellow-300/0 group-hover:border-yellow-300/60 rounded-br-xl transition-all duration-500" />
              </div>

              {/* Número de foto */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full card-glass-black border-2 border-yellow-300/50 flex items-center justify-center text-white font-bold text-xl glow-gold"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Texto decorativo inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-white/60 italic" style={{ fontFamily: 'Georgia, serif' }}>
            “En cada foto, un pedazo de mi corazón late por ti”
          </p>
        </motion.div>
      </div>

      {/* Modal para foto ampliada */}
      {selectedPhoto !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[80vh] w-full rounded-2xl overflow-hidden card-glass-black p-4 flex items-center justify-center">
              <div className="relative w-full h-[60vh]">
                <Image
                  src={photos[selectedPhoto].src}
                  alt={photos[selectedPhoto].title}
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-gold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                {photos[selectedPhoto].title}
              </h3>
              <p className="text-xl text-white/80">
                {photos[selectedPhoto].description}
              </p>
            </div>

            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-4 -right-4 w-12 h-12 rounded-full card-glass-black border-2 border-yellow-300/50 flex items-center justify-center text-white text-2xl hover:rotate-90 transition-transform duration-300 glow-gold"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
