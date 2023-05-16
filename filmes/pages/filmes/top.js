import React from 'react'
import Pagina from '../../components/Pagina'
import Link from 'next/link';
import apiFilmes from '../../services/apiFilmes';
import { Row, Col, Card } from 'react-bootstrap';

const index = ({filmes}) => {
  
  return (
    <Pagina titulo="Filmes Top Rated">
      
      <Row md={5}>
         {filmes.map(item => (
           <Col key={item.id}>
            <Card className='mb-5' style={{ width:250, height:570}} >
             <Card.Img  src={('https://image.tmdb.org/t/p/w500/'+ item.poster_path)} variant="top"/> 
              <Card.Body>
               <Card.Title>{item.title}</Card.Title>
                <p>Lancamento: {item.release_date}</p>
                <p>Nota: {item.vote_average}</p>
                <Link href={'/filmes/' + item.id} className='btn btn-danger '>Detalhes</Link>
              </Card.Body>
            </Card> 
           </Col>
           ))}
      </Row>
    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {
  
  const resultado = await apiFilmes.get('/movie/top_rated?language=pt-BR')
  const filmes = resultado.data.results

  return {
    props: {filmes}, 
  }
}