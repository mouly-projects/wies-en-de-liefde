import type FlexibleContentInterface from './interface'

import ColumnText from '../../flexibles/ColumnText'
import VideoEmbed from '../../flexibles/VideoEmbed'
import Playlist from '../../flexibles/Playlist'
import BandMembers from '../../flexibles/BandMembers'

import styles from './styles.module.scss'

export default function FlexibleContent({
  sections,
}: FlexibleContentInterface) {
  return (
    <div className={styles['container']}>
      {sections.map((section, index) => {
        if (section.component === 'column-text') {
          return <ColumnText key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'video-embed') {
          return <VideoEmbed key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'playlist') {
          return <Playlist key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'band-members') {
          return <BandMembers key={`flexible-content-${index}`} {...section} />
        }
        return null
      })}
    </div>
  )
}
