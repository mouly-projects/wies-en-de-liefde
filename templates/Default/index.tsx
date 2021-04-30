import type { ReactElement } from 'react'

import SideFooter from '../../components/modules/SideFooter'

import styles from './styles.module.scss'

interface Props {
  children: ReactElement
}

export default function DefaultTemplate({ children }: Props) {
  return (
    <>
      <main className={styles['container']}>{children}</main>
      <SideFooter />
    </>
  )
}
