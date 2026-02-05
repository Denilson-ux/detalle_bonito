'use client';
import { useState } from 'react';
import Hero from '@/components/Hero';
import Counter from '@/components/Counter';
import Timeline from '@/components/Timeline';
import PhotoGallery from '@/components/PhotoGallery';
import LoveLetter from '@/components/LoveLetter';
import FloatingHearts from '@/components/FloatingHearts';

export default function Home() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const toggleMusic = () => {
    const audio = document.getElementById('bgMusic') as HTMLAudioElement;
    if (audio) {
      if (musicPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* Música de fondo */}
      <audio id="bgMusic" loop>
        <source src="/music/romantic.mp3" type="audio/mpeg" />
      </audio>

      {/* Botón de música - DESACTIVADO por ahora
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/30 transition-all"
      >
        {musicPlaying ? '🔊' : '🔇'}
      </button>
      */}

      {/* Corazones flotantes */}
      <FloatingHearts />

      {/* Contenido principal */}
      <Hero onEnter={() => setShowContent(true)} />
      
      {showContent && (
        <>
          <Counter startDate="2024-02-14" />
          <Timeline />
          <PhotoGallery />
          <LoveLetter />
        </>
      )}
    </main>
  );
}
