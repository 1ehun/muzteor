import React, { useContext, useRef, useState } from 'react';
import './index.css'

import {ReactComponent as LogoHead} from '../images/main-logo.svg'
import logoIco from '../images/header-cat-icon.png'
import logolenc from '../images/header-lens-icon.svg'
import {ReactComponent as LogoDark} from '../images/header-darkmode-icon.svg'
import plusIco from '../images/plus-icon.svg'
import {ReactComponent as LogoNotification} from '../images/header-notification-icon.svg'
import {ReactComponent as LogoArticleIco} from '../images/header-article-icon.svg'

import { Link } from 'react-router-dom';
import Sign from '../Pages/Sign';
import useOutsideClick from '../../hooks/useOutsideClick';
import Modal from '../Modal';
import { ThemeContext } from '../../App';

const Header = (props) => {

// dark theme --
  const {theme, setTheme} = useContext(ThemeContext)
  console.log(theme + 'SS')

  let headerClasses = 'header';
  let headerLogoClasses= 'header-logo';
  let headerLogoDarkClasses = 'header-darkmode-logo';
  let headerDarkmodeTextClasses = 'header-darkmode-text';
  let headerLogoArticleClasses = 'header-article-ico';
  let headerLogoNotifClasses = 'header-notification-ico'

  if (theme === true) {
    headerClasses += ' header-dark'
    headerLogoClasses += ' header-logo-dark *'
    headerLogoDarkClasses += ' header-logo-dark *'
    headerDarkmodeTextClasses += ' dark-text-blue'
    headerLogoArticleClasses += ' header-logo-dark-invert *'
    headerLogoNotifClasses += ' header-logo-dark-invert *'
  }


//Modal <--

  const [isSignModalOpen,setIsSignModalOpen] = useState(false);

  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => setIsSignModalOpen(false));

  const closeModal = () => {
    setIsSignModalOpen(!isSignModalOpen)
  }

//Modal -->

    return (
        <header className={headerClasses}>
        <div className='header-left'>
          <div >
            <LogoHead className={headerLogoClasses} width='200px'></LogoHead>
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
            <button className='header-darkmode-button' onClick={() => {setTheme(!theme)}}>
              <span className='header-darkmode-button-span'>
                <LogoDark className={headerLogoDarkClasses}></LogoDark>
                <div className={headerDarkmodeTextClasses}>Темный режим</div>
              </span>
            </button>
          </div>
        </div>

        <div className='header-right'>
          <button className='header-button-add'>
            <img src={plusIco}></img>
            <div style={{paddingLeft: '10px'}}><Link to='/addTabs' className='header-button-text'>Добавить подбор</Link></div>
          </button>
          <a className='header-article'>
            <Link to='/addArticle'><LogoArticleIco className={headerLogoArticleClasses}></LogoArticleIco></Link>

          </a>
          <a className='header-notification'>
            <LogoNotification className={headerLogoNotifClasses}></LogoNotification>
          </a>
          <div className='header-avatar'>

          <button
          onClick={() => setIsSignModalOpen(!isSignModalOpen)}
          className='header-avatar-text'
          >А</button>  

          {isSignModalOpen && (
            <Modal ref={modalRef} value={<Sign close={closeModal}/>} />
          )}
        {/* fdadfdsaf */}
          </div>
        </div>
      </header>
    )
}

export default Header