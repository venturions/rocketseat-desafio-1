import styles from './Header.module.css'
import LogoImage from '../../assets/todo-logo.svg'

export function Header() {
  return (
    <header className={styles.header} data-testid="Header">
      <img data-testid="Logo To-Do List" src={LogoImage} alt="" />
    </header>
  )
}
