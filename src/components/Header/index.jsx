import React, { useRef, useState } from 'react';
import './index.css'

import logo from '../images/main-logo.png'
import logoIco from '../images/header-cat-icon.png'
import logolenc from '../images/header-lens-icon.svg'
import logodark from '../images/header-darkmode-icon.png'
import plusIco from '../images/plus-icon.svg'
import HeaderNotifIco from '../images/header-notification-icon.png'
import headerArticleIco from '../images/header-papers-icon.png'
import { Link } from 'react-router-dom';
import Sign from '../Pages/Sign';
import useOutsideClick from '../../hooks/useOutsideClick';
import Modal from '../Modal';

const Header = (props) => {

  const [isSignModalOpen,setIsSignModalOpen] = useState(false);

  

  const modalRef = useRef(null)

  useOutsideClick(modalRef, () => setIsSignModalOpen(false))

  const closeModal = () => {
    setIsSignModalOpen(!isSignModalOpen)
  }

    return (
        <header className='header'>
        <div className='header-left'>
          <div>
            <img src={logo} className='header-logo'></img>
          </div>

          <button className='header-button'>
            <img src={logoIco} className='header-button-icon'></img>
            <div style={{paddingLeft: '5px'}}>Категории</div>
          </button>

          <div className='header-input-container'>
            <input className='header-input' placeholder='Поиск композиций'></input>
            <button className='header-input-button'>
              <img src={logolenc}></img>
            </button>
          </div>
          <div className='header-darkmode'>
            <button className='header-darkmode-button'>
              <span className='header-darkmode-button-span'>
                <img src={logodark} className='header-darkmode-logo'></img>
                <div className='header-darkmode-text'>Темный режим</div>
              </span>
            </button>
          </div>
        </div>

        <div className='header-right'>
          <button className='header-button-add'>
            <img src={plusIco}></img>
            <div style={{paddingLeft: '10px'}}><Link to='/addTabs' className='header-button-text'>Добавить подбор</Link></div>
          </button>
          <a className='header-papers'>
            <img src={headerArticleIco} className='header-papers-ico'></img>
          </a>
          <a className='header-notification'>
            <img src={HeaderNotifIco} className='header-notification-ico'></img>
          </a>
          <div className='header-avatar'>

          <button
          onClick={() => setIsSignModalOpen(!isSignModalOpen)}
          className='header-avatar-text'
          >А</button>  

          {isSignModalOpen && (
            <Modal value={<Sign close={closeModal}/>} />

          )}
          </div>
        </div>
      </header>
    )
}

export default Header