import React, { useState, useEffect } from 'react'
import '../assets/css/header.scss'

function Header() {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 400);
    })
  }, [])

  return(
    <header className={scroll ? 'active' : ''}>
      <p>
        {scroll ? 'HeaderActive' : 'Header'}
      </p>
    </header>
  )
}

export default Header;