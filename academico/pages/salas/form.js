import Pagina from '@/components/Pagina'
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
    axios.post('/api/salas', dados)
    push('/salas')
  }
  
  return (
    <Pagina titulo="Salas">

      <Form>
        
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', {require:'*Campo Obrigatório'})}/>
           {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
         </Form.Group>

         <Form.Group className="mb-3" controlId="capacidade">
           <Form.Label>Capacidade: </Form.Label>
           <Form.Control type="text" {...register('capacidade', {require:'*Campo Obrigatório'})}/>
           {
              errors.capacidade &&
              <small className='text-danger'>{errors.capacidade.message}</small>
            }
         </Form.Group>

          <Form.Group className="mb-3" controlId="tipo">
           <Form.Label>Tipo: </Form.Label>
           <Form.Control type="text" {...register('tipo', {require:'*Campo Obrigatório'})}/>
           {
              errors.tipo &&
              <small className='text-danger'>{errors.tipo.message}</small>
            }
         </Form.Group>

         <div className='text-center'>
         <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/salas'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
      
      </Form>

    </Pagina>
  )
}

export default form
