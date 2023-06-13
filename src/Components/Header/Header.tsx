import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header} data-testid="Header">
      <img src="src\assets\todo-logo.svg" alt="Logo To-Do List"></img>
    </header>
  )
}
