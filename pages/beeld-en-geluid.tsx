import { attributes } from '../content/pages/beeld-en-geluid.md'

import PageHeader from '../components/modules/PageHeader'
import FlexibleContent from '../components/modules/FlexibleContent'
import DefaultTemplate from '../templates/Default'

export default function BeeldEnGeluid() {
  const { sections } = attributes

  return (
    <DefaultTemplate>
      <>
        <PageHeader
          title="Beeld en geluid"
          imageOutline="top"
          img="/images/wies.jpg"
        />
        <FlexibleContent sections={sections} />
      </>
    </DefaultTemplate>
  )
}
