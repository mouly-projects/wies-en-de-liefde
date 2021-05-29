import type ImagesInterface from './interface'

import styles from './styles.module.scss'

export default function Images({
  imageOne,
  imageTwo,
  imageThree,
}: ImagesInterface) {
  return (
    <figure className={styles['images']}>
      <img
        className={styles['image']}
        src={`${imageOne}?nf_resize=fit&w=900`}
        alt=""
      />
      <img
        className={`${styles['image']} ${styles['image__tall']}`}
        src={`${imageTwo}?nf_resize=fit&w=600`}
        alt=""
      />
      <img
        className={styles['image']}
        src={`${imageThree}?nf_resize=fit&w=900`}
        alt=""
      />
    </figure>
  )
}
