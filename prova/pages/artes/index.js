import React from 'react'
import Pagina from '@/components/Pagina';
import Link from 'next/link';
import {Table} from 'react-bootstrap';
import apiArt from '@/services/apiArt';
import { BsSearch } from "react-icons/bs";

const index = ({artes}) => {
  
  return (
    <Pagina titulo="Obras de Arte">
      
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>Detalhes</th>
                <th>Titulo</th>
                <th>Artista</th>
                <th>Departamento</th>
              </tr>
            </thead>
            <tbody>
              {artes.map(item => (
                <tr key={item.id}>
                  <td><Link href={"/artes/" + item.id}><BsSearch/></Link></td>
                  <td>{item.title}</td>
                  <td>{item.artist_title}</td>
                  <td>{item.department_title}</td>
                </tr>
                  ))}
            </tbody>
            </Table>
           
    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {
  
  const resultado = await apiArt.get('/artworks')
  const artes = resultado.data.data

  return {
    props: {artes}, 
  }
}
