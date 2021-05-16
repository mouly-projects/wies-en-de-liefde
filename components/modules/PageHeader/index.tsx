import type PageHeaderInterface from './interface'

import styles from './styles.module.scss'

export default function PageHeader({
  title,
  img,
  imageOutline = 'center',
}: PageHeaderInterface) {
  const alt = 'Afbeelding van de bus waar Wies en de Liefde optredens in geeft'

  return (
    <header className={styles['page-header']}>
      <div
        aria-hidden="true"
        className={styles['image']}
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: imageOutline,
        }}
      />

      <h1 className={styles['title']}>{title}</h1>
    </header>
  )
}
