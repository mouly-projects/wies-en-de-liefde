import { attributes } from '../content/pages/buslading-muziek.md'

import PageHeader from '../components/modules/PageHeader'
import FlexibleContent from '../components/modules/FlexibleContent'
import Seo from '../components/partials/Seo'

import DefaultTemplate from '../templates/Default'

export default function Home() {
  const { sections, seo } = attributes

  return (
    <>
      <Seo {...seo} />
      <DefaultTemplate theme="light">
        <>
          <PageHeader
            title="Buslading muziek"
            img="/images/bus-binnenkant.jpg"
          />
          <FlexibleContent sections={sections} />
        </>
      </DefaultTemplate>
    </>
  )
}
