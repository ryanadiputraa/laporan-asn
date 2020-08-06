import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const About = () => {
  return (
    <div className="about container">
      <h2 className="text-center mt-4">Aplikasi Laporan ASN</h2>
      <p className="about-text mt-4 text-justify">Aplikasi ini dibuat untuk Aparatur Sipil Negara (ASN) dalam pembuatan laporan kegiatan harian. Aplikasi berbasis web menerima dan mengelola input yang kemudian diubah dalam bentuk pdf, dengan format tabel yang telah disesuaikan. Untuk panduan penggunaan dapat dilihat pada menu bantuan. Klik icon sosial media di bawah untuk membagikan aplikasi</p>
    </div>
  )
}

export default About;