import Image from 'next/image';
import styles from '../styles/Home.module.css'

const Footer = () => {
    return (<footer className={styles.footer}>
    <a
      href="https://werkamatech.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <span className={styles.logo}>
        <img src="/imgs/werkama.png" alt="Werkamatech Logo" width={100} height={30} />
      </span>
    </a>
  </footer>)
}

export default Footer;