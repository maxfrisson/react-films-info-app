import styles from './Search.module.css'

export const Search = () => {
  return (
    <div className={styles.search}>
      <input className={styles.searchInput} type="text" />
      <button className={styles.searchSubmit} >Search</button>
    </div>
  )
}
