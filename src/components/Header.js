import gsap from 'gsap'
import React, {useEffect, useRef}from 'react'
import Button from './Button'

const Header = () => {

  return(
    <div className="navBar">
      <div className='logoContainer'>
        <span>Space</span><span>Less</span>
      </div>
      <div className='navBarIcons'>
      <div className='icon'>
          <a href="/">
            <svg width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path fill="#16c79a" d="M17.75 8.66A1.012 1.012 0 0 1 17 9a.99.99 0 0 1-.66-.25L16 8.458V16a2.006 2.006 0 0 1-2 2h-2.5a.5.5 0 0 1-.5-.5V12a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v5.5a.5.5 0 0 1-.5.5H4a2.006 2.006 0 0 1-2-2v-3c-.01-1.41-.01-3.26 0-4.53l-.34.28a1 1 0 1 1-1.32-1.5l8-7a1 1 0 0 1 1.32 0l2.48 2.17A1.17 1.17 0 0 1 13 2h1a1.107 1.107 0 0 1 1 1v2l2.66 2.25a1 1 0 0 1 .09 1.41z"/>
            </svg>
          </a>
        </div>
        <div className='icon'>
          <a href="/about">
            <svg width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path fill="#16c79a" d="M9.31 9.45A1.012 1.012 0 0 1 9 9.5a.984.984 0 0 1-.31-.05h-.006L0 6.553V14.5a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2V6.554L9.316 9.45H9.31z"/>
              <path fill="#16c79a" d="M16 3.5h-4v-1a2.006 2.006 0 0 0-2-2H8a2.006 2.006 0 0 0-2 2v1H2A2 2 0 0 0 .26 4.54L9 7.45l8.74-2.91A2 2 0 0 0 16 3.5zm-6 0H8v-1h2v1z"/>
            </svg>
          </a>
        </div>
        <div className='icon'>
          <a>
            <svg width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path fill="#16c79a" d="M17 7h-.76a1 1 0 0 1-.7-1.71l.53-.53a1.008 1.008 0 0 0 0-1.42l-1.41-1.41a1.008 1.008 0 0 0-1.42 0l-.51.51a.974.974 0 0 1-.73.32 1 1 0 0 1-1-1V1a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v.76a1 1 0 0 1-1 1 .974.974 0 0 1-.73-.32l-.51-.51a1.008 1.008 0 0 0-1.42 0L1.93 3.34a1.008 1.008 0 0 0 0 1.42c.19.19.4.37.58.57a.92.92 0 0 1 .25.67 1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.76a1 1 0 0 1 1 1 .92.92 0 0 1-.25.67c-.18.2-.39.38-.58.57a1.008 1.008 0 0 0 0 1.42l1.41 1.41a1.008 1.008 0 0 0 1.42 0l.51-.51a.974.974 0 0 1 .73-.32 1 1 0 0 1 1 1V17a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.76a1 1 0 0 1 1-1 .974.974 0 0 1 .73.32l.51.51a1.008 1.008 0 0 0 1.42 0l1.41-1.41a1.008 1.008 0 0 0 0-1.42l-.53-.53a1 1 0 0 1 .7-1.71H17a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-8 5a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/>
            </svg>
          </a>
        </div>
        <div className='icon'>
          <a href="/contact">
            <svg width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true">
              <path fill="#16c79a" d="M8.964 15a3.115 3.115 0 0 1-1.63-.462l-7.32-4.482V17a1 1 0 0 0 1 1H16.92a1 1 0 0 0 1-1v-6.944l-7.32 4.48A3.116 3.116 0 0 1 8.964 15z"/>
              <path fill="#16c79a" d="M17.73 6.31l-1.8-1.91V1.04A1.043 1.043 0 0 0 14.89 0H3.036A1.044 1.044 0 0 0 2 1.04v3.42L.268 6.31a.95.95 0 0 0-.26.79.34.34 0 0 0 .01.1 1.07 1.07 0 0 0 .52.84l7.833 4.79a1.15 1.15 0 0 0 .6.17 1.14 1.14 0 0 0 .588-.17l7.832-4.79a1.078 1.078 0 0 0 .41-.44 1 1 0 0 0-.07-1.29zM10.95 8H4.987a1 1 0 0 1 0-2h5.963a1 1 0 0 1 0 2zm1.99-3.99H4.987a1.01 1.01 0 0 1 0-2.02h7.953a1.01 1.01 0 0 1 0 2.02z"/>
            </svg>
          </a>
        </div>
        <div className='icon'>
          <a>
            <svg width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path fill="#16c79a" d="M14.81,7.991H10c-.01-.64-.01-1.27,0-1.92v-.14c.02-.77.04-1.22.36-1.53a1.793,1.793,0,0,1,1.04-.36l.15-.01a2.694,2.694,0,0,0,1.29-.3,2.205,2.205,0,0,0,1.05-1.46,4.3,4.3,0,0,0,.09-1.31,1,1,0,0,0-2,.07,3.026,3.026,0,0,1-.03.76.441.441,0,0,1-.09.2,1.893,1.893,0,0,1-.41.05l-.18.01a3.611,3.611,0,0,0-2.3.91A3.831,3.831,0,0,0,8,5.9v.13c-.01.66-.01,1.31,0,1.96H3.19A3.205,3.205,0,0,0,0,11.181V14.8a3.205,3.205,0,0,0,3.19,3.19H14.81A3.205,3.205,0,0,0,18,14.8v-3.62A3.205,3.205,0,0,0,14.81,7.991Zm-7.81,6H6v1a1,1,0,0,1-2,0v-1H3a1,1,0,0,1,0-2H4v-1a1,1,0,0,1,2,0v1H7a1,1,0,0,1,0,2Zm4,2a1,1,0,1,1,1-1A1,1,0,0,1,11,15.991Zm0-4a1,1,0,1,1,1-1A1,1,0,0,1,11,11.991Zm4,4a1,1,0,1,1,1-1A1,1,0,0,1,15,15.991Zm0-4a1,1,0,1,1,1-1A1,1,0,0,1,15,11.991Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header