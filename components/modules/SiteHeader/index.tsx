import SiteNav from '../SiteNav'
import Logo from '../../../public/images/logo.svg'

import styles from './styles.module.scss'

export default function SiteHeader() {
  return (
    <header className={styles['site-header']}>
      <span className={styles['logo']}>
        <Logo />
      </span>
      <SiteNav />
    </header>
  )
}
