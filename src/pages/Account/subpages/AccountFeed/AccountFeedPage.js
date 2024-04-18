import React from 'react'
import styles from './AccountFeedPage.module.css'
import { ItemFeed } from '../../components/ItemFeed'
import useApi from '../../../../hooks/useApi'
import { photosGet } from '../../../../services/api'

export const AccountFeedPage = () => {
  const { request, data } = useApi()

  React.useEffect(() => {
    async function fetchPhotos() {
      await request(() => photosGet({ page: 1, total: 12, user: 0 }))
    }
    fetchPhotos()
  }, [])

  return (
    <section>
      {data && (
        <section className={styles.containerPostList}>
          {data.map(({ id, src }) => (
            <ItemFeed key={id} src={src} />
          ))}
        </section>
      )}
    </section>
  )
}
