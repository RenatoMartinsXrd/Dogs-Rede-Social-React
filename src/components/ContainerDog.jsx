import styles from './ContainerDog.module.css'

export const ContainerDog = ({ children }) => {
  return (
    <section className={styles.containerLoginPage}>
      <section className={styles.containerSectionLoginForm}>{children}</section>
    </section>
  )
}
