import type { GetStaticProps } from 'next'

import type { SingleStore } from '../stores/single/interface'
import type { BandMemberStore } from '../stores/band-member/interface'

import createSingleStore, { SingleContext } from '../stores/single/store'
import createBandMemberStore, {
  BandMemberContext,
} from '../stores/band-member/store'

import { attributes } from '../content/pages/home.md'

import DefaultTemplate from '../templates/Default'

import HeaderPromo from '../components/modules/HeaderPromo'
import FlexibleContent from '../components/modules/FlexibleContent'

interface HomeInterface {
  singleStore: SingleStore
  bandMemberStore: BandMemberStore
}

export default function Home({ singleStore, bandMemberStore }: HomeInterface) {
  const { title, sections } = attributes

  return (
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
