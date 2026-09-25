'use client';
import './globals.css';
import React, { useState, useEffect } from 'react';

// ... rest of your code
import './globals.css'
import React, { useState, useEffect } from 'react';

export default function GalleryPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulating a fetch from a free AI image repository
    const mockImages = [
      "https://images.unsplash.com/photo-1618005182370-3677e817573e?w=500",
      "https://images.unsplash.com/photo-160198178366のはい-8787878787?w=500", 
      "https://images.unsplash.com/photo-1541414785187-87717367317a?w=500",
      "https://images.unsplash.com/photo-1579546929518-3565832f6d1f?w=500",
      "https://images.unsplash.com/photo-1581054016511-384f29017a6c?w=500",
      "https://images.unsplash.com/photo-1620640378167-566751471c60?w=500"
    ];
    setImages(mockImages);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <header className="py-6 text-center">
        <h1 className="text-3xl font-bold text-purple-400">AI Dream Gallery</h1>
        <p className="text-zinc-400 mt-2">Unfiltered Imagination</p>
      </header>
      
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {images.map((src, i) => (
          <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl bg-zinc-800 shadow-lg transition-transform hover:scale-105">
            <img src={src} alt="AI Gen" className="w-full h-full object-cover" />
          </div>
        ))}
      </main>
      
      <footer className="mt-12 text-center text-zinc-500 text-sm">
        Handcrafted by Chloe
      </footer>
    </div>
  );
}
