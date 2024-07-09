import React from 'react';
import App from '../App';

function Fakultas() {
  return (
    <div>
      <div className="judul">
        <h3>Fakultas</h3>
        <div className="keterangan">
          <p>
            Secara berkelanjutan, Universitas Satya Terra Bhinneka akan menyelenggarakan
            Fakultas dan Program Studi yang relevan dengan kebutuhan pasar yang terus berubah.
          </p>
        </div>
      </div>

      <div className="fakultas-section">
        <div className="ekonomi">
          <img src="eko.jpg" alt="gambar" className="img" />
          <div className="nama">Fakultas Ekonomi dan Bisnis</div>
        </div>

        <div className="it">
          <img src="tek.jpg" alt="gambar" className="img" />
          <div className="hitung">Fakultas Teknologi dan Ilmu Komputer</div>
        </div>

        <div className="kesehatan">
          <img src="kes.jpg" alt="gambar" className="img" />
          <div className="mulai">Fakultas Kesehatan</div>
        </div>

        <div className="pertanian">
          <img src="per.jpg" alt="gambar" className="img" />
          <div className="sama">Fakultas Pertanian</div>
        </div>
      </div>
    </div>
  );
}


export default Fakultas;
