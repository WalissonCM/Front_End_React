import Pagina from '@/components/Pagina'
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
    const professores = JSON.parse(window.localStorage.getItem('professores')) || []
    cursos.push(dados)
    window.localStorage.setItem('professores', JSON.stringify(professores))
    push('/professores')
  }
  
 return (
    <Pagina titulo="Professores">

      <Form>
         
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', {require:'*Campo Obrigatório'})}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
          </Form.Group>

          <Form.Group className="mb-3" controlId="cpf">
           <Form.Label>Cpf: </Form.Label>
           <Form.Control type="text" {...register('cpf', {require:'*Campo Obrigatório'})}/>
            {
              errors.cpf &&
              <small className='text-danger'>{errors.cpf.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="matricula">
           <Form.Label>Matricula: </Form.Label>
           <Form.Control type="text" {...register('matricula', {require:'*Campo Obrigatório'})}/>
            {
              errors.matricula &&
              <small className='text-danger'>{errors.matricula.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="salario">
           <Form.Label>Salario: </Form.Label>
           <Form.Control type="text" {...register('salario', {require:'*Campo Obrigatório'})}/>
            {
              errors.salario &&
              <small className='text-danger'>{errors.salario.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', {require:'*Campo Obrigatório'})}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', {require:'*Campo Obrigatório'})}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', {require:'*Campo Obrigatório'})}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', {require:'*Campo Obrigatório'})}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', {require:'*Campo Obrigatório'})}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', {require:'*Campo Obrigatório'})}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', {require:'*Campo Obrigatório'})}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
          </Form.Group>
         
         
       
         <div className='text-center'>
         <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/professores'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
      
      </Form>

    </Pagina>
  )
}

export default form
