import React from 'react';
import App from '../App';

function Kontak() {
  return (
    <div>
      <header className="container">
        <h1>Kontak</h1>
        <p>Kami dengan senang hati mendengar opini, masukan, atau pertanyaan Anda</p>
      </header>
      <main>
        <div className="container">
          <div className="contact-info">
            <h2>Alamat</h2>
            <p>Jl. Sunggal Gg. Bakul, Sunggal, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20128</p>
          </div>
          <div className="contact-info">
            <h2>Email</h2>
            <p><a href="mailto:office@satyaterrabhinneka.ac.id">office@satyaterrabhinneka.ac.id</a></p>
          </div>
          <div className="contact-info">
            <h2>Telp</h2>
            <p>(061) 8457702</p>
          </div>
        </div>
      </main>
      <section className="vision">
        <div className="container">
          <h2>Mari menjadi bagian dari Universitas Satya Terra Bhinneka:</h2>
          <p>Berkebhinekaan, Berkelanjutan. Alma mater generasi muda yang kritis, kompeten, berdaya saing, serta berkesadaran ekologis dan multikultural.</p>
        </div>
      </section>
    </div>
  );
}
export default Kontak;
