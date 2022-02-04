import React from 'react';
import './topbar.scss'
import {Mail, WhatsApp, LinkedIn, GitHub} from '@material-ui/icons'

const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
  <div className={'topbar ' + (menuOpen && 'active')}>
    <div className="wrapper">
      <div className="left">
        <a href='#intro' className='logo'>One-D</a>
        <div className="itemContainer">
        <a href='#contact'>
          <WhatsApp className='icon'/>
          <span>+34 662 382 399</span>
          </a>
        </div>
        <div className="itemContainer">
        <a href='#contact'>
          <Mail className='icon'/>
          <span>juandimena34@gmail.com</span>
          </a>
        </div>
        <div className="itemContainer">
        <a href='https://linkedin.com/in/juandi-mena' target='_blank' rel='noreferrer'>
          <LinkedIn className='icon'/>
          <span>Juandi Mena</span>
          </a>
        </div>
        <div className="itemContainer">
          <a href='https://github.com/JuandiM' target='_blank' rel='noreferrer'>
          <GitHub className='icon'/>
          <span>JuandiM</span>
          </a>
        </div>
      </div>
      <div className="right">
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Topbar;
