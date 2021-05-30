import type { GetStaticProps } from 'next'

import type { SingleStore } from '../stores/single/interface'
import type { BandMemberStore } from '../stores/band-member/interface'

import createSingleStore, { SingleContext } from '../stores/single/store'
import createBandMemberStore, {
  BandMemberContext,
} from '../stores/band-member/store'

import { attributes } from '../content/pages/home.md'

import HeaderPromo from '../components/modules/HeaderPromo'
import FlexibleContent from '../components/modules/FlexibleContent'
import Seo from '../components/partials/Seo'

import DefaultTemplate from '../templates/Default'

interface HomeInterface {
  singleStore: SingleStore
  bandMemberStore: BandMemberStore
}

export default function Home({ singleStore, bandMemberStore }: HomeInterface) {
  const { sections, seo } = attributes

  return (
    <>
      <Seo {...seo} />
      <BandMemberContext.Provider value={bandMemberStore}>
        <SingleContext.Provider value={singleStore}>
          <DefaultTemplate>
            <>
              <HeaderPromo />
              <FlexibleContent sections={sections} />
            </>
          </DefaultTemplate>
        </SingleContext.Provider>
      </BandMemberContext.Provider>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const singleStore = await createSingleStore()
  const bandMemberStore = await createBandMemberStore()

  return {
    props: {
      singleStore,
      bandMemberStore,
    },
  }
}
