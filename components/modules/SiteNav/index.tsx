import { useState, useEffect } from 'react'

import Link from 'next/link'

import Cross from '../../../public/icons/cross.svg'
import Hamburger from '../../../public/icons/hamburger.svg'

import styles from './styles.module.scss'

export default function SiteNav() {
  const [activeMenuItem, setActiveMenuItem] = useState('')
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)

  useEffect(() => {
    setActiveMenuItem(window.location.pathname)
  }, [])

  const navItems = [
    {
      label: 'home',
      url: '/',
      check: '/',
    },
    {
      label: 'Over de liefde',
      url: '/over-de-liefde',
      check: '/over-de-liefde/',
    },
    {
      label: 'Buslading muziek',
      url: '/buslading-muziek',
      check: '/buslading-muziek/',
    },
  ]

  const openMenu = () => setIsOpenMobileNav(true)
  const closeMenu = () => setIsOpenMobileNav(false)

  return (
    <>
      <div className={styles['site-nav']}>
        <button type="button" className={styles['open-nav']} onClick={openMenu}>
          <span className="sr-only">Open de navigatie</span>
          <Hamburger />
        </button>

        <div className={styles['nav-wrapper']} data-is-open={isOpenMobileNav}>
          <nav className={styles['nav']}>
            <button
              type="button"
              className={styles['close-nav']}
              onClick={closeMenu}
            >
              <span className="sr-only">Sluit de navigatie</span>
              <Cross />
            </button>

            <ul className={styles['list']}>
              {navItems.map(({ label, url, check }) => (
                <li
                  key={url}
                  data-active={activeMenuItem === check}
                  className={styles['item']}
                >
                  <Link href={url}>
                    <a className={styles['link']}>{label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
