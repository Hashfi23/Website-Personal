// App.js
import React, { useState } from 'react';
import Beranda from './components/Beranda';
import VisiMisi from './components/VisiMisi';
import Fakultas from './components/Fakultas';
import Kontak from './components/Kontak';
import Pendaftaran from './components/Pendaftaran';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import komponen Footer
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('beranda');

  const renderPage = () => {
    switch (currentPage) {
      case 'beranda':
        return <Beranda />;
      case 'visimisi':
        return <VisiMisi setCurrentPage={setCurrentPage} />;
      case 'fakultas':
        return <Fakultas setCurrentPage={setCurrentPage} />;
      case 'kontak':
        return <Kontak setCurrentPage={setCurrentPage} />;
      case 'pendaftaran':
        return <Pendaftaran setCurrentPage={setCurrentPage} />;
      default:
        return <Beranda />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      <section id={currentPage}>
        {renderPage()}
      </section>
      <Footer /> {/* Tambahkan komponen Footer di bagian bawah */}
    </div>
  );
}

export default App;
