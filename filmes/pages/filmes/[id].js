import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'

const Detalhes = ({filme, atores}) => {
  return (
      <Pagina titulo={filme.title}>
       
       <Row>
          <Col md={3}>
            <Card.Img  src={('https://image.tmdb.org/t/p/w500/'+ filme.poster_path)} variant="top"/>
          </Col>
        
          <Col md={9}>
            <p><strong>Data de Lancamento:  </strong>{filme.release_date}</p>
            <p><strong>Duração:  </strong>{filme.runtime} min</p>
            <p><strong>Nota:  </strong>{filme.vote_average}</p>
            <p><strong>Sinopse:<br/></strong>{filme.overview}</p>
            <div>
              <p><strong>Genero:</strong></p>
              <ul>
                {filme.genres.map(item => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </div>
          </Col>
           
        </Row>
        
        <h2>Atores</h2>
        
        <Row>    
          {atores.map(item => (
               <Col  className='mb-3' title={item.name + '-' + item.character} md={2}>
               <Link href={'/atores/' + item.id}>
               <Card.Img  src={('https://image.tmdb.org/t/p/w500/'+ item.profile_path)} variant="top"/>
               </Link>
               </Col>
          ))}
            
        </Row>
      
      </Pagina>
  )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id
  
    const resultado = await apiFilmes.get('/movie/'+ id + '!?language=pt-BR')
    const filme = resultado.data
    
    const resAtores = await apiFilmes.get('/movie/'+ id + '/credits?language=pt-BR')
    const atores = resAtores.data.cast

    return {
      props: {filme, atores}
    }
}    