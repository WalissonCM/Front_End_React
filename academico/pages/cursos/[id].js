import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {AiOutlineCheck} from 'react-icons/ai'
import {IoMdArrowRoundBack} from 'react-icons/io'

const form = () => {
  
  const { push, query } = useRouter()
  const {register, handleSubmit, setValue} = useForm()

  useEffect(() => {
  
  if (query.id) {
    //const cursos = JSON.parse(window.localStorage.getItem('cursos'))  --localStorage--
    //const curso =  cursos[query.id]                                 
    
    axios.get('/api/cursos/' + query.id).then(resultado=>{
      const curso = resultado.data

    for(let atributo in curso){
      setValue(atributo, curso[atributo])
     //setValue('nome', curso.nome)
    //setValue('duracao', curso.duracao)
    //setValue('modalidade', curso.modalidade)
    }
  })
}
  }, [query.id])

  function salvar (dados) {
    //const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    //cursos.splice(query.id, 1, dados)
    //window.localStorage.setItem('cursos', JSON.stringify(cursos))       --localStorage--
    //push('/cursos')

    axios.put('/api/cursos/' + dados.id, dados)
    push('/cursos') 
  }
  
  return (
    <Pagina titulo="Cursos">

      <Form>
         
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome')}/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="duracao">
           <Form.Label>Duração: </Form.Label>
           <Form.Control type="text" {...register('duracao')}/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="modalidade">
           <Form.Label>Modalidade: </Form.Label>
           <Form.Control type="text" {...register('modalidade')}/>
         </Form.Group>
         
         <div className='text-center'>
         <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/cursos'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
      
      </Form>

    </Pagina>
  )
}

export default form
