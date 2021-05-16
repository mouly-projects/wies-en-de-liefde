import type PageHeaderInterface from './interface'

import styles from './styles.module.scss'

export default function PageHeader({ title, img }: PageHeaderInterface) {
  const alt = 'Afbeelding van de bus waar Wies en de Liefde optredens in geeft'

  return (
    <header className={styles['page-header']}>
      {/* <figure>
        <img src={img} alt={alt} />
      </figure> */}

      <div
        aria-hidden="true"
        className={styles['image']}
        style={{ backgroundImage: `url(${img})` }}
      />

      <h1 className={styles['title']}>{title}</h1>
    </header>
  )
}
