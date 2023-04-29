import React, { useContext, useState } from "react";
import './index.css'
import './darkslider.css'

  import {ReactComponent as LogoChords} from '../images/cm.svg'
  import {ReactComponent as LogoaboutUs} from '../images/aboutUs.svg'
  import {ReactComponent as Logomusicalartist} from '../images/musical-artist.svg'
  import {ReactComponent as Logomusicalsong} from '../images/musical-note.svg'
  import {ReactComponent as Logomusicaltop} from '../images/musical-top.svg'
  import {ReactComponent as LogoArticleIco} from '../images/header-article-icon.svg'
import qrcode from '../images/qr-code.svg'
import vkIco from '../images/vk_new.svg'
import instIco from '../images/instagram_new.svg'
import tgIco from '../images/telegram_new.svg'
import githunIco from '../images/github_new.png'
import youtubeIco from '../images/youtube_new.svg'
import headerArticleIco from '../images/header-article-icon.svg'
import { Link } from "react-router-dom";
import {ThemeContext } from "../../App";

const Footer = (props) => {

  //dark theme --
  const {theme, setTheme} = useContext(ThemeContext)

  let footerClasses = 'footer';
  let footerPromoBtnClasses = 'footer-promo-buttons';
  let footerDarkModeTextClasses = 'footer-menu-darkmode-text'
  if (theme === true) {
    footerClasses += ' footer-dark'
    footerPromoBtnClasses += ' footer-dark-promo *';
    footerDarkModeTextClasses += ' dark-text-blue'
  }
  console.log({theme})

  

  

    return (
<footer className={footerClasses}>
        <div className='footer-promo'>

          <div className='footer-promo-hover'>
            <button className={footerPromoBtnClasses}>
              <LogoChords className='footer-promo-imgs'></LogoChords>
              <Link to='/chords' className="footer-promo-link"><p className='footer-promo-text'>Аккорды</p></Link>
            </button>
          </div>
  
          <div className='footer-promo-hover'>
            <button className={footerPromoBtnClasses}>
              <LogoArticleIco className='footer-promo-imgs'></LogoArticleIco>
              <Link to='/articles' className="footer-promo-link"><p className='footer-promo-text'>Статьи</p></Link>
            </button>
          </div>
      
          <div className='footer-promo-hover'>
            <button className={footerPromoBtnClasses}>
              <LogoaboutUs className='footer-promo-imgs'></LogoaboutUs>
              <Link to='/aboutUs' className="footer-promo-link"><p className='footer-promo-text'>О разработчике</p></Link>
            </button>
          </div>
        
          <div className='footer-promo-hover'>
            <button className={footerPromoBtnClasses}>
              <Logomusicalartist className='footer-promo-imgs'></Logomusicalartist>
              <Link to='/artists' className="footer-promo-link"><p className='footer-promo-text'>Исполнители</p></Link>
            </button>
          </div>
          
          <div className={footerPromoBtnClasses}>
            <button className='footer-promo-buttons'>
              <Logomusicalsong className='footer-promo-imgs'></Logomusicalsong>
              <Link to='/songs' className="footer-promo-link"><p className='footer-promo-text'>Композиции</p></Link>
            </button>
          </div>
        
          <div className={footerPromoBtnClasses}>
            <button className='footer-promo-buttons'>
              <Logomusicaltop className='footer-promo-imgs'></Logomusicaltop>
              <Link to='/topChords' className="footer-promo-link"><p className='footer-promo-text'>Топ подборов</p></Link>
            </button>
          </div>
         
        </div>
        <div className='footer-downline'>
          <div className='footer-qr'>
            <img src={qrcode} className='footer-qr-svg'></img>
          </div>
          <div className='footer-menu'>
            <p className='footer-head'>Исполнители</p>
            <a className='footer-menu-text'>Кино</a>
            <a className='footer-menu-text'>Наутилус Пампилиус</a>
            <a className='footer-menu-text'>Порнофильмы</a>
            <a className='footer-menu-text'>ДДТ</a>
          </div>

          <div className='footer-menu'>
            <p className='footer-head'>Популярные статьи</p>
            <a className='footer-menu-text'>Блатные аккорды</a>
            <a className='footer-menu-text'>О Наутилус Пампилиус</a>
            <a className='footer-menu-text'>Флажолеты</a>
            <a className='footer-menu-text'>Тональности</a>
          </div>

          <div className='footer-menu'>
            <p className='footer-head'>Информация</p>
            <a className='footer-menu-text'>Как создать подбор</a>
            <a className='footer-menu-text'>Подбор тональности</a>
            <a className='footer-menu-text'>Правильный строй</a>
            <a className='footer-menu-text'>Список аккордов</a>
          </div>

          <div className='footer-menu-contacts'>
            <p className='footer-head'>Контакты</p>
            <p className='footer-menu-contacts-text'>2023.08.21 Kamikadzes11@gmail.com; Все права защищены ФСКН. Беларусь, Минская обл. Минск, 220332</p>
            <div className='footer-menu-social'>
            <a>
              <img src={tgIco} className='footer-menu-social-ico'></img>
            </a>
            <a>
              <img src={vkIco} className='footer-menu-social-ico'></img>
            </a>
            <a>
              <img src={instIco} className='footer-menu-social-ico'></img>
            </a>
            <a>
              <img src={githunIco} className='footer-menu-social-ico'></img>
            </a>
            <a>
              <img src={youtubeIco} className='footer-menu-social-ico'></img>
            </a>
          </div>
          </div>

          <div className='footer-menu-darkmode'>
            <p className={footerDarkModeTextClasses}>Темный режим</p>
            <label class="footer-menu-checkbox">
              <input 
              type="checkbox"
              checked={theme} 
              onChange={() => {
                setTheme(!theme)
                }}/>
              <span class="footer-menu-checkbox-switch"></span>
            </label>
          </div>
          
        </div>
       
      </footer>
    )
}

export default Footer