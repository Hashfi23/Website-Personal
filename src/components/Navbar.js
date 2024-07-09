import React from 'react';

function Navbar({ setCurrentPage }) {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo"><img src="logo st.png" alt="Logo" width="250px" height="40px" /></div>
        <div className="menu">
          <ul>
            <li><button onClick={() => setCurrentPage('beranda')}>Beranda</button></li>
            <li><button onClick={() => setCurrentPage('visimisi')}>Visi-Misi</button></li>
            <li><button onClick={() => setCurrentPage('fakultas')}>Fakultas</button></li>
            <li><button onClick={() => setCurrentPage('kontak')}>Kontak</button></li>
            <li><button onClick={() => setCurrentPage('pendaftaran')} className="tbl-biru">Pendaftaran</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
