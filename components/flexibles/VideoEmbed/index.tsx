import type VideoEmbedInterface from './interface'

import styles from './styles.module.scss'

export default function VideoEmbed({
  title,
  source,
  location,
}: VideoEmbedInterface) {
  return (
    <div className={styles['container']}>
      <div className={styles['video-embed']} data-location={location}>
        <iframe
          title={title}
          className={styles['embed']}
          src={source}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        />
      </div>
    </div>
  )
}
