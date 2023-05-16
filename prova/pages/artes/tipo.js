import React from 'react'
import Pagina from '@/components/Pagina';
import apiArt from '@/services/apiArt';

const index = ({tipos}) => {
  
  return (
    <Pagina titulo="Tipos de Arte">
      
          <ul>
            {tipos.map(item => (
              <li key={item.id}>{item.title} ({item.updated_at})</li>
            ))} 
          </ul>

    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {
  
  const resultado = await apiArt.get('/artwork-types')
  const tipos = resultado.data.data

  return {
    props: {tipos}, 
  }
}