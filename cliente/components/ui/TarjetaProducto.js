import { Grid, IconButton } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './TarjetaProducto.module.css'

export const TarjetaProducto = ({ imagen, nombre, precio }) => {
    return (
        <div className={styles.tarjeta}>

            <img src={imagen} className={styles.imagen} />

            <div className={styles.nombreProducto}>
                {nombre}
            </div>

            <p className={styles.precio}>
                {precio}
            </p>

            <div className={styles.botonesInferiores}>
                <button className={styles.botonCarrito}>
                    <ShoppingBasketIcon />
                </button>

                <button className={styles.botonCarrito}>
                    <VisibilityIcon />
                </button>
            </div>
        </div>
    )
}
