import React from 'react';
import Navbar from './Navbar';

function VisiMisi() {
  return (
    <div>
      <div className='yr'>
        <div className='visi'>
        <h2 >Visi Misi</h2>
        </div>

        <div className='re'>
          <h1 className='uuu' style={{ fontSize: '36px', marginTop: '40px', marginBottom: '20px', textAlign: 'center' }}>Visi</h1>
        <p className='uu8' style={{ textAlign: 'center', color: 'black'}}>“Menjadi perguruan tinggi yang unggul dalam mengembangkan ilmu pengetahuan, teknologi, dan penelitian yang berbasis prinsip berkelanjutan, berwawasan global, inovatif, dan inklusif untuk meningkatkan pembangunan manusia Indonesia secara holistik pada tahun 2048.”</p>
        
        <h2 style={{ fontSize: '36px', marginTop: '40px', marginBottom: '20px', textAlign: 'center' }}>Misi</h2>
        <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
          1. Menyelenggarakan pendidikan berbasis teknologi dan penelitian, berprinsip inklusif, berwawasan global, berkelanjutan, dan bermanfaat.<br />
          2. Menyelenggarakan penelitian yang kolaboratif, interdisipliner, inovatif, dan bermanfaat.<br />
          3. Menyelenggarakan pengabdian kepada masyarakat yang efektif, partisipatif, dan tepat sasaran..<br />
          4. Membangun ekosistem universitas yang berkelanjutan, inklusif, egaliter, suportif, dan demokratis<br/>
          5. Mengembangkan kualitas dan kompetensi civitas akademika.
        </p>
      </div>
      </div>
    </div>
  );
}

export default VisiMisi;
