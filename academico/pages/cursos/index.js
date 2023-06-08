import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'

const index = () => {
  
  const [cursos, setCursos] = useState([])

  useEffect(()=>{
    //setCursos(getAll()) --localStorage--
    getAll()
  }, [])

  function getAll() {
    //return JSON.parse(window.localStorage.getItem('cursos')) || [] --localStorage-- 
    axios.get('/api/cursos').then(resultado=>{
      setCursos(resultado.data)
  })
}

  function excluir(id) {
    //if (confirm('Deseja realmente excluir o registro')){
    //const cursos = getAll()                                   
    //cursos.splice(id, 1)                                          --localStorage--     
    //window.localStorage.setItem('cursos', JSON.stringify(cursos))
    //setCursos(cursos)
  
    if(confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/cursos/' + id)
      getAll()
   }
}

  return (
    <Pagina titulo="Cursos">

      <Link href={'/cursos/form'} className="btn btn-primary mb-2">Novo</Link>

      <Table striped bordered hover>
            
            <thead>   
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Duração</th>
              <th>Modalidade</th>
            </tr>     
            </thead>
            
            <tbody>
             {cursos.map( (item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/cursos/' + item.id}>
                  <BsFillPencilFill className='me-2 text-primary'/>
                  </Link>
                  <AiOutlineDelete onClick={() => excluir(item.id)} className='text-danger' type='submit' />
                </td>
                <td>{item.nome}</td>
                <td>{item.duracao}</td>
                <td>{item.modalidade}</td>
                </tr>
             ))}     
            </tbody>

      </Table>
  
    </Pagina>    

  )
}

export default index