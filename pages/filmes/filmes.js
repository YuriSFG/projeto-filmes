import React, { useEffect, useState } from 'react';
import Pagina from '../../components/Pagina';
import apiFilmes from '@/services/apiFilmes';

const filmes = (props) => {

  console.log(props.filmes)
  return (
    <>
      <Pagina titulo="Filmes">
        {props.filmes.map(item => (
          <img id={item.poster_path}/>
        ))}
      </Pagina>
    </>
  )
}

export default filmes

export async function getServerSideProps(context) {

  const resultado = await apiFilmes.get('/movie/popular')

  const filmes = resultado.data.results

  return {
    props: {
      filmes
    },
  }
}