import type ImagesInterface from './interface'

import styles from './styles.module.scss'

export default function Images({
  imageOne,
  imageTwo,
  imageThree,
}: ImagesInterface) {
  return (
    <figure className={styles['images']}>
      <img className={styles['image']} src={imageOne} alt="" />
      <img
        className={`${styles['image']} ${styles['image__tall']}`}
        src={imageTwo}
        alt=""
      />
      <img className={styles['image']} src={imageThree} alt="" />
    </figure>
  )
}
