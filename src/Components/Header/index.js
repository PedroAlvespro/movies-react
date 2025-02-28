/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <span> AlvesFlix
                <nav>
                    <a href="#"> Home </a>
                    <a href="#"> Assistir </a>
                </nav>
            </span>
        </header>

    )
}

export default Header;