import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React from 'react'
import { Table } from 'react-bootstrap'

const index = () => {
  return (
    <Pagina titulo="Cursos">

      <Link href={'/cursos/form'} className="btn btn-primary mb-2">Novo</Link>

      <Table striped bordered hover>
            
            <thead>
              
              <tr>
                <th>1</th>
                <th>1</th>
                <th>1</th>
              </tr>
            
            </thead>
            <tbody>
              
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                  
            </tbody>
      </Table>
  
    </Pagina>    

  )
}

export default index