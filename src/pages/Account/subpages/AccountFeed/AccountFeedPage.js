import React from 'react'
import styles from './AccountFeedPage.module.css'
import { ItemFeed } from '../../components/ItemFeed'
import { photosGet } from '../../../../services/api'
import { useQuery } from '@tanstack/react-query'

export const AccountFeedPage = () => {
  const options = { page: 1, total: 6, user: 0 }
  const { data, isLoading } = useQuery({
    queryKey: [photosGet.name, options],
    queryFn: () => photosGet(options)
  })

  if (isLoading) return <p>Carregando...</p>

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
