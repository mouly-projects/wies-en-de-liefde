import type SiteHeaderInterface from './interface'

import SiteNav from '../SiteNav'
import Logo from '../../../public/images/logo.svg'

import styles from './styles.module.scss'

export default function SiteHeader({ theme }: SiteHeaderInterface) {
  return (
    <header className={styles['site-header']}>
      <span className={styles['logo']} data-theme={theme}>
        <Logo />
      </span>
      <SiteNav />
    </header>
  )
}
