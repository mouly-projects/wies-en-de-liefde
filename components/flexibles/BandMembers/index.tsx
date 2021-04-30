import { useContext } from 'react'
import { BandMemberContext } from '../../../stores/band-member/store'
import type BandMembersInterface from './interface'

import styles from './styles.module.scss'

export default function BandMembers({ title }: BandMembersInterface) {
  const bandMembersStore = useContext(BandMemberContext)
  const bandMembers = bandMembersStore.allIds
    .map(id => bandMembersStore.byId[id])
    .sort((a, b) => a.order - b.order)

  return (
    <div className={styles['band-members']}>
      <h2 className={styles['title']}>{title}</h2>
      <dl className={styles['list']}>
        {bandMembers.map(bandMember => (
          <div key={bandMember.title} className={styles['item']}>
            <dt className={styles['name']}>{bandMember.title}</dt>
            <dd className={styles['roles']}>
              {bandMember.roles.reduce(
                (collection, a) =>
                  collection ? `${collection} | ${a.role}` : a.role,
                ''
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
