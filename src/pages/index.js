import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <Hero />
      {/* Komponen lainnya akan ditambahkan di sini */}
    </div>
  );
}

export default App;
