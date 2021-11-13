import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
export const linksLogged = [
  {
    id: 1,
    url: '/',
    text: 'dashboard',
  },
  {
    id: 2,
    url: '/slack',
    text: 'slack',
  },
  {
    id: 3,
    url: '/email',
    text: 'email',
  },
  {
    id: 4,
    url: '/calendar',
    text: 'my calendar',
  },
  {
    id: 5,
    url: '/signout',
    text: 'signout',
  },
]
export const linksUnLogged = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/login',
    text: 'login',
  },
  {
    id: 3,
    url: '/register',
    text: 'register',
  },
]
export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/davor.sekulic.52',
    icon: <FaFacebook size={28} />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/davor-sekuli%C4%87-683895201/',
    icon: <FaLinkedin size={28} />,
  },
  {
    id: 3,
    url: 'https://github.com/dsekulic1',
    icon: <FaGithub size={28} />,
  },
]
