import { attributes } from '../content/pages/over-de-liefde.md'

import PageHeader from '../components/modules/PageHeader'
import FlexibleContent from '../components/modules/FlexibleContent'
import DefaultTemplate from '../templates/Default'

export default function Home() {
  const { sections } = attributes

  return (
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
  )
}
