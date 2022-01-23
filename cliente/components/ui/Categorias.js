import React from 'react'
import styles from './Categorias.module.css';

export const Categorias = ({ nombre, imagen }) => {
    return (
        <section className={styles.categorias}>
            <div className={styles.categoria}>
                <h3 className={styles.nombre}>Charcuteria</h3>
                <img src='https://www.jamoink.com/themes/EZE-239/assets/img/charcu.png' className={styles.imagen} />
                <span className={styles.textoSecundario}>Para compartir</span>
            </div>

            <div className={styles.categoria}>
                <h3 className={styles.nombre}>Jamones</h3>
                <img src='https://www.jamoink.com/themes/EZE-239/assets/img/jamones.png' className={styles.imagen} />
                <span className={styles.textoSecundario}>Serrano e ibérico</span>
            </div>

            <div className={styles.categoria}>
                <h3 className={styles.nombre}>Accesorios</h3>
                <img src='https://www.jamoink.com/themes/EZE-239/assets/img/accesorios.png' className={styles.imagen} />
                <span className={styles.textoSecundario}>Solo calidad</span>
            </div>
        </section >
    )
}
