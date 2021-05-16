import type { ReactElement } from 'react'

import SiteHeader from '../../components/modules/SiteHeader'
import SiteFooter from '../../components/modules/SiteFooter'

import styles from './styles.module.scss'

interface Props {
  children: ReactElement
}

export default function DefaultTemplate({ children }: Props) {
  return (
    <>
      <SiteHeader />
      <main className={styles['container']}>{children}</main>
      <SiteFooter />
    </>
  )
}
