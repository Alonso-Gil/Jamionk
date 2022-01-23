import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { TarjetaProducto } from './TarjetaProducto'
import styles from './NuestrosProductos.module.css'

export const NuestrosProductos = () => {
    return (
        <section style={{ marginTop: 20, marginBottom: 20 }}>
            <Container maxWidth='xl' >
                <div className={styles.nuestrosProductos}>
                    <div className={styles.descripcion}>
                        <Typography variant='h2' paragraph>Nuestros productos</Typography>
                        <Typography style={{ color: '#8c9398', fontSize: 16, lineHeight: 2 }} >
                            Tenemos una gran selección de productos que seguro le encantarán
                        </Typography>
                    </div>

                    <div className={styles.productos}>
                        <TarjetaProducto
                            imagen='https://www.jamoink.com/38-large_default/jamon-100-iberico-bellota-marca-carrasco.jpg'
                            nombre='JAMÓN 100% IBÉRICO BELLOTA MARCA CARRASCO'
                            precio='$22,000'
                        />
                        <TarjetaProducto
                            imagen='https://www.jamoink.com/38-large_default/jamon-100-iberico-bellota-marca-carrasco.jpg'
                            nombre='JAMÓN 100% IBÉRICO BELLOTA MARCA CARRASCO'
                            precio='$22,000'
                        />
                        <TarjetaProducto
                            imagen='https://www.jamoink.com/38-large_default/jamon-100-iberico-bellota-marca-carrasco.jpg'
                            nombre='JAMÓN 100% IBÉRICO BELLOTA MARCA CARRASCO'
                            precio='$22,000'
                        />
                        <TarjetaProducto
                            imagen='https://www.jamoink.com/38-large_default/jamon-100-iberico-bellota-marca-carrasco.jpg'
                            nombre='JAMÓN 100% IBÉRICO BELLOTA MARCA CARRASCO'
                            precio='$22,000'
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
