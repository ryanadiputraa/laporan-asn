import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Help.css';
import DataSection from '../../../assets/help-img/data-section.JPG';
import DataInvalid from '../../../assets/help-img/data-invalid.JPG';
import DataValid from '../../../assets/help-img/data-valid.JPG';
import TodosInput from '../../../assets/help-img/todos-input.JPG';
import MultiTodo from '../../../assets/help-img/multi-todo.JPG';
import TodosList from '../../../assets/help-img/todos-list.JPG';
import SuccesAlert from '../../../assets/help-img/succes-alert.JPG';

const Help = () => {
  return(
    <div className="help">
      <h2 className="text-center mt-4">Panduan Penggunaan</h2>
      <div className="help-text mt-4">
        <ul>
          <li>
            <h4 className="section-title">Data ASN</h4>
            <img className="section-img" src={DataSection} alt="data-section"/>
            <p className="section-text">Masukan data ASN lalu klik tombol "SIMPAN".</p>
            <img className="section-img" src={DataInvalid} alt="data-invalid"/>
            <p className="section-text">Apabila data tidak lengkap maka akan tampil peringatan.</p>
            <img className="section-img" src={DataValid} alt="data-valid"/>
            <p className="section-text">Input data berhasil.</p>
          </li>
          <li>
            <h4 className="section-title">Uraian Kegiatan</h4>
            <img className="section-img" src={TodosInput} alt="todos-input"/>
            <p className="section-text">Masukan tanggal laporan, lalu tambahkan waktu, uraian kegiatan, dan keterangan (tidak wajib).</p>
            <img className="section-img" src={MultiTodo} alt="multi-todo"/>
            <p className="section-text">Uraian kegiatan juga dapat lebih dari 1 pada waktu yang sama, namun dengan catatan: uraian kegiatan yang berada di bawah atau tengah tidak memiliki keterangan.</p>
          </li>
          <li>
            <h4 className="section-title">Data ASN</h4>
            <img className="section-img" src={TodosList} alt="todos-list"/>
            <p className="section-text">Setelah ditambahkan, akan tampil pada daftar uraian kegiatan. Klik tombol hapus untuk menghapus uraian kegiatan.</p>
            <img className="section-img" src={SuccesAlert} alt="success-alert"/>
            <p className="section-text">Klik tombol cetak lalu periksa unduhan.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help;