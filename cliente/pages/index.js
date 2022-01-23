import React from 'react';
import CarruselInicio from '../components/ui/CarruselInicio';
import CarruselMarcas from '../components/ui/CarruselMarcas';
import { Categorias } from '../components/ui/Categorias';
import { NuestrosProductos } from '../components/ui/NuestrosProductos';

export default function Home() {
  return (
      <>
        <CarruselInicio />
        <br />
        <NuestrosProductos />
        <br />
        <Categorias />
        <br />
        <CarruselMarcas />
      </>
  )
}
