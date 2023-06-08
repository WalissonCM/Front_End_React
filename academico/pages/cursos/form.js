import Pagina from '@/components/Pagina'
import cursoValidator from '@/validators/cursoValidator'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {AiOutlineCheck} from 'react-icons/ai'
import {IoMdArrowRoundBack} from 'react-icons/io'

const form = () => {
  
  const { push } = useRouter()
  const {register, handleSubmit, formState:{errors}} = useForm()

  function salvar (dados) {
    //const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    //cursos.push(dados)                                                     --localStorage--
    //window.localStorage.setItem('cursos', JSON.stringify(cursos))
    //push('/cursos')
    
    axios.post('/api/cursos', dados)
    push('/cursos') 
  }
  
  return (
    <Pagina titulo="Cursos">

      <Form>
         
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cursoValidator.nome)}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
         </Form.Group>
         
         <Form.Group className="mb-3" controlId="duracao">
           <Form.Label>Duração: </Form.Label>
           <Form.Control isInvalid={errors.duracao} type="text" {...register('duracao', cursoValidator.duração)}/>
            {
              errors.duracao &&
              <small className='text-danger'>{errors.duracao.message}</small>
            }
         </Form.Group>
         <Form.Group className="mb-3" controlId="modalidade">
           <Form.Label>Modalidade: </Form.Label>
           <Form.Control isInvalid={errors.modalidade} type="text" {...register('modalidade', cursoValidator.modalidade)}/>
            {
              errors.modalidade &&
              <small className='text-danger'>{errors.modalidade.message}</small>
            }
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
