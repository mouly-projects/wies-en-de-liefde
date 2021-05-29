import type GalleryInterface from './interface'

import styles from './styles.module.scss'

export default function Gallery({ items }: GalleryInterface) {
  console.log('items: ', items)
  return (
    <ul className={styles['gallery']}>
      {items.map(({ label, embedUrl, image }) => (
        <li key={label} className={styles['gallery__item']}>
          <figure className={styles['figure']}>
            {embedUrl ? (
              <div className={styles['embed-wrapper']}>
                <iframe
                  title={label}
                  className={styles['embed']}
                  src={embedUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                />
              </div>
            ) : (
              <img
                src={`${image}?resize&sizes[]=640&sizes[]=740&sizes[]=828&sizes[]=1080&sizes[]=1920&sizes[]=2048&sizes[]=3840&format=webp`}
                alt={label}
              />
            )}

            <figcaption className={styles['caption']}>{label}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}
