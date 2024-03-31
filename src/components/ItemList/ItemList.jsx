import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./itemList.module.scss";

const ItemList = ({producto}) => {
  return (
    <Link to={`/item/${producto.id}`} className={styles.noDecoration}>
        <div className={styles.tarjeta}>
            <h4>{producto.title}</h4>
            <img src={producto.img} alt={producto.title} width={280} height={450} />
            <p>${producto.price}</p>
            <button className={styles.botonVerDetalle}>Convéncete</button>
            
        </div>
    </Link>
    
  )
}

export default ItemList