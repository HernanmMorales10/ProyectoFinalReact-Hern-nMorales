import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
        <ul className={styles.ul}>
        
          <li className={styles.ul}>
            <p>Esperamos tu regreso pronto</p>
          </li>
          <li>
            <span className={styles.span}>Todos los derechos reservados</span>
          </li>
          <li>
            <p></p>
          </li>
      </ul>
        
      </footer>
  )
}

export default Footer