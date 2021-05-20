import type { ReactElement } from 'react'

import SiteHeader from '../../components/modules/SiteHeader'
import SiteFooter from '../../components/modules/SiteFooter'

interface Props {
  children: ReactElement
}

export default function DefaultTemplate({ children }: Props) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}
