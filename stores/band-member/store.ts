import type BandMember from '../../interfaces/BandMember'
import type { BandMemberStore } from './interface'

import createStore from '../create-store'
import contextFactory from '../context-factory'

let bandMemberInstance: BandMemberStore | null = null

export default function createBandMemberStore() {
  if (!bandMemberInstance) {
    bandMemberInstance = createStore('content/bandMembers', 'title')
  }

  return bandMemberInstance
}

export const BandMemberContext = contextFactory<BandMember>()
