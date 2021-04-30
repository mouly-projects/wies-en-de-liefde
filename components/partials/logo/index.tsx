import LogoSvg from '../../../public/images/logo.svg'

import styles from './styles.module.scss'

export default function Logo() {
  return (
    <div className={styles['logo']}>
      <LogoSvg />
      <span className="sr-only">Wies en de liefde</span>
    </div>
  )
}
