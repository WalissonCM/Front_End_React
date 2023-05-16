import React, { useEffect, useState } from 'react'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes';
import { Row, Col, Card } from 'react-bootstrap';

const index = () => {
  
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{
     
    apiFilmes.get('/movie/popular').then(resultado => {setFilmes(resultado.data.results)})}, [])
  
  return (
    <Pagina titulo="Filmes">
      
      <Row md={5}>
         {filmes.map(item => (
           <Col key={item.id}>
            <Card className='mb-5' style={{ width:215, height:470}}>
             <Card.Img  src={('https://image.tmdb.org/t/p/w500/'+ item.poster_path)} variant="top" /> 
              <Card.Body>
               <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                           <p>Lancamento: {item.release_date}</p>
                           <p>Nota: {item.vote_average}</p>
                </Card.Text>
              </Card.Body>
            </Card> 
           </Col>
           ))}
      </Row>
    </Pagina>
  )
}

export default index
