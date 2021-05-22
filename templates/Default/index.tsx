import type { ReactElement } from 'react'

import SiteHeader from '../../components/modules/SiteHeader'
import SiteFooter from '../../components/modules/SiteFooter'

interface Props {
  children: ReactElement
  theme?: 'light' | 'dark'
}

export default function DefaultTemplate({ children, theme = 'dark' }: Props) {
  return (
    <>
      <SiteHeader theme={theme} />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}
