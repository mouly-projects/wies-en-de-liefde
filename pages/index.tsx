import { attributes } from '../content/pages/home.md'

import HeaderPromo from '../components/modules/HeaderPromo'
import FlexibleContent from '../components/modules/FlexibleContent'
import DefaultTemplate from '../templates/Default'

export default function Home() {
  const { title, sections } = attributes

  return (
    <DefaultTemplate>
      <>
        <HeaderPromo poem="" />
        <FlexibleContent sections={sections} />
      </>
    </DefaultTemplate>
  )
}
