import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { social, linksLogged, linksUnLogged } from '../assets/data'
import { useGlobalContext } from '../context'
import { FaSignOutAlt } from 'react-icons/fa'

const Navbar = () => {
  const { user, logoutUser } = useGlobalContext()
  const links = user ? linksLogged : linksUnLogged

  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  {text === 'signout' ? (
                    <a href='/' onClick={() => logoutUser()}>
                      <FaSignOutAlt size={28} />
                    </a>
                  ) : (
                    <a href={url} style={{ paddingTop: '1.75px' }}>
                      {text}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
