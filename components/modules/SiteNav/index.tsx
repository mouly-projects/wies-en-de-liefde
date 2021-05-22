import { useState, useEffect } from 'react'
import Link from 'next/link'

import type Navigation from '../../../interfaces/Navigation'

import { attributes } from '../../../content/globals/navigation.md'

import Cross from '../../../public/icons/cross.svg'
import Hamburger from '../../../public/icons/hamburger.svg'

import styles from './styles.module.scss'

export default function SiteNav() {
  const [activeMenuItem, setActiveMenuItem] = useState('')
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)

  const { items }: Navigation = attributes

  useEffect(() => {
    setActiveMenuItem(window.location.pathname)
  }, [])

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
              {items.map(({ label, pageLink }) => (
                <li
                  key={pageLink}
                  data-active={
                    activeMenuItem === (pageLink === '/' ? `/` : `${pageLink}/`)
                  }
                  className={styles['item']}
                >
                  <Link href={pageLink}>
                    <a className={styles['link']}>{label}</a>
                  </Link>
                </li>
              ))}

              <li className={styles['item']}>
                <Link href="#contact">
                  <a className={styles['link']}>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
