import type Single from '../../interfaces/Single'
import type { SingleStore } from './interface'

import createStore from '../create-store'
import contextFactory from '../context-factory'

let instance: SingleStore | null = null

export default function createSingleStore() {
  if (!instance) {
    instance = createStore('content/singles', 'title')
  }

  return instance
}

export const SingleContext = contextFactory<Single>()
