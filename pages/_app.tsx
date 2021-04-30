import { Head } from 'next/document'
import type { AppProps, AppContext } from 'next/app'
import type { SingleStore } from '../stores/single/interface'

import createSingleStore, { SingleContext } from '../stores/single/store'

import '../styles/globals.scss'
import createBandMemberStore, {
  BandMemberContext,
} from '../stores/band-member/store'
import { BandMemberStore } from '../stores/band-member/interface'

interface AppInterface extends AppProps {
  singleStore: SingleStore
  bandMemberStore: BandMemberStore
}

export default function App({
  Component,
  pageProps,
  singleStore,
  bandMemberStore,
}: AppInterface) {
  return (
    <>
      {/* <Head>
        <title>Wies en de Liefde</title>
      </Head> */}

      <BandMemberContext.Provider value={bandMemberStore}>
        <SingleContext.Provider value={singleStore}>
          <Component {...pageProps} />
        </SingleContext.Provider>
      </BandMemberContext.Provider>
    </>
  )
}

App.getInitialProps = async (appContext: AppContext) => {
  const singleStore = createSingleStore()
  const bandMemberStore = createBandMemberStore()

  return { singleStore, bandMemberStore }
}
