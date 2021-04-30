import type BandMember from '../../interfaces/BandMember'
import type { BandMemberStore } from './interface'

import createStore from '../create-store'
import contextFactory from '../context-factory'

let instance: BandMemberStore | null = null

export default function createBandMemberStore() {
  if (!instance) {
    instance = createStore('content/bandMembers', 'title')
  }

  return instance
}

export const BandMemberContext = contextFactory<BandMember>()
