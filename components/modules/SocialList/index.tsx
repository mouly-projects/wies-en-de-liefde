import Facebook from '../../../public/icons/facebook.svg'
import Instagram from '../../../public/icons/instagram.svg'
import Spotify from '../../../public/icons/spotify.svg'
import YouTube from '../../../public/icons/you-tube.svg'

import styles from './styles.module.scss'

export default function SocialList() {
  return (
    <div className={styles['container']}>
      <a className={styles['link']} href="{{ facebookHref }}">
        <Facebook />
      </a>
      <a className={styles['link']} href="{{ instagramHref }}">
        <Instagram />
      </a>
      <a className={styles['link']} href="{{ spotifyHref }}">
        <Spotify />
      </a>
      <a className={styles['link']} href="{{ youTubeHref }}">
        <YouTube />
      </a>
    </div>
  )
}
