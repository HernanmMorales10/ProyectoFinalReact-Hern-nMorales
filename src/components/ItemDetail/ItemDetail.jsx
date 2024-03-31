import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from "./itemDetail.module.scss";
import Description from "./Description.jsx"
import AddItemButtom from './AddItemButtom.jsx';


const ItemDetail = ({producto}) => {
    const {id} = useParams();
    if(producto.id == id)
        return (
            <div className={styles.container}>
                <h4>{producto.title}</h4>
                <img src={producto.img} alt={producto.title} width={180} height={250} />
                <Link to={`/category/${producto.category}`} className={styles.linkDecoration}>
                    <p className={styles.category}>Categoria: {producto.category}</p>
                </Link>
                <Description description= { producto.description }/>
                <p>${producto.price}</p>
                <AddItemButtom producto={ producto }/>
                
            </div>
        )
}

export default ItemDetail