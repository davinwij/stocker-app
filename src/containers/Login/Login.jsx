import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import email from '../../assets/email.svg'
import passw from '../../assets/passw.png'
import { useNavigte } from 'react-router-dom'


function Login() {
  return (
    <>
    <div className="container">
        <div className="img-cover">
            <div className="text">
                <h2 className="title mb">Selamat Datang!</h2>
                <p className="para">Stocker adalah aplikasi yang memiliki tujuan untuk mendukung perusahaan dalam melakukan manajemen stok barang </p>
                <img src={logo} alt="" />
            </div>
        </div>
        <div className="login">
            <div className="text-right">
                <h2 className="title r-color">Masuk ke Stocker</h2>
                <p className="para mt">Gunakan email dan password :</p>
                <form>
                    <div className="input-email">                        
                        <img src={email} alt="" />                        
                        <input className="email" type="text" name="email" id="" placeholder="Email" />
                    </div>
                    <div className="input-password">
                        <img src={passw} alt="" />
                        <input className="password" type="password" name="password" id="" placeholder="Password" />
                    </div>        
                    <button className="btn">MASUK</button>                                    
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login