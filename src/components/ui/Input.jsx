import styles from './Input.module.css'

export const Input = ({
  name,
  type = 'text',
  customClass,
  isReplaceStyle = false,
  error,
  register,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        className={
          isReplaceStyle ? customClass : `${styles.input} ${customClass}`
        }
        {...register(name)}
        {...props}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
