import Pagina from '@/components/Pagina'
import apiArt from '@/services/apiArt'
import React from 'react'
import { Col, Row, Card, Button} from 'react-bootstrap'
import { BsArrowLeftShort, BsBoxArrowUpRight } from "react-icons/bs";


const Detalhes = ({arte}) => {
  
  return (
    <Pagina titulo={arte.title}>

      <Row>
        {arte.image_id &&
        <Col md={4}>
          <Card border='danger'>
          <Card.Header className='bg-danger text-white' >Foto</Card.Header>
            <Card.Body>
            <Card.Img src={"https://www.artic.edu/iiif/2/" + arte.image_id + "/full/843,/0/default.jpg"} variant="top" />
            
            <a className=' mt-2 btn btn-primary' target="_blank" href={"https://www.artic.edu/iiif/2/" + arte.image_id + "/full/843,/0/default.jpg"} >Ampliar  <BsBoxArrowUpRight/></a>
            </Card.Body>
          </Card>
        </Col>
         }
          
        <Col md={8}>
          <Card border='danger'>
            <Card.Header className='bg-danger text-white' >{arte.title}</Card.Header>
            <Card.Body>
              <Card.Text>
                <p><strong>Artista: </strong>{arte.artist_display}</p>
                <p><strong>Departamento: </strong>{arte.department_title}</p>
                <p><strong>Origem: </strong>{arte.place_of_origin}</p>
                <p><strong>Dimensões: </strong>{arte.dimensions}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Button href="/artes" variant="success" className='mt-2'><BsArrowLeftShort/>Voltar</Button>

    </Pagina>
  )
}

export default Detalhes

export async function getServerSideProps(context) {

  const id = context.params.id

  const resultado = await apiArt.get('/artworks/'+ id)
  const arte = resultado.data.data

  return {
    props: {arte},
  }
}    