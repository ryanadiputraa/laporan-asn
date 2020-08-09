import React from 'react';
import './Footer.css';

const Footer = () => {

  const webUrl = 'https://laporan-pns.netlify.app/';

  return (
    <div className="footer mt-5">
      <h4 className="text-center">Bagikan aplikasi</h4>
      <div className="text-center social-share-links">
        <ul>
          <li><a href={'https://www.facebook.com/sharer/sharer.php?=' + webUrl} className="facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-2x"></i></a></li>
          <li><a href={'whatsapp://send?text=' + webUrl}><i className="fab fa-whatsapp fa-2x"></i></a></li>
        </ul>
      </div>
      <p className="text-center">Copyright © {new Date().getFullYear()} - Ryan Adi Putra</p>
    </div>
  )
}

export default Footer;