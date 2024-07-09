// components/Footer.jsx
import React from 'react';
import App from '../App';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Hubungi Kami</h3>
          <p>Kampus Universitas Satya Terra Bhinneka</p>
        </div>
        <div className="footer-section">
          <h3>VISI_MISI</h3>
          <p>Alma mater generasi muda yang kritis, kompeten, berdaya saing, serta berkesadaran ekologis dan multikultural.</p>
        </div>
        <div className="footer-section">
          <h3>Menu</h3>
          <ul>
            <li>Visi Misi</li>
            <li>Kontak</li>
            <li>Fakultas</li>
            <li>Pendaftaran</li>
          </ul>
          
        </div>
        </div>
      <h2>© 2022 Universitas Satya Terra Bhinneka</h2>
    </footer>
  );
}

export default Footer;
