'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';

const photos = [
  { id: 1, src: '/photos/gallery1.jpg', title: 'Momentos felices' },
  { id: 2, src: '/photos/gallery2.jpg', title: 'Risas sin fin' },
  { id: 3, src: '/photos/gallery3.jpg', title: 'Amor verdadero' },
  { id: 4, src: '/photos/gallery4.jpg', title: 'Juntos para siempre' },
  { id: 5, src: '/photos/gallery5.jpg', title: 'Nuestros sueños' },
  { id: 6, src: '/photos/gallery6.jpg', title: 'Amor eterno' },
];

export default function PhotoGallery() {
  const [selected, setSelected] = useState<typeof photos[0] | null>(null);

  const handleClick = (photo: typeof photos[0]) => {
    setSelected(photo);
    
    // Confetti al abrir foto
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0000', '#ff69b4', '#ff1493']
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center text-white mb-20"
        >
          Nuestros Momentos Mágicos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateZ: 5 }}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
              onClick={() => handleClick(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">{photo.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de foto ampliada */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.5, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring' }}
            className="relative max-w-5xl w-full h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={selected.title}
              fill
              className="object-contain rounded-2xl"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-12 h-12 text-2xl hover:scale-125 transition-transform"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
