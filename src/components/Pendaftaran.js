import React from 'react';
import App from '../App';

function Pendaftaran() {
  return (

    <div className="pendaftaran-container">
      <div className="goa">
        <h2>Selamat Datang di Pendaftaran Universitas Satya Terra Bhinneka</h2>
        <p>
          Bergabunglah bersama kami di Universitas Satya Terra Bhinneka dan jadilah bagian dari komunitas akademik yang inovatif, inklusif, dan berkomitmen untuk mengubah dunia. Isi formulir di bawah ini untuk mendaftar dan mulai perjalanan akademik Anda bersama kami.
        </p>
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Ingat saya
            </label>
            <a href="#">Lupa Password?</a>
          </div>

          <button type="submit" className="btn">Login</button>

          <div className="register-link">
            <p>Belum punya akun? <a href="#">Daftar</a></p>
          </div>
        </form>
      </div>
    </div>
   
  );
}

export default Pendaftaran;
