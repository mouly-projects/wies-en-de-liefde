import ReactMarkdown from 'react-markdown'

import type Footer from '../../../interfaces/Footer'

import { attributes } from '../../../content/globals/footer.md'

import EmailSignUp from '../EmailSignUp'
import SocialList from '../SocialList'

import styles from './styles.module.scss'

export default function SideFooter() {
  const { mainContent, foundation, newsletter }: Footer = attributes

  return (
    <div className={styles['site-footer']}>
      <div className={styles['inner']}>
        <div className={styles['section']}>
          <h2 className={styles['title']}>{mainContent.title}</h2>
          <ReactMarkdown className={styles['content']}>
            {mainContent.text}
          </ReactMarkdown>
        </div>

        <div className={styles['section']}>
          <SocialList />
        </div>

        <div className={styles['section']}>
          <h3>{foundation.title}</h3>
          <dl className={styles['foundation-list']}>
            {foundation.items.map(item => (
              <div className={styles['foundation-item']} key={item.label}>
                <dt className={styles['foundation-label']}>{item.label}:</dt>
                <dd className={styles['foundation-value']}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles['section']}>
          <EmailSignUp
            title={newsletter.title}
            label={newsletter.label}
            submit={newsletter.submit}
          />
        </div>
      </div>
    </div>
  )
}
