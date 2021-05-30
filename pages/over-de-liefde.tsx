import { attributes } from '../content/pages/over-de-liefde.md'

import PageHeader from '../components/modules/PageHeader'
import FlexibleContent from '../components/modules/FlexibleContent'
import Seo from '../components/partials/Seo'

import DefaultTemplate from '../templates/Default'

export default function OverDeLiefde() {
  const { sections, seo } = attributes

  return (
    <>
      <Seo {...seo} />
      <DefaultTemplate>
        <>
          <PageHeader
            title="Over de liefde"
            imageOutline="top"
            img="/images/band-lachend.jpg"
          />
          <FlexibleContent sections={sections} />
        </>
      </DefaultTemplate>
    </>
  )
}
