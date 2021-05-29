import styles from './styles.module.scss'

export default function HeaderPromo() {
  const src = '/images/band-liggend.jpg'

  const title = 'Wies en de Liefde'
  const text =
    'Wies en de Liefde speelt een mix tussen lyrisch geschreven poëtische Nederlandstalige popmuziek gevoerd door folk- en kleinkunstinvloeden. Wies en de Liefde wordt geprezen door hun authenticiteit, Wies haar pakkende liedjes, sterke teksten en haar vermogen om het publiek in haar greep te houden.'

  return (
    <header className={styles['header-promo']}>
      <div
        className={styles['header-promo__img']}
        style={{ backgroundImage: `url(${src}?nf_resize=fit&w=1000)` }}
      />

      <div className={styles['header-promo__content']}>
        <h1
          className={styles['header-promo__content-title']}
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p className={styles['header-promo__text']}>{text}</p>
      </div>
    </header>
  )
}
