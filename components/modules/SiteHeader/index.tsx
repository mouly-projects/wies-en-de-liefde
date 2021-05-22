import Link from 'next/link'

import type SiteHeaderInterface from './interface'

import SiteNav from '../SiteNav'
import Logo from '../../../public/images/logo.svg'

import styles from './styles.module.scss'

export default function SiteHeader({ theme }: SiteHeaderInterface) {
  return (
    <header className={styles['site-header']}>
      <span className={styles['logo']} data-theme={theme}>
        <Link href="/">
          <a className={styles['logo-link']}>
            <Logo />
          </a>
        </Link>
      </span>
      <SiteNav />
    </header>
  )
}
